<template>
  <div class="card-game-container">
    <wired-card elevation="1">
      <div class="card-game-body">
        <div class="cardshelf">
          <!-- for loop -->
          <wired-card v-for="(item, index) in cards" :key="index" :data="item" v-on:click="showDialog(index)"
            class="card" elevation="2">
            <h2>{{ item.title }}</h2>
            <md-icon>{{ item.icon }}</md-icon>
            <!-- <h6>{{ item.subtitle }}</h6>
            <p>{{ item.content }}</p> -->
            <!-- <div class="card-board card-board-cycle"></div>
            <div class="card-board card-board-cycle"></div>
            <div class="card-board card-board-cycle"></div>
            <div class="card-board card-board-cycle"></div> -->
          </wired-card>
        </div>
      </div>
    </wired-card>
    <div class="card-game-footer">
      <wired-button elevation="2" :disabled="true">我收到的</wired-button>
      <wired-button elevation="2" :disabled="true">我送出的</wired-button>
      <wired-button elevation="2" v-on:click="gotoback()" class="card-game-footer-enable-btn">回首页</wired-button>
    </div>

    <wired-dialog :open="dialogOpen" class="card-game-dialog">
      <div class="card-game-dialog-content">
        <div style="width: 80%; margin: auto;">
          <h1>{{ cards[showIndex].title }}</h1>
          <md-icon class="gradient-icon">{{ cards[showIndex].icon }}</md-icon>
          <h3>{{ cards[showIndex].subtitle }}</h3>
          <p>{{ cards[showIndex].content }}</p>
          <p class="card-game-dialog-content-from">由<span class="gradient-text">{{ cards[showIndex].from }}</span>赠送</p>
          <md-icon class="card-game-dialog-close" v-on:click="dialogOpen = false">highlight_off</md-icon>
        </div>
      </div>
    </wired-dialog>
  </div>

</template>

<script>
import "wired-elements"
import "@material/web/all";

export default {
  data() {
    return {
      cards: [
        {
          "title": "亲亲卡",
          "subtitle": "多喝水，来亲亲！",
          "content": "可以在一天内任意指定亲亲方式",
          "from": "董正翔",
          "icon": "spa"
        },
        {
          "title": "期待更多",
          "subtitle": "宝贝喜欢吗？",
          "content": "喜欢我再做更多，嘿嘿嘿",
          "from": "Love",
          "icon": "help_center"
        },

      ],
      showIndex: 0,
      dialogOpen: false
    }
  },
  methods: {
    gotoback() {
      navigateTo('/')
    },
    showDialog(index) {
      console.log("clicked", index);
      this.showIndex = index;
      this.dialogOpen = true;
      let dialogCard = document.querySelector("#__nuxt > div > div > wired-dialog").shadowRoot.querySelector("#overlay > div:nth-child(2) > wired-card");
      console.log(dialogCard);
      if (dialogCard) {
        dialogCard.style.width = '70%';
      } else {
        console.error('无法找到指定的元素');
      }
    }
  },
  mounted() {
    let dialogCard = document.querySelector("#__nuxt > div > div > wired-dialog").shadowRoot.querySelector("#overlay > div:nth-child(2)");
    console.log(dialogCard);
    document.addEventListener('DOMContentLoaded', function () {
      let dialogCard = document.querySelector("#__nuxt > div > div > wired-dialog").shadowRoot.querySelector("#overlay > div:nth-child(2) > wired-card");
      console.log(dialogCard);
      if (dialogCard) {
        dialogCard.style.width = '70%';
      } else {
        console.error('无法找到指定的元素');
      }
    });
  }
}
</script>

<style lang="scss">
.cardshelf {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  --wired-icon-size: 80px;
  --md-icon-size: 80px;

  /* 块之间的间距，可以调整 */
  .card {
    flex: 0 1 calc((100% - 10px * 1) / 2);
    // max-width: calc(33.333%);
    /* 使用calc计算每个块的宽度，减去间距 */
    box-sizing: border-box;
    /* 包含padding和border在内计算宽度和高度 */
    height: 25vh;
    /* 固定高度 */
    background-color: #4CAF50;
    color: #eee;
    /* 背景颜色，可以自定义 */
    border: 1px solid #ccc;
    /* 边框，可以自定义 */
    position: relative;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    /* 字体大小，可以自定义 */
    text-align: center;
    padding: 10px;
    /* 内边距，可以自定义 */

    .card-board {
      position: absolute;
      top: 10px;
      width: 100%;
      height: 100%;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }

  .card:active {
    color: yellow;
    /* 被点击时的文本颜色 */
    background-color: #3e8e41;
    /* 被点击时的背景颜色（可选） */
  }

}

.card-game-dialog {
  .card-game-dialog-content {
    text-align: center;
    --md-icon-size: 80px;

    .card-game-dialog-close {
      --md-icon-size: 30px;
    }

    .gradient-text {
      /* 设置文字为透明，以便背景渐变显示 */
      color: transparent;

      /* 将背景渐变应用于文本 */
      background-image: linear-gradient(-10deg, #7028e4 0%, #e5b2ca 100%);

      /* 确保背景只裁剪到文本区域 */
      -webkit-background-clip: text;
      background-clip: text;

      /* 可选：添加一些文本装饰，如阴影，以增强效果 */
      -webkit-text-fill-color: transparent;
      /* 这在某些浏览器中可能是必需的，以确保文本填充色为透明 */
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      /* 添加轻微的阴影以增强可读性 */
    }

    .gradient-icon {
      /* 设置文字为透明，以便背景渐变显示 */
      color: transparent;

      /* 将背景渐变应用于文本 */
      background-image: linear-gradient(100deg, #c6a3ff 0%, orange 100%);

      /* 确保背景只裁剪到文本区域 */
      -webkit-background-clip: text;
      background-clip: text;

      /* 可选：添加一些文本装饰，如阴影，以增强效果 */
      -webkit-text-fill-color: transparent;
      /* 这在某些浏览器中可能是必需的，以确保文本填充色为透明 */
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      /* 添加轻微的阴影以增强可读性 */
    }

    .card-game-dialog-content-from {
      margin-top: 9vh;
    }
  }

  .wired-rendered {
    width: 70% !important;
  }
}


.card-game-container {
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  width: 90%;

  .card-game-body {
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

  .card-game-footer {
    height: 10vh;

    wired-button {
      margin-top: 1vh;
      height: 9vh;
    }

    .card-game-footer-disable-btn {
      opacity: 0.5;
      color: rgb(170, 170, 170);
    }

    .card-game-footer-enable-btn {
      opacity: 1;
      color: rgb(0, 0, 0);
    }
  }

}
</style>