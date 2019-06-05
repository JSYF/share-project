<template>
  <transition name="fade">
    <div class="bar-loading-wrap" v-if="show_loading">
      <img src="@/assets/img/report/loading3.gif" class="load-icon">
      <div class="bar-wrap">
        <div class="bar-inner">
          <span class="bar" :style=" 'width:' + progress + '%' "></span>
        </div>
        <span class="bar-num">{{progress}}%</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show_loading: true,
      imgTimer: "", //加载图片定时器
      progress: 0 //进度
    };
  },
  methods: {
    show() {
      this.init();
    },
    hide() {
      clearInterval(this.imgTimer);
      setTimeout(() => {
        this.show_loading = false;
        this.$emit("playBgAudio");
      }, 500);
    },
    init() {
      clearInterval(this.imgTimer);
      this.imgLoads(() => {
        this.progress = 100;
        this.hide();
      }, 10000);
    },

    //判断图片是否已加载完毕   最多等待多少时间 - time / ms
    imgLoads(callback, time) {
      let imgs = document.getElementsByTagName("img"),
        isOver = false, //true加载完毕，false还有未加载的
        count = 0, //循环当前次数
        size = time / 50 || 20; //循环次数

      this.imgTimer = setInterval(() => {
        isOver = true;
        count++;

        this.progress =
          parseInt((count / size) * 100) < 100
            ? parseInt((count / size) * 100)
            : 100;

        for (let i = 0; i < imgs.length; i++) {
          if (!imgs[i].complete) {
            //还有没加载的图片
            isOver = false;
          }
        }
        if (isOver || count >= size) {
          //加载完成，or超时
          console.log("图片加载完成！用时" + count * 50 + "毫秒");
          callback();
        }
      }, 50);
    }
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped lang="stylus">
.bar-loading-wrap
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #f7c9c4;
  z-index: 99999;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  .load-icon
    width: 108px;
    height: 148px;
    margin-bottom: 30px;
  .bar-wrap
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    .bar-inner
      margin-right: 10px;
      height: 4px;
      width: 200px;
      background-image: url('../../assets/img/report/loading1.png');
      background-size: 100% 100%;
      overflow: hidden;
      position: relative;
      .bar
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        width: 0%;
        height: 4px;
        background-color: #c2847e;
        background-image: url('../../assets/img/report/loading2.png');
        background-size: cover;
    .bar-num
      font-size: 28px;
      color: #3f3922;
.fade-enter-active
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
.fade-leave-active
  -webkit-transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
.fade-enter, .fade-leave-active
  opacity: 0;
</style>
