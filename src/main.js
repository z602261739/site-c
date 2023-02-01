// 入口文件
import './mock';
import Vue from 'vue';
import App from './App.vue';
import "./styles/global.less";
import router from "./router";
import store from "./store"

// Vue.config.productionTip = false

// 初始化仓库数据
store.dispatch("setting/fetchSetting")


// 添加全局方法
import {
  showMessage
} from "@/utils";
Vue.prototype.$showMessage = showMessage;

// 注册全局指令
import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);
import vLazy from "./directives/lazy"
Vue.directive("lazy", vLazy);

// 事件总线
import "./eventBus";

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');



