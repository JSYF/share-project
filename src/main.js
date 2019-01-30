import Vue from "vue";
import App from "./App";
import router from "./router";
import "lib-flexible/flexible.js";
import "./assets/font/iconfont.css";
import "./common/reset.css";
import "./common/reset.styl";
import FastClick from "fastclick";
import wx from "weixin-js-sdk";
import Toast from "vant/lib/toast";
import 'vant/lib/toast/style';
Vue.use(Toast);
window.wx = wx;
import pubFunc from './utils/pubFunc';
Vue.config.productionTip = false;
Vue.use(pubFunc)
// fastclick,解决移动端300ms延迟
if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      FastClick.attach(document.body);
    },
    false
  );
}

window.$vue = new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
