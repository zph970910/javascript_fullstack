<template>
  <div class="search">
    <div class="header">
      <i class="iconfont icon-return" @click="returnPage">&#xe014;</i>
      <i class="iconfont icon-search">&#xe009;</i>
      <input type="text" placeholder="冰糖炖雪梨" v-model="value" @input="input">
      <i class="iconfont icon-clear" v-show="showClear" @click="clear">&#xe030;</i>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="main" v-show="!showBook">
        <div class="hotSearchWrap">
          <div class="hotSearch" v-for="(item, index) in book.slice(8, 16)" :key="index" @click="toDetail(item.id)">
            {{item.title}}
          </div>
        </div>
        <div class="content">
          <div class="header">
            <p>猜你喜欢</p>
            <p class="change" @click="change">换一批</p>
          </div>
          <ul>
            <li v-for="(item, index) in likeBook" :key="index" @click="toDetail(item.id)">
              <div class="left">
                <img :src="item.url" alt="">
              </div>
              <div class="right">
                <h1 class="title">{{item.title}}</h1>
                <p class="author">{{item.author}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="main" v-show="showBook" >
        <div class="searchBook" @click="toDetail(searchBook.id)">
          <i class="iconfont icon-search">&#xe009;</i>
          <span>{{searchBook.title}}</span>
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
      book: [],
      likeBook: [],
      value: '',
      showClear: false,
      searchBook: '',
      showBook: false
    }
  },
  created () {
    this.getData()
  },
  mounted() {
    // console.log(this.showBook)
    this.$nextTick(() =>{
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      })
    })
    
  },
  updated() {
    
  },
  methods: {
    returnPage () {
      this.$router.go(-1)
    },
    getData () {
      axios.get('../../../static/data/books.json').then((res) => {
        if (res.status == 200) {
          this.book = res.data.data
          this.likeBook = this.book.slice(0,9)
        }
      })
    },
    toDetail (id) {
      this.$router.push({
        name: 'BookDetail',
        query: {id:id}
      })
    },
    input (e) {
      // console.log(e.target.value)
      this.value = e.target.value
      if (this.value !== '') {
        this.showClear = true
      } else {
        this.showClear = false
      }
      for (let i = 0; i < this.book.length; i++ ) {
        if (this.value == this.book[i].title) {
          this.showBook = true
          this.searchBook = this.book[i]
          // console.log(this.searchBook)
        } 
      }
    },
    clear () {
      this.value = ''
      this.showClear = false
      this.showBook = false
    },
    change () {
      var that = this
      var i = Math.random()*7
      var data = that.book.slice(i, i+8)
      that.likeBook = data
      // console.log(that.likeBook)
    }
  }
}
</script>

<style lang="stylus">
@import '../../assets/css/function.styl'
.search
  width 100%
  .header
    padding-top px2rem(40px)
    height px2rem(80px)
    padding-bottom px2rem(20px)
    position relative
    .icon-return
      line-height px2rem(80px)
      float left
      margin-left px2rem(20px)
      font-size 18px
    input
      background #f3f3f3
      height px2rem(80px)
      width 90%
      border-radius px2rem(80px)
      padding-left px2rem(80px)
      box-sizing border-box
    .icon-search
      position absolute
      font-size px2rem(40px)
      left px2rem(100px)
      top px2rem(60px)
    .icon-clear
      position absolute
      font-size px2rem(40px)
      right  px2rem(40px)
      top px2rem(60px)
  .wrapper
    width 100%
    overflow hidden
    position fixed
    left 0
    right 0
    top px2rem(140px)
    bottom 0
    .main
      .hotSearchWrap
        // width 100%
        margin px2rem(30px) px2rem(30px) px2rem(50px)
        margin-bottom px2rem(50px)
        .hotSearch
          display inline-block
          margin px2rem(15px)
          margin-top px2rem(30px)
          padding px2rem(15px) px2rem(40px)
          // display flex
          background #ece5e5
          border-radius px2rem(50px)
          font-size px2rem(32px)
      .content
        margin 0 px2rem(50px)
        border-top 1px solid #ece5e5
        .header
          height px2rem(50px)
          width 100%
          p
            display inline-block
            float left
            font-size px2rem(36px)
            font-weight bold
          .change
            float right
            color #336afc
        ul
          li
            height px2rem(200px)
            .left
              float left
              // width px2rem(120px)
              img
                width px2rem(120px)
                height px2rem(160px)
            .right
              // width px2rem(120px)
              float left
              margin-left px2rem(40px)
              .title
                text-align left
                margin-top px2rem(20px)
                font-size px2rem(36px)
                font-weight 900
              .author
                text-align left 
                margin-top px2rem(30px)
                font-size px2rem(30px)
                font-weight bold
                color #707070
      .searchBook
        text-align left
        margin px2rem(30px) px2rem(50px)
        span
          margin-left px2rem(30px)
          font-size px2rem(36px)
          color #336afc
</style>