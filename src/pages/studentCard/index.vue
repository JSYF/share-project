<template>
  <div class="publicity-page">
    <div class="bg-wrap">
      <img class="bg-1" src="../../assets/img/student/head.png">
    </div>
    <div class="input-wrap">
      <p class="input-tips">——提交信息，免费试用——</p>
      <div class="input-inner">
        <p class="input-title">
          机构名称
          <span style="color:#eb4646;">*</span>
        </p>
        <input class="input" type="text" v-model="org_name">
      </div>
      <div class="input-inner">
        <p class="input-title">
          联系人
          <span style="color:#eb4646;">*</span>
        </p>
        <input class="input" type="text" v-model="fullname">
      </div>
      <div class="input-inner">
        <p class="input-title">
          联系电话
          <span style="color:#eb4646;">*</span>
        </p>
        <input class="input" type="text" v-model="telephone">
      </div>
      <button class="btn" @click.stop.prevent="submitForm">立即提交</button>
    </div>
    <div class="bg-wrap">
      <img class="bg-3" src="../../assets/img/student/bg01.png">
    </div>
    <div class="bg-wrap">
      <img class="bg-4" src="../../assets/img/student/bg02.png">
    </div>
    <div class="bg-wrap">
      <img class="bg-5" src="../../assets/img/student/foot.png">
    </div>

    <div class="input-wrap">
      <p class="input-tips">——提交信息，免费试用——</p>
      <div class="input-inner">
        <p class="input-title">
          机构名称
          <span style="color:#eb4646;">*</span>
        </p>
        <input class="input" type="text" v-model="org_name">
      </div>
      <div class="input-inner">
        <p class="input-title">
          联系人
          <span style="color:#eb4646;">*</span>
        </p>
        <input class="input" type="text" v-model="fullname">
      </div>
      <div class="input-inner">
        <p class="input-title">
          联系电话
          <span style="color:#eb4646;">*</span>
        </p>
        <input class="input" type="text" v-model="telephone" maxlength="11">
      </div>
      <button class="btn" @click.stop.prevent="submitForm">立即提交</button>
    </div>
  </div>
</template>
<script >
  import { postUse, postUseCount } from "@/api/index";
  export default {
    name: "",
    props: {},
    data() {
      return {
        msg: "宣传页",
        org_name: "",
        fullname: "",
        telephone: "",
        api_flag: false,
        name: "",
        action: false,
        timer: []
      };
    },
    methods: {
      toNav(){
        window.location.href="https://mp.weixin.qq.com/s?__biz=Mzg4MzAwNjU0OA==&mid=2247484230&idx=1&sn=d869e60a5934a8e809fc7a5b08959453&chksm=cf4f4e7df838c76b56933747d7fa269bc3906274efcddbf278d815abafd7f1558911f99b6a45&token=782520363&lang=zh_CN#rd"
      },
      submitForm() {
        if (this.org_name == "") {
          this.$toast.fail("请填写机构名称");
          return false;
        }
        if (this.fullname == "") {
          this.$toast.fail("请填写联系人");
          return false;
        }
        if (this.telephone.length != 11) {
          this.$toast.fail("请正确填写手机号码");
          return false;
        }
        if (this.api_flag) {
          this.$toast.fail("请勿重复点击");
          return false;
        }
        this.api_flag = true;
        let obj = {
          org_name: this.org_name, //机构名称
          fullname: this.fullname, //联系人
          telephone: this.telephone, //  联系电话
          source: "H5宣传页", //来源
          source_id: this.$route.query.source_id || "0"
        };
        postUse(obj)
          .then(res => {
            this.$toast.success("提交成功");
            this.api_flag = false;
            this.fullname = "";
            this.telephone = "";
            this.org_name = "";
          })
          .catch(e => {
            this.$toast.fail(e);
            this.api_flag = false;
          });
      },

      addCount() {
        postUseCount({
          source_id: this.$route.query.source_id || "0"
        })
          .then(res => {
            this.name = res.data.real_name;
          })
          .catch(e => console.log(e));
      },
      toShare() {
        this.$router.push({
          path: "/publicity/like",
          query: { source_id: this.$route.query.source_id || "0" }
        });
      },
      scroll() {
        this.timer[0] = setTimeout(() => {
          this.action = true;
          clearTimeout(this.timer[2]);
          this.timer[1] = setTimeout(() => {
            this.action = false;
          }, 1000);
          this.timer[2] = setTimeout(() => {
            clearTimeout(this.timer[0]);
            clearTimeout(this.timer[1]);
            this.scroll();
          }, 2000);
        }, 1000);
      }
    },
    mounted() {
      let obj = {
        title: "能招生的家校小程序，增长教学口碑",
        link: window.location.href,
        imgUrl: "https://image.haoxuezhuli.com/saas-dir/yunhan-logo.png",
        desc: "外化教学成果，让家长乐于分享"
      };
      this.$sharePage(obj);
      this.addCount();
      this.scroll();
    },
    destroyed() {
      clearTimeout(this.timer[0]);
      clearTimeout(this.timer[1]);
      clearTimeout(this.timer[2]);
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @keyframes toBig
    form
      font-size: 48px;
    to
      font-size: 60px;
  .bg-wrap
    width: 100%;
    height: auto;
    background-color: #38388b;
    img
      width 100%;
    .bg-1
      height: 574px;
    .bg-3
      height: 1204px;
    .bg-4
      height: 1028px;
    .bg-5
      height: 1072px;
  .input-wrap
    background-color: #fff;
    padding: 50px 35px 70px;
    .input-tips
      font-size: 24px;
      color: #333;
      margin-bottom: 40px;
      text-align: center;
    .input-inner
      margin-bottom: 20px;
      .input-title
        font-size: 28px;
        color: #999;
        margin-bottom: 20px;
      .input
        width: 100%;
        height: 80px;
        line-height: 80px;
        padding: 0 20px;
        box-sizing: border-box;
        border: 2px solid #e5e5e5; /* no */
        border-radius: 5px;
    .btn
      margin-top: 40px;
      font-size: 32px;
      color: #fff;
      text-align: center;
      width: 100%;
      height: 95px;
      line-height: 95px;
      background-color: #4e4ea5;
      border-radius: 5px;
  .share-box
    position: fixed;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #f94575;
    box-shadow: 0px 0px 10px 0px rgba(31, 32, 31, 0.2);
    .iconfont
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      font-size: 48px;
      color: #fff;
      animation: toBig 1s linear infinite;
    &:hover
      opacity: 0.8;
  .like-box
    text-align: center;
    height: 110px;
    padding-top: 20px;
    box-sizing: border-box;
    .title
      margin: 0 auto;
      width: 591px;
      height: 38px;
      background-color: rgba(249, 69, 117, 0.1);
      border-radius: 19px;
      font-size: 24px;
      color: #f94575;
      line-height: 36px;
      text-align: center;
    .scroll-wrap
      position: relative;
      margin-top: 12px;
      overflow: hidden;
      height: 32px;
    .like-show
      display: flex;
      justify-content: center;
      font-size: 24px;
      padding-bottom: 12px;
      &.action
        transform: translateY(-100%);
        transition: 1s all;
      .iconfont
        align-self: center;
        flex: 0 0 auto;
        font-size: 18px;
        color: #f94575;
        width: 33px;
        height: 22px;
        background-color: rgba(249, 69, 117, 0.1);
        margin-right: 10px;
        position: relative;
        &:before
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
</style>
