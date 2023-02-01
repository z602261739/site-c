<template>
  <div id="app">
    <Avatar
      url="https://img1.baidu.com/it/u=3109262389,786218177&fm=253&fmt=auto&app=120&f=JPEG?w=360&h=360"
      :size="200"
    />
  </div>
</template>

<script>
import Avatar from "./";

export default {
  name: "Avatar-test",
  components: {
    Avatar,
  },
};
</script>

<style scoped>
</style>

