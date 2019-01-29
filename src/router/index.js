import Vue from "vue";
import VueRouter from "vue-router";
import util from "@/common/js/util.js";
import components from "./components";
Vue.use(VueRouter);

let router;
router = new VueRouter({
    mode: "history",
    base: "/h5/hoo",
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
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

router.afterEach((to, from) => {
    if (to.fullPath === "/h5/activity/wheel") {
        return;
    }
    let isWeiXin = util.isWeiXin();
    if (isWeiXin) {
        let localUrl;
        let baseurl = router.history.base + to.fullPath;
        let domain = window.location.host; //获取当前域名
        let protocol = window.location.protocol;
        localUrl = protocol + "//" + domain + baseurl;

        let obj = {
            api: "getJsSign",
            data: {
                url: localUrl
            }
        };
        api.fetchAllList(
            obj,
            function(data) {
                let config_data = data;
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: config_data.appId, // 必填，公众号的唯一标识
                    timestamp: config_data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: config_data.nonceStr, // 必填，生成签名的随机串
                    signature: config_data.signature.toString(), // 必填，签名，见附录1
                    jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
                wx.error(function(res) {});
            },
            error => {
                console.log("error=>",error);
            }
        );
    }
});
export default router;
