<template>
  <div class="likeStory">
    <div class="header">
      <i class="iconfont icon-return" @click="returnPage">&#xe014;</i>
      <span>我的收藏</span>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="main">
        <ul class="container">
          <li class="content" v-for="(item, index) in likeStory" :key="index" >
            <div class="top" @click="storyDetail(item.id)">
              <h1 class="text">{{item.title}}</h1>
              <img :src="item.url" alt="">
            </div>
            <div class="bottom">
              <p class="name">{{item.name}}{{item.type}}</p>
              <i class="iconfont collection" :style="{color: item.islike ? 'red' : ''}" @click="DisLike(item.id, item.islike)">&#xe010;</i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { Dialog } from 'vant';

export default {
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll (this.$refs.wrapper, {
        click: true
      })
    })
  },
  computed: {
    likeStory () {
      return this.$store.state.likeStory
    }
  },
  methods: {
    returnPage () {
      this.$router.go(-1)
    },
    DisLike (id, islike) {
      if (this.likeStory[id].islike) {
          Dialog.alert({
            title: '提示',
            message: '已取消收藏'
          })
          this.likeStory[id].islike = false
          this.likeStory.splice(id, 1)
          this.$store.commit('likeStory', this.likeStory)
        }
    }
  }
}
</script>

<style lang="stylus">
@import '../../assets/css/function.styl'
.likeStory
  width 100%
  .header
    padding-top px2rem(40px)
    height px2rem(80px)
    padding-top px2rem(20px)
    .icon-return
      line-height px2rem(80px)
      float left
      margin-left px2rem(20px)
      font-size 18px
    span
      line-height px2rem(80px)
      font-weight 700
      color #000
  .wrapper
    overflow hidden
    position fixed
    left 0
    right 0
    top px2rem(140px)
    bottom 0
    .main
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
          margin-top px2rem(30px)
          .name
            font-size 12px
            font-weight 590
            color #707070
            flex 1
            text-align left
          .collection
            font-size 20px
            display blolk
</style>