<template>
  <div class="detail-container">
    <Layout>
      <div ref="mainContainer" class="main-container" v-loading="isLoading">
        <BlogDetail :blog="data" v-if="data" />
        <BlogComment v-if="!isLoading" />
      </div>
      <template #right>
        <div class="right-container" v-loading="isLoading">
          <BlogTOC :toc="data.toc" v-if="data" />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import BlogComment from "./components/BlogComment";
import mainScroll from "@/mixins/mainScroll.js";
import { titleController } from "@/utils";

export default {
  mixins: [fetchData(null), mainScroll("mainContainer")],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  methods: {
    async fetchData() {
      const resp = await getBlog(this.$route.params.id);
      // resp = null;
      if (!resp) {
        // 文章不存在
        this.$router.push("/404");
        titleController.setRouteTitle("404");
        return;
      } else {
        if (resp.title) {
          titleController.setRouteTitle(resp.title);
        }
        return resp;
      }
    },
    handleScroll() {
      this.$bus.$emit("mainScroll", this.$refs.mainContainer);
    },
    handleSetMainScroll(scrollTop) {
      this.$refs.mainContainer.scrollTop = scrollTop;
    },
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style scoped lang="less">
.detail-container {
  height: 100%;
  width: 100%;
  .main-container {
    overflow-y: scroll;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    scroll-behavior: smooth;
  }
  .right-container {
    width: 300px;
    height: 100%;
    overflow-y: scroll;
    box-sizing: border-box;
    position: relative;
    padding: 20px;
  }
}
</style>