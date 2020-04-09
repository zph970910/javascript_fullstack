<template>
  <div class="story">
    <div class="search" ref="element">
     <div class="search-wrapper">
        <v-search-box>书城</v-search-box>
     </div>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="main">
        <div class="suggest">
          <div class="suggest-header">
            <h1 class="title">继续阅读</h1>
            <p class="more">朋友的想法 ></p>
          </div>
          <div class="book-wrapper" ref="bookWrapper">
             <div class="book" ref="book">
              <div class="book-item" v-for="(item, index) in books" :key="index" @click="bookDetail(item.id)">
                <div class="book-image">
                  <img :src="item.url" alt="">
                </div>
                <h1 class="title">{{item.title}}</h1>
                <p class="author">{{item.author}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="content_header">
          <h1>新闻</h1>
          <p @click="toLikeStory(storyId)">我的收藏 ></p>
        </div>
        <ul class="container">
          <li class="content" v-for="(item, index) in storyData" :key="index" >
            <div class="top" @click="storyDetail(item.id)">
              <h1 class="text">{{item.title}}</h1>
              <img :src="item.url" alt="">
            </div>
            <div class="bottom">
              <p class="name">{{item.name}}{{item.type}}</p>
              <i class="iconfont collection" :style="{color: item.islike ? 'red' : ''}" @click="like(item.id, item.islike)">&#xe010;</i>
            </div>
          </li>
        </ul>
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
      </div>
    </div>
    <v-tar></v-tar>
    <router-view />
  </div>
  
</template>

<script>
import Tar from "../common/Tar"
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import axios from 'axios'
import 'swiper/dist/css/swiper.min.css'
import searchBar from '../common/searchBar'
import { Dialog } from 'vant';
export default {
  components: {
    "v-search-box": searchBar,
    "v-tar": Tar
  },
  props: {
  },
  data () {
    return {
      storyId: '',
      books: [],
      story: [],
      curHeight: 0,
      isShowLike: false,
      loginShow: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
      });
      
    })
    this.bookScroll()
  },
  created () {
    this.getStory ()
    this.getBook ()
  },
  computed: {
    storyData () {
      return this.$store.state.story
    },
    isLogin () {
      return this.$store.state.isLogin
    },
    likeStory () {
      return this.$store.state.likeStory
    }
  },
  methods: {
    bookScroll () {
      let width = 17 * 6.5
      this.$refs.book.style.width = width + 'rem'
      this.$nextTick(() => {
        if (!this.scrollTwo) {
          this.scrollTwo = new BScroll(this.$refs.bookWrapper, {
            click: true,
            scrollX: true,
            eventPassthrough: "vertical"
          })
        } else {
          this.scroll.refresh()
        }
      })
    },
    like (id, islike) {
      if (this.isLogin) {
        if (!this.storyData[id].islike) {
          Dialog.alert({
            title: '提示',
            message: '已收藏'
          })
          this.storyData[id].islike = true
          this.likeStory.push(this.storyData[id])
          this.$store.commit('likeStory', this.likeStory)
          this.$store.commit('storyData', this.storyData)
          // console.log(this.storyData)
        }
      } else {
        this.loginShow = true
      }
    },
    toLikeStory () {
      if (this.isLogin) {
        this.$router.push({
          path: '/story/likeStory'
        })
      } else {
        this.loginShow = true
      }
    },
    returnStory () {
      this.isShowLike = false
    },
    bookDetail (id) {
      this.$router.push({
        name: 'BookDetail',
        query: { id: id }
      })
    },
    storyDetail (id) {
      this.$router.push({
        path: '/story/storyDetail',
        query: { id: id }
      })
    },
    getBook () {
      axios.get('../../../static/data/books.json').then(res => {
        if (res.status == 200) {
          this.books = res.data.data
        }
      })
    },
    
    getStory () {
      axios.get('../../../static/data/story.json').then(res => {
        if (res.status == 200) {
          this.story = res.data.data
          if(this.storyData == '') {
            this.$store.commit('storyData', this.story)
          }
        }
      })
    },
    login () {
      this.$router.push({
        path: '/Login'
      })
    },
    cancel () {
      this.loginShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function.styl'
.story
  .search
    overflow hidden
    background rgba(0, 0, 0, 0.04)
    .search-wrapper
      margin px2rem(30px)
  .wrapper
    overflow hidden
    position fixed
    top px2rem(150px)
    bottom px2rem(140px)
    left 0
    right 0
    .suggest
      .suggest-header
        height px2rem(60px)
        padding-top px2rem(30px)
        .title
          float left
          font-size 17px
          font-weight 700
          margin-left px2rem(40px)
          color #000
        .more
          float right
          font-size 12px
          font-weight 600
          color rgba(0, 0, 0, 0.6)
          margin-right px2rem(50px)
          margin-top px2rem(6px)
      .book-wrapper
        width 100%
        overflow hidden
       .book
        white-space nowrap
        display flex
        margin-top px2rem(20px)   
        .book-item
          width px2rem(200px)
          height px2rem(400px)
          margin-left px2rem(40px)
          .book-image
            img 
              width px2rem(200px)
              height px2rem(250px)
              border-radius 6px
          .title
            font-size 12px
            font-weight 590
            color #000000
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            text-align left
            margin-top px2rem(20px)
          .author
            font-size 12px
            font-weight 500
            color #707070
            margin-top px2rem(20px)
            text-align left
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
    .content_header
      width 100%
      height 20px
      margin-top 20px
      h1
        float left
        font-size 17px
        font-weight 700
        margin-left px2rem(40px)
      p
        float right
        font-size 13px
        font-weight 600
        color rgba(0, 0, 0, 0.6)
        margin-right px2rem(50px)
        margin-top px2rem(6px)
    .container
      margin px2rem(40px)
      .content
        height px2rem(400px)
        border-top .1px solid #707070
        padding-top px2rem(60px)
        box-sizing border-box
        .top
          display flex
          .text
            font-size 16px
            font-weight 700
            color #000
            padding-right px2rem(40px)
            line-height px2rem(50px)
            text-align left
            flex 1
          img
            width px2rem(180px)
            height px2rem(180px)
        .bottom
          display flex
          margin-top px2rem(60px)
          .name
            font-size 12px
            font-weight 590
            color #707070
            flex 1
            text-align left
          .collection
            font-size 20px
            display block
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
  .bg-wrapper
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background-color #fff
    overflow auto
    z-index 9999
    .header
      font-size 20px
      font-weight 600
      margin 20px
      .icon-left
        float left
    .container
      margin px2rem(40px)
      .content
        height px2rem(300px)
        border-top .1px solid #707070
        padding-top px2rem(40px)
        box-sizing border-box
        .top
          display flex
          .text
            font-size 16px
            font-weight 700
            color #000
            padding-right px2rem(40px)
            line-height px2rem(50px)
            text-align left
            flex 1
          img
            width px2rem(180px)
            height px2rem(180px)
        .bottom
          display flex
          margin-top px2rem(20px)
          .name
            font-size 12px
            font-weight 590
            color #707070
            flex 1
            text-align left
          .collection
            font-size 20px
            display block
</style>