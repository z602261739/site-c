<template>
  <!-- 只有总页数大于1才显示 -->
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }">首页</a>
    <a
      @click="handleClick(current - 1 < 1 ? 1 : current - 1)"
      :class="{ disabled: current === 1 }"
      >&lt;</a
    >
    <a
      v-for="(n, i) in number"
      :key="i"
      :class="{ active: n === current }"
      @click="handleClick(n)"
      >{{ n }}</a
    >
    <a
      @click="handleClick(current + 1 > pageNumber ? pageNumber : current + 1)"
      :class="{ disabled: current === pageNumber }"
      >&gt;</a
    >
    <a
      @click="handleClick(pageNumber)"
      :class="{ disabled: current === pageNumber }"
      >尾页</a
    >
  </div>
</template>

<script>
export default {
  props: {
    current: {
      // 当前页码
      type: Number,
      default: 1,
    },
    total: {
      // 数据总量
      type: Number,
      default: 0,
    },
    limit: {
      // 每页显示多少条数据
      type: Number,
      default: 10,
    },
    visibleNumber: {
      // 最多可以显示的页码数
      type: Number,
      default: 10,
    },
  },
  computed: {
    //总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    // 获取最小的页码数
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    number() {
      let num = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        num.push(i);
      }
      return num;
    },
  },
  methods: {
    handleClick(newPage) {
      //抛出一个事件
      if (newPage === this.current) {
        return
      }
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less"; //~@ ——> src目录
.pager-container {
  display: flex;
  justify-content: center;
  margin: 30px;
  a {
    cursor: pointer;
    color: @primary;
    margin: 0 7px;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>
