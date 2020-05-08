<!--
 * @Description: 公共头组件
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 16:10:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-07 16:42:15
 -->
<template>
  <header
    class="page-header"
    :style="
      $route.name === 'index'
        ? 'box-shadow:none'
        : 'box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)'
    "
  >
    <div class="header-container">
      <router-link :to="{ name: 'index' }"
        ><img src="../assets/logo.png" width="100"
      /></router-link>
      <router-link :to="{ name: 'giud' }">组件</router-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.page-header {
  background-color: white;
  box-shadow: 0 10px 60px 0 #1d1d1f12;
  opacity: 0.98;
  position: relative !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  transition: all 0.3s;
  z-index: 100;
  .header-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-between;
  }
}
</style>
