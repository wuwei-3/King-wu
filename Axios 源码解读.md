## Axios 源码解读

#### axios是干什么的

- 一个基于 Promise 的http请求库，可以用在浏览器和node.js中 

#### axios 项目目录

```js
├── /dist/                     # 项目输出目录
├── /lib/                      # 项目源码目录
│ ├── /cancel/                 # 定义取消功能
│ ├── /core/                   # 一些核心功能
│ │ ├── Axios.js               # axios的核心主类
│ │ ├── dispatchRequest.js     # 用来调用http请求适配器方法发送请求
│ │ ├── InterceptorManager.js  # 拦截器构造函数
│ │ └── settle.js              # 根据http响应状态，改变Promise的状态
│ ├── /helpers/                # 一些辅助方法
│ ├── /adapters/               # 定义请求的适配器 xhr、http
│ │ ├── http.js                # 实现http适配器
│ │ └── xhr.js                 # 实现xhr适配器
│ ├── axios.js                 # 对外暴露接口
│ ├── defaults.js              # 默认配置 
│ └── utils.js                 # 公用工具
├── package.json               # 项目信息
├── index.d.ts                 # 配置TypeScript的声明文件
└── index.js                   # 入口文件
```

#### 名词解释

##### 拦截器： interceptors 

-  请求拦截器 -  interceptors.request ， 拦截住每次或指定http请求，并可修改**配置项** 。
- 相应拦截器 -  interceptors.response，  拦截住每次或指定http请求，并可修改返回**结果项**。 

#####  数据转换器 ：

-  请求转换器(`transformRequest`) ， 请求前对数据进行转换 
-  响应转换器(`transformResponse`) ， 响应后的响应体做数据转换 

#####  http请求适配器

- XHR， 核心XMLHttpRequest对象
- HTTP，核心 node的http[s].request方法 

#####  config配置项 

- defaults(/lib/defaults.js) 里面就是默认配置项 -- 非常重要（ 用户跟axios项目内部“通信”的主要桥梁 ）

#### 常用方法介绍

#####  bind ：改变this指向 ，apply,call同可以 

```js
bind(fn, context); 
```

#####  forEach：遍历数组或对象 

```
var utils = require('./utils');
var forEach = utils.forEach;
// 数组
utils.forEach([], (value, index, array) => {})
// 对象
utils.forEach({}, (value, key, object) => {})
```

#####  merge：深度合并多个对象为一个对象 

```
var utils = require('./utils');
var merge = utils.merge;
var obj1 = {
  a: 1,
  b: {
    bb: 11,
    bbb: 111,
  }
};
var obj2 = {
  a: 2,
  b: {
    bb: 22,
  }
};
var mergedObj = merge(obj1, obj2);
```

#####  extend：将一个对象的方法和属性扩展到另外一个对象上，并指定上下文 

```
var utils = require('./utils');
var extend = utils.extend;

var context = {
  a: 4,
};
var target = {
  k: 'k1',
  fn(){
    console.log(this.a + 1)
  }
};
var source = {
  k: 'k2',
  fn(){
    console.log(this.a - 1)
  }
};
let extendObj = extend(target, source, context);
```

####  axios 源码分析

##### 实例创建

```
// /lib/axios.js
function createInstance(defaultConfig) {
  // 创建一个Axios实例
  var context = new Axios(defaultConfig);

  // 以下代码也可以这样实现：var instance = Axios.prototype.request.bind(context);
  // 这样instance就指向了request方法，且上下文指向context，所以可以直接以 instance(option) 方式调用 
  // Axios.prototype.request 内对第一个参数的数据类型判断，使我们能够以 instance(url, option) 方式调用
  var instance = bind(Axios.prototype.request, context);

  // 把Axios.prototype上的方法扩展到instance对象上，
  // 这样 instance 就有了 get、post、put等方法
  // 并指定上下文为context，这样执行Axios原型链上的方法时，this会指向context
  utils.extend(instance, Axios.prototype, context);

  // 把context对象上的自身属性和方法扩展到instance上
  // 注：因为extend内部使用的forEach方法对对象做for in 遍历时，只遍历对象本身的属性，而不会遍历原型链上的属性
  // 这样，instance 就有了  defaults、interceptors 属性。（这两个属性后面我们会介绍）
  utils.extend(instance, context);

  return instance;
}

// 接收默认配置项作为参数（后面会介绍配置项），创建一个Axios实例，最终会被作为对象导出
var axios = createInstance(defaults);
```

##### 发送请求

```
// /lib/core/Axios.js
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

Axios.prototype.request = function request(config) {
  // ...省略代码
};

// 为支持的请求方法提供别名
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});
```

##### 用户自定义config

```
import axios from 'axios'

// 第1种：直接修改Axios实例上defaults属性，主要用来设置通用配置
axios.defaults[configName] = value;

// 第2种：发起请求时最终会调用Axios.prototype.request方法，然后传入配置项，主要用来设置“个例”配置
axios({
  url,
  method,
  headers,
})

// 第3种：新建一个Axios实例，传入配置项，此处设置的是通用配置
let newAxiosInstance = axios.create({
  [configName]: value,
})
```

- 配置加载顺序

```
config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
```

- 默认配置`defaults`—> { method: 'get' }—> Axios实例属性`this.defaults`—> `request`请求的参数`config` 

#### 