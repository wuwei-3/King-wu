/*
 * @Description: 依赖使用
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 14:31:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-08 09:46:32
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './styles/index.scss';
// 导入组件库
import BIUI from '../packages';

Vue.use(BIUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
