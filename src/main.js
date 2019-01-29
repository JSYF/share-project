// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import './assets/css/iconfont.css';
import './assets/css/reset.css'
import './common/stylus/reset_vant.styl'
import FastClick from 'fastclick';
import 'vant/lib/index.css'
import { Toast } from 'vant';
Vue.use(Toast);
import VueResource from 'vue-resource';
import util from './common/js/util';
import api from './utils/request'
import wx from 'weixin-js-sdk';
window.wx = wx;
window.api = api;
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)



Vue.config.productionTip = false

Vue.use(VueResource);
Vue.http.options.xhr = { withCredentials: true };
Vue.http.options.emulateJSON = true;


// fastclick,解决移动端300ms延迟
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body)
    }, false)
}

// 挂载工具方法
Vue.$util = Vue.prototype.$util = util;
Vue.$ajax = Vue.prototype.$ajax = util.ajax;
// Vue.$api = Vue.prototype.$api = api

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
