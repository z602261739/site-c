import Vue from "vue";
const app = new Vue({});
/**
 * 事件名: mainScroll
 * 含义: 主区域滚动调位置变化后触发
 * 参数:
 *    -滚动的dom元素
 * 
 * 
 * 事件名: setMainScroll
 * 含义: 当需要设置主区域滚动条位置时触发
 * 参数:
 *    -高度
 */
Vue.prototype.$bus = app;
export default app;