export default {
  install: function(Vue) {
    /**
     *  判断是否是微信浏览器打开
     * */
    Vue.prototype.$isWx = function() {
      var ua = window.navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
      } else {
        return false;
      }
    };
  }
};
