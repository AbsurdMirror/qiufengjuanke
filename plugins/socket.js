import io from 'socket.io-client';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
  // 创建 Socket.IO 客户端实例
  const socket = io('http://localhost:5000', {
    // 可以在这里添加额外的 Socket.IO 客户端配置
  });

  // 监听服务器发送的自定义事件
  socket.on('custom_event', (data) => {
    console.log('Received custom event from server:', data);
    // 你可以在这里处理接收到的数据，比如更新 Vuex store（如果有的话）或触发 Vue 组件中的事件
    // 注意：由于这是插件级别，你不能直接访问 Vue 组件或 Vuex store。
    // 你可能需要通过事件总线、全局属性或其他机制来将数据传递到组件中。
  });

  // 发送消息到服务器的方法
  const sendMessageToServer = (event, message) => {
    socket.emit(event, message);
  };

  // 将 socket 对象和 sendMessageToServer 方法添加到 NuxtApp 的上下文中
  // 这样它们就可以在 Nuxt.js 应用的任何地方通过 `useNuxtApp()` 访问（尽管这通常不是最佳实践）
  // 或者，你可以考虑将它们注入到 Vue 实例的原型上（见下面的替代方法）
  // nuxtApp.$socket = socket;
  // nuxtApp.$sendMessageToServer = sendMessageToServer;

  // 更好的做法：将 socket 功能封装成一个可组合的 API 或 Vuex 模块，并在组件中按需使用

  // 替代方法：将 socket 功能注入到 Vue 组件的原型上（需要额外的配置）
  // 你可以使用 nuxtApp.vueApp.config.globalProperties 来添加全局属性
  nuxtApp.vueApp.config.globalProperties.$socket = socket;
  nuxtApp.vueApp.config.globalProperties.$sendMessageToServer = sendMessageToServer;

  // 注意：在 Nuxt 3 中，通常推荐使用 Composition API 和可组合的函数来处理状态和业务逻辑，
  // 而不是依赖于全局属性或 Vuex（尽管 Vuex 仍然兼容）。
});