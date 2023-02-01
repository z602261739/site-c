<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">左边栏区域</div>
      </template>

      <template>
        <div class="main">主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域</div>
      </template>

      <template #right>
        <div class="right">右边栏区域</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 60%;
  height: 600px;
  border: 2px solid;
  white-space: nowrap;
  .left {
    width: 200px;
    height: 100%;
    background: lightcoral;
  }
  .main {
    width: 100%;
    height: 100%;
    background: lightgreen;
    
  }
  .right {
    width: 150px;
    height: 100%;
    background: lightblue;
  }
}
</style>