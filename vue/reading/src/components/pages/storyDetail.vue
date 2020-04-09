<template>
  <div class="storyDetail">
    <div class="header">
      <div class="left">
        <i class="iconfont icon-left" @click="returnPage">&#xe014;</i>
      </div>
      <div class="right">
        <i class="iconfont icon-right" >&#xe019;</i>
        <span class="icon-right">听</span>
        <i class="iconfont icon-right" >&#xe020;</i>
        <i class="iconfont icon-right" >&#xe021;</i>
      </div>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="main">
        <h1 class="title">{{data.title}}</h1>
        <div class="name">
          <p>{{data.name}}</p>
          <i class="iconfont" >&#xe022;</i>
          <i class="iconfont" >&#xe023;</i>
          <p>{{data.date}}</p>
        </div>
        <div class="image">
          <img :src="data.url" alt="">
        </div>
        <div class="source">
          <span>来源：{{data.source}}(ID:{{data.username}})</span>
        </div>
        <div class="content">
          <p>{{data.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      data: {}
    }
  },
  mounted () {
    this.getData ()
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      })
    });
  },
  methods : {
    getData () {
      let id = this.$route.query.id
      this.$http.get('../../../static/data/story.json')
      .then(res => {
        let datas = res.data.data
        console.log(datas)
        if(datas && datas.length > 0) {
          this.data = datas[id]
          } else {
            console.log("not found datas")
            }
        }, res => {
          console.log("数据加载失败")
      })
    },
    returnPage () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus">
@import '../../assets/css/function.styl'
.storyDetail
  .header
    height px2rem(80px)
    margin-top px2rem(40px)
    width 100% 
    .left
      float left
      .icon-left
        font-size 22px
        color #707070
        margin-left px2rem(20px)
    .right
      float right
      width 60%
      .icon-right
        font-size 24px
        color #707070
        margin-left px2rem(60px)
      span
        font-size 24px
        color #707070
        font-weight 700
        margin-left px2rem(60px)
  .wrapper
    height px2rem(1500px)
    overflow hidden
    .main
      padding px2rem(40px)
      .title
        font-size 24px
        font-weight 800
        color #000
        text-align left
      .name
        margin-top px2rem(50px)
        text-align left 
        display flex
        color rgba(0, 0, 0, 0.7)
      .image
        margin-top px2rem(60px)
        width 100%
        img
          width 100%
          height px2rem(400px)
      .source
        text-align left
        margin-top px2rem(60px)
        font-size 18px
        font-weight 800
        color rgba(0, 0, 0, 0.7)
        letter-spacing px2rem(10px)
      .content
        margin-top px2rem(40px)
        margin-bottom px2rem(100px)
        text-indent px2rem(40px)
        font-size 18px
        font-weight 900
        line-height px2rem(60px)
        text-align left
</style>