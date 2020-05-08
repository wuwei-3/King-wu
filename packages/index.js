/*
 * @Description: 导出全部组件
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 15:19:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-07 15:24:54
 */
import Button from './button';

/* 存储组件 */
const components = [Button];

/* 注册所有组件 */
const install = function(Vue) {
  /* 判断是否可以安装 */
  if (install.installed) {
    return;
  }
  /* 遍历所有组件 */
  components.map((component) => Vue.component(component.name, component));
};

//
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* 导出组件 */
export default {
  install,
  ...components,
};
