webpackJsonp([5],{"/wAz":function(t,e){},"2qEm":function(t,e){},Ap8C:function(t,e){},GcCZ:function(t,e){},JmJi:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("xd7I"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("C7Lr")({name:"App"},a,!1,function(t){n("GcCZ")},null,null).exports,r=n("KGCO"),u={Index:function(){return n.e(2).then(n.bind(null,"IdkM"))},Apply:function(){return n.e(0).then(n.bind(null,"isaq"))},yunhanApply:function(){return n.e(0).then(n.bind(null,"M28G"))},publicity:function(){return n.e(1).then(n.bind(null,"pCav"))},publicityShare:function(){return n.e(1).then(n.bind(null,"6LRy"))},studentCardShare:function(){return n.e(3).then(n.bind(null,"gPYO"))}},c=n("gyMJ");i.default.use(r.a);var l=new r.a({base:"wap",mode:"history",routes:[{path:"",name:"index",component:u.Index,meta:{title:"学员卡"}},{path:"/apply",name:"apply",component:u.Apply,meta:{title:"申请试用"}},{path:"/yunhan_apply",name:"yunhanApply",component:u.yunhanApply,meta:{title:"申请试用"}},{path:"/publicity",name:"publicity",component:u.publicity,meta:{title:"小云翰"}},{path:"/publicity/like",name:"publicityLike",component:u.publicityShare,meta:{title:"小云翰"}},{path:"/student",name:"student",component:u.studentCardShare,meta:{title:"小云翰"}}]});l.beforeEach(function(t,e,n){t.meta.title&&(document.title=t.meta.title),n()}),l.afterEach(function(t,e){if(setTimeout(function(){!function(){document.getElementById("baidu_tj")&&document.getElementById("baidu_tj").remove();var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?d9d4ac293d4cab49bcc54a1a23c3f0e7";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()},0),"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)){var n,i=l.history.base+t.fullPath,a=window.location.host;n=window.location.protocol+"//"+a+i,Object(c.a)({url:n}).then(function(t){var e=t.data;wx.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature.toString(),jsApiList:["onMenuShareTimeline","onMenuShareAppMessage"]})}).catch(function(t){console.log("error=>",t)})}});var d=l,s=(n("D0oh"),n("/wAz"),n("lSy/"),n("Ywvo"),n("iDdd")),p=n.n(s),m=n("efG5"),f=n.n(m),h=n("ZVoT"),g=n.n(h),y=(n("f70c"),n("aA9S")),v=n.n(y),b={install:function(t){t.prototype.$isWx=function(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)},t.prototype.$sharePage=function(t){var e={title:document.title,link:window.location.href,imgUrl:"https://image.haoxuezhuli.com/saas-dir/20181019_0410_683yunhan.png",desc:document.title},n=v()({},e,t);wx.ready(function(){console.log("ready"),wx.onMenuShareTimeline({title:n.title,link:n.link,imgUrl:n.imgUrl,success:function(){}}),wx.onMenuShareAppMessage({title:n.title,desc:n.desc,link:n.link,imgUrl:n.imgUrl,type:"",dataUrl:"",success:function(){}})})}}};i.default.use(g.a),window.wx=f.a,i.default.config.productionTip=!1,i.default.use(b),"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){p.a.attach(document.body)},!1),window.$vue=new i.default({el:"#app",router:d,render:function(t){return t(o)}})},Ywvo:function(t,e){},gyMJ:function(t,e,n){"use strict";var i=n("rVsN"),a=n.n(i),o=n("aozt"),r=n.n(o),u=n("CtzY"),c=n.n(u),l=n("Ty6C"),d=n.n(l),s=n("NKTX"),p=n.n(s);r.a.defaults.baseURL="https://api.yunhan100.com/api/index.php?r=";var m=function(t,e){var n,i,o;return e.guid=((n=localStorage.getItem("sdguid"))||(n=(new p.a).get(),localStorage.setItem("sdguid",n)),n),i=e,o=c.a.stringify(i)+"&appkey=hoo.ai.edu",i.signature=d.a.hex(o),e=i,e=c.a.stringify(e),r.a.post(t,e).then(function(t){return 0===t.data.errorcode?a.a.resolve(t.data):a.a.reject(t.data.msgs)}).catch(function(t){return a.a.reject(t)})};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m("common/submit/saas-consult",t)},e.c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m("common/submit/add-html-view-count",t)},e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m("common/group-course/get-student-card-js-sign-package",t)},e.d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m("common/submit/create-extend-record",t)}},"lSy/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.96e164c3cb830ac11df8.js.map