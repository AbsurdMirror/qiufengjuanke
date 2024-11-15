<template>
  <wired-card elevation="1" class="container-card">
    <h1>留言板</h1>
    <wired-card elevation="3" class="textarea-card">
      <textarea placeholder="说点什么" v-model="message"></textarea>
    </wired-card>
    <wired-button  class="commit-btn" elevation="2" v-on:click="greet">Submit</wired-button>
  </wired-card>
</template>

<script>
import "wired-elements"
//选项式API
export default {
  data() {
    return {
      message: ''
    }
  },
  methods: {
    greet() {
      alert('Hello ' + this.message + '!')
      //axios post
      this.$axios.post('/api/message', {
        message: this.message
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style lang="scss">
.container-card {
  width: 90%;
  height: 90vh;
  margin-left: calc(5% - 4px); 

  h1 {
    text-align: center;
    height: 5vh;
    margin: 3vh 0 6vh 0;
  }
}

.textarea-card {
  width: 80%;
  margin-left: calc(10% - 4px); 
  height: calc(90vh - 5vh - 3vh - 5vh - 20vh);

  textarea {
    width: calc(100% - 20px);
    margin-left: 10px;
    height: calc(90vh - 5vh - 3vh - 5vh - 20vh - 2vh);
    border: none;
    padding: 5px;
    resize: none;
    outline:none;
    font-size: 20px;
    font-family: 'qiantubifengshouxieti';
  }

}

.commit-btn {
    margin-top: 3vh;
    float: right;
    margin-right: calc(20% - 10% + 4px - 20px); 
  }

</style>