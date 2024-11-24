<template>
  <div class="index-container-card">
    <img :src="index_love" alt="" v-on:click="navigateTo('/love_firework')">
    <h1>今天是我们恋爱的第{{ love_days }}天</h1>

    <wired-link :href="link_href">开发日志</wired-link>

    <wired-button
      class="link_list_0"
      v-on:click="navigateTo('/message')"
      elevation="3"
    >悄悄话</wired-button>

    <wired-button
      class="link_list_1"
      v-on:click="navigateTo('/card_game')"
      elevation="3"
    >神秘卡片</wired-button>

    <!-- <wired-button class="link_list_1">小游戏(开发中)</wired-button> -->
  </div>
</template>

<script>
import "wired-elements"
import axios from 'axios'

const index_love = ref(new URL("~/static/index_love.jpg", import.meta.url).href)
//选项式API
export default {
  data() {
    return {
      passData: '',
      index_love: index_love,
      love_start_day: "2024/07/05",
      link_href: process.env.NODE_ENV === 'development' ? "/log" : "/qfjk/message/log"
    }
  },
  computed: {
    love_days() {
      var love_days = Math.floor((new Date() - new Date(this.love_start_day)) / (1000 * 60 * 60 * 24));
      return love_days;
    }
  },
  mounted() {
    axios({
      withCredentials: true,
      url: '/qfjk_api/verify',
      method: 'post'
    })
      .then(response => {
        console.log(response.data);

        if (response.status === 200 && response.data.status === 1) {
          console.log("verify success");
        } else {
          console.log("verify fail");
          navigateTo('/login')
        }
      })
      .catch(error => {
        console.error("Request failed:", error);
        navigateTo('/login')
      });

  },
}
</script>

<style lang="scss">
body {
  background: white;
  width: 100vw;
  height: 100vh;
}

.index-container-card {
  position: relative;

  --love-img-height: 30vh;
  --love-img-top: 20vh;
  --love-h1-margin-top: 3vh;
  --love-h1-height: 5vh;
  --love-link-0-margin-top: 10vh;
  --love-link-height: 5vh;
  --love-link-1-margin-top: 2vh;

  img {
    position: absolute;
    object-fit: contain;
    object-position: top;
    height: var(--love-img-height);
    width: 50%;
    left: 25%;
    top: var(--love-img-top);
  }

  h1 {
    position: absolute;
    width: 50%;
    left: 25%;
    top: calc(var(--love-img-top) + var(--love-img-height));
    margin-top: var(--love-h1-margin-top);
    margin-bottom: 0;
    height: var(--love-h1-height);
    text-align: center;
    font-size: var(--love-h1-height);
    line-height: 1;

    font-size: 28px;
  }

  .link_list_0 {
    position: absolute;
    width: 50%;
    left: 25%;
    top: calc(var(--love-img-top) + var(--love-img-height) + var(--love-h1-margin-top) + var(--love-h1-height));
    margin-top: var(--love-link-0-margin-top);
    height: var(--love-link-height);
    text-align: center;
  }

  .link_list_1 {
    position: absolute;
    width: 50%;
    left: 25%;
    top: calc(var(--love-img-top) + var(--love-img-height) + var(--love-h1-margin-top) + var(--love-h1-height) + var(--love-link-0-margin-top) + var(--love-link-height));
    height: var(--love-link-height);
    margin-top: var(--love-link-1-margin-top);
    text-align: center;
  }
}
</style>