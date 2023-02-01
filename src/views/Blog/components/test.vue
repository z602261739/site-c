<template>
  <div class="test container">
    <RightList :list="this.list" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from "./RightList";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: "a", isSelect: false },
        {
          name: "b",
          isSelect: true,
          children: [{ name: "b", isSelect: false }],
        },
        {
          name: "c",
          isSelect: false,
          children: [
            {
              name: "c",
              isSelect: false,
              children: [{ name: "c", isSelect: false }],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleSelect(item) {
      console.log(item)
    }
  }
};
</script>

<style>
</style>