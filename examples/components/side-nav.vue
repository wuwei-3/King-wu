<!--
 * @Description: 左侧菜单列表
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 16:10:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-07 20:06:17
 -->
<template>
  <div class="side-nav">
    <div
      v-for="(title, t) in Object.keys(data)"
      class="group-container"
      :key="t"
    >
      <p class="side-nav-title">{{ title }}</p>
      <div
        class="side-nav-items"
        v-for="(nav, n) in data[title]"
        :key="n"
        v-show="nav.name != 'home' && nav.name != 'index'"
      >
        <router-link
          :class="$route.name === nav.name ? 'active' : ''"
          v-if="nav.name"
          :to="{ name: nav.name }"
          >{{ nav.desc }}</router-link
        >
        <p v-else class="side-nav-group">{{ nav.desc }}</p>
        <div v-for="(item, i) in nav.items" :key="i">
          <router-link
            :to="{ name: item.name }"
            :class="$route.name === item.name ? 'active' : ''"
            class="slid-nav-component"
            >{{ item.desc }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navConf from '../config/nav.json';
export default {
  data() {
    return {
      data: navConf,
    };
  },
};
</script>
<style lang="scss" scope>
.side-nav {
  display: inline-block;
  margin: 32px 0;
  padding: 0;
  color: #3f536e;
  background-color: white;
  z-index: 99;
  .group-container {
    margin-bottom: 20px;
  }
  .side-nav-title {
    padding: 0 24px 8px;
    color: #8dabc4;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .side-nav-items {
    font-size: 14px;
    font-weight: normal;
    line-height: 1.8;
    a {
      display: block;
      position: relative;
      padding: 8px 24px;
      color: #3f536e;
      font-weight: normal;
      line-height: 1.5;
      cursor: pointer;
      text-decoration: none;
    }
    .side-nav-group {
      display: block;
      position: relative;
      padding: 6px 0 6px 24px;
      color: #2c405a;
      font-weight: bold;
    }
    .slid-nav-component {
      display: block;
      position: relative;
      padding: 6px 24px 6px 32px;
      color: #616367;
      font-size: 14px;
      &:hover {
        color: #409eff;
      }
    }
    .active {
      color: #409eff;
    }
  }
}
</style>
