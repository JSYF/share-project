webpackJsonp([7],{"0ggV":function(t,e){},Hubj:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("gyMJ"),i={name:"",props:{},data:function(){return{msg:"宣传页",org_name:"",fullname:"",telephone:"",api_flag:!1,name:"",action:!1,timer:[],source_id:""}},created:function(){for(var t=window.location.search.slice(1).split("&"),e=0;e<t.length;e++)if(t[e].includes("source_id")){this.source_id=t[e].split("=")[1];break}},methods:{submitForm:function(){var t=this;if(""==this.org_name)return this.$toast.fail("请填写机构名称"),!1;if(""==this.fullname)return this.$toast.fail("请填写联系人"),!1;if(11!=this.telephone.length)return this.$toast.fail("请正确填写手机号码"),!1;if(this.api_flag)return this.$toast.fail("请勿重复点击"),!1;this.api_flag=!0;var e={org_name:this.org_name,fullname:this.fullname,telephone:this.telephone,source:"H5章鱼校长",source_id:this.source_id||"0"};Object(s.d)(e).then(function(e){t.$toast.success("提交成功"),t.api_flag=!1,t.fullname="",t.telephone="",t.org_name=""}).catch(function(e){t.$toast.fail(e),t.api_flag=!1})},addCount:function(){var t=this;Object(s.e)({source_id:this.$route.query.source_id||"0"}).then(function(e){t.name=e.data.real_name}).catch(function(t){return console.log(t)})}},mounted:function(){var t={title:"章鱼校长，让办学更简单的教务信息化系统",link:window.location.href,imgUrl:"https://image.yunhan100.com/wap-index/saas_img_4.png",desc:"好用、易用、能落地，还包含能招生的家校互动小程序"};this.$sharePage(t),this.addCount()}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"publicity-page"},[t._m(0),t._v(" "),a("div",{staticClass:"input-wrap"},[a("p",{staticClass:"input-tips"},[t._v("——提交信息，免费体验——")]),t._v(" "),a("div",{staticClass:"input-inner"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.org_name,expression:"org_name"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.org_name},on:{input:function(e){e.target.composing||(t.org_name=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-inner"},[t._m(2),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fullname,expression:"fullname"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.fullname},on:{input:function(e){e.target.composing||(t.fullname=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-inner"},[t._m(3),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.telephone,expression:"telephone"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.telephone},on:{input:function(e){e.target.composing||(t.telephone=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.submitForm(e)}}},[t._v("立即提交")])]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("div",{staticClass:"input-wrap"},[a("p",{staticClass:"input-tips"},[t._v("——提交信息，免费体验——")]),t._v(" "),a("div",{staticClass:"input-inner"},[t._m(8),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.org_name,expression:"org_name"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.org_name},on:{input:function(e){e.target.composing||(t.org_name=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-inner"},[t._m(9),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fullname,expression:"fullname"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.fullname},on:{input:function(e){e.target.composing||(t.fullname=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-inner"},[t._m(10),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.telephone,expression:"telephone"}],staticClass:"input",attrs:{type:"text",maxlength:"11"},domProps:{value:t.telephone},on:{input:function(e){e.target.composing||(t.telephone=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.submitForm(e)}}},[t._v("立即提交")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-wrap"},[e("img",{staticClass:"bg-1",attrs:{src:"https://image.yunhan100.com/wap-index/saas_img.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"input-title"},[this._v("\n        机构名称\n        "),e("span",{staticStyle:{color:"#eb4646"}},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"input-title"},[this._v("\n        联系人\n        "),e("span",{staticStyle:{color:"#eb4646"}},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"input-title"},[this._v("\n        联系电话\n        "),e("span",{staticStyle:{color:"#eb4646"}},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-wrap"},[e("img",{staticClass:"bg-3",attrs:{src:"https://image.yunhan100.com/wap-index/saas_img_1.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-wrap"},[e("img",{staticClass:"bg-4",attrs:{src:"https://image.yunhan100.com/wap-index/saas_img_2.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-wrap"},[e("img",{staticClass:"bg-5",attrs:{src:"https://image.yunhan100.com/wap-index/saas_img_3.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-wrap"},[e("img",{staticClass:"bg-6",attrs:{src:"https://image.yunhan100.com/wap-index/saas_img_4.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"input-title"},[this._v("\n        机构名称\n        "),e("span",{staticStyle:{color:"#eb4646"}},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"input-title"},[this._v("\n        联系人\n        "),e("span",{staticStyle:{color:"#eb4646"}},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"input-title"},[this._v("\n        联系电话\n        "),e("span",{staticStyle:{color:"#eb4646"}},[this._v("*")])])}]};var r=a("VU/8")(i,n,!1,function(t){a("0ggV")},"data-v-59b3290e",null);e.default=r.exports}});
//# sourceMappingURL=7.3817f7f4077a6a875980.js.map