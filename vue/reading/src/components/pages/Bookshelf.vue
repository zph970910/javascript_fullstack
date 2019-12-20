<template>
  <div class="main">
    <div class="search">
      <div class="search-wrapper">
        <v-search></v-search>
      </div>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="main">
        <div class="container">
          <div class="left">
            <i class="iconfont">&#xe017;</i>
            <span>电脑版</span>
          </div>
          <div class="right">
            <i class="iconfont">&#xe018;</i>
            <span>分类显示</span>
          </div>
        </div>
        <ul>
          <li v-for="(item, index) in book" :key="index" @click="bookDetail(item.id)">
            <img :src="item.url" alt="">
            <div class="name">{{item.title}}</div>
          </li>
         <div class="add">
           <i class="iconfont icon-add">&#xe016;</i>
         </div>
        </ul>
        <div class="count">5本公开阅读 · 0本私密阅读</div>
      </div>
    </div>
    <v-tar></v-tar>
  </div>
</template>

<script>
import Tar from "../common/Tar"
import searchBar from '../common/searchBar2'
import BScroll from 'better-scroll'

export default {
  components: {
    "v-search": searchBar,
    "v-tar": Tar
  },
  data () {
    return {
      book: []
    }
  },
  created () {
    this.$http.get('../../../static/data/books.json')
    .then(res => {
      console.log(res)
      if(res.data.errno == 0) {
        this.book = res.data.data
        console.log(this.book)
      }
    })
  },
  mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper ,{click: true});
      })
    },
  methods: {
    bookDetail (id) {
      this.$router.push({
        path: `/bookDetail/${id}`
      })
    },
  }
}
</script>

<style lang="stylus">
@import '../../assets/css/function.styl'
.main
  width 100%
  .search
    overflow hidden
    background rgba(0, 0, 0, 0.04)
    .search-wrapper
      margin px2rem(30px)
  .wrapper
    height px2rem(1250px)
    overflow hidden
    .main
      height px2rem(1500px)
      .container
        height px2rem(50px)
        padding-top px2rem(30px)
        i
          font-size 20px
          color rgba(0, 0, 0, .8)
        span
          font-size 15px
          font-weight 560
          color rgba(0, 0, 0, .8)
        .left
          float left
          margin-left px2rem(30px)
        .right
          float right
          margin-right px2rem(50px)
      ul
        display flex
        flex-wrap wrap
        // margin-left px2rem(40px)
        // margin-top px2rem(30px)
        li
          width px2rem(210px)
          height px2rem(300px)
          margin  px2rem(50px) px2rem(40px)
          
          img 
            width px2rem(210px)
            height px2rem(260px)
          .name 
            font-size 12px
            font-weight 600
            text-align left
            margin-top px2rem(20px)
            line-height px2rem(34px)
        .add
          width px2rem(210px)
          height px2rem(260px)
          border 1px solid rgba(0, 0, 0, .05)
          margin-top px2rem(50px)
          margin-left px2rem(40px)
          .icon-add
            font-size 30px
            font-weight 500
            color rgba(0, 0, 0, .3)
            position relative
            top px2rem(90px)
    .count
      font-size 12px
      font-weight 550
      color #696969
      margin-top px2rem(50px)
</style>