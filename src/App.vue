<template>
  <div class="app-container">
    <Layout>
      <!-- 左边栏 -->
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>

      <!-- 主页面 -->
      <template>
        <router-view>
          <!-- 渲染页面 -->
        </router-view>
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import ToTop from "./components/ToTop";
export default {
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/mixin.less");
.app-container {
  .self-fill(fixed);
  .aside {
    width: 250px;
    height: 100%;
  }
}
</style>