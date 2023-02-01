import Vue, { h } from "vue";

/**
 * 获取某个组件渲染的DOM元素
 */
export default function (component, props) {
  const vm = new Vue({
    render: (h) => h(component, { props }),
  });
  vm.$mount();
  return vm.$el;
}