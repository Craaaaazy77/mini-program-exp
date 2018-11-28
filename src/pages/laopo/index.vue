<template>
  <div class="container">
      <input type="text" v-model="search">

      <div style="margin:45rpx;clear:both;">
        <button class="zan-btn zan-btn--primary" @click="baidusearch">search</button>
      </div>

      <div class="doc-title zan-hairline--bottom" style="font-size: 14px;font-weight: bold;float:left;">
        <img :src="userInfo.avatarUrl" style="max-height: 22vw;max-width: 22vw;" />
       
      </div>

      <div class="doc-title zan-hairline--bottom" style="font-size: 18px;font-weight: bold;float:left;margin-top: 5vw;">
        <p style="font-size: 14px;"> 你好啊，{{userInfo.nickName}}</p>
        这是你的<span style="color:#ffc0cb">老婆生成器</span>哟
      </div>
      
      <div style="margin:45rpx;clear:both;">
        <button class="zan-btn zan-btn--primary" @click="createWife">生成一个老婆！</button>
      </div>
      
      <div class="zan-panel">
        <div class="zan-cell">
          <div class="zan-cell__bd">身高</div>
          <div class="zan-cell__ft">{{wife.height}}</div>
        </div>

        <div class="zan-cell">
          <div class="zan-cell__bd">体重</div>
          <div class="zan-cell__ft">{{wife.weight}}</div>
        </div>

        <div class="zan-cell">
          <div class="zan-cell__bd">CUP</div>
          <div class="zan-cell__ft">{{wife.cup}}</div>
        </div>

        <div class="zan-cell">
          <div class="zan-cell__bd">肤色</div>
          <div class="zan-cell__ft">{{wife.fuse}}</div>
        </div>

        <div class="zan-cell">
          <div class="zan-cell__bd">发型</div>
          <div class="zan-cell__ft">{{wife.hair}}</div>
        </div>

        <div class="zan-cell">
          <div class="zan-cell__bd">发色</div>
          <div class="zan-cell__ft" :style="{background:wife.hairColor}">{{wife.hairColor}}</div>
        </div>

        <div class="zan-cell">
          <div class="zan-cell__bd">瞳色</div>
          <div class="zan-cell__ft" :style="{background:wife.eyeColor}">{{wife.eyeColor}}</div>
        </div>

        <div class="zan-cell">
          <div class="zan-cell__bd">属性</div>
          <div class="zan-cell__ft">{{wife.prop}}</div>
        </div>

      </div>

      <div style="margin:45rpx;clear:both;">
        <button class="zan-btn zan-btn--primary" open-type="share">分享老婆！</button>
      </div>

      <_toast />
  </div>
</template>

<script>
import ZanToast from 'mpvue-zanui/src/components/zan/toast'
import { getComponentByTag } from 'mpvue-zanui/src/utils/helper'
import store from '../../store'
export default {
  components: {
    _toast: ZanToast
  },
  data () {
    return {
      wife: {
        username: '',
        url: '',
        height: '',
        weight: '',
        cup: '',
        fuse: '',
        hair: '',
        hairColor: '',
        eyeColor: '',
        prop: ''
      },
      userInfo: {
        nickName: '',
        avatarUrl: ''
      },
      search: ''
    }
  },
  methods: {
    async baidusearch () {
      var a = await this.$store.dispatch('search', this.search)
      console.log('返回数据')
      console.log(a)
    },
    createWife () {
      this.wife.height = this.random(155, 175) + 'cm'
      this.wife.weight = this.random(40, 60) + 'kg'
      this.wife.cup = ['A', 'B', 'C', 'D', 'E', 'F'][this.random(0, 5)]
      this.wife.fuse = ['黝黑', '雪白', '正常'][this.random(0, 2)]
      this.wife.hair = ['双马尾', '单马尾', '黑长直', '波波头', '板鸭头', '光头'][this.random(0, 5)]
      this.wife.hairColor = this.randomColor()
      this.wife.eyeColor = this.randomColor()
      this.wife.prop = ['傲娇', '病娇', '公主', '大小姐', '天然呆', '扶她', '伪娘'][this.random(0, 6)]
    },
    random (minNum, maxNum) {
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
    },
    randomColor () {
      return '#' + Math.ceil(Math.random() * 0xffffff).toString(16)
    },
    noUserInfo () {
      this.userInfo.nickName = '不愿透露姓名的肥宅'
      this.toast.showZanToast({
        title: '您没有授权个人信息，我不知道您哪位哦',
        icon: 'fail'
      })
    }
  },
  created () {
    console.log('laopo created')
  },
  beforeMount () {
    console.log('laopo beforeMount')
  },
  async mounted () {
    // console.log('laopo timeout start')
    // await new Promise((resolve) => {
    //   setTimeout(resolve, 500)
    // })
    // console.log('laopo timeout end')
    this.toast = getComponentByTag(this, '_toast')
    if (this.$root.$mp.query.power === 'false' || !wx.getStorageSync('username')) { // 判断是否为未授权情况，或者storage被清空情况
      this.noUserInfo()
    } else {
      this.userInfo.nickName = wx.getStorageSync('username')
      this.userInfo.avatarUrl = wx.getStorageSync('url')
    }
  },
  onShareAppMessage (res) {
    store.commit('setWife', this.wife)
    console.log(res)
    return {
      title: '转发老婆',
      path: '/pages/sharelaopo/main'
    }
  }
}
</script>

<style scoped>

</style>
