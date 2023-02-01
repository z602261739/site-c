<template>
  <div id="app">
    <div v-for="(type, i) in IconTypes" :key="i">
      <Icon :type="type" />
      <span>{{ type }}</span>
    </div>
  </div>
</template>

<script>
import Icon from "./";
import { IconTypes } from "./";
export default {
  name: "App",
  components: {
    Icon,
  },
  data() {
    return {
      IconTypes,
    };
  },
};
</script>

<style scoped>
.iconfont {
  font-size: 26px;
  color: #999;}
</style>

