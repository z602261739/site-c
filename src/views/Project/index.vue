<template>
  <div class="project-container" ref="projectContainer" v-loading="loading">
    <div v-for="item in data" :key="item.id" class="project-item">
      <a
        :href="item.url ? item.url : `javascript:alert('该项目暂无访问地址')`"
        :target="item.url ? '_blank' : '_self'"
        ><img v-lazy="item.thumb" class="thumb"
      /></a>
      <div class="info">
        <h2>
          <a
            :href="
              item.url ? item.url : `javascript:alert('该项目暂无访问地址')`
            "
            :target="item.url ? '_blank' : '_self'"
            >{{ item.name }}</a
          >
          <a
            v-if="item.github"
            class="github"
            :href="item.github"
            target="_blank"
            >> github</a
          >
        </h2>

        <p v-for="(p, i) in item.description" :key="i">{{ p }}</p>
      </div>
    </div>

    <Empty v-if="data.length === 0 && !loading" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll";
import Empty from "@/components/Empty";
export default {
  mixins: [mainScroll("projectContainer")],
  computed: {
    ...mapState("project", ["loading", "data"]),
  },
  created() {
    this.$store.dispatch("project/fetchProject");
  },
  components: {
    Empty,
  },
};
</script>

<style scoped lang="less">
@import url("~@/styles/global.less");
@import url("~@/styles/var.less");
.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
  .project-item {
    transition: 0.5s;
    padding: 20px;
    display: flex;
    &:hover {
      box-shadow: -1px 1px 7px @gray;
      transform: scale(1.01) translate(3px, -3px);
      color: inherit;
    }
    .thumb {
      width: 200px;
      height: 150px;
      flex: 0 0 auto;
      object-fit: cover;
      border-radius: 7px;
      margin-right: 17px;
    }
    .info {
      line-height: 1.7;
      flex: 1 1 auto;
      h2 {
        .github {
          margin-left: 11px;
          font-size: 14px;
          color: @success;
          &:hover{
            color: @primary;
          }
        }
      }
    }
  }
}
</style>