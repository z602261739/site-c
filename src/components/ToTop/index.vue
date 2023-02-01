<template>
  <div @click="handleClick" v-show="show" class="to-top-container">Top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false;
        return;
      }
      this.show = dom.scrollTop > 500;
    },
    handleClick() {
      // 回到顶部
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style scoped lang="less">
@import url("~@/styles/var.less");
@import url("~@/styles/global.less");
.to-top-container {
  background-color: @primary;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  z-index: 999;
  right: 350px;
  bottom: 50px;
  cursor: pointer;
  text-align: center;
  line-height: 50px;
  color: #fff;
}
</style>