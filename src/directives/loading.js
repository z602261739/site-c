import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";

// 得到el元素中loading的img元素
function getLoadingImage(el) {
  return el.getElementsByClassName("loadingImg")[0];
}

function createLoadingImg() {
  const img = document.createElement("img");
  img.className = "loadingImg";
  img.src = loadingUrl;
  img.classList.add(styles.loading);
  return img;
}


// 导出指令的配置对象
export default function (el, binding) {
  // 根据binding.value的值，决定创建或删除img元素
  const curImg = getLoadingImage(el);
  if (binding.value) {
    if (!curImg) {
      const img = createLoadingImg();
      el.appendChild(img);
    }
  } else {
    if (curImg) {
      curImg.remove();
    }
  }
}
//   {
//   bind(el, binding) {
//     // 只调用一次，指令第一次绑定到元素时调用。可以用于初始化设置
//   },
//   inserted(el, binding) {
//     // 被绑定元素插入父节点时调用
//   },
//   update(el,binding) {
//     // 所在组件的 VNode 更新时调用
//   }
// }