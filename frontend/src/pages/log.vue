<template>
  <div class="log-page-container">
    <wired-card elevation="1">
      <div class="log-page-body">
        <h2>V0.2</h2>
        <ol>
          <li>页面改版</li>
          <li>修复bug: 提交按钮连续按多次提交</li>
          <li>新增日志功能</li>
          <li>新增爱心烟花功能</li>
        </ol>
      </div>
    </wired-card>
    <div class="log-page-footer">
      <wired-button elevation="2" v-on:click="gotoback()" class="log-page-footer-enable-btn">回首页</wired-button>
    </div>
  </div>

</template>

<script>
import "wired-elements"
export default {
  data() {
    return {
    }
  },
  methods: {
    gotoback() {
      navigateTo('/')
    },
  }
}
</script>

<style lang="scss">
body {
  font-family: 'qiantubifengshouxieti';
  margin: 0;
}

.log-page-container {
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  width: 90%;

  .log-page-body {
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

  .log-page-footer {
    height: 10vh;

    wired-button {
      margin-top: 1vh;
      height: 9vh;
    }

    .log-page-footer-disable-btn {
      opacity: 0.5;
      color: rgb(170, 170, 170);
    }

    .log-page-footer-enable-btn {
      opacity: 1;
      color: rgb(0, 0, 0);
    }
  }

}
</style>