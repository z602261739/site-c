import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import {
  titleController
} from "@/utils";

// 判断是否通过script引用VueRouter
if (!window.VueRouter) {
  Vue.use(VueRouter); // 使用vue的插件VueRouter
}

const router = new VueRouter({
  //配置路由
  routes, //路由匹配规则
  mode: "history", //路由访问路径模式
});

router.afterEach((to, form) => {
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title)
  }
});

export default router;