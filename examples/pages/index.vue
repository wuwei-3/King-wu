<!--
 * @Description: 首页入口
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 15:43:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-08 09:30:12
 -->
<template>
  <div class="pg-index">
    <div class="index-container">
      <img src="../assets/logo.png" />
      <p>国家项目条线，公共UI 组件库</p>
    </div>
    <div class="separate-panel">
      <div class="about">
        <router-link :to="{ name: 'home' }">开始使用</router-link>
        <a target="_blank" class="btn-github">GitLab</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scope>
.pg-index {
  .index-container {
    width: 960px;
    margin: 0 auto;
    text-align: center;
    padding: 100px 0;
    p {
      margin-top: 56px;
      color: #8994c6;
      font-size: 32px;
    }
  }
  .separate-panel {
    position: relative;
    .about {
      position: absolute;
      width: 100%;
      height: 200px;
      top: 20px;
      z-index: 9;
      background: white;
      text-align: center;
      a {
        color: white;
        background-image: linear-gradient(90deg, #00aeff 0%, #3369e7 100%);
        box-shadow: 0 2px 6px 0 #3369e766;
        display: inline-block;
        width: 190px;
        height: 56px;
        margin: 0 35px;
        font-size: 18px;
        line-height: 56px;
        border-radius: 28px;
        transition: all 0.3s;
        cursor: pointer;
        text-decoration: none;
      }
      .btn-github {
        color: #316de9;
        border: 1px solid #2f6ee9;
        background: white;
        box-shadow: none;
      }
    }
  }
  .separate-panel:after {
    content: '';
    display: block;
    position: absolute;
    top: -80px;
    width: 100%;
    height: 250px;
    background: white;
    box-shadow: 0 -4px 30px 0 #dfe1e6;
    transform: skewY(-4deg);
  }
}
</style>
