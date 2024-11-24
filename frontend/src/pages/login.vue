<template>
  <div class="login-container-card">
    <h1>秋风倦客</h1>
    <wired-card elevation="3" class="login-input-card">
      <input placeholder="输入密钥" v-model="passData" />
    </wired-card>
    <wired-button class="login-commit-btn" elevation="2" v-on:click="greet">登录</wired-button>
  </div>
</template>

<script>
import "wired-elements";
import axios from 'axios';
import cookie from './src/static/cookie.js';
//选项式API
export default {
  data() {
    return {
      passData: ''
    }
  },
  methods: {
    greet() {
      console.log(this.passData)
      axios({
        withCredentials: true,
        url: '/qfjk_api/login',
        method: 'post',
        data: {
          'login_token': this.passData
        },
        headers: {
          "Content-Type": "application/json"
        },
        responseType: 'json' // 假设服务器返回JSON格式的数据
      }).then(response => {
        console.log(response);
        if (response.status === 200 && response.data.status === 1) {
          // cookie.setCookie('temp_token', response.data.temp_token, 1);
          console.log("login success", "temp_token", cookie.getCookie('temp_token'));
          navigateTo('/')
        } else {
          console.log("login fail");
        }
        this.isRotate = false; // 注意这里的this可能需要根据上下文进行调整，如果这段代码在某个方法中，可能需要用箭头函数或在外部保存this的引用
      }).catch(error => {
        console.error("Request failed:", error);
      });
    }
  }
}
</script>

<style lang="scss">
.login-container-card {
  width: 90%;
  height: 60vh;
  margin-left: calc(5% - 4px);
  margin-top: 15vh;

  h1 {
    text-align: center;
    height: 8vh;
    margin: 9vh 0 13vh 0;
    font-size: 8vh;
  }
}

.login-input-card {
  width: 80%;
  margin-left: calc(10% - 4px);
  height: 40px;

  input {
    width: calc(100% - 20px);
    margin-left: 10px;
    height: calc(40px - 5px);
    border: none;
    padding: 5px;
    resize: none;
    outline: none;
    font-size: 20px;
    font-family: 'qiantubifengshouxieti';
  }

}

.login-commit-btn {
  width: 80px;
  margin-top: 5vh;
  margin-left: calc(50% - 40px);
}
</style>