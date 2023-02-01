<template>
  <div
    class="home-container"
    ref="container"
    @wheel="handleWheel"
    v-loading="loading"
  >
    <ul
      class="carousel-container"
      :style="{
        marginTop,
      }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <Carouselitem :carousel="item" />
      </li>
    </ul>
    <div class="icon icon-up" v-show="index > 0" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon icon-down"
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{
          active: i === index,
        }"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Carouselitem from "./Carouselitem";
import Icon from "@/components/Icon";

export default {
  components: {
    Carouselitem,
    Icon,
  },
  data() {
    return {
      index: 0, //当前显示第几张轮播图
      containerHeight: 0, //整个容器的高度
      switching: false, //是否正在翻页
    };
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },
  methods: {
    // 切换轮播图
    switchTo(i) {
      this.index = i;
    },
    // 监听滚轮事件
    handleWheel(e) {
      if (this.switching === true) {
        return;
      }

      if (e.deltaY > 5 && this.index < this.data.length - 1) {
        // 往上滚动滚轮，切换上一张
        this.switching = true;
        this.index++;
      } else if (e.deltaY < -5 && this.index > 0) {
        // 往下滚动滚轮，切换下一张
        this.switching = true;
        this.index--;
      }
    },
    // 页面过度动画完成后，允许再一次过度
    handleTransitionEnd() {
      this.switching = false;
    },
    // 监听窗口大小变化，改变主页面大小
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import url("~@/styles/var.less");
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .icon {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    @gap: 17px;
    color: @gray;
    font-size: 30px;
    cursor: pointer;
    &.icon-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }
    &.icon-down {
      bottom: @gap;
      animation: jump-down 2s infinite;
    }
    @jump: 5px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump);
      }
      50% {
        transform: translate(-50%, -@jump);
      }
      100% {
        transform: translate(-50%, @jump);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }
      50% {
        transform: translate(-50%, @jump);
      }
      100% {
        transform: translate(-50%, -@jump);
      }
    }
  }
  .indicator {
    .self-center();
    left: auto;
    right: 20px;
    li {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid #fff;
      margin: 5px 0;
      box-sizing: border-box;
      cursor: pointer;
      background-color: @words;
      box-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), 0 1px 0 rgba(0, 0, 0, 0.5);
      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>