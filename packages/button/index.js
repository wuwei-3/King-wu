/*
 * @Description: 按钮
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 15:15:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-07 15:19:17
 */
import Button from './src/button';

Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
