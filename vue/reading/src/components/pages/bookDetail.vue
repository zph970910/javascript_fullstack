<template>
  <div class="bookDetail">
    <div class="header">
      <div class="left">
        <i class="iconfont icon-left" @click="returnPage">&#xe014;</i>
      </div>
      <div class="right">
        <i class="iconfont icon-right" @click="addBookshelf(id, data)">&#xe019;</i>
        <i class="iconfont icon-right" >&#xe024;</i>
        <i class="iconfont icon-right" >&#xe025;</i>
        <i class="iconfont icon-right" >&#xe026;</i>
        <i class="iconfont icon-right" >&#xe021;</i>
      </div>
    </div>
    <van-popup class="popup" v-model="loginShow" round :style="{ height: '40%' }">
      <div class="text">
        <h1>你还未登录</h1>
        <p>登录后即可领取专属福利</p>
        <p>当前已有的无限卡天数和书籍都将同步迁移。</p>
      </div>
      <div class="login" @click="login">微信登录</div>
      <div class="login" @click="login">账号登录</div>
      <div class="login cancel" @click="cancel">取消</div>
    </van-popup>
    <div class="wrapper" ref="wrapper">
      <div class="main">
        <div class="h-container" @click="bookRead(item.id)">
          <img :src="data.url" alt="">
          <h1>{{data.title}}</h1>
          <p>{{data.author}}</p>
        </div>
        <div class="m-container">
          <div class="left" @click="CdetailShow">     
            <div class="star-wrapper">
              <span class="score">{{data.score}}</span>
              <span class="star-item" :class="[data.score>=0?'on':'off']"></span>
              <span class="star-item" :class="[data.score>=2?'on':'off']"></span>
              <span class="star-item" :class="[data.score>=4?'on':'off']"></span>
              <span class="star-item" :class="[data.score>=6?'on':'off']"></span>
              <span class="star-item" :class="[data.score>=8?'on':'off']"></span>
            </div>
            <div class="comment">
              {{data.count}}人点评 >
            </div>
          </div>
          <div class="right">
            <span class="score">{{data.number}}</span>
            <span class="reading">万人阅读</span>
            <div @click="bookRead">点击阅读 ></div>
          </div>
        </div>
        <div class="content">
          <div class="header">
            <span>简介</span>
            <img src="https://rescdn.qqmail.com/weread/cover/ranklist.rising.chart_title.CnAvfyv8Ls.png" alt="">
          </div>
          <div class="introduction">
            <p>{{data.introduction}}</p>
            <span @click="IdetailShow">更多</span>
          </div>
        </div>
        <div class="reading">
          <p>文章内容</p>
          <span v-html="data.content"></span>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="bg-wrapper" v-show="CshowDetail">
        <ul>
          <li v-for="(item, index) in data.comments" :key="index" >
            <p class="comment-wrap">{{item.comment}}</p>
            <div class="icon-wrap">
              <div class="left">
                <i class="iconfont icon-like" :style="{color: item.islike ? 'red' : ''}" @click="addLikeCount(item.id, item.likeCount)" >&#xe029;   {{item.likeCount}}</i>
              </div>
              <div class="right">
                <i class="iconfont icon-comment" >&#xe028;   {{item.commentCount}}</i>
              </div>
            </div>
          </li>
        </ul>
        <i class="iconfont icon-Chidden" @click="ChideDetail">&#xe027;</i>
      </div>
    </transition>
    <transition name="fade">
      <div class="bg-wrapper" v-show="IshowDetail">
        <div class="content-wrapper">
          <div class="Iheader">简介</div>
          <div class="introWrapper" ref="introWrapper">
            <div>
              <p>{{data.introduction}}</p>
            </div>
          </div>
        </div>
         <i class="iconfont icon-Ihidden" @click="IhideDetail">&#xe027;</i>
      </div>
    </transition>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations, mapActions } from 'vuex'
import * as mutationType from '../../store/mutation-type'
import { Dialog } from 'vant';

export default {
  data () {
    return {
      data: {},
      IshowDetail: false,
      CshowDetail: false,
      addBook: [],
      loginShow: false
    }
  },
  mounted () {
    this.getData (),
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      })
      this.scroll = new BScroll(this.$refs.introWrapper, {
        click: true
      })
    })
    
  },
  updated() {
    
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    },
    // isAdd () {
    //   return this.$store.state.isAdd
    // }
  },
  created () {
   
  },
  methods: {
    getData () {
     let that = this
     that.id = this.$route.query.id
     this.$http.get('../../../static/data/books.json')
     .then(res => {
       let datas = res.data.data
      //  console.log(datas)
       if(datas || datas.length > 0) {
        that.data = datas[that.id]
       }
     })
    },
    returnPage () {
      this.$router.go(-1)
    },
    CdetailShow () {
      this.CshowDetail = true
    },
    ChideDetail () {
      this.CshowDetail = false
    },
    IdetailShow () {
      this.IshowDetail = true
    },
    IhideDetail () {
      this.IshowDetail = false
    },
    addLikeCount (id, count) {
      this.data.comments[id].islike = !this.data.comments[id].islike
      if (this.data.comments[id].islike) {
        this.data.comments[id].likeCount = count + 1
      } else {
        this.data.comments[id].likeCount = count - 1
      }
    },
    bookRead (id) {
      this.$router.push({
        path: `/Bookshelf/${id}/bookRead`
      })
    },
    addBookshelf() {
      if (this.isLogin) {
        if (!this.data.isAdd) {
          Dialog.alert({
            title: '提示',
            message: '成功加入书架'
          })
          this.$store.commit("addbook", this.data)
          this.data.isAdd = true
        }
      } else {
        this.loginShow = true
      }
    },
    login () {
      this.$router.push({
        path: '/Login'
      })
    },
    cancel () {
      this.loginShow = false
    }
  },
  
}
</script>

<style lang="stylus">
@import '../../assets/css/function.styl'

.bookDetail
  .header
    height px2rem(80px)
    margin-top px2rem(30px)
    width 100%
    .left
      float left
      width 40%
      text-align left
      .icon-left
        font-size 20px
        color #707070
        margin-left px2rem(20px)
    .right
      display flex
      justify-content space-around
      align-items center
      text-align right
      .icon-right
        display inline-block
        font-size 24px
        color #707070
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
  .wrapper
    overflow hidden
    position fixed
    left 0
    right 0
    top px2rem(140px)
    bottom 0
    .main
      .h-container
        // padding-top px2rem(80px)
        img
          width px2rem(800px)
          height px2rem(400px)
        h1
          font-size 24px
          font-weight 900
          padding-top px2rem(40px)
          color #000
          letter-spacing px2rem(3px)
        p
          font-size 14px
          font-weight 700
          color #336afc
          padding-top px2rem(20px)
      .m-container
        margin-top px2rem(80px)
        margin-left px2rem(80px)
        display flex
        .left
          // float left
          
          .star-wrapper
            height px2rem(80px)
            .score
              font-size 26px
              font-weight 700
              color #000
            .star-item
              width px2rem(40px)
              height px2rem(40px)
              display: inline-block;
              &.on
                background-image url('./star.png')
              &.off
                background-image url('./star2.png')
          .comment
            font-size 12px
            color rgba(0, 0, 0, .5)
            text-align left
        .right
          margin-left px2rem(60px)
          .score
            font-size 26px
            font-weight 700
            color #000
          .reading
            font-size 12px
            font-weight 600
            color rgba(0, 0, 0, .6)
          div
            margin-top px2rem(18px)
            font-size 12px
            color rgba(0, 0, 0, .5)
            text-align left
      .content
        padding  px2rem(50px)  px2rem(50px)
        border-bottom 1px solid rgba(0, 0, 0, .5)
        .header
          text-align left
          display flex
          align-items center
          span
            
            font-size 24px
            font-weight 1000
            color #000
            margin-right px2rem(20px)
          img
            width px2rem(200px)
            height px2rem(60px)
        .introduction
          width 100%
          // height px2rem(200px)
          // display flex
          position relative
          p
            font-size 16px
            font-weight 600
            color rgba(0, 0, 0, .7)
            text-indent px2rem(50px)
            line-height px2rem(50px)
            letter-spacing px2rem(3px)
            overflow hidden
            display -webkit-box
            -webkit-line-clamp 3
            text-overflow ellipsis
            -webkit-box-orient vertical
            margin-bottom px2rem(10px)
          span
            text-align center
            font-size 17px
            color rgba(0, 0, 0, .5)
            border-bottom 1px solid rgba(0, 0, 0, .5)
      .reading
        padding  px2rem(50px)  px2rem(40px) 
        p
          text-align left
          font-size 24px
          font-weight 1000
          color #000
          margin-bottom px2rem(40px)
          // padding-left px2rem(40px)
        span 
          display block
          font-size 16px
          font-weight 600
          color rgba(0, 0, 0, .8)
          line-height px2rem(50px)
          letter-spacing px2rem(3px)
          text-indent px2rem(80px)
          text-align left
          p
            display block
            font-size 16px
            font-weight 600
            color rgba(0, 0, 0, .8)
            line-height px2rem(50px)
            letter-spacing px2rem(3px)
            text-indent px2rem(80px)
            text-align left
  .bg-wrapper
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    overflow auto
    background rgba(7, 17, 27, 0.4)
    backdrop-filter blur(10px)
    .content-wrapper
      margin px2rem(50px) auto
      width 80%
      height 75%
      background rgba(7, 17, 27, 0.7)
      border-radius 20px
      padding px2rem(50px)
      overflow hidden
      .Iheader
        text-align left
        font-size 20px
        font-weight 700
        color #fff
      .introWrapper
       overflow hidden
       position fixed
       left 10%
       right 10%
       top 10%
       bottom 16%
       p
        margin-top px2rem(60px)
        text-align left
        font-size 90%
        font-weight 500
        color rgba(255, 255, 255, 0.7)
        text-indent px2rem(80px)
        line-height px2rem(60px)
        letter-spacing px2rem(3px)
    .icon-Ihidden
      font-size 50px
      color rgba(7, 17, 27, 0.7)
    ul
      li
        margin px2rem(50px) auto
        width px2rem(700px)
        background rgba(7, 17, 27, 0.7)
        border-radius 20px
        padding px2rem(50px)
        .comment-wrap
          text-align left
          font-size 16px
          font-weight 500
          color rgba(255, 255, 255, 0.7)
          line-height px2rem(60px)
          letter-spacing px2rem(3px)
          margin-bottom px2rem(30px)
          display -webkit-box
          -webkit-line-clamp 4
          -webkit-box-orient vertical
          overflow hidden
        .icon-wrap
          border-top 0.8px solid rgba(255, 255, 255, 0.1)
          padding-top px2rem(50px)
          display flex
          .iconfont
            font-size 18px
            color rgba(255, 255, 255, 0.7)
          .left
            flex 1
          .right
            flex 1
    .icon-Chidden
      z-index 100
      font-size 50px
      color rgba(7, 17, 27, 0.7)
      position fixed
      bottom  px2rem(100px)
      left 50%
      transform translate(-50%, -50%) 
</style>