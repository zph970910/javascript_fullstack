<template>
  <div class="mine">
    <div class="header">
      <i class="iconfont icon-message" @click="message">&#xe013;</i>
      <i class="iconfont icon-setting" @click="setting">&#xe012;</i>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="main">
        <div class="content" v-if="isLogin" @click="profile">
          <div class="headImageWrapper">
            <img :src="headImage" alt="">
          </div>
          <h1>{{username}}</h1>
          <div class="hobbyWrapper" v-if="hasHobby">
            <p>{{hobby}}</p>
            <p>{{introduce}}</p>
          </div>
          <div class="hobbyWrapper" v-else>
            <p>编辑个人资料</p>
          </div>
        </div>
        <div class="content" v-else @click="toLogin">
          <div class="headImage">
            <i class="iconfont">&#xe007;</i>
          </div>
          <h1>游客</h1>
          <div class="hobbyWrapper">
            <p>点击登录 ></p>
          </div>
        </div>
        <div class="border"></div>
        <div v-if="isLogin">
          <li >
            <div class="left">
              <img src="../../assets/images/1.png" alt="">
              <span>账户</span>
            </div>
            <div class="right">
              <h1 class="big">100.00</h1>
              <h1 class="small">已购3本书</h1>
            </div>
          </li>
          <li >
            <div class="left">
              <img src="../../assets/images/2.png" alt="">
              <span>无限卡</span>
            </div>
            <div class="right">
              <h1 class="big">剩余20天</h1>
              <h1 class="small"></h1>
            </div>
          </li>
          <div class="border"></div>
          <li>
            <div class="left">
              <img src="../../assets/images/3.png" alt="">
              <span>读书排行榜</span>
            </div>
            <div class="right">
              <h1 class="big">第1名</h1>
              <h1 class="small">60分钟</h1>
            </div>
          </li>
          <li >
            <div class="left">
              <img src="../../assets/images/4.png" alt="">
              <span>关注</span>
            </div>
            <div class="right">
              <h1 class="big">99人关注我</h1>
              <h1 class="small">已关注1人</h1>
            </div>
          </li>
          <div class="border"></div>
          <li>
            <div class="left">
              <img src="../../assets/images/6.png" alt="">
              <span>每日一答</span>
            </div>
            <div class="right">
              <h1 class="big">挑战12道题</h1>
              <h1 class="small"></h1>
            </div>
          </li>
          <div class="border"></div>
          <li>
            <div class="left">
              <img src="../../assets/images/8.png" alt="">
              <span>笔记、读过和赞过</span>
            </div>
            <div class="right">
              <h1 class="big">27个</h1>
              <h1 class="small">赞过1次</h1>
            </div>
          </li>
          <li >
            <div class="left">
              <img src="../../assets/images/9.png" alt="">
              <span>书单</span>
            </div>
            <div class="right">
              <h1 class="big">6个</h1>
              <h1 class="small"></h1>
            </div>
          </li>
        </div>
        <div v-else>
          <li @click="toLogin">
            <div class="left">
              <img src="../../assets/images/1.png" alt="">
              <span>账户</span>
            </div>
            <div class="right">
              <h1 class="big">0.00</h1>
              <h1 class="small">已购0本书</h1>
            </div>
          </li>
          <li @click="toLogin">
            <div class="left">
              <img src="../../assets/images/2.png" alt="">
              <span>无限卡</span>
            </div>
            <div class="right">
              <h1 class="big">9元/月</h1>
              <h1 class="small"></h1>
            </div>
          </li>
          <div class="border"></div>
          <li @click="toLogin">
            <div class="left">
              <img src="../../assets/images/3.png" alt="">
              <span>读书排行榜</span>
            </div>
            <div class="right">
              <h1 class="big"></h1>
              <h1 class="small"></h1>
            </div>
          </li>
          <li @click="toLogin">
            <div class="left">
              <img src="../../assets/images/4.png" alt="">
              <span>关注</span>
            </div>
            <div class="right">
              <h1 class="big"></h1>
              <h1 class="small"></h1>
            </div>
          </li>
          <div class="border"></div>
          <li @click="toLogin">
            <div class="left">
              <img src="../../assets/images/6.png" alt="">
              <span>每日一答</span>
            </div>
            <div class="right">
              <h1 class="big">挑战12道题</h1>
              <h1 class="small"></h1>
            </div>
          </li>
          <div class="border"></div>
          <li @click="toLogin">
            <div class="left">
              <img src="../../assets/images/8.png" alt="">
              <span>笔记、读过和赞过</span>
            </div>
            <div class="right">
              <h1 class="big"></h1>
              <h1 class="small"></h1>
            </div>
          </li>
          <li @click="toLogin">
            <div class="left">
              <img src="../../assets/images/9.png" alt="">
              <span>书单</span>
            </div>
            <div class="right">
              <h1 class="big"></h1>
              <h1 class="small"></h1>
            </div>
          </li>
        </div>
      </div>
    </div>
    <v-tar></v-tar>
    <van-popup class="popup" v-model="show" round :style="{ height: '40%' }">
      <div class="text">
        <h1>你还未登录</h1>
        <p>登录后即可领取专属福利</p>
        <p>当前已有的无限卡天数和书籍都将同步迁移。</p>
      </div>
      <div class="login" @click="login">微信登录</div>
      <div class="login" @click="login">账号登录</div>
      <div class="login cancel" @click="cancel">取消</div>
    </van-popup>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations, mapActions } from 'vuex'
import Tar from "../common/Tar"
export default {
  components: {
    "v-tar": Tar
  },
  data () {
    
    return {
      show: false,
      hasHobby: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper ,{click: true}); 
    })
    this.getHobby()
  },
  updated() {
    
  },
  computed: {
    i () {
      return this.$store.state.i
    },
    isLogin() {
      return this.$store.state.isLogin
    },
    username () {
      return this.$store.state.user[this.i].username
    },
    headImage () {
      return this.$store.state.user[this.i].headImage
    },
    hobby () {
      return this.$store.state.user[this.i].hobby
    },
    introduce () {
      return this.$store.state.user[this.i].introduce
    }
  },
  methods: {
    ...mapMutations([
      // 'i',
      // 'isLogin'
    ]),
    message () {
      this.$router.push({
        path: '/Message'
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

    },
    login () {
      this.$router.push({
        path: '/Login'
      })
    },
    cancel () {
      this.show = false
    },
    toLogin () {
      this.show = true
    },
    getHobby () {  
      if(this.hobby !== '' || this.introduce !== '') {
        this.hasHobby = true
      } else {
        this.hasHobby = false
      }
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
    position fixed
    top px2rem(110px)
    bottom px2rem(140px)
    left 0
    right 0
    .content
      height px2rem(450px)
      img
        width px2rem(200px)
        height px2rem(200px)
        border-radius 50%
      h1
        margin-top px2rem(40px)
        font-size 20px
        font-weight 800
        color #000
      .hobbyWrapper
        width 100%
        height px2rem(100px)
        margin-top px2rem(30px)
      p
        line-height px2rem(40px)
        font-size 12px
        color #696969
        z-index 10
      .headImageWrapper
        width px2rem(200px)
        height px2rem(200px)
        margin 0 auto
        border-radius 50%
      .headImage
        width px2rem(200px)
        height px2rem(200px)
        margin 0 auto
        border-radius 50%
        background-color rgba(0,0,0,0.1)
        .iconfont
          font-size px2rem(100px)
          line-height px2rem(200px)
          color #fff
    .border
      border px2rem(7px) solid rgba(0,0,0,0.1)
    div
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
          width  px2rem(200px)
          margin-right px2rem(40px)
          float right
          display flex
          align-items center
          justify-content center
          flex-direction column
          .big
            font-size 15px
            font-weight 600
            color rgba(0, 0, 0, .7)
          .small
            margin-top px2rem(10px)
            font-size 12px
            font-weight 500
            color #696969
  .popup 
    width px2rem(600px)
    .text
      margin px2rem(60px)
      h1
        font-size px2rem(42px)
        font-weight 900
        color #000
        margin-bottom px2rem(30px)
      p
        font-size px2rem(32px)
        color #707070
        margin-bottom px2rem(5px)
        line-height px2rem(40px)
    .login
      height px2rem(96px)
      line-height px2rem(96px)
      font-size px2rem(36px)
      font-weight 600
      color #336afc
      border-top 1px solid rgba(0,0,0,0.1)
    .cancel
      letter-spacing px2rem(6px)
      height px2rem(84px)
      line-height px2rem(84px)
</style>