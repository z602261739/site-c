<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span :class="{ active: item.isSelect }" @click="handleClick(item)">
        {{ item.name }}
      </span>
      <span
        v-if="item.aside"
        class="aside"
        :class="{ active: item.isSelect }"
        @click="handleClick(item)"
        >{{ item.aside }}</span
      >

      <!-- 显示当前组件 -->
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RightList',
  props: {
    list: {
      type: Array, // {name: "xxx", isSelect:true, children:[name: "yyy", isSelect:false]}
      default: () => []
    }
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit('select', item);
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import url('~@/styles/global.less');
@import url('~@/styles/var.less');
.right-list-container {
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    span {
      cursor: pointer;
      &.aside {
        margin-left: 1em;
        color: @gray;
      }
      &.active {
        color: @warn;
        font-weight: bold;
      }
    }
  }
}
</style>
