<template>
  <div class="qfjk-page-container">
    <wired-card elevation="1">
      <div class="qfjk-page-body">
        <!-- 路由出口 -->
        <NuxtPage></NuxtPage>
      </div>
    </wired-card>
    <div v-if="!isLoginPage" class="qfjk-page-footer">
      <wired-button elevation="2" v-on:click="goto(0)"
        :class="isCurPage(0) ? 'qfjk-page-footer-disable-btn' : 'qfjk-page-footer-enable-btn'">去留言</wired-button>
      <wired-button elevation="2" v-on:click="goto(1)"
        :class="isCurPage(1) ? 'qfjk-page-footer-disable-btn' : 'qfjk-page-footer-enable-btn'">留言册</wired-button>
    </div>
  </div>

</template>

<script>
import "wired-elements"
export default {
  data() {
    return {
      routes: [
        "/msg_write",
        "/msg_list"
      ]
    }
  },
  computed: {
    isLoginPage() {
      return this.$route.path === '/'
    }
  },
  methods: {
    goto(index) {
      navigateTo(this.routes[index])
    },
    isCurPage(index) {
      return this.$route.path === this.routes[index]
    }
  }

}
</script>

<style lang="scss">
body {
  font-family: 'qiantubifengshouxieti';
  margin: 0;
}

.qfjk-page-container {
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  width: 90%;

  .qfjk-page-body {
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

  .qfjk-page-footer {
    height: 10vh;

    wired-button {
      margin-top: 1vh;
      height: 9vh;
    }

    .qfjk-page-footer-disable-btn {
      opacity: 0.5;
      color: rgb(170, 170, 170);
    }

    .qfjk-page-footer-enable-btn {
      opacity: 1;
      color: rgb(0, 0, 0);
    }
  }

}
</style>