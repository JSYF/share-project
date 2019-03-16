<template>
  <div>
    <div class="resulte-box">
      <h4 class="title">效果预览</h4>
      <p class="share-show">
        <i class="iconfont icon-praise_fill"></i>
        我是{{showText}},我为小云翰点赞
      </p>
    </div>
    <div class="form-box">
      <div class="ipt-wrap">
        <div class="label">
          联系人
          <i>*</i>
        </div>
        <input
          class="ipt"
          @input="changeInput($event.target.value, 'real_name')"
          type="text"
          placeholder="请填写联系人姓名"
        >
      </div>
      <div class="ipt-wrap">
        <div class="label">
          联系电话
          <i>*</i>
        </div>
        <input
          class="ipt"
          @input="changeInput($event.target.value, 'phone')"
          type="text"
          placeholder="请填写联系电话"
        >
      </div>
      <button class="submit-btn" @click="submit">立即提交</button>
    </div>
  </div>
</template>


<script>
import { toLike } from "@/api/index";
export default {
  data() {
    return {
      form: {
        real_name: "",
        phone: ""
      }
    };
  },
  methods: {
    changeInput(val, type) {
      this.form[type] = val;
    },
    submit() {
      if (!this.form.real_name) {
        this.$toast.fail("请输入联系人");
        return;
      }
      if (this.form.phone.length != 11) {
        this.$toast.fail("请输入正确的手机号码");
        return;
      }
      let obj = Object.assign({}, this.form, {
        source_id: this.$route.query.source_id
      });
      toLike(obj)
        .then(res => {
          console.log(res);
          this.$toast.success("点赞成功");
          setTimeout(() => {
            this.$router.push({
              path: "/publicity",
              query: { source_id: res.data.source_id }
            });
          }, 500);
        })
        .catch(e => {
          console.log("error", e);
          this.$toast.fail(e);
        });
    }
  },
  computed: {
    showText() {
      return this.form.real_name ? this.form.real_name : "XXX";
    }
  }
};
</script>

<style lang="stylus" scoped>
.title
  font-size: 28px;
  color: #999;
  text-align: center;
  margin-top: 83px;
.share-show
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 40px;
  font-size: 24px;
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
.ipt-wrap
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  font-family: SourceHanSansCN-Regular;
  font-size: 28px;
  color: #999999;
  margin-bottom: 22px;
  .label
    margin-bottom: 23px;
    i
      color: #eb4646;
  .ipt
    flex: 1;
    height: 83px;
    border: 2px solid #e5e5e5;
    padding: 0 25px;
.submit-btn
  width: 680px;
  border-radius: 5px;
  background-color: #4e4ea5;
  height: 95px;
  font-size: 33px;
  color: #fff;
  margin: 40px auto 0;
  display: block;
  &:hover
    opacity: 0.8;
</style>

