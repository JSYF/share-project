<template>
  <div class="yunhan-wrap">
    <swiper :options="swiperOption" ref="mySwiper" @slideChange="callback">
      <swiper-slide>
        <div class="img-wrapper">
          <img class="bg" src="@/assets/img/report/bg-r.png">
          <img class="bg-footer" src="@/assets/img/report/bg-0-1.png">
          <template v-if="show_index == 0">
            <img
              class="bg-btn"
              src="@/assets/img/report/bg-0-3.png"
              @click.stop.prevent="nextPage()"
            >
            <img class="bg-text-right" src="@/assets/img/report/bg-0-2.png">
          </template>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="img-wrapper">
          <img class="bg" src="@/assets/img/report/bg-w.png">
          <img class="bg-header bg-left" src="@/assets/img/report/bg-1-1.png">
          <img class="bg-footer" src="@/assets/img/report/bg-1-2.png">
          <div class="text-wrap animation-bounce" v-if="show_index == 1">
            <div class="split-blank"></div>
            <div class="split-blank"></div>
            <div class="split-blank"></div>
            <div class="teacher-wrap">
              <div class="teacher-head-wrap">
                <img
                  class="teacher-head"
                  :src="report_data.student_avatar"
                  v-if="report_data.student_avatar"
                >
                <img
                  class="teacher-head"
                  src="https://image.haoxuezhuli.com/index-image/default_img.png"
                  v-else
                >
              </div>
              <div class="text-inner">
                <span class="text-block">{{report_data.student_name}}{{report_data.parent_call}}</span>
              </div>
            </div>
            <span class="text-block">
              <span class="text-red">
                <span class="font-40">{{report_data.month1}}</span>月
                <span class="font-40">{{report_data.day1}}</span>日
              </span>是很特别的一天
            </span>
            <div class="split-blank"></div>
            <span class="text-block">这一天</span>
            <span class="text-block">
              你把
              <span class="text-red">
                <span v-for="(item,index) in report_data.subjects" :key='index'>「{{item}}」</span>
              </span>
            </span>
            <span class="text-block">辅导任务托付给我</span>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="img-wrapper">
          <img class="bg" src="@/assets/img/report/bg-w.png">
          <img class="bg-height" style="height: 70%" src="@/assets/img/report/bg-2-2.png">
          <img class="bg-footer" src="@/assets/img/report/bg-2-1.png">
          <div class="text-wrap" v-if="show_index == 2">
            <div class="split-blank"></div>
            <div :key='index' v-for="(item,index) in report_data.class_detail">
              <div class="split-blank"></div>
              <div class="teacher-wrap" :class="'animation-slideInLeft-'+ ( 1 + index ) ">
                <div class="teacher-head-wrap">
                  <img class="teacher-head" :src="item.teacher_avatar" v-if="item.teacher_avatar">
                  <img
                    class="teacher-head"
                    src="https://image.haoxuezhuli.com/index-image/default_img.png"
                    v-else
                  >
                </div>
                <div class="text-inner">
                  <span class="text-block">{{item.teacher_name}}老师</span>
                  <span class="text-block">
                    是这学期的
                    <span class="text-red">{{item.subject_teacher}}</span>
                  </span>
                  <span class="text-block">
                    总共授课
                    <span class="text-red">
                      <span class="font-40">{{item.class_times}}</span>次
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="img-wrapper">
          <img class="bg" src="@/assets/img/report/bg-w.png">
          <img class="bg-header bg-right" style="width: 70%" src="@/assets/img/report/bg-3-2.png">
          <img class="bg-footer" src="@/assets/img/report/bg-3-1.png">
          <div class="text-wrap" v-if="show_index == 3">
            <div class="logo-wrap animation-zoomIn">
              <img class="logo-bg" src="@/assets/img/report/bg-3-3.png">
              <img class="logo" :src="report_data.org_logo">
            </div>
            <div class="split-blank"></div>
            <span class="text-block animation-fadeIn">
              在
              <span class="font-40">{{report_data.app_name}}</span>
            </span>
            <div class="split-blank"></div>
            <span class="text-block animation-slideInUp">
              老师给{{report_data.student_name}}同学留下
              <span
                class="text-red"
              >{{report_data.comment_count}}条</span>成长记录
            </span>
            <span class="text-block animation-slideInUp">
              比
              <span class="text-red">{{report_data.active_rate}}</span>的同学要重视的多
            </span>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="img-wrapper">
          <img class="bg" src="@/assets/img/report/bg-w.png">
          <div
            class="bg-cover animation-pulseTranslateY"
            :style="'background-image: url('+ require('@/assets/img/report/bg-4.png') +')'"
          ></div>
          <div class="text-wrap animation-bounceInDown" v-if="show_index == 4">
            <div class="split-blank"></div>
            <div class="split-blank"></div>
            <div class="split-blank"></div>
            <div class="split-blank"></div>
            <span class="text-block">{{report_data.student_name}}{{report_data.parent_call}}</span>
            <span class="text-block">
              你认真查看其中
              <span class="text-red">{{report_data.readed_comment_count}}条</span>
            </span>
            <span class="text-block">
              与老师深度沟通
              <span class="text-red">{{report_data.communicate_time}}次</span>
            </span>
            <div class="split-blank"></div>
            <span class="text-block">
              比
              <span class="text-red font-40">{{report_data.concern_rate}}</span>家长
            </span>
            <span class="text-block">更关心孩子的学习成长</span>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="img-wrapper">
          <img class="bg" src="@/assets/img/report/bg-w.png">
          <div
            class="bg-cover animation-pulseTranslateY"
            :style="'background-image: url('+ require('@/assets/img/report/bg-5.png') +')'"
          ></div>
          <div class="text-wrap animation-fadeInRight" v-if="show_index == 5">
            <div class="split-blank"></div>
            <div class="split-blank"></div>
            <div class="split-blank"></div>
            <div class="split-blank"></div>
            <span class="text-block">这学期</span>
            <span class="text-block">
              {{report_data.student_name}}同学有
              <span class="text-red">
                <span class="font-40">{{report_data.study_hour_length}}</span>小时
              </span>
            </span>
            <span class="text-block">沉浸在{{report_data.org_name}}的课室</span>
            <div class="split-blank"></div>
            <span class="text-block" v-if="report_data.unit_test_count>0">
              周测了
              <span class="text-red">{{report_data.unit_test_count}}次</span>
            </span>
            <span class="text-block" v-if="report_data.test_good_time>0">
              其中
              <span class="text-red">{{report_data.test_good_time}}次</span>是优于平均分
            </span>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="img-wrapper">
          <img class="bg" src="@/assets/img/report/bg-w.png">
          <div
            class="bg-cover animation-pulseTranslateY"
            :style="'background-image: url('+ require('@/assets/img/report/bg-6-1.png') +')'"
          ></div>
          <img class="bg-header" src="@/assets/img/report/bg-6-2.png">
          <div class="text-wrap animation-rollIn" v-if="show_index == 6">
            <div class="split-blank"></div>
            <div class="split-blank"></div>
            <div class="split-blank"></div>
            <div class="split-blank"></div>
            <span class="text-block">我们还经历了</span>
            <div class="split-blank"></div>
            <div class="tags-wrap">
              <span
                v-for="(item,index) in report_data.play_together"
                :key='index'
              >{{item}}{{index < report_data.play_together.length - 1 ? '、' : '……'}}</span>
            </div>
            <div class="split-blank"></div>
            <span class="text-block">这所有的所有</span>
            <span class="text-block">
              是为了让同学们懂得
              <span class="text-red">砥砺前行</span>
            </span>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="img-wrapper">
         <div
            v-if="report_data.bg_image_index==0"
            class="bg-cover animation-pulseTranslateY"
            :style="'background-image: url('+ require('@/assets/img/report/bg-7-6.png') +')'"
          ></div>
          <div
            v-else-if="report_data.bg_image_index==1"
            class="bg-cover animation-pulseTranslateY"
            :style="'background-image: url('+ require('@/assets/img/report/bg-7-1.png') +')'"
          ></div>
          <div
            v-else-if="report_data.bg_image_index==2"
            class="bg-cover animation-pulseTranslateY"
            :style="'background-image: url('+ require('@/assets/img/report/bg-7-2.png') +')'"
          ></div>
          <div
            v-else-if="report_data.bg_image_index==3"
            class="bg-cover animation-pulseTranslateY"
            :style="'background-image: url('+ require('@/assets/img/report/bg-7-3.png') +')'"
          ></div>
          <div
            v-else-if="report_data.bg_image_index==4"
            class="bg-cover animation-pulseTranslateY"
            :style="'background-image: url('+ require('@/assets/img/report/bg-7-4.png') +')'"
          ></div>
          <div
            v-else-if="report_data.bg_image_index==5"
            class="bg-cover animation-pulseTranslateY"
            :style="'background-image: url('+ require('@/assets/img/report/bg-7-5.png') +')'"
          ></div>
          <div
            class="bg-cover animation-pulseTranslateY"
            :style="'background-image: url('+ require('@/assets/img/report/bg-7-6.png') +')'"
            v-else
          ></div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="img-wrapper">
          <img class="bg" src="@/assets/img/report/bg-w.png">
          <div
            class="bg-cover animation-pulseTranslateY"
            :style="'background-image: url('+ require('@/assets/img/report/bg-8.png') +')'"
          ></div>
          <div class="share-btn-wrap">
            <button class="share-btn" @click.stop.prevent="openShare">分享给好友</button>
            <button class="share-btn" @click.stop.prevent="creatReport()">生成我的报告</button>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <template v-if="show_index > 0">
      <div class="down-btn-wrap" @click.stop.prevent="nextPage()">
        <img
          class="down-btn animation-slideInDown"
          src="@/assets/img/report/down.png"
          v-if="show_index != pages.length-1"
        >
        <img class="down-btn animation-slideInUp-infinite" src="@/assets/img/report/top.png" v-else>
      </div>
    </template>

    <div class="share-wrapper" v-if="show_share" @click.stop.prevent="openShare">
      <div class="share-bg-wrapper" v-if="show_share" @click.stop.prevent="openShare"></div>
    </div>
    <div class="bg-music-wrapper">
      <bg-music ref="bg_music"></bg-music>
    </div>

    <bar-loading @playBgAudio="playBgAudio"></bar-loading>
  </div>
</template>

<script>
import bg_music from "./bg_music.vue";
import bar_loading from "./bar_loading.vue";
import { getReport, getOrgList } from "@/api/index";
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        height:
          document.documentElement.clientHeight || document.body.clientHeight
      },
      pages: [
        {
          bg:
            "https://image.haoxuezhuli.com/saas-dir/2018-11/1541843133818-469667.png"
        },
        {
          bg: ""
        },
        {
          bg: ""
        },
        {
          bg: ""
        },
        {
          bg: ""
        },
        {
          bg: ""
        },
        {
          bg: ""
        },
        {
          bg: ""
        },
        {
          bg: ""
        }
      ],

      show_index: 0,

      type: 1,

      show_share: false,

      show_play: false,
      report_data: {}
    };
  },
  components: {
    "bg-music": bg_music,
    "bar-loading": bar_loading,
    swiper,
    swiperSlide
  },
  methods: {
    // 注册方法
    nextPage() {
      if (!this.show_play && this.show_index == 0) {
        this.show_play = true;
        this.$refs.bg_music.play();
      }
      this.show_index++;
      if (this.show_index == this.pages.length) {
        this.show_index = 0;
        this.swiper.slideTo(0);
        return;
      }
      this.swiper.slideNext();
    },

    playBgAudio() {
      if (!this.show_play) {
        this.$nextTick(() => {
          console.log(this.$refs.bg_music);
          this.$refs.bg_music.init();
        });
      }
    },

    callback() {
      this.show_index = this.swiper.activeIndex;
    },

    // 生成报表
    creatReport() {
      this.$router.push("/report");
    },

    openShare() {
      this.show_share = !this.show_share;
    },
    getQuarterReport(student_phone, crm_stu_id) {
      let obj = {
        student_phone
      };
      if (crm_stu_id) obj.crm_stu_id = crm_stu_id;
      getReport(obj)
        .then(res => {
          let data = res.data;
          let detail = data.detail;
          let start_date = new Date(Number(detail.start_date) * 1000);
          detail.month1 = start_date.getMonth() + 1;
          detail.day1 = start_date.getDate();

          document.title = detail.org_name;
          this.report_data = detail;
          let obj = {
            title: `这是${detail.student_name}同学在${
              detail.org_name
            }的学期报告，请认真查阅。`,
            link: window.location.href,
            imgUrl:
              detail.student_avatar ||
              "https://image.haoxuezhuli.com/saas-dir/2019-06/1559722801958-618114.png",
            desc: "期末临近，老师有个寄语写在了里边。"
          };
          this.$sharePage(obj);
        })
        .catch(e => {
          this.$toast.fail(e);
        });
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // decodeURIComponent
    let content = decodeURIComponent(this.$route.query.content);
    let crm_stu_id = this.$route.query.crm_stu_id
      ? decodeURIComponent(this.$route.query.crm_stu_id)
      : "";
    console.log("query->", this.$route.query);
    this.getQuarterReport(content, crm_stu_id);
  },
  activated() {
    this.swiperOption.height =
      document.documentElement.clientHeight || document.body.clientHeight;
  },
  deactivated() {
    this.$destroy();
  },
};
</script>

<style scoped lang="stylus">
img[src=''], img:not([src])
  opacity: 0;
.share-bg-wrapper
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url('../../assets/img/share.png');
  background-size: 271px 124px;
  background-repeat: no-repeat;
  background-position: 420px 40px;
  z-index: 9999;
.yunhan-wrap
  touch-action: none;
  height: 100vh;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  .img-wrapper
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: block;
    .bg-cover, .bg
      position: absolute;
      width: 100%;
      height: auto;
      z-index: -1;
    .bg-cover
      height: 100%;
      left: 0;
      top: 0;
      background-size: 100% auto;
      background-position: 0 50%;
      background-repeat: no-repeat;
    .bg-header, .bg-footer
      position: absolute;
      width: 100%;
      height: auto;
      animation: pulse 3s linear infinite;
      z-index: -1;
    .bg-header
      top: 0;
      width: 60%;
    .bg-footer
      left: 0;
      bottom: 0;
    .bg-height
      position: absolute;
      right: 80px;
      top: 0;
      height: 100%;
      width: auto;
      z-index: 0;
    .bg-left
      left: 0;
    .bg-right
      right: 0;
    .bg-btn
      position: relative;
      top: 0;
      z-index: 9;
      display: block;
      margin: 900px auto 0;
      bottom: 400px;
      width: 444px;
      height: 110px;
      animation: flipInX 1.5s linear 1;
    .bg-text-right
      position: absolute;
      top: 120px;
      right: 80px;
      width: 180px;
      height: auto;
      animation: zoomInRight 3s linear 1;
    .text-wrap
      font-family: PingFang-SC-Medium;
      font-size: 28px;
      line-height: 1.4;
      color: #333333;
      margin-top: 210px;
      padding-left: 80px;
      .split-blank
        width: 100%;
        height: 50px;
      .tags-wrap
        max-width: 480px;
        span
          display: inline-block;
      .text-block
        display: block;
        margin-bottom: 20px;
      .text-red
        color: #e16e75;
      .font-40
        font-size: 40px;
      .teacher-wrap
        display: -webkit-flex;
        display: flex;
        .teacher-head-wrap
          width: 40px;
          height: 40px;
          background-color: transparent;
          margin-right: 10px;
          -webkit-border-radius: 50%;
          border-radius: 50%;
          overflow: hidden;
          .teacher-head
            -webkit-border-radius: 50%;
            border-radius: 50%;
            width: 100%;
            height: 100%;
            border: 0;
      .logo-wrap
        width: 140px;
        height: 140px;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: relative;
        .logo-bg
          position: absolute;
          left: -10px;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          width: auto;
          height: 192px;
          z-index: -1;
        .logo
          height: 80px;
          width: auto;
          max-width: 130px;
  .down-btn-wrap
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: 50px;
    -webkit-transform-origin: 0;
    transform-origin: 0;
    z-index: 9;
    padding: 30px 50px;
    .down-btn
      width: 50px;
      height: 40px;
.share-btn-wrap
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  bottom: 200px;
  .share-btn
    width: 440px;
    text-align: center;
    height: 72px;
    line-height: 72px;
    -webkit-border-radius: 36px;
    border-radius: 36px;
    border: solid 2px #f87365;
    font-size: 32px;
    color: #fff;
    background-color: #f87365;
    box-sizing: content-box;
    &:last-child
      color: #f87365;
      background-color: #fff;
      margin-top: 28px;
.animation-pulseTranslateY
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: pulseTranslateY 5s linear infinite;
  animation: pulseTranslateY 5s linear infinite;
.animation-pulse
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: pulse 5s linear infinite;
  animation: pulse 5s linear infinite;
.animation-bounce
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: bounce 2s linear;
  animation: bounce 2s linear;
.animation-zoomIn
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: zoomIn 0.5s linear 1;
  animation: zoomIn 0.5s linear 1;
.animation-flipInX
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: flipInX 1s linear 1;
  animation: flipInX 1s linear 1;
.animation-rubberBand
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: rubberBand 1.5s linear 1;
  animation: rubberBand 1.5s linear 1;
.animation-slideInUp
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: slideInUp 0.5s linear 1;
  animation: slideInUp 0.5s linear 1;
.animation-slideInUp-infinite
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: slideInUp 1.5s linear infinite;
  animation: slideInUp 1.5s linear infinite;
.animation-slideInDown
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: slideInDown 1.5s linear infinite;
  animation: slideInDown 1.5s linear infinite;
.animation-fadeIn
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: fadeIn 1.5s linear 1;
  animation: fadeIn 1.5s linear 1;
.animation-fadeInRight
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: fadeInRight 0.5s linear 1;
  animation: fadeInRight 0.5s linear 1;
.animation-bounceInDown
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: bounceInDown 1.5s linear 1;
  animation: bounceInDown 1.5s linear 1;
.animation-lightSpeedIn
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: lightSpeedIn 1.5s linear 1;
  animation: lightSpeedIn 1.5s linear 1;
.animation-rollIn
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: rollIn 0.5s linear 1;
  animation: rollIn 0.5s linear 1;
.animation-slideInLeft-1
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: slideInLeft 0.5s linear 1;
  animation: slideInLeft 0.5s linear 1;
.animation-slideInLeft-2
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: slideInLeft 0.7s linear 1;
  animation: slideInLeft 0.7s linear 1;
.animation-slideInLeft-3
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: slideInLeft 0.9s linear 1;
  animation: slideInLeft 0.9s linear 1;
.animation-slideInLeft-4
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: slideInLeft 0.9s linear 1;
  animation: slideInLeft 0.9s linear 1;
.animation-slideInLeft-5
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: slideInLeft 0.9s linear 1;
  animation: slideInLeft 0.9s linear 1;
@keyframes pulseTranslateY
  from
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  50%
    -webkit-transform: scale3d(1.02, 1.02, 1.02);
    transform: scale3d(1.02, 1.02, 1.02);
  to
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
@keyframes pulseTranslateY
  from
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  50%
    -webkit-transform: scale3d(1.02, 1.02, 1.02);
    transform: scale3d(1.02, 1.02, 1.02);
  to
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
@keyframes pulse
  from
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  50%
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  to
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
@keyframes pulse
  from
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  50%
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  to
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
@keyframes flipInX
  from
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  40%
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  60%
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  80%
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  to
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
@keyframes flipInX
  from
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  40%
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  60%
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  80%
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  to
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
@keyframes zoomInRight
  from
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  60%
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
@keyframes zoomInRight
  from
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  60%
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
@keyframes slideInDown
  from
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  to
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
@keyframes slideInDown
  from
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  to
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
@keyframes bounce
  from
    opacity: 0;
  20%, 53%, 80%, to
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  40%, 43%
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  70%
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  90%
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
    opacity: 1;
@keyframes bounce
  from
    opacity: 0;
  20%, 53%, 80%, to
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  40%, 43%
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  70%
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  90%
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
    opacity: 1;
@keyframes slideInLeft
  from
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
    opacity: 0;
  to
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
@keyframes slideInLeft
  from
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
    opacity: 0;
  to
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
@keyframes zoomIn
  from
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  50%
    opacity: 0.5;
  100%
    opacity: 1;
@keyframes zoomIn
  from
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  50%
    opacity: 0.5;
  100%
    opacity: 1;
@keyframes rubberBand
  from
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  30%
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  40%
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  50%
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  65%
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  75%
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  to
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
@keyframes rubberBand
  from
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  30%
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  40%
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  50%
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  65%
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  75%
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  to
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
@keyframes slideInUp
  from
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
    opacity: 0;
  to
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
@keyframes slideInUp
  from
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
    opacity: 0;
  to
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
@keyframes fadeIn
  from
    opacity: 0;
  to
    opacity: 1;
@keyframes fadeIn
  from
    opacity: 0;
  to
    opacity: 1;
@keyframes fadeInRight
  from
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  to
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
@keyframes fadeInRight
  from
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  to
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
@keyframes bounceInDown
  from, 60%, 75%, 90%, to
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  0%
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  60%
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  75%
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  90%
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  to
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
@keyframes bounceInDown
  from, 60%, 75%, 90%, to
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  0%
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  60%
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  75%
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  90%
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  to
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
@keyframes lightSpeedIn
  from
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  60%
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  80%
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
  to
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
@keyframes lightSpeedIn
  from
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  60%
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  80%
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
  to
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
@keyframes rollIn
  from
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  to
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
@keyframes rollIn
  from
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  to
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
</style>
