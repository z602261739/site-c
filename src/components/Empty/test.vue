<template>
  <div class="test-container">
    <Empty />
  </div>
  
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
};
</script>

<style scoped>
.test-container{
  width: 300px;
  height: 300px;
  border: 2px black solid;
  margin: 0 auto;
  position: relative;
}
</style>