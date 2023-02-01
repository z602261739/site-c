<template>
  <img
    class="avatar-container"
    :src="url"
    alt="头像"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String, // url属性必须是String
      required: true, // url属性必须要传值
    },
    size: {
      type: Number,
      default: 100,
    },
  },
};
</script>

<style scoped>
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>