<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style scoped>
.test-container{
  width: 250px;
  height: 600px;
  border: 2px solid black;
}
</style>