<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import fetchData from "@/mixins/fetchData.js";
import { getBlogCategory } from "@/api/blog.js";
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryID || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      let totalArticleCount = 0;
      for (let item of this.data) {
        totalArticleCount += item.articleCount;
      }
      const result = [
        {
          name: "全部",
          id: -1,
          articleCount: totalArticleCount,
        },
        ...this.data,
      ];

      return result.map((it) => ({
        ...it,
        isSelect: it.id == this.categoryId,
        aside: `${it.articleCount}篇`,
      }));
    },
  },
  methods: {
    async fetchData() {
      return await getBlogCategory();
    },
    handleSelect(item) {
      // 跳转到对应的页面
      const query = {
        page: 1,
        limit: this.limit,
      };

      if (this.id === -1) {
        // 当前没有分类
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // 当前选择分类
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryID: item.id,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/global.less");
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
  }
}
</style>