<template>
  <div class="page-show-data">
    <div :class="['error-tips',showError ? 'show':'']">连接已中断，请刷新</div>
    <div class="org-title">{{configData.name}} {{configData.time}}报名</div>
    <div class="title">数据平台</div>
    <div class="num-box red">
      <div class="box-title">报名科数</div>
      <div class="box-value">{{subjects}}</div>
    </div>
    <div class="num-box orange" v-if="configData.showPrice">
      <div class="box-title">成交金额</div>
      <div class="box-value">{{total}}</div>
    </div>
    <div class="num-box blue" v-if="configData.showMul">
      <div class="box-title">多科率</div>
      <div class="box-value">{{duokelv}} %</div>
    </div>
    <div class="rank-item">
      <div class="rank-title">校区排行榜</div>
      <div
        :class="['list-item',index>=3 && school_range.length-1 === index ? 'no-line':'']"
        v-for="(item,index) in school_range"
        :key="index"
      >
        <span class="rank">{{index+1}}</span>
        <span class="name">{{item.name}}</span>
        <span class="value">{{item.subject}}科</span>
      </div>
    </div>
    <div class="rank-item">
      <div class="rank-title">报名科目数对比</div>
      <div
        :class="['list-item',index>=3 && subject_range.length-1 === index ? 'no-line':'']"
        v-for="(item,index) in subject_range"
        :key="index"
      >
        <span class="rank">{{index+1}}</span>
        <span class="name">{{item.name}}</span>
        <span class="value">{{item.nums}}科</span>
      </div>
    </div>
    <div class="support-tips">@由小云翰提供技术支持</div>
  </div>
</template>

<script>
import jsSha1 from "js-sha1";
import orgData from "@/_data/org";
export default {
  data() {
    return {
      duokelv: 0,
      school_range: [],
      total: 0,
      students: "",
      subjects: 0,
      subject_range: [],
      configData: {},
      times: 0,
      ws: null,
      timer: null
    };
  },
  created() {
    let query = this.$route.query;
    if (query.org) {
      let item = orgData.get(query.org);
      if (item) this.configData = item;
    }
    console.log("this.", this.configData);
    this.websockFunc();
  },
  methods: {
    websockFunc() {
      if (!this.configData.ws) return;
      let ws = new WebSocket(this.configData.ws);
      ws.onmessage = evt => {
        try {
          let data = JSON.parse(evt.data);
          console.log("data", data);
          this.school_range = data.school_range;
          this.duokelv = data.duokelv;
          this.subjects = data.subjects;
          this.subject_range = data.subject_range;
          this.times = 0;
        } catch (error) {
          this.times++;
          console.log("error", erro);
        }
      };
      ws.onclose = evt => {
        console.log("close", evt, new Date().getTime());
        this.times++;
        if (this.times < 10) {
          setTimeout(() => {
            this.websockFunc();
          }, 5000);
        }
      };
      ws.onerror = evt => {
        this.times++;
        if (this.times < 10) {
          setTimeout(() => {
            this.websockFunc();
          }, 5000);
        }
      };
      this.ws = ws;
      this.setTimer();
    },
    setTimer() {
      this.timer = setInterval(() => {
        if (this.ws.readyState === 1) {
          this.ws.send(JSON.stringify({name:this.configData.name,time:this.configData.time}))
        } else if (this.times >= 10) {
          clearInterval(this.timer);
        }
      }, 3000);
    }
  },
  computed:{
    showError(){
      return this.times >= 10 ? true :false
    }
  },
  destroyed() {
    clearInterval(this.timer);
    this.ws.close();
  }
};
</script>


<style lang="stylus" scoped>
.page-show-data
  min-height: 100%;
  background: #354678;
  width: 100%;
  padding: 90px 40px 65px;
  box-sizing: border-box;
  .org-title
    font-size: 52px;
    line-height: 54px;
    color: #fff;
  .title
    font-size: 72px;
    line-height: 74px;
    color: #fff;
    margin-top: 18px;
    margin-bottom: 75px;
  .num-box
    width: 100%;
    height: 280px;
    border: 2px solid #fff;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 30px;
    .box-title
      height: 80px;
      background-color: #fff;
      text-align: center;
      font-size: 40px;
      line-height: 80px;
      letter-spacing: 1px;
    .box-value
      height: 200px;
      line-height: 200px;
      font-size: 72px;
      color: #fff;
      text-align: center;
    &.red
      .box-title
        color: #e74646;
      .box-value
        background-color: #e74646;
    &.orange
      .box-title
        color: #f0a748;
      .box-value
        background-color: #f0a748;
    &.blue
      .box-title
        color: #46a1e7;
      .box-value
        background-color: #46a1e7;
  .rank-item
    border-radius: 20px;
    overflow: hidden;
    border: 2px solid #fff;
    margin-bottom: 30px;
    min-height: 400px;
    .rank-title
      background-color: #fff;
      height: 80px;
      color: #345678;
      text-align: center;
      line-height: 80px;
      font-size: 40px;
    .list-item
      height: 80px;
      border-bottom: 2px solid #fff;
      width: 100%;
      box-sizing: border-box;
      line-height: 80px;
      padding: 0 43px;
      color: #fff;
      display: flex;
      font-size: 32px;
      &.no-line
        border-bottom: 0;
      .rank
        flex: 0 0 40px;
        margin-right: 40px;
      .name
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      .value
        flex: 0 0 150px;
        margin-left: 20px;
        text-align: right;
  .support-tips
    font-size: 24px;
    color: #fff;
    margin-top: 60px;
    text-align: center;
  .error-tips
    position fixed;
    height:60px;
    top:0;
    left:0;
    background-color:#faecd8;
    width:100%;
    line-height 60px;
    padding:0 20px;
    color:#e6a23c;
    display none;
    &.show
      display block;
</style>
