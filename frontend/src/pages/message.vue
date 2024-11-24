<template>
  <div class="msg-page-container">
    <wired-card elevation="1">
      <div class="msg-page-body">
        <!-- 路由出口 -->
        <NuxtPage></NuxtPage>
      </div>
    </wired-card>
    <div class="msg-page-footer">
      <wired-button elevation="2" v-on:click="goto(0)"    :disable="isCurPage[0]">给你写点悄悄话</wired-button>
      <wired-button elevation="2" v-on:click="goto(1)"    :disable="isCurPage[1]">让我看看你说啥</wired-button>
      <wired-button elevation="2" v-on:click="gotoback()">回首页</wired-button>
    </div>
  </div>

</template>

<script>
import "wired-elements"
export default {
  data() {
    return {
      routes: [
        "/message/write",
        "/message/list"
      ]
    }
  },
  computed: {
    isCurPage() {
      return [
        !(this.$route.path === this.routes[0]),
        !(this.$route.path === this.routes[1])
      ]
    }
  },
  methods: {
    goto(index) {
      navigateTo(this.routes[index])
    },
    gotoback() {
      navigateTo('/')
    },
    // isCurPage(index) {
    //   return this.$route.path === this.routes[index]
    // }
  },
  mounted() {
    navigateTo('/message/list')
  }

}
</script>

<style lang="scss">
body {
  font-family: 'qiantubifengshouxieti';
  margin: 0;
}

.msg-page-container {
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  width: 90%;

  .msg-page-body {
    flex: 1;
    overflow-y: auto;
    max-height: calc(90vh - 20px);
    min-height: calc(90vh - 20px);
    // width: calc(100% - 20px);
    scrollbar-width: none;
    /* 尝试隐藏滚动条 */
    -webkit-scrollbar: none;
    /* 对于旧版WebKit浏览器 */
  }

  .msg-page-footer {
    height: 10vh;

    wired-button {
      margin-top: 1vh;
      height: 9vh;
    }

    .msg-page-footer-disable-btn {
      opacity: 0.5;
      color: rgb(170, 170, 170);
    }

    .msg-page-footer-enable-btn {
      opacity: 1;
      // color: rgb(0, 0, 0);
    }
  }

}
</style>