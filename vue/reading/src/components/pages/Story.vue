<template>
  <div class="story">
    <div class="search" ref="element">
     <div class="search-wrapper">
        <v-search-box></v-search-box>
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
              <div class="book-item" v-for="(item, index) in books" :key="index">
                <div class="book-image">
                  <img :src="item.url" alt="">
                </div>
                <h1 class="title">{{item.title}}</h1>
                <p class="author">{{item.author}}</p>
              </div>
            </div>
          </div>
        </div>
        <ul class="container">
          <li class="content" v-for="(item, index) in story" :key="index" @click="storyDetail(item.id)">
            <div class="top">
              <h1 class="text">{{item.title}}</h1>
              <img :src="item.url" alt="">
            </div>
            <div class="bottom">
              <p class="name">{{item.name}}{{item.type}}</p>
              <i class="iconfont collection">&#xe010;</i>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <v-tar></v-tar>
  </div>
</template>

<script>
import Tar from "../common/Tar"
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import $http from 'axios'
import 'swiper/dist/css/swiper.min.css'
import searchBar from '../common/searchBar'
export default {
  components: {
    "v-search-box": searchBar,
    "v-tar": Tar
  },
  props: {
  },
  data () {
    return {
      books: [],
      story: [],
      curHeight: 0
    }
  },
  mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
        });
        this.bookScroll()
      }) 
  },
  created () {
    this.$http.get('http://localhost:8080/static/data/books.json')
    .then((res) => {
        console.log(res)
        if (res.data.errno == 0) {
          this.books = res.data.data
        }
    })
    this.$http.get('http://localhost:8080/static/data/story.json')
    .then((res) => {
        console.log(res)
        if (res.data.errno == 0) {
          this.story = res.data.data
        }
    })
  },
  methods: {
    bookScroll () {
      let width = 5 * 120
      this.$refs.book.style.width = width + 'px'
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.bookWrapper, {
            click: true,
            scrollX: true,
            scrollY: false,
             eventPassthrough: "vertical"
          })
        } else {
          this.scroll.refresh()
        }
      })
    },
    storyDetail (id) {
      this.$router.push({
        path: `/storyDetail/${id}`
      })
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
    height px2rem(1250px)
    overflow hidden
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
        // width px2rem(500px)
        // overflow hidden
       .book
        // width 100%
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
</style>