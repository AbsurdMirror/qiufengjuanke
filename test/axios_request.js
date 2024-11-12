
axios.post('http://39.105.204.120/qfjk_api/verify', {
  'temp_token': temp_token
}, {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  responseType: 'json' // 确保响应类型被正确解析
})
.then(response => {
  console.log(response);
  if (response.status === 200 && response.data.status === 1) {
    console.log("verify success");
    this.real_mounted();
  } else {
    console.log("verify fail");
    cookie.delCookie("temp_token");
    uni.redirectTo({
      url: '/pages/login/login'
    });
  }
})
.catch(error => {
  console.error("Error making request", error);
});

