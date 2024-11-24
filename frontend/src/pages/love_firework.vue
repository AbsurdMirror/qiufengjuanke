<template>
  <div class="lfw-page-container">
    <wired-card elevation="1">
      <svg height="320" width="320" id="main_love" class="like" v-on:click="click_func()">
        <path class="path" d="M 160 135 c 15 -70 170 -10 0 100 m 0 -100 c -15 -70 -170 -10 0 100" fill="#fff" />
      </svg>

      <div class="dot dot-1"></div>
      <div class="dot dot-2"></div>
      <div class="dot dot-3"></div>
      <div class="dot dot-4"></div>
      <div class="dot dot-5"></div>
      <div class="dot dot-6"></div>
      <div class="dot dot-7"></div>
      <div class="dot dot-8"></div>

      <svg height="40" width="40" viewBox="0 0 320 320" class="h h-1">
        <path class="path" d="M 160 135 c 15 -70 170 -10 0 100 m 0 -100 c -15 -70 -170 -10 0 100" />
      </svg>
      <svg height="40" width="40" viewBox="0 0 320 320" class="h h-2">
        <path class="path" d="M 160 135 c 15 -70 170 -10 0 100 m 0 -100 c -15 -70 -170 -10 0 100" />
      </svg>
      <svg height="40" width="40" viewBox="0 0 320 320" class="h h-3">
        <path class="path" d="M 160 135 c 15 -70 170 -10 0 100 m 0 -100 c -15 -70 -170 -10 0 100" />
      </svg>
      <svg height="40" width="40" viewBox="0 0 320 320" class="h h-4">
        <path class="path" d="M 160 135 c 15 -70 170 -10 0 100 m 0 -100 c -15 -70 -170 -10 0 100" />
      </svg>

      <svg height="40" width="40" viewBox="0 0 320 320" class="h h-5">
        <path class="path" d="M 160 135 c 15 -70 170 -10 0 100 m 0 -100 c -15 -70 -170 -10 0 100" />
      </svg>
      <svg height="40" width="40" viewBox="0 0 320 320" class="h h-6">
        <path class="path" d="M 160 135 c 15 -70 170 -10 0 100 m 0 -100 c -15 -70 -170 -10 0 100" />
      </svg>
      <svg height="40" width="40" viewBox="0 0 320 320" class="h h-7">
        <path class="path" d="M 160 135 c 15 -70 170 -10 0 100 m 0 -100 c -15 -70 -170 -10 0 100" />
      </svg>
      <svg height="40" width="40" viewBox="0 0 320 320" class="h h-8">
        <path class="path" d="M 160 135 c 15 -70 170 -10 0 100 m 0 -100 c -15 -70 -170 -10 0 100" />
      </svg>
    </wired-card>
    <div class="lfw-page-footer">
      <wired-button elevation="2" v-on:click="gotoback()" class="lfw-page-footer-enable-btn">回首页</wired-button>
    </div>
  </div>

</template>

<script>
import "wired-elements"
export default {
  data() {
    return {
      heartbeat_timer: null
    }
  },
  methods: {
    gotoback() {
      this.stop_heartbeat()
      document.body.classList.toggle('lfw_body')
      navigateTo('/')
    },
    heartbeat() {
      // 定时任务
      this.heartbeat_timer = setInterval(() => {
        // 获取main_love
        const mainLove = document.getElementById('main_love')
        document.body.classList.toggle('heartbeat')
      }, 650)
    },
    stop_heartbeat() {
      // 停止定时任务
      clearInterval(this.heartbeat_timer)
    },

    click_func() {
      this.stop_heartbeat()
      document.body.classList.toggle('liked')

      setTimeout(() => {
        document.body.classList.toggle('liked')
        this.heartbeat()
      }, 2000);
    }
  },
  mounted() {
    this.heartbeat()
    document.body.classList.toggle('lfw_body')
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.lfw_body {
  background-image: linear-gradient(-10deg, #7028e4 0%, #e5b2ca 100%);
  width: 100vw;
  height: 100vh;
}

svg.like {
  position: fixed;
  top: calc(50vh - 160px);
  left: calc(50vw - 160px);
}

svg.like {
  border-radius: 100%;
  background-color: #e01f4f;
  cursor: pointer;
  transform: scale(0.3);
  box-shadow: 0 0 250px #FFEB3B
}

.heartbeat svg.like {
  animation: heartbeat_blink 0.65s forwards;
}

.heartbeat svg.like path {
  fill: #fff;
}

@keyframes heartbeat_blink {
  50% {
    transform: scale(.22);
    background-color: #e04f1f;
    box-shadow: 0 0 250px #f1e794;
  }

  100% {
    background-color: #e01f4f;
    box-shadow: 0 0 250px #FFEB3B
  }
}


.liked svg.like {
  animation: blink 1s forwards;
}

.liked svg.like path {
  fill: #fff;
}

@keyframes blink {
  20% {
    transform: scale(.42);
    background-color: #8815b7;
    box-shadow: 0 0 250px #f1e794;
  }

  100% {
    background-color: #e01f4f;
    box-shadow: 0 0 250px #FFEB3B
  }
}

div.dot {
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: #fff;
  position: fixed;
  top: calc(50vh - 6px);
  left: calc(50vw - 6px);
}

div.dot::before {
  content: '';
  position: absolute;
  top: -20px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: #fff;

}

div.dot::after {
  content: '';
  position: absolute;
  top: -160px;
  left: 1px;
  width: 11px;
  height: 11px;
  border-radius: 100%;
  background-color: #fff;
}

.liked div.dot {
  transform: translateY(-100px);
  background-color: #00e5ff;
  transition: transform 1s, opacity .5s 1s, background-color .2s .4s;
}

.liked div.dot {
  opacity: 0;
}

div.dot {
  z-index: -1;
}

div.dot::after {
  display: none;
}

body.liked div.dot:after {
  display: block;
}

.liked div.dot-2 {
  transform: rotate(45deg) translateY(-100px);
}

.liked div.dot-3 {
  transform: rotate(90deg) translateY(-100px);
}

.liked div.dot-4 {
  transform: rotate(135deg) translateY(-100px);
}

.liked div.dot-5 {
  transform: rotate(180deg) translateY(-100px);
}

.liked div.dot-6 {
  transform: rotate(225deg) translateY(-100px);
}

.liked div.dot-7 {
  transform: rotate(270deg) translateY(-100px);
}

.liked div.dot-8 {
  transform: rotate(315deg) translateY(-100px);
}

.liked .h-1 {
  margin-top: -200px;
}

.liked .h-5 {
  margin-top: 200px;
}

.liked .h-3 {
  margin-left: 200px;
}

.liked .h-7 {
  margin-left: -200px;
}

.liked .h-2 {
  margin-top: -140px;
  margin-left: 140px;
}

.liked .h-8 {
  margin-top: -140px;
  margin-left: -140px;
}

.liked .h-4 {
  margin-top: 140px;
  margin-left: 140px;
}

.liked .h-6 {
  margin-top: 140px;
  margin-left: -140px;
}

.h {
  position: fixed;
  top: calc(50vh - 20px);
  left: calc(50vw - 20px);
  transform: scale(1);
  z-index: -1;
}

.h:nth-child(odd) {
  fill: skyblue;
}

.h:nth-child(even) {
  fill: yellow;
}

.liked .h {
  opacity: 0;
  transition: margin 1.5s, opacity 0.5s 1.5s;
}

.liked .h {
  opacity: 0;
  transition: margin 1.5s cubic-bezier(0.13, 0.7, 0.32, 0.92), opacity 0.5s 1.5s, fill 0.2s 1.3s, transform 0.2s 1.3s;
}

.liked .h:nth-child(odd) {
  fill: white;
  transform: scale(1.5);
}
</style>