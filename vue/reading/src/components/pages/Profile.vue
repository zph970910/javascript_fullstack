<template>
  <div class="profile">
    <div class="header">
      <i class="iconfont icon-return" @click="returnMine">&#xe014;</i>
      <span>编辑个人资料</span>
    </div>
    <div class="headImage">
      <span>头像</span>
      <img src="../../assets/images/headImage.jpg" alt="">
    </div>
    <van-cell-group>
      <van-field v-model="message1" label="昵称" type="textarea" placeholder="请输入昵称" rows="1" autosize size="large" input-align="right" label-align="left" label-width="40px"/>
      <van-field v-model="message2" label="介绍自己" type="textarea" placeholder="可以说说你的职业或爱好" rows="1" size="large" autosize input-align="right" label-align="left" label-width="70px"/>
      <van-field v-model="message3" label="签名" type="textarea" placeholder="请输入签名" rows="1" size="large" autosize input-align="right" label-align="left" label-width="40px"/>
    </van-cell-group>
    .
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      message1: '',
      message2: '',
      message3: '',
      currentDate: new Date()
    }
  },
  methods: {
    showPopup () {
      this.show = true
    },
    returnMine () {
      this.$router.push({
        path: '/Mine'
      })
    }
  }
}
</script>

<style lang="stylus">
@import '../../assets/css/function.styl'
.profile
  width 100%
  .header
    position fixed
    top  0
    display flex
    width 100%
    z-index 100
    margin-top px2rem(40px)
    padding-bottom px2rem(40px)
    .icon-return
      float left
      margin-left px2rem(20px)
      font-size 18px
      color #707070
    span 
      font-size 18px
      font-weight 600
      color #000
      margin 0 auto
      padding-right px2rem(20px)
  .van-cell-group
    margin-top px2rem(150px)
    .van-cell
     padding px2rem(50px) px2rem(30px)
     .van-cell__title
      color rgba(0, 0, 0, 0.6)
  .headImage
    position relative
    top px2rem(120px)
    width 100%
    height px2rem(200px)
    span 
      color rgba(0, 0, 0, 0.6)
      float left
      margin px2rem(80px) px2rem(40px)
    img 
      width px2rem(200px)
      height px2rem(200px)
      border-radius 50%
      margin-left px2rem(450px)
</style>