<template>
  <div class="kehan-index-wrap">
    <div class="img-wrapper">
      <img class="bg" src="@/assets/img/report/bg-r.png">
      <img class="bg-footer" src="@/assets/img/report/bg-0-1.png">
    </div>
    <div class="report-info-wrap">
      <div class="report-header">
        <div class="report-title"></div>
        <span class="report-tips">请输入学生姓名+绑定手机号码后4位(如，李明6686)</span>
        <input
          @input="changeInput($event,'content')"
          class="report-input"
          type="text"
          placeholder="学生姓名+绑定手机号码后4位"
        >
        <!--<div class="report-input" @click.stop.prevent="openPicker"><span>{{current_org_name?current_org_name:'请选择分校'}}</span><span class="iconfont icon-unfold"></span></div>-->
        <button class="report-btn" @click.stop.prevent="creatReport"></button>
      </div>

      <div class="report-footer">
        <img class="wx-qr" src="@/assets/img/report/qr.png">
        <span class="qr-tips">长按关注家长消息，回复学生姓名+绑定手机号码后4位</span>
        <span class="qr-tips">也可以生成学期报告。永久保存，长期有效。</span>
      </div>
    </div>
    <van-actionsheet v-model="showPicker" :title="'你有'+choose_org_list.length+'份学习报告可查看' ">
      <ul class="org-list-wrap">
        <li
          v-for="(item,index) in choose_org_list"
          :key="index"
          @click.stop.prevent="goPage(item.crm_stu_id)"
        >
          <p>{{item.org_name}}</p>
        </li>
      </ul>
    </van-actionsheet>
  </div>
</template>

<script>
import { getReport,getOrgList } from "@/api/index";
import { Actionsheet } from "vant";
export default {
  name: "",
  props: {},
  data() {
    return {
      msg: "Welcome App",

      showPicker: false,

      content: "", //输入内容

      choose_org_list: []
    };
  },
  components: {
    "van-actionsheet": Actionsheet
  },
  methods: {
    // 注册方法
    changeInput(e, type) {
      let value = "";
      switch (type) {
        case "content":
          value = e.target.value;
          break;
        case "org_id":
          this.current_org_name = e;
          let index = this.$refs.picker.getIndexes()[0]; //index
          value = this.org_list[index].org_id;
          this.openPicker();
          break;

        default:
          break;
      }
      this[type] = value;
    },

    creatReport() {
      if (!this.content) {
        this.$toast.fail("请输入内容");
        return;
      }
      // 匹配输入格式
      let reg = /^.+\d{4}$/;
      if (!reg.test(this.content)) {
        this.$toast.fail("输入格式有误");
        return;
      }

      this.getQuarterReport(this.content);
    },

    getQuarterReport(student_phone) {
      getReport({
        student_phone
      })
        .then(res => {
          data = res.data;
          if (data.choose_org_list && data.choose_org_list.length > 1) {
            this.choose_org_list = data.choose_org_list;
            this.openPicker();
            return;
          }
          this.goPage();
        })
        .catch(e => {
          this.$toast.fail(e);
        });
    },

    goPage(crm_stu_id) {
      let query = {
        content: encodeURIComponent(this.content)
      };
      if (crm_stu_id) {
        query.crm_stu_id = encodeURIComponent(crm_stu_id);
      }
      this.$router.push({ path: "/report/details", query });
    },

    // 分校列表
    getOrgList() {
      let org_name = this.$route.query.org_name || "";
      getOrgList({ org_name })
        .then(res => {
          let data = res.data;
          let org_list = data.org_list;
          let org_list_picker = [];
          for (let i = 0, len = org_list.length; i < len; i++) {
            org_list_picker.push(org_list[i].org_name);
          }
          this.org_list = org_list;
          this.org_list_picker = org_list_picker;
        })
        .catch(e => {
          this.$toast.fail(e);
        });
    },

    openPicker() {
      this.showPicker = !this.showPicker;
    }
  },
  mounted() {
    let obj = {
      title: "学习报告生成平台",
      link: window.location.href,
      imgUrl: "https://image.haoxuezhuli.com/saas-dir/2019-06/1559722801958-618114.png",
      desc: "请输入学生姓名+绑定手机号码后4位（如，李明6686）"
    };
    this.$sharePage(obj);
  },
  deactivated() {
    this.$destroy();
  }
};
</script>

<style scoped lang="stylus">
.kehan-index-wrap, .report-info-wrap
  height: 100%;
  .report-header
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    padding-top: 200px;
    box-sizing: border-box;
    margin-bottom: 400px;
    .report-title
      height: 64px;
      width: 514px;
      background-image: url('../../assets/img/report/text-1.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin-bottom: 30px;
    .report-tips
      font-family: PingFang-SC-Medium;
      font-size: 24px;
      line-height: 1;
      color: #d9646b;
      margin-bottom: 30px;
    .report-input
      width: 500px;
      height: 84px;
      line-height: 84px;
      text-align: center;
      background-color: rgba(217, 100, 107, 0.5);
      font-size: 28px;
      color: #fff;
      margin-bottom: 20px;
      .icon-unfold
        line-height: 1;
        font-size: 32px;
        margin-left: 10px;
      &::-webkit-input-placeholder
        color: #fff;
        opacity: 0.5;
    .report-btn
      width: 528px;
      height: 112px;
      background-image: url('../../assets/img/report/btn-1.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
  .report-footer
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    .wx-qr
      width: 172px;
      height: 172;
      margin-bottom: 30px;
    .qr-tips
      font-family: PingFang-SC-Heavy;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 1.5;
      color: #ffffff;
.org-list-wrap
  max-height: 500px;
  overflow-y: auto;
  li
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 28px;
    color: #333;
    border-bottom: 1px solid #f6f6f6;
.img-wrapper
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: block;
  z-index: -1;
  .bg
    position: absolute;
    width: 100%;
    height: auto;
    z-index: -1;
  .bg-footer
    position: absolute;
    width: 100%;
    height: auto;
    z-index: 0;
    left: 0;
    bottom: 0;
</style>
