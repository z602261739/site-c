<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期:{{ formatDate(blog.createDate) }}</span>
      <span>浏览:{{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论:{{ blog.commentNumber }}</a>
      <router-link
        :to="{
          name: `CategoryBlog`,
          params: {
            categoryID: blog.category.id,
          },
        }"
        >{{ blog.category.name }}</router-link
      >
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import { formatDate } from "@/utils";
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
export default {
  props: {
    blog: {
      type: Object,
      require: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style scoped lang="less">
@import url("~@/styles/var.less");
@import url("~@/styles/global.less");

.aside {
  margin: 9px 0;
  font-size: 12px;
  color: @gray;
  a,
  span {
    margin-right: 1.5em;
  }
}
.markdown-body {
  margin: 2em 0;
}
</style>