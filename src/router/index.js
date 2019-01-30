import Vue from "vue";
import VueRouter from "vue-router";
import components from "./components";
Vue.use(VueRouter);

let router;
router = new VueRouter({
  mode: "history",
  //base: "",
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    // 首页
    {
      path: "",
      redirect: "/index"
    },
    // 首页
    {
      path: "/index",
      name: "index",
      component: components.Index,
      meta: {
        title: "小云翰"
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

  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

router.afterEach((to, from) => {
  // 统计代码
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
});
export default router;
