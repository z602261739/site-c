<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :url="data.avatar + ''" :size="150" />
      <h1>{{ data.siteTitle }}</h1>
    </template>

    <Menu />
    <Contact v-if="data" />
    <footer v-if="data">{{ data.icp }}</footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";
export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background-color: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  margin: 0 auto;
}
h1 {
  text-align: center;
  color: @lightWords;
}
footer {
  text-align: center;
  color: @words;
  font-size: 12px;
}
</style>