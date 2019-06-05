<template>
  <div class="bg-music-inner">
    <button
      class="music-btn"
      :class="playing?'animation-rotateIn':''"
      @click.stop.prevent="playMusic"
    ></button>
    <audio
      class="bg-audio"
      loop
      id="myAudio"
      src="https://image.yunhan100.com/app-h5/audio/piano-at-night-fifteen.mp3"
    ></audio>
  </div>
</template>

<script >
export default {
  data() {
    return {
      playing: false,
      autoplay: false
    };
  },
  methods: {
    // 注册方法
    play() {
      this.playing = true;
      if (this.$isWx()) {
        wx.ready(function() {
          document.getElementById("myAudio").play();
        });
      } else {
        document.getElementById("myAudio").play();
      }
    },
    playMusic() {
      this.$nextTick(() => {
        let that = this;
        let audio = document.getElementById("myAudio");
        if (this.autoplay) {
          this.playing = !this.playing;
          if (this.$isWx()) {
            if (that.playing) {
              wx.ready(function() {
                document.getElementById("myAudio").play();
              });
            } else {
              wx.ready(function() {
                document.getElementById("myAudio").pause();
              });
            }
          } else {
            if (this.playing) audio.play();
            else audio.pause();
          }
        } else {
          this.autoplay = true;
        }
      });
    },

    // 页面自动播放检测
    testAutoPlay() {
      // 返回一个promise以告诉调用者检测结果
      return new Promise(resolve => {
        let audio = document.getElementById("myAudio");
        let autoplay = false;
        // play返回的是一个promise
        audio
          .play()
          .then(() => {
            // 支持自动播放
            console.log("支持自动播放");
            autoplay = true;
            resolve(autoplay);
          })
          .catch(err => {
            // 不支持自动播放
            console.log("不支持自动播放");
            autoplay = false;
            resolve(autoplay);
          })
          .finally(() => {
            // 告诉调用者结果
          });
      });
    },

    // 监听页面的点击事件，一旦点过了就能autoplay了
    setAutoPlayWhenClick() {
      document.addEventListener("click", this.setCallback);
      document.addEventListener("touchend", this.setCallback);

      if (this.$isWx()) {
        wx.ready(function() {
          document.getElementById("myAudio").play();
        });
      }
    },
    setCallback(e) {
      let _class = e.path[0].getAttribute("class"); //
      // if( this.autoplay || ( _class == 'music-btn animation-rotateIn' || _class == 'music-btn') ) {
      if (
        !this.autoplay &&
        _class != "music-btn animation-rotateIn" &&
        _class != "music-btn"
      ) {
        this.playMusic();
        console.log("setCallback", e, this.autoplay);
      } else {
      }
      this.autoplay = true;
      document.removeEventListener("click", () => {});
      document.removeEventListener("touchend", () => {});
    },
    init() {
      // 检测是否能自动播放
      this.testAutoPlay().then(autoplay => {
        this.autoplay = autoplay;
        this.playing = autoplay;
        if (!this.autoplay) {
          // 用户点击交互之后，设置成能自动播放
          this.setAutoPlayWhenClick();
        }
      });
    }
  }
};
</script>

<style scoped lang="stylus">
.music-btn
  width: 80px;
  height: 80px;
  position: fixed;
  top: 40px;
  right: 40px;
  background-image: url('../../assets/img/report/music_bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 99;
  background-color: transparent;
  border: 0;
.bg-audio
  position: absolute;
  left: -100000px;
.animation-rotateIn
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation: rotateIn 4s linear infinite;
  animation: rotateIn 4s linear infinite;
@keyframes rotateIn
  0%
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  50%
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  100%
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
@keyframes rotateIn
  0%
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  50%
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  100%
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
</style>
