<template>
  <div class="apply-page">
    <div class="apply-wrap">
      <div class="apply-inner">
        <h3>学员卡</h3>
        <p class="info">让学习更有趣</p>
        <input
          @input="changeInput($event.target.value, 'org_name')"
          type="text"
          placeholder="请填写机构名称"
        >
        <input @input="changeInput($event.target.value, 'name')" type="text" placeholder="请填写联系人姓名">
        <input @input="changeInput($event.target.value, 'phone')" type="text" placeholder="请填写联系电话">
        <textarea @input="changeInput($event.target.value, 'note')" placeholder="如有其他信息备注请填写"></textarea>
        <button class="bg-heart" @click.prevent="submitInfo">确认提交</button>
      </div>
    </div>
  </div>
</template>
<script>
import { postUse } from "@/api/index";
export default {
  name: "",
  props: {},
  data() {
    return {
      msg: "apply-page",
      org_name: "",
      name: "",
      phone: "",
      note: ""
    };
  },
  methods: {
    // 注册方法
    changeInput(value, key) {
      // console.log(value,key);
      this[key] = value;
    },

    submitInfo() {
      let org_name = this.org_name,
        name = this.name,
        phone = this.phone,
        note = this.note;
      if (!org_name || !name || phone.length != 11) {
        let prompt_text = "";
        if (!org_name) {
          prompt_text = "请填写机构名称";
        } else if (!name) {
          prompt_text = "请填写联系人姓名";
        } else if (phone.length != 11) {
          prompt_text = "请填写正确联系电话";
        }
        this.$toast.fail(prompt_text);
        return;
      }
      let obj = {
        org_name: org_name,
        fullname: name,
        telephone: phone,
        content: note,
        source: "学员卡-H5"
      };
      postUse(obj)
        .then(res => {
          this.$toast.success("申请成功");
        })
        .catch(e => {
          this.$toast.fail(e);
        });
    },
    sharePage() {
      wx.ready(() => {
        console.log("ready");
        wx.onMenuShareTimeline({
          title: "学员卡—强化教学效果，让学习更有趣", // 分享标题
          link: "https://www.yunhan100.com/wap", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: "https://image.haoxuezhuli.com/wap-index/share.png", // 分享图标
          success: function() {
            // 用户点击了分享后执行的回调函数
          }
        });

        wx.onMenuShareAppMessage({
          title: "学员卡—强化教学效果，让学习更有趣", // 分享标题
          desc:
            "给学员和家长更温暖、更高品质的教学服务，用数据量化老师的服务质量。", // 分享描述
          link: "https://www.yunhan100.com/wap", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: "https://image.haoxuezhuli.com/wap-index/share.png", // 分享图标
          type: "", // 分享类型,music、video或link，不填默认为link
          dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
          success: function() {
            // 用户点击了分享后执行的回调函数
          }
        });
      });
    }
  },
  mounted() {
    this.sharePage();
  }
};
</script>
<style scoped lang="stylus">
.apply-page
  min-height: 100%;
  background-color: #a75762;
  background-image: url('https://image.haoxuezhuli.com/wap-index/sq.jpg');
  background-size: 100% auto;
  background-position 0 bottom;
  .apply-wrap
    padding: 120px 40px 0;
  .apply-inner
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 4px;
    padding: 60px 0 120px;
    h3, .info
      font-size: 60px;
      color: #333;
      font-weight: 600;
      line-height: 1.5;
    .info
      font-weight: 100;
      margin-bottom: 60px;
    input, textarea
      width: 500px;
      height: 80px;
      line-height: 80px;
      padding: 0 20px;
      font-size: 28px;
      color: #333;
      box-sizing: border-box;
      margin-bottom: 20px;
      border-radius: 4px;
      border: 2px solid #eee; /* no */
      font-family: SourceHanSansCN-Regular;
    textarea
      height: 130px;
      line-height: 1.5;
      padding: 20px;
      margin-bottom: 60px;
      resize: none;
    button
      width: 500px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      border-radius: 4px;
      font-size: 32px;
      color: #fff;
</style>