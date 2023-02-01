<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      title="留言板"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
      :list="data.rows"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import * as messageApi from "@/api/message.js";
import mainScroll from "@/mixins/mainScroll.js";
export default {
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll("messageContainer")],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  methods: {
    async fetchData() {
      return messageApi.getMessages(this.page, this.limit);
    },
    async handleSubmit(data, callback) {
      const resp = await messageApi.postMessage(data);
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("感谢留言");

    },
    handleScroll(dom) {
      if (this.isLoading || !dom) {
        return;
      }
      const range = 100; //在一个接受范围内都属于到达底部
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (dec <= range) {
        this.fetchMore(dom);
      }
    },
    async fetchMore(dom) {
      if (!this.hasMore || !dom) {
        // 没有更多数据了
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
  },
  mounted() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/global.less");
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 27px;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.message-area-container {
  width: 700px;
  margin: 0 auto;
}
</style>