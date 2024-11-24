<template>
  <div class="dice">
    <!-- <h1>Vue.js with Socket.IO</h1>
    <input v-model="message" placeholder="Type a message..." />
    <button @click="sendMessage">Send Message</button>
    <ul>
      <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
    </ul>
    <md-icon-button style="width:100px;height: 100px;"><md-icon>casino</md-icon></md-icon-button> -->
    <dice_blk class="dice_blk_shape dice_other_blk_0" />
    <dice_blk class="dice_blk_shape dice_other_blk_1" />
    <dice_blk class="dice_blk_shape dice_other_blk_2" />
    <dice_blk class="dice_blk_shape dice_other_blk_3" />
    <dice_blk class="dice_blk_shape dice_other_blk_4" />
    <wired-icon-button elevation="2" class="dice_other_icon_btn"
      v-on:click="greet"><md-icon>casino</md-icon></wired-icon-button>

    <dice_btn color="#3498db" class="dice_btn_shape dice_other_btn_0"/>
    <dice_btn color="#2ecc71" class="dice_btn_shape dice_other_btn_1"/>
    <dice_btn color="#e74c3c" class="dice_btn_shape dice_other_btn_2"/>
    <dice_btn color="#ffffff" class="dice_btn_shape dice_other_btn_3"/>
    <dice_btn color="#3498db" class="dice_btn_shape dice_other_btn_4"/>

    <dice_blk class="dice_blk_shape  dice_my_blk_0" />
    <dice_blk class="dice_blk_shape  dice_my_blk_1" />
    <dice_blk class="dice_blk_shape  dice_my_blk_2" />
    <dice_blk class="dice_blk_shape  dice_my_blk_3" />
    <dice_blk class="dice_blk_shape  dice_my_blk_4" />
    <wired-icon-button elevation="2" class="dice_my_icon_btn"><md-icon>casino</md-icon></wired-icon-button>

    <dice_btn color="#3498db" class="dice_btn_shape  dice_my_btn_0" :style="{bottom: `${test_bottom[0]}`}" v-on:click="move_test(0)"/>
    <dice_btn color="#2ecc71" class="dice_btn_shape  dice_my_btn_1" :style="{bottom: `${test_bottom[1]}`}" v-on:click="move_test(1)"/>
    <dice_btn color="#e74c3c" class="dice_btn_shape  dice_my_btn_2" :style="{bottom: `${test_bottom[2]}`}" v-on:click="move_test(2)"/>
    <dice_btn color="#ffffff" class="dice_btn_shape  dice_my_btn_3" :style="{bottom: `${test_bottom[3]}`}" v-on:click="move_test(3)"/>
    <dice_btn color="#3498db" class="dice_btn_shape  dice_my_btn_4" :style="{bottom: `${test_bottom[4]}`}" v-on:click="move_test(4)"/>
  </div>
</template>

<script>
import io from 'socket.io-client';
import dice_btn from '~/components/dice_btn.vue';
import dice_blk from '~/components/dice_blk.vue';
import "wired-elements";
import "@material/web/all";

export default {
  data() {
    return {
      socket: null,
      diceSocket: null,
      message: '',
      messages: [],
      test_bottom: ['280px', '280px', '280px', '280px', '280px'],
    };
  },
  mounted() {
    // 在组件创建时初始化 Socket.IO 客户端
    // this.socket = io('http://39.105.204.120', {
    //   path: '/qfjk_api/dice/socket.io/',
    //   transports: ['websocket'] // 如果你只想使用 WebSocket
    // });

    // // 要与命名空间 /dice 交互，你需要创建一个新的命名空间实例
    // // this.socket =socket.of('/dice');

    // // 监听服务器发送的 'message_from_server' 事件
    // this.socket.on('connect_msg', (data) => {
    //   console.log('connect_msg', data)
    //   this.messages.push(data.message);
    //   console.log(data.message);
    // });

    // this.socket.on('connect', () => {
    //   console.log('Connected to Socket.IO server');
    // });
  },
  methods: {
    sendMessage() {
      // 发送消息到服务器
      // this.socket.emit('message_from_client', this.message);
      // this.message = '';
    },
    move_test(test_bottom) {
      // // 获取被点击的元素
      // const clickedElement = event.target;

      // // 使用 window.getComputedStyle 来获取元素的计算样式
      // const computedStyle = window.getComputedStyle(clickedElement);

      // // 获取特定的 CSS 属性值
      // const bottom = computedStyle.bottom;

      // 在控制台中打印这些值
      console.log('bottom:', test_bottom);
      this.test_bottom[test_bottom] = '140px';
      console.log("${this.test_bottom[test_bottom]}")


      // // 你可以在这里添加更多的逻辑来处理这些值
      // clickedElement.style.bottom = '0px';
    },
  },
  beforeDestroy() {
    // 在组件销毁前断开 Socket.IO 连接
    if (this.socket) {
      this.socket.disconnect();
    }
  }
};
</script>

<style lang="scss">
.dice {
  --wired-icon-size: 90px;
  --md-icon-size: 90px;
  position: relative;
  height: calc(90vh - 20px);

  .dice_btn_shape {
    width: 50px !important;
    height: 50px !important;
    position: absolute !important;
    transition: all 0.2s ease;
  }

  .dice_blk_shape {
    width: calc(50px - 1.6px * 2) !important;
    height: calc(50px - 1.6px * 2) !important;
    position: absolute !important;
    transition: all 0.2s ease;
  }

  .dice_other_blk_0 {
    left: 0px;
    top: 140px;
  }

  .dice_other_blk_1 {
    left: calc(50px * 1 + 20px);
    top: 140px;
  }

  .dice_other_blk_2 {
    left: calc(50px * 2 + 40px);
    top: 140px;
  }

  .dice_other_blk_3 {
    left: calc(50px * 3 + 60px);
    top: 140px;
  }

  .dice_other_blk_4 {
    left: calc(50px * 4 + 80px);
    top: 140px;
  }

  .dice_other_icon_btn {
    position: absolute;
    left: 20px;
    top: 0px;
  }

  .dice_other_btn_0 {
    left: 0px;
    top: 280px;
  }

  .dice_other_btn_1 {
    left: calc(50px * 1 + 20px);
    top: 280px;
  }

  .dice_other_btn_2 {
    left: calc(50px * 2 + 40px);
    top: 280px;
  }

  .dice_other_btn_3 {
    left: calc(50px * 3 + 60px);
    top: 280px;
  }

  .dice_other_btn_4 {
    left: calc(50px * 4 + 80px);
    top: 280px;
  }











  .dice_my_blk_0 {
    left: 0px;
    bottom: 140px
  }

  .dice_my_blk_1 {
    left: calc(50px * 1 + 20px);
    bottom: 140px
  }

  .dice_my_blk_2 {
    left: calc(50px * 2 + 40px);
    bottom: 140px
  }

  .dice_my_blk_3 {
    left: calc(50px * 3 + 60px);
    bottom: 140px
  }

  .dice_my_blk_4 {
    left: calc(50px * 4 + 80px);
    bottom: 140px
  }

  .dice_my_icon_btn {
    position: absolute;
    right: 20px;
    bottom: 0px;
  }

  .dice_my_btn_0 {
    left: 0px;
    bottom: 280px;
  }

  .dice_my_btn_1 {
    left: calc(50px * 1 + 20px);
    bottom: 280px;
  }

  .dice_my_btn_2 {
    left: calc(50px * 2 + 40px);
    bottom: 280px;
  }

  .dice_my_btn_3 {
    left: calc(50px * 3 + 60px);
    bottom: 280px;
  }

  .dice_my_btn_4 {
    left: calc(50px * 4 + 80px);
    bottom: 280px;
  }

}
</style>