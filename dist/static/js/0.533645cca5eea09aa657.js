webpackJsonp([0],{"6LRy":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("woOf"),a=i.n(s),n=i("gyMJ"),o={data:function(){return{form:{real_name:"",phone:""}}},methods:{changeInput:function(t,e){this.form[e]=t},submit:function(){var t=this;if(this.form.real_name)if(11==this.form.phone.length){var e=a()({},this.form,{source_id:this.$route.query.source_id});Object(n.d)(e).then(function(e){console.log(e),t.$toast.success("点赞成功"),setTimeout(function(){t.$router.push({path:"/publicity",query:{source_id:e.data.source_id}})},500)}).catch(function(e){console.log("error",e),t.$toast.fail(e)})}else this.$toast.fail("请输入正确的手机号码");else this.$toast.fail("请输入联系人")}},computed:{showText:function(){return this.form.real_name?this.form.real_name:"XXX"}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"resulte-box"},[i("h4",{staticClass:"title"},[t._v("效果预览")]),t._v(" "),i("p",{staticClass:"share-show"},[i("i",{staticClass:"iconfont icon-praise_fill"}),t._v("\n      我是"+t._s(t.showText)+",我为小云翰点赞\n    ")])]),t._v(" "),i("div",{staticClass:"form-box"},[i("div",{staticClass:"ipt-wrap"},[t._m(0),t._v(" "),i("input",{staticClass:"ipt",attrs:{type:"text",placeholder:"请填写联系人姓名"},on:{input:function(e){t.changeInput(e.target.value,"real_name")}}})]),t._v(" "),i("div",{staticClass:"ipt-wrap"},[t._m(1),t._v(" "),i("input",{staticClass:"ipt",attrs:{type:"text",placeholder:"请填写联系电话"},on:{input:function(e){t.changeInput(e.target.value,"phone")}}})]),t._v(" "),i("button",{staticClass:"submit-btn",on:{click:t.submit}},[t._v("立即提交")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"label"},[this._v("\n        联系人\n        "),e("i",[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"label"},[this._v("\n        联系电话\n        "),e("i",[this._v("*")])])}]};var l=i("VU/8")(o,r,!1,function(t){i("vVIo")},"data-v-7093ef1f",null);e.default=l.exports},pCav:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("gyMJ"),a={name:"",props:{},data:function(){return{msg:"宣传页",org_name:"",fullname:"",telephone:"",api_flag:!1,name:"",action:!1,timer:[]}},methods:{submitInfo:function(){var t=this;if(""==this.org_name)return this.$toast.fail("请填写机构名称"),!1;if(""==this.fullname)return this.$toast.fail("请填写联系人"),!1;if(11!=this.telephone.length)return this.$toast.fail("请正确填写手机号码"),!1;if(this.api_flag)return this.$toast.fail("请勿重复点击"),!1;this.api_flag=!0;var e={org_name:this.org_name,fullname:this.fullname,telephone:this.telephone,source:"H5宣传页",source_id:this.$route.query.source_id||"0"};Object(s.b)(e).then(function(e){t.$toast.success("提交成功"),t.api_flag=!1,t.fullname="",t.telephone="",t.org_name=""}).catch(function(e){t.$toast.fail(e),t.api_flag=!1})},addCount:function(){var t=this;Object(s.c)({source_id:this.$route.query.source_id||"0"}).then(function(e){t.name=e.data.real_name}).catch(function(t){return console.log(t)})},toShare:function(){this.$router.push({path:"/publicity/like",query:{source_id:this.$route.query.source_id||"0"}})},scroll:function(){var t=this;this.timer[0]=setTimeout(function(){t.action=!0,clearTimeout(t.timer[2]),t.timer[1]=setTimeout(function(){t.action=!1},1e3),t.timer[2]=setTimeout(function(){clearTimeout(t.timer[0]),clearTimeout(t.timer[1]),t.scroll()},2e3)},1e3)}},mounted:function(){var t={title:"小云翰：教育培训机构专用的盈利增长管理系统",link:window.location.href,imgUrl:i("zA5V"),desc:"解决3大难题：招生、续费、转介绍"};this.$sharePage(t),this.addCount(),this.scroll()},destroyed:function(){clearTimeout(this.timer[0]),clearTimeout(this.timer[1]),clearTimeout(this.timer[2])}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"publicity-page"},[i("div",{staticClass:"like-box"},[i("h4",{staticClass:"title"},[t._v("小云翰：我们获奖了——微信支付行业创新大赛奖>>")]),t._v(" "),i("div",{staticClass:"scroll-wrap"},[i("p",{class:["like-show",t.action?"action":""]},[i("i",{staticClass:"iconfont icon-praise_fill"}),t._v("\n        我是"+t._s(t.name)+",我为小云翰点赞\n      ")]),t._v(" "),i("p",{class:["like-show",t.action?"action":""]},[i("i",{staticClass:"iconfont icon-praise_fill"}),t._v("\n        我是"+t._s(t.name)+",我为小云翰点赞\n      ")])])]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"input-wrap"},[i("p",{staticClass:"input-tips"},[t._v("——提交信息，领取完整运营方案，免费试用——")]),t._v(" "),i("div",{staticClass:"input-inner"},[t._m(1),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.org_name,expression:"org_name"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.org_name},on:{input:function(e){e.target.composing||(t.org_name=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"input-inner"},[t._m(2),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.fullname,expression:"fullname"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.fullname},on:{input:function(e){e.target.composing||(t.fullname=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"input-inner"},[t._m(3),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.telephone,expression:"telephone"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.telephone},on:{input:function(e){e.target.composing||(t.telephone=e.target.value)}}})]),t._v(" "),i("button",{staticClass:"btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.submitForm(e)}}},[t._v("立即提交")])]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),i("div",{staticClass:"input-wrap"},[i("p",{staticClass:"input-tips"},[t._v("——提交信息，领取完整运营方案，免费试用——")]),t._v(" "),i("div",{staticClass:"input-inner"},[t._m(7),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.org_name,expression:"org_name"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.org_name},on:{input:function(e){e.target.composing||(t.org_name=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"input-inner"},[t._m(8),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.fullname,expression:"fullname"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.fullname},on:{input:function(e){e.target.composing||(t.fullname=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"input-inner"},[t._m(9),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.telephone,expression:"telephone"}],staticClass:"input",attrs:{type:"text",maxlength:"11"},domProps:{value:t.telephone},on:{input:function(e){e.target.composing||(t.telephone=e.target.value)}}})]),t._v(" "),i("button",{staticClass:"btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.submitForm(e)}}},[t._v("立即提交")])]),t._v(" "),i("div",{staticClass:"share-box",on:{click:t.toShare}},[i("i",{staticClass:"iconfont icon-praise_fill"})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-wrap"},[e("img",{staticClass:"bg-1",attrs:{src:"http://image.haoxuezhuli.com/saas-dir/publicity_01.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"input-title"},[this._v("\n        机构名称\n        "),e("span",{staticStyle:{color:"#eb4646"}},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"input-title"},[this._v("\n        联系人\n        "),e("span",{staticStyle:{color:"#eb4646"}},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"input-title"},[this._v("\n        联系电话\n        "),e("span",{staticStyle:{color:"#eb4646"}},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-wrap"},[e("img",{staticClass:"bg-3",attrs:{src:"http://image.haoxuezhuli.com/saas-dir/publicity_03.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-wrap"},[e("img",{staticClass:"bg-4",attrs:{src:"http://image.haoxuezhuli.com/saas-dir/publicity_04.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-wrap"},[e("img",{staticClass:"bg-5",attrs:{src:"http://image.haoxuezhuli.com/saas-dir/publicity_05.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"input-title"},[this._v("\n        机构名称\n        "),e("span",{staticStyle:{color:"#eb4646"}},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"input-title"},[this._v("\n        联系人\n        "),e("span",{staticStyle:{color:"#eb4646"}},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"input-title"},[this._v("\n        联系电话\n        "),e("span",{staticStyle:{color:"#eb4646"}},[this._v("*")])])}]};var o=i("VU/8")(a,n,!1,function(t){i("qxwt")},"data-v-2c64fe52",null);e.default=o.exports},qxwt:function(t,e){},vVIo:function(t,e){},zA5V:function(t,e,i){t.exports=i.p+"static/img/yunhan-logo.b69dced.png"}});
//# sourceMappingURL=0.533645cca5eea09aa657.js.map