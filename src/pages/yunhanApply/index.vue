<template>
  <div class="submit-info-wrapper">
    <img src="https://image.haoxuezhuli.com/saas-dir/yunhan_apply.png">
    <div class="submit-wrapper">
      <div class="ipt-wrap">
        <div class="label">机构名称</div>
        <input
          class="ipt"
          @input="changeInput($event.target.value, 'org_name')"
          type="text"
          placeholder="请填写机构名称"
        >
      </div>
      <div class="ipt-wrap">
        <div class="label">联系人</div>
        <input
          class="ipt"
          @input="changeInput($event.target.value, 'name')"
          type="text"
          placeholder="请填写联系人姓名"
        >
      </div>
      <div class="ipt-wrap">
        <div class="label">联系电话</div>
        <input
          class="ipt"
          @input="changeInput($event.target.value, 'phone')"
          type="text"
          placeholder="请填写联系电话"
        >
      </div>
      <div class="textarea-label">其他</div>
      <textarea
        class="textarea"
        @input="changeInput($event.target.value, 'note')"
        placeholder="如有其他信息备注请填写"
      ></textarea>
      <div @click="submitInfo" class="button-wrapper btn-bg">提交</div>
    </div>
  </div>
</template>

<script>
import { postUse } from "@/api/index";
export default {
  data() {
    return {
      org_name: "",
      name: "",
      phone: "",
      note: ""
    };
  },
  methods: {
    changeInput(value, key) {
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
        source: "宣传册"
      };
      postUse(obj)
        .then(res => {
          this.$toast.success("申请成功");
        })
        .catch(e => {
          this.$toast.fail(e);
        });
    }
  }
};
</script>

<style scoped lang="stylus">
.submit-info-wrapper
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding-bottom:100px;
  box-sizing border-box;
img
  width: 100%;
  background-color: #fff;
.ipt-wrap
  padding: 0 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f6f6f6;
  height: 100px;

  font-family: SourceHanSansCN-Regular;
  font-size: 28px;
  color: #212121;
  .label
    width: 200px;
  .ipt
    flex: 1;
    height 100px;
.textarea-label
  padding: 0 40px;
  border-top: 20px solid #f6f6f6;
  height: 100px;
  font-size: 28px;
  line-height: 100px;
.textarea
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
  min-height: 200px;
  font-size: 28px;
  border: none;
  resize: none;
  outline: none;
.other-wrapper
  font-family: SourceHanSansCN-Regular;
  padding: 0 40px;
  font-size: 28px;
  color: #212121;
.button-wrapper
  height: 100px;
  line-height: 100px;
  text-align: center;
  position fixed;
  bottom:0;
  width:100%;
  font-family: SourceHanSansCN-Medium;
  font-size: 36px;
  color: #ffffff;
.btn-bg
  background: linear-gradient(45deg, #5b8cff, #46a8ff) !important;
</style>
