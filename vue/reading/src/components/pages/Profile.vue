<template>
  <div class="profile">
    <div class="header">
      <i class="iconfont icon-return" @click="returnMine">&#xe014;</i>
      <span>编辑个人资料</span>
    </div>
    <div class="headImage">
      <span>头像</span>
      <img :src="headImage" alt="">
    </div>
    <van-cell-group>
      <van-field @input="inputName" v-model="username" label="昵称" type="textarea" placeholder="请输入昵称" rows="1" autosize size="large" input-align="right" label-align="left" label-width="40px"/>
      <van-field @input="inputHobby" v-model="hobby" label="介绍自己" type="textarea"  maxlength="20" placeholder="可以说说你的职业或爱好" rows="1" size="large" autosize input-align="right" label-align="left" label-width="70px"/>
      <van-field @input="inputIntro" v-model="introduce" label="签名" type="textarea"  maxlength="30" placeholder="请输入签名" rows="2" size="large" autosize input-align="right" label-align="left" label-width="40px"/>
    </van-cell-group>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      username: '',
      hobby: '',
      introduce: '',
    }
  },
  created () {
    this.username = this.$store.state.user[this.i].username,
    this.hobby = this.$store.state.user[this.i].hobby,
    this.introduce = this.$store.state.user[this.i].introduce
  },
  mounted () {
    
  },
  computed: {
    i () {
      return this.$store.state.i
    },
    headImage () {
      return this.$store.state.user[this.i].headImage
    },
  },
  methods: {
    showPopup () {
      this.show = true
    },
    returnMine () {
      this.$router.go(-1)
    },
    inputName (value) {
      this.username == value
      this.$store.commit('setUsername', this.username)
    },
    inputHobby (value) {
      this.hobby == value
      this.$store.commit('setHobby', this.hobby)
    },
    inputIntro (value) {
      this.introduce == value
      this.$store.commit('setIntro', this.introduce)
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