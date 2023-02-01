import {Store,install} from "vuex";  //替换 import Vuex from "vuex"
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import project from "./project";

// 判断是否通过script引用Vuex
if (!window.Vuex) {
  install(Vue); // 替换 Vue.use(Vuex);
}

export default new Store({ // 替换new Vue.Store
  modules: {
    banner,
    setting,
    about,
    project,
  },
  strict: true,
});
