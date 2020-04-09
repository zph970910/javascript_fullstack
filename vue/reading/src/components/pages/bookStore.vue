<template>
<div class="bookStore">
  <div class="header">
    <i class="iconfont icon-return" @click="returnPage">&#xe014;</i>
    <span v-show="!headHide">书城</span>
    <div v-show="headHide" :class="[headHide ? 'search' : 'search_active']">
      <i class="iconfont icon-search">&#xe009;</i>
      <input type="text" placeholder="冰糖炖雪梨" @click="toSearch">
    </div>
  </div>
  <div class="wrapper" ref="wrapper">
    <div class="main">
      <div v-show="!headHide"  :class="[headHide ? 'search' : 'search_active']">
        <i class="iconfont icon-search">&#xe009;</i>
        <input type="text" placeholder="冰糖炖雪梨" @click="toSearch">
      </div>
      <div class="content">
        <div class="content_title">
        猜你喜欢
        </div>
        <ul>
          <li v-for="(item, index) in books" :key="index" @click="bookDetail(item.id)">
            <div class="left">
              <img :src="item.url" alt="">
            </div>
            <div class="right">
              <h1>{{item.title}}</h1>
              <p>{{item.author}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      books: [],
      headHide:false
    }
  },
  created() {
    this.getBook()
    
  },
  mounted (){
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper ,{
        click: true,
        probeType: 3,
        pullUpLoad: true
      });
      this.scroll.on('scroll', (pos) => {
        if (pos.y <= -22) {
          this.headHide = true
        } else {
          this.headHide = false
        }
      })
    })
  },
  methods: {
    returnPage () {
      this.$router.go(-1)
    },
    getBook () {
      axios.get('../../../static/data/books.json').then(res => {
        if (res.status == 200) {
          this.books = res.data.data
        }
      })
    },
    bookDetail (id) {
      this.$router.push({
        path: '/bookshelf/bookDetail',
        query: {id: id}
      })
    },
    toSearch () {
      this.$router.push({
        path: '/search'
      })
    }
  }
}
</script>

<style lang="stylus">
@import '../../assets/css/function.styl'
.bookStore
  width 100%
  .header
    background #fff
    padding-top px2rem(20px)
    height px2rem(80px)
    padding-bottom px2rem(30px)
    box-sizing border-box
    .icon-return
      line-height px2rem(80px)
      float left
      margin-left px2rem(20px)
      font-size 18px
    span
      line-height px2rem(80px)
      margin 0 auto
      font-weight 700
      color #000
    .search
      width 88%
      // background rgba(80, 78, 78, 0.1);
      position relative
      display flex
      align-items center
      justify-content center
      padding-bottom px2rem(40px)
      margin-left px2rem(90px)
      margin-right  px2rem(30px)
      .icon-search
        position absolute
        font-size px2rem(40px)
        left px2rem(40px)
      input
        width 100%
        height px2rem(80px)
        border-radius px2rem(40px)
        background-color #f1f3f3
        height px2rem(80px)
        padding-left px2rem(90px)
        box-sizing border-box
  .wrapper
    overflow hidden
    position fixed
    left 0
    right 0
    top px2rem(140px)
    bottom 0
    .search_active
      background #fff
      position relative
      display flex
      align-items center
      justify-content center
      padding-bottom px2rem(40px)
    .icon-search
        position absolute
        font-size px2rem(40px)
        left px2rem(70px)
    input
        width px2rem(800px)
        height px2rem(80px)
        border-radius px2rem(40px)
        background-color #f1f3f3
        height px2rem(80px)
        padding-left px2rem(90px)
        box-sizing border-box
    .content
      margin-top px2rem(50px)
      margin-left px2rem(40px)
      .content_title
        font-size px2rem(50px)
        font-weight 900
        text-align left
        
      ul
        li
          height px2rem(180px)
          margin-top px2rem(40px)
          .left
            float left
            width px2rem(120px)
            height px2rem(150px)
            border 1px solid #707070
            img
              width px2rem(120px)
              height px2rem(150px)
          .right
            float left
            text-align left
            margin-left px2rem(30px)
            h1
              margin-top px2rem(20px)
              font-size px2rem(40px)
              font-weight 900
            p
              font-size px2rem(32px)
              margin-top px2rem(20px)
              font-weight bold
              color #707070
</style>