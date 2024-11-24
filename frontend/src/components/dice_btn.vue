<template>
  <div class="dice" :style="diceStyle">
    <!-- SVG 斜线阴影 -->
    <svg class="dice-shadow" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="diagonal-stripes" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
          <rect width="2" height="4" transform="translate(0,0)" fill="rgba(0,0,0,0.2)"></rect>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diagonal-stripes)"></rect>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'DiceButton',
  props: {
    color: {
      type: String,
      default: '#FF0000' // 默认颜色为红色
    }
  },
  computed: {
    diceStyle() {
      return {
        backgroundColor: this.color,
        width: '100px', // 可以根据需要调整大小
        height: '100px', // 可以根据需要调整大小
        borderRadius: '15px', // 圆角
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // 立方体阴影
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      };
    }
  }
};
</script>

<style scoped>
.dice {
  position: relative;
}

.dice-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply; /* 使阴影与背景色混合 */
}
</style>