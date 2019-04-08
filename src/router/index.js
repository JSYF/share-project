import Vue from "vue";
import VueRouter from "vue-router";
import components from "./components";
import {getWxConfig} from "@/api/index";
Vue.use(VueRouter);
function $isWx() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}
let router = new VueRouter({
  base: "wap",
  mode: "history",
  routes: [
    {
      path: "",
      name: "index",
      component: components.Index,
      meta:{
        title:"小云翰"
      }
    },
    // 申请试用
    {
      path: "/apply",
      name: "apply",
      component: components.Apply,
      meta: {
        title: "申请试用"
      }
    },
    {
      path:"/yunhan_apply",
      name:"yunhanApply",
      component:components.yunhanApply,
      meta:{
        title:"申请试用"
      }
    },
    {
      path:"/publicity",
      name:"publicity",
      component:components.publicity,
      meta:{
        title:"小云翰"
      }
    },
    {
      path:"/publicity/like",
      name:"publicityLike",
      component:components.publicityShare,
      meta:{
        title:"小云翰"
      }
    },
    {
      path:"/student",
      name:"student",
      component:components.studentCardShare,
      meta:{
        title:"小云翰"
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

router.afterEach((to, from) => {
  // 统计代码块
  if (process.env.hasStatistics) {
    setTimeout(() => {
      var _hmt = _hmt || [];
      (function() {
        //每次执行前,先移除上次插入的代码
        document.getElementById("baidu_tj") &&
          document.getElementById("baidu_tj").remove();
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?d9d4ac293d4cab49bcc54a1a23c3f0e7";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    }, 0);
  }
  //统计代码块
  // return;
  if ($isWx()) {
    let localUrl;
    let baseurl = router.history.base + to.fullPath;
    let domain = window.location.host; //获取当前域名
    let protocol = window.location.protocol;
    localUrl = protocol + "//" + domain + baseurl;
    getWxConfig({
      url:localUrl
    })
      .then(res=>{
        let config_data = res.data;
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: config_data.appId, // 必填，公众号的唯一标识
            timestamp: config_data.timestamp, // 必填，生成签名的时间戳
            nonceStr: config_data.nonceStr, // 必填，生成签名的随机串
            signature: config_data.signature.toString(), // 必填，签名，见附录1
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
      }).catch(e=>{
        console.log("error=>", e);
      })
}
});
export default router;
