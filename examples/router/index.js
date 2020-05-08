/*
 * @Description: 路由文件
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 15:41:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-07 21:05:52
 */
import Vue from 'vue';
import Router from 'vue-router';
import navConf from '../config/nav.json';

Vue.use(Router);

let routes = [];

Object.keys(navConf).forEach((header) => {
  routes = routes.concat(navConf[header]);
});

let addComponent = (router) => {
  router.forEach((route) => {
    if (route.items) {
      addComponent(route.items);
      routes = routes.concat(route.items);
    } else {
      if (route.type === 'pages') {
        route.component = (r) =>
          require.ensure([], () => r(require(`../pages/${route.name}.vue`)));
        return;
      }
      route.component = (r) =>
        require.ensure([], () => r(require(`../docs/${route.name}.md`)));
    }
  });
};

addComponent(routes);

export default new Router({
  routes: routes,
});
