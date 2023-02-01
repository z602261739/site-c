<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container {
  .self-center();
  color: @gray;
  text-align: center;
  p{
    font-weight: bold;
  }
}
.icon-container {
  font-size: 77px;
}
</style>