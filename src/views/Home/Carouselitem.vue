<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" ref="image" :style="imagePosition">
      <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
        @load="this.showWords"
      />
      <div class="title" ref="title">{{ carousel.title }}</div>
      <div class="desc" ref="desc">{{ carousel.description }}</div>
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, // 外层容器的尺寸
      innerSize: null, // 里层图片的尺寸
      mouseX: 0,
      mouseY: 0,
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  computed: {
    imagePosition() {
      if (!this.innerSize || !this.containerSize) {
        return;
      } else {
        const extraWidth = this.innerSize.width - this.containerSize.width;
        const extraHeight = this.innerSize.height - this.containerSize.height;
        const left = (-extraWidth / this.containerSize.width) * this.mouseX;
        const top = (-extraHeight / this.containerSize.height) * this.mouseY;
        return {
          transform:`translate(${left}px, ${top}px)`,
        };
      }
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  methods: {
    showWords() {
      const title = this.$refs.title.style;
      title.opacity = 1;
      title.transition = "1.5s";

      title.width = 0;
      this.$refs.title.clientWidth; // 强制渲染一次 title.width = 0
      title.width = this.titleWidth + "px";

      const desc = this.$refs.desc.style;
      desc.opacity = 1;
      desc.transition = "2.5s 1.5s";

      desc.width = 0;
      this.$refs.desc.clientWidth; // 强制渲染一次 desc.width = 0
      desc.width = this.descWidth + "px";
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
    },
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
.carousel-item-container {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
  .carousel-img {
    width: 110%;
    height: 110%;
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.3s linear;
  }
  .title,
  .desc {
    position: absolute;
    left: 10%;
    color: lighten(@gray, 30%);
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), 1px 1px 0 rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
  }
  .title {
    top: calc(55% + 21px);
    font-size: 2em;
    letter-spacing: 5px;
  }
  .desc {
    top: calc(55% + 77px);
    font-size: 1.2em;
    letter-spacing: 3px;
  }
}
</style>