<template>
  <div class="msg-list-card">
    <wired-card v-for="(item, index) in allData" :key="index" :data="item" class="msg-list-item-card">
      <div class="msg-list-item-card-content">
        <img :src="avatars[item.author]" alt="头像">
        <div>
          <h5>{{ item.author }}</h5>
          <h6>{{ item.formatted_time }}</h6>
          <p v-html="item.content.replace(/\n/g, '<br>')"></p>
        </div>
      </div>
    </wired-card>
    <!-- 加载更多数据的按钮或触发区域 -->
    <div class="load-more">
      <wired-button v-if="hasMoreData" v-on:click="fetchData">加载更多</wired-button>
      <p v-else>没有更多数据了 ~(*/ω＼*)~ </p>
    </div>
  </div>
</template>

<script>
import "wired-elements"
import axios from 'axios'

const a = ref(new URL("~/static/dongzhengxiang.jpg", import.meta.url).href)
const b = ref(new URL("~/static/qingyiting.jpg", import.meta.url).href)

export default {
  data() {
    return {
      allData: [], // 存储所有列表数据
      page_number: 1, // 当前页码
      page_size: 5, // 每页条数
      hasMoreData: true,
      // 头像字典
      avatars: {
        'dongzhengxiang': a,
        'qinqyiting': b
      }
    };
  },
  mounted() {
    var verify_done = false;
    axios({
      withCredentials: true,
      url: '/qfjk_api/verify',
      method: 'post'
    })
      .then(response => {
        console.log(response.data);

        if (response.status === 200 && response.data.status === 1) {
          console.log("verify success");
          verify_done = true;
          this.fetchData(); // 获取第一页数据
        } else {
          console.log("verify fail");
          navigateTo('/')
        }
      })
      .catch(error => {
        console.error("Request failed:", error);
        navigateTo('/')
      });

    // while(!verify_done){
    //   console.log("waiting for verify done...");
    // }

  },
  methods: {
    fetchData() {
      axios({
        withCredentials: true,
        url: '/qfjk_api/get_page_messages',
        method: 'get',
        params: {
          'page_number': this.page_number,
          'page_size': this.page_size,
        },
        responseType: 'json' // 假设服务器返回JSON格式的数据
      }).then(response => {
        console.log(response);
        if (response.status === 200 && response.data.status === 1) {
          console.log("verify success");
          this.hasMoreData = response.data.data;
          if (response.data.data) {
            this.allData = [...this.allData, ...response.data.data];
            this.page_number++;
          }
        } else {
          console.log("verify fail");
        }
      }).catch(error => {
        console.error("Request failed:", error);
      });
      // // 假设API返回的数据格式为 { data: [...], hasNext: true/false }
      // const apiResponse = {
      //   data: Array.from({ length: this.page_size }, (_, i) => ({
      //     id: (page - 1) * this.page_size + i + 1,
      //     content: `Item ${(page - 1) * this.page_size + i + 1}`
      //   })),
      //   hasNext: page * this.page_size < 100 // 假设总共有100条数据
      // };

      // this.allData = [...this.allData, ...apiResponse.data];
      // this.hasMoreData = apiResponse.hasNext;
    },
    loadMoreData() {
      if (this.hasMoreData) {
        this.page_number++;
        this.fetchData(this.page_number);
      }
    }
  }
};
</script>

<style lang="scss">
.msg-list-card {
  .msg-list-item-card {
    width: calc(100% - 20px);
    // margin-left: calc(10% - 5px);

    .msg-list-item-card-content {
      display: flex;

      img {
        margin-top: 1vh;
        margin-bottom: 1vh;
        margin-right: 10px;
        width: 15%;
        object-fit: contain;
        object-position: top;
      }

      div {
        flex: 1;

        h5 {
          float: left;
          margin-top: 1vh;
          margin-bottom: 1vh;
        }

        h6 {
          float: right;
          margin-top: 1vh;
          margin-bottom: 1vh;
        }

        p {
          width: 100%;
          float: left;
          margin-top: 1vh;
          margin-bottom: 1vh;
        }

      }

    }

  }

  .load-more {
    text-align: center;
    margin: 2vh;
    padding: 10px;
    cursor: pointer;
  }

}
</style>
