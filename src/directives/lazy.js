import eventBus from "@/eventBus";
import {
  debounce
} from "@/utils";
import defaultGif from "@/assets/loading2.gif";

let imgs = [];

function setImage(img) {
  img.dom.src = defaultGif; // 先使用着默认图片
  // 具体处理每张图片
  // 判断该图片是否在视口范围内
  const clientHeight = document.documentElement.clientHeight;
  const rect = img.dom.getBoundingClientRect();
  const height = rect.height || 150;
  if (rect.top >= -height && rect.top <= clientHeight) {
    // 在视口范围内
    const tempImg = new Image();
    tempImg.onload = function() {
      // 真实图片加载完成之后
      img.dom.src = img.src;
    };
    // 缓存加载真实图片
    tempImg.src = img.src;
    imgs = imgs.filter((i) => i !== img);
  }
}

function handleScroll() {
  for (const img of imgs) {
    // 具体处理每张图片
    setImage(img);
  }
}

eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
  inserted(el, bindings) {
    const img = {
      dom: el,
      src: bindings.value,
    };
    imgs.push(img);
    // 进入页面立即处理一次
    setImage(img);
  },
  unbind(el) {
    imgs = imgs.filter((img) => img.dom !== el);
  },
};
