<template>
  <div id="app">
    <Pager :total="total" :current="current" @pageChange="handlePageChange" />
  </div>
</template>

<script>
import Pager from "./";

export default {
  name: "App",
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
      total: 800,
    };
  },
  methods: {
    handlePageChange(newPage) {
      // 注册一个事件
      console.log(newPage);
      this.current = newPage;
    },
  },
};
</script>

<style scoped>
.iconfont {
  font-size: 26px;
  color: #999;
}
</style>

