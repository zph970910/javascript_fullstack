<template>
  <div class="find">
    <div class="search">
     <div class="search-wrapper">
        <v-search-box></v-search-box>
     </div>
    </div>
    <div class="container">
      <swiper>
        <swiper-slide v-for="(item, index) in book" :key="index" class="swiper-item">
          <div class="book-img">
            <img :src="item.url" alt="">
          </div>
          <h1>{{item.name}}</h1>
          <p class="book-author">{{item.author}}</p>
          <p class="book-text">{{item.text}}</p>
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
export default {
  components: {
    "v-search-box": searchBar,
    "v-tar": Tar
  },
  data () {
    return {
       "book": [
      {
        "name": "解忧杂货店",
        "author": "东野圭吾",
        "url": "https://wfqqreader-1252317822.image.myqcloud.com/cover/752/449752/t6_449752.jpg",
        "text": "朋友们都在读 >"
      },
      {
        "name": "一禅小和尚",
        "author": "一禅小和尚",
        "url": "https://wfqqreader-1252317822.image.myqcloud.com/cover/898/915898/t6_915898.jpg",
        "text": "朋友们都在读 >"
      },
      {
        "name": "追风筝的人",
        "author": "卡勒德·胡赛尼",
        "url": "https://wfqqreader-1252317822.image.myqcloud.com/cover/339/546339/t6_546339.jpg",
        "text": "朋友们都在读 >"
      },
      {
        "name": "龙族（1-4合集）",
        "author": "江南",
        "url": "https://wfqqreader-1252317822.image.myqcloud.com/cover/334/933334/t6_933334.jpg",
        "text": "朋友们都在读 >"
      },
      {
        "name": "步履不停",
        "author": "是枝裕和",
        "url": "https://wfqqreader-1252317822.image.myqcloud.com/cover/50/861050/t6_861050.jpg",
        "text": "朋友们都在读 >"
      }
    ]
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function.styl'
.find
  height 100%
  .search
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