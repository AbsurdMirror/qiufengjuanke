<template>
  <div>
    <h1>Vue.js with Socket.IO</h1>
    <input v-model="message" placeholder="Type a message..." />
    <button @click="sendMessage">Send Message</button>
    <ul>
      <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
    </ul>
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  data() {
    return {
      socket: null,
      message: '',
      messages: []
    };
  },
  created() {
    // 在组件创建时初始化 Socket.IO 客户端
    this.socket = io('http://localhost:5000');

    // 监听服务器发送的 'message_from_server' 事件
    this.socket.on('message_from_server', (data) => {
      this.messages.push(data.message);
    });
  },
  methods: {
    sendMessage() {
      // 发送消息到服务器
      this.socket.emit('message_from_client', this.message);
      this.message = '';
    }
  },
  beforeDestroy() {
    // 在组件销毁前断开 Socket.IO 连接
    if (this.socket) {
      this.socket.disconnect();
    }
  }
};
</script>

<style scoped>
/* 添加一些简单的样式 */
input {
  margin-right: 10px;
  padding: 5px;
  font-size: 16px;
}

button {
  padding: 5px 10px;
  font-size: 16px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 5px 0;
}
</style>