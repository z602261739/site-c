<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import { debounce } from "@/utils";
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },
  computed: {
    // 根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((item) => ({
          ...item,
          isSelect: item.anchor === this.activeAnchor,
          children: getTOC(item.children),
        }));
      };
      return getTOC(this.toc);
    },
    // 根据toc得到他们对应的元素数组
    doms() {
      const doms = [];
      const addTocDoms = (toc) => {
        for (const item of toc) {
          doms.push(document.getElementById(item.anchor));
          if (item.children && item.children.length) {
            addTocDoms(item.children);
          }
        }
      };
      addTocDoms(this.toc);
      return doms;
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    // 根据h1元素位置，设置activeAnchor
    setSelect(scrollDom) {
      if (!scrollDom) {
        return;
      }
      this.activeAnchor = "";
      const range = 200;
      for (const dom of this.doms) {
        // 判断当前dom元素是否应该被选中
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          // 在规定范围呢
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          // 在规定范围下方
          return;
        } else {
          // 在规定范围上方
          this.activeAnchor = dom.id;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/global.less");
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
  }
}
</style>