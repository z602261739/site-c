<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const fontClassMap = {
  weixin: "icon-weixin",
  qq: "icon-QQ-circle-fill",
  home: "icon-zhuye",
  blog: "icon-blog",
  about: "icon-about",
  code: "icon-code",
  email: "icon-email",
  github: "icon-github",
  empty: "icon-empty",
  warn: "icon-jinggao",
  success: "icon-zhengque",
  error: "icon-cuowu",
  close: "icon-guanbi",
  info: "icon-xinxi",
  chat: "icon-liuyan",
  arrowUp: "icon-arrow-up",
  arrowDown: "icon-arrow-down",
};
export const IconTypes = Object.keys(fontClassMap);
export default {
  props: {
    type: {
      type: String,
      require: true,
    },
  },
  computed: {
    // 获取图标类样式
    fontClass() {
      return fontClassMap[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/c/font_3710693_itiyfnpdug.css";
i{
  font-size: inherit;
  color: inherit;
}
</style>