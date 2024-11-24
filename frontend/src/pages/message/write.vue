<template>
  <div class="msg-write-container-card">
    <h1>留言板</h1>
    <wired-card elevation="3" class="msg-write-textarea-card">
      <textarea placeholder="说点什么" v-model="message"></textarea>
    </wired-card>
    <wired-button class="msg-write-commit-btn" :disabled="submit_status" elevation="2" v-on:click="submit">提交</wired-button>
  </div>
</template>

<script>
import "wired-elements"
import axios from 'axios'
//选项式API
export default {
  data() {
    return {
      message: '',
      submit_status: false
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
  methods: {
    submit() {
      var that = this;
      if (this.message === '') {
        alert('请输入内容');
        return;
      }
      if (this.submit_status) {
        return;
      }
      this.submit_status = true;
      //axios post
      axios({
        withCredentials: true,
        url: '/qfjk_api/submit_message',
        method: 'post',
        data: {
          'type': 'text',
          'content': this.message
        },
        headers: {
          "Content-Type": "application/json"
        },
        responseType: 'json' // 假设服务器返回JSON格式的数据
      }).then(function (response) {
        console.log(response);
        alert('提交成功');
        that.message = ''
        this.submit_status = false;
      })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<style lang="scss">
.msg-write-container-card {
  height: calc(90vh - 20px);
  width: calc(100% - 20px);

  h1 {
    text-align: center;
    height: 5vh;
    margin: 3vh 0 6vh 0;
  }
}

.msg-write-textarea-card {
  width: 80%;
  margin-left: calc(10% + 6px);
  height: calc(90vh - 5vh - 3vh - 5vh - 20vh);

  textarea {
    width: calc(100% - 20px);
    margin-left: 10px;
    height: calc(90vh - 5vh - 3vh - 5vh - 20vh - 2vh);
    border: none;
    padding: 5px;
    resize: none;
    outline: none;
    font-size: 20px;
    font-family: 'qiantubifengshouxieti';
  }

}

.msg-write-commit-btn {
  margin-top: 3vh;
  float: right;
  margin-right: calc(20% - 10% + 4px - 20px);
}
</style>