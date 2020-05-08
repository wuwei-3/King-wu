<!--
 * @Description: 首页
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 16:32:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-08 09:43:42
 -->
<template>
  <div class="home">
    <div class="e-top">
      <span class="p-title" @click="$router.push('/')"
        ><img src="../assets/logo.png" />BIUI</span
      >
    </div>
    <div class="e-bot">
      <div class="t-left"><Left></Left></div>
      <div class="t-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Left from '../components/side-nav.vue';
export default {
  components: {
    Left,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@mixin fh {
  display: flex;
  align-items: center;
}
.home {
  height: 100%;
  width: 1140px;
  padding: 0;
  margin: 0 auto;
  .e-top {
    height: 80px;
    background-color: white;
    line-height: 80px;
    @include fh;
    padding: 0 20px;
    border-bottom: 1px solid #dcdfe6;
    .p-title {
      font-weight: bold;
      font-size: 20px;
      color: #409eff;
      @include fh;
      cursor: pointer;
      img {
        width: 41px;
        margin-right: 10px;
      }
    }
  }
  .e-bot {
    height: calc(100% - 81px);
    width: 100%;
    display: flex;
    .t-left {
      width: 240px;
      height: 100%;
      overflow-x: auto;
    }
    .t-right {
      flex: 1;
      height: 100%;
      overflow: auto;
      color: #3f536e;
    }
  }
}
</style>
