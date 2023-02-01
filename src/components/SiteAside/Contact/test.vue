<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
export default {
  components: {
    Contact,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 400px;
  height: 500px;
  border: 2px red solid;
  background-color: burlywood;
  padding-top: 150px;
}
</style>