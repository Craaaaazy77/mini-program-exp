<template>
  <div class="container">
      <button open-type="getUserInfo" lang="zh_CN" class="zan-btn zan-btn--primary" @getuserinfo="getUserInfo">请授权</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    getUserInfo () { // 授权回调函数，同意和不同意
      wx.getUserInfo({
        success: (res) => {
          console.log('授权')
          wx.setStorageSync('username', res.userInfo.nickName)
          wx.setStorageSync('url', res.userInfo.avatarUrl)
          wx.reLaunch({url: '../laopo/main'})
        },
        fail: () => {
          console.log('不授权')
          wx.reLaunch({url: '../laopo/main?power=false'})
        }
      })
    }
  },
  mounted () {
    console.log('power mounted')
  }
}
</script>

<style scoped>

</style>
