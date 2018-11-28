<template>
  <div class="container">

      <div class="doc-title zan-hairline--bottom" style="font-size: 14px;font-weight: bold;float:left;">
        <img :src="userInfo.avatarUrl" style="max-height: 22vw;max-width: 22vw;" />
       
      </div>

      <div class="doc-title zan-hairline--bottom" style="font-size: 18px;font-weight: bold;float:left;margin-top: 5vw;">
        <p style="font-size: 14px;"> 你好啊，{{userInfo.nickName}}</p>
        这是你朋友的<span style="color:#ffc0cb">老婆</span>哟
      </div>

      <div style="margin:45rpx;clear:both;">
        <button class="zan-btn zan-btn--primary" @click="createWife">生成自己的老婆！</button>
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

  </div>
</template>

<script>
export default {
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
      }
    }
  },
  methods: {
    createWife () {
      wx.reLaunch({url: '../index/main'})
    }
  },
  mounted () {
    this.wife = this.$store.state.wife
  }
}
</script>

<style scoped>

</style>
