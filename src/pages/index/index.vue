<template>
  <div></div>
</template>

<script>
  // 在进入小程序的时候，会先create所有组件，所以如果想要达到同步效果，代码放入mounted中
import { getUserInfo, getSetting } from '../../utils/wx'
export default {
    data () {
      return {
      }
    },
    async mounted () {
      const setting = await getSetting()

      console.log('getSetting执行完成')
      console.log(setting)

      if (setting.authSetting['scope.userInfo'] === true) {
        const info = await getUserInfo()

        console.log('getUserInfo执行完成')
        console.log(info)

        wx.setStorageSync('username', info.userInfo.nickName)
        wx.setStorageSync('url', info.userInfo.avatarUrl)
        wx.reLaunch({url: '../laopo/main'})
      } else {
        console.log('no')

        wx.reLaunch({url: '../power/main'})
      }
    }
    // mounted () {
    //   wx.getSetting({ // 获取用户权限表
    //     success (res) {
    //       console.log(res)
    //       if (res.authSetting['scope.userInfo'] === true) { // 判断用户是否给与了获取个人信息的权限
    //         console.log('yes')
    //         wx.getUserInfo({
    //           success: (res) => { // 如果给与了获取信息的权限,而且获取信息成功，获取个人信息并且存入storage中
    //             wx.setStorageSync('username', res.userInfo.nickName)
    //             wx.setStorageSync('url', res.userInfo.avatarUrl)
    //             wx.reLaunch({url: '../laopo/main'})
    //           }
    //         })
    //       } else { // 如果没有给与权限，则跳转到权限许可页面
    //         console.log('no')
    //         wx.reLaunch({url: '../power/main'})
    //       }
    //     }
    //   })
    // }
}
</script>

<style scoped>

</style>
