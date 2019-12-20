<template>
  <div class="mine">
    <div class="header">
      <i class="iconfont icon-message" @click="message">&#xe013;</i>
      <i class="iconfont icon-setting" @click="setting">&#xe012;</i>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="main">
        <div class="content">
          <img src="../../assets/images/headImage.jpg" alt="">
          <h1>清风</h1>
          <p @click="profile">编辑个人资料</p>
        </div>
        <div class="border"></div>
        <ul>
          <li v-for="(item, index) in settings" :key="index">
            <div class="left">
              <img :src="item.url" alt="">
              <span>{{item.name}}</span>
            </div>
            <div class="right">
              <h1 class="big">{{item.text}}</h1>
              <h1 class="small"></h1>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <v-tar></v-tar>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Tar from "../common/Tar"
export default {
  components: {
    "v-tar": Tar
  },
  data () {
    return {
      settings: [
        {
          url: require('../../assets/images/1.png'),
          name: '账户',
          text: '已购2本书'
        },
        {
          url: require('../../assets/images/2.png'),
          name: '无限卡·免费试用',
          text: '还剩14天'
        },
        {
          url: require('../../assets/images/3.png'),
          name: '读书排行榜',
          text: '第1名'
        },
        {
          url: require('../../assets/images/4.png'),
          name: '关注',
          text: '1人关注我'
        },
        {
          url: require('../../assets/images/5.png'),
          name: '读书小队',
          text: '3人成队'
        },
        {
          url: require('../../assets/images/6.png'),
          name: '每日一答',
          text: '挑战12道题'
        },
        {
          url: require('../../assets/images/7.png'),
          name: '阅读记录',
          text: '11个'
        },
        {
          url: require('../../assets/images/8.png'),
          name: '笔记',
          text: '0个'
        },
        {
          url: require('../../assets/images/9.png'),
          name: '书单',
          text: '1个'
        }
        
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper ,{click: true});
    })
  },
  methods: {
    message () {
      this.$router.push({
        path: '/Inform'
      })
    },
    setting () {
      this.$router.push({
        path: '/Setting'
      })
    },
    profile () {
      
      this.$router.push({
        path: '/Profile'
      })

    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function.styl'
.mine
  width 100%
  .header
    height px2rem(80px)
    margin-top px2rem(30px)
    .iconfont
      font-size 24px
    .icon-message
      float left 
      margin-left px2rem(40px)
    .icon-setting
      float right
      margin-right  px2rem(40px)
  .wrapper
    overflow hidden
    position relative
    top 0
    height px2rem(1300px)
    .content
      height px2rem(400px)
      img 
        width px2rem(200px)
        height px2rem(200px)
        border-radius 50%
      h1
        margin-top px2rem(40px)
        font-size 20px
        font-weight 800
        color #000
      p
        margin-top px2rem(40px)
        font-size 12px
        color #696969
    .border
      border px2rem(10px) solid rgba(0,0,0,0.1)
    ul
      li
        height px2rem(200px)
        .left
          height px2rem(200px)
          float left
          margin-left px2rem(40px)
          display flex
          align-items center
          img
            width px2rem(60px)
            height px2rem(60px)
            border-radius 50%
          span
            margin-left px2rem(20px)
            font-size 16px
        .right
          height px2rem(200px)
          // float right
          margin-right px2rem(40px)
          display flex
          align-items center
          justify-content flex-end
          .big
            font-size 15px
            font-weight 600
            color rgba(0, 0, 0, .7)
          .small
            font-size 14px
            font-weight 500
            color #696969
</style>