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
    Vue.prototype.$sharePage = function(config) {
      const baseObj = {
        title: document.title,
        link: window.location.href,
        imgUrl:
          "https://image.haoxuezhuli.com/saas-dir/20181019_0410_683yunhan.png",
        desc: document.title
      };
      let obj = Object.assign({},baseObj, config);
      wx.ready(() => {
        console.log("ready");
        wx.onMenuShareTimeline({
          title: obj.title, // 分享标题
          link: obj.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: obj.imgUrl, // 分享图标
          success: function() {}
        });

        wx.onMenuShareAppMessage({
          title: obj.title, // 分享标题
          desc: obj.desc, // 分享描述
          link: obj.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: obj.imgUrl, // 分享图标
          type: "", // 分享类型,music、video或link，不填默认为link
          dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
          success: function() {}
        });
      });
    };
  }
};
