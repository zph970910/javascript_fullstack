<template>
  <div class="find">
    <div class="search">
     <div class="search-wrapper">
        <v-search-box>书城</v-search-box>
     </div>
    </div>
    <div class="container">
      <swiper>
        <swiper-slide v-for="(item, index) in book" :key="index" class="swiper-item">
          <div  @click="bookDetail(item.id)" >
            <div class="book-img">
              <img :src="item.url" alt="">
            </div>
            <h1>{{item.title}}</h1>
            <p class="book-author">{{item.author}}</p>
            <p class="book-text">朋友都在读 》</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <v-tar></v-tar>
  </div>
</template>

<script>
import Tar from "../common/Tar"
import searchBar from '../common/searchBar'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'
export default {
  components: {
    "v-search-box": searchBar,
    "v-tar": Tar
  },
  data () {
    return {
      book: ''
    }
  },
  created () {
    this.getBook()
    
  },
  mounted () {
    
  },
  methods: {
    getBook () {
      axios.get('../../../static/data/books.json').then(res => {
        if (res.status == 200) {
          this.book = res.data.data
        }
      })
    },
    bookDetail (id) {
      this.$router.push({
        // path: `/bookDetail/${id}`
        name: 'BookDetail',
        query: {id: id},
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function.styl'
.find
  height 100%
  .search
    height 10%
    background rgba(0, 0, 0, 0.05)
    overflow hidden
    .search-wrapper
      margin px2rem(40px) px2rem(40px) 0 px2rem(40px)
  .container
    background rgba(0, 0, 0, 0.05)
    position fixed
    top px2rem(140px)
    bottom px2rem(150px)
    width 100%
    padding-bottom px2rem(70px)
    .swiper-container
      height 100%
      background #fff
      margin px2rem(40px)
      // padding  px2rem(30px)
      border-radius 10px
      box-shadow 0 0 10px 0 rgba(0, 0, 0, 0.2)
      .swiper-wrapper
        .book-img
          margin-top px2rem(100px)
          img
            width px2rem(350px)
            height px2rem(500px)
        h1
          font-size 26px
          font-weight 900
          color #000 
          margin-top px2rem(50px)
        .book-author
          font-size 15px
          color #707070
          margin-top px2rem(30px)
        .book-text
          margin-top px2rem(360px)
          margin-bottom  px2rem(80px)
          font-size 13px
          font-weight 300
          color #707070
</style>