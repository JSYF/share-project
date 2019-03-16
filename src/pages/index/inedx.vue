<template>
  <div class="index-page">
    <div class="banner-wrap">
      <img src="https://image.haoxuezhuli.com/wap-index/banner.png" class="banner">
      <button class="banner-btn bg-color" @click.stop.prevent="applyUse">申请试用</button>
    </div>
    <div class="content-wrap">
      <div class="swiper-wrap">
        <h3>给孩子提供
          <br>更温暖的家校服务
        </h3>
        <div class="swiper-inner">
          <swiper :options="swiperOption" ref="mySwiper1" @slideChange="callback(1)">
            <swiper-slide v-for="(item,index) in swiperArr1" :key="index">
              <div class="swiper">
                <img :src="item.img" class="img">
                <p class="text">“{{item.text}}”</p>
              </div>
            </swiper-slide>
          </swiper>
          <div class="pagination-wrap">
            <span
              class="pagination"
              :class="{'bg-color' : pagination1 == index}"
              v-for="(item,index) in swiperArr1"
              :key="index"
            ></span>
          </div>
        </div>
      </div>

      <div class="swiper-wrap" style="background-color: #fdf8ff">
        <h3>借助社交流量
          <br>让机构招生更轻松
        </h3>
        <div class="swiper-inner">
          <swiper :options="swiperOption" ref="mySwiper2" @slideChange="callback(2)">
            <swiper-slide v-for="(item,index) in swiperArr2" :key="index">
              <div class="swiper">
                <img :src="item.img" class="img">
                <p class="text">“{{item.text}}”</p>
              </div>
            </swiper-slide>
          </swiper>
          <div class="pagination-wrap">
            <span
              class="pagination"
              :class="{'bg-color' : pagination2 == index}"
              v-for="(item,index) in swiperArr2"
              :key="index"
            ></span>
          </div>
        </div>
      </div>

      <div class="swiper-wrap">
        <h3>让机构的运营管理
          <br>变得更高效率
        </h3>
        <div class="swiper-inner">
          <swiper :options="swiperOption" ref="mySwiper3" @slideChange="callback(3)">
            <swiper-slide v-for="(item,index) in swiperArr3" :key="index">
              <div class="swiper">
                <img :src="item.img" class="img">
                <p class="text">“{{item.text}}”</p>
              </div>
            </swiper-slide>
          </swiper>
          <div class="pagination-wrap">
            <span
              class="pagination"
              :class="{'bg-color' : pagination3 == index}"
              v-for="(item,index) in swiperArr3"
              :key="index"
            ></span>
          </div>
        </div>
      </div>
    </div>

    <button class="footer-btn bg-btn" @click.stop.prevent="applyUse">申请试用</button>
  </div>
</template>

<script >
// require styles
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        height: 600,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      },

      pagination1: 0,
      swiperArr1: [
        {
          img: "https://image.haoxuezhuli.com/wap-index/b1-1.png",
          text: "告别微信群沟通的小心翼翼，给予每位家长专属的家校服务体验；"
        },
        {
          img: "https://image.haoxuezhuli.com/wap-index/b1-2.png",
          text: "为学员每个阶段的成长留下美好的记忆，教学效果直接看得到；"
        },
        {
          img: "https://image.haoxuezhuli.com/wap-index/b1-3.png",
          text:
            "自动生成学员的学期报告，展示机构的服务价值，拉近家长与机构之间的距离；"
        }
      ],

      pagination2: 0,
      swiperArr2: [
        {
          img: "https://image.haoxuezhuli.com/wap-index/b2-1.png",
          text:
            "老师为孩子留下的记录都有可能被家长转发分享，老生推荐新生直接为机构招生或品牌宣传赋能；"
        },
        {
          img: "https://image.haoxuezhuli.com/wap-index/b2-2.png",
          text:
            "手机即可直接付费，配合抢红包/多科立减营销策略，家长更快作出续费决策；"
        }
      ],

      pagination3: 0,
      swiperArr3: [
        {
          img: "https://image.haoxuezhuli.com/wap-index/b3-1.png",
          text: "告别纸质表格打勾勾，手机一键考勤更快捷，出勤课消自动统计；"
        },
        {
          img: "https://image.haoxuezhuli.com/wap-index/b3-2.png",
          text: "老师服务过程数据化（一目了然），数据考核更合理、更科学；"
        }
      ]
    };
  },
  methods: {
    // 注册方法
    callback(type) {
      this["pagination" + type] = this["swiper" + type].activeIndex;
    },
    //申请试用
    applyUse() {
      this.$router.push({ name: "apply" });
    }
  },
  computed: {
    swiper1() {
      return this.$refs.mySwiper1.swiper;
    },
    swiper2() {
      return this.$refs.mySwiper2.swiper;
    },
    swiper3() {
      return this.$refs.mySwiper3.swiper;
    }
  },
  mounted() {
    let obj = {
      title:"学员卡—强化教学效果，让学习更有趣",
      link: "https://www.yunhan100.com/wap",
      imgUrl: "https://image.haoxuezhuli.com/wap-index/share.png",
      desc:
            "给学员和家长更温暖、更高品质的教学服务，用数据量化老师的服务质量，提高机构运营管理的效率。"
    }
    this.$sharePage(obj);
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped lang="stylus">
.index-page
  min-height: 100%;
  background-color: #fff;
  padding-bottom: 100px;
  .banner-wrap
    position: relative;
    .banner
      width: 100%;
      height: auto;
    .banner-btn
      position: absolute;
      bottom: 130px;
      left: 50%;
      transform: translateX(-50%);
      width: 400px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      font-size: 32px;
      color: #fff;
      border-radius: 4px;
  .content-wrap
    .swiper-wrap
      h3
        font-size: 54px;
        color: #333;
        font-weight: 600;
        padding: 100px 0;
        text-align: center;
        line-height: 1.3;
      .swiper-inner
        .swiper
          padding: 0 20px;
          .img
            width: 100%;
            height: 414px;
          .text
            padding: 30px 0;
            font-size: 32px;
            color: #868ce1;
            text-align: center;
            line-height: 1.3;
      .pagination-wrap
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 90px 0 120px 0;
        .pagination
          width: 100px;
          height: 6px;
          margin-right: 20px;
          background-color: #eee;
          &:last-child
            margin-right: 0;
.footer-btn
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 32px;
  color: #fff;
  z-index: 9;
</style>