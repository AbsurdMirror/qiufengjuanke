<template>
  <div class="dice"></div>
</template>

<script>
export default {
  name: 'DiceBlock',
};
</script>

<style scoped>
.dice {
  width: 100px; /* 你可以根据需要调整大小 */
  height: 100px; /* 你可以根据需要调整大小 */
  border-radius: 15px; /* 圆角 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 立方体阴影 */
  border: 2px dashed #000; /* 虚线边框，颜色可以是任何你想要的 */
  background-color: rgba(255, 255, 255, 0.1); /* 透明背景，这里设置了10%的不透明度 */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>