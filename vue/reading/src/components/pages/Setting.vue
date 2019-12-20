<template>
  <div class="setting">
    <div class="header">
      <i class="iconfont icon-return" @click="returnMine">&#xe014;</i>
      <span>设置</span>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="main">
        <van-cell-group>
          <van-switch-cell v-model="checked1" title="阅读时不自动锁屏" inactive-color="rgba(0,0,0,0.1)" />
          <van-switch-cell v-model="checked2" title="阅读时横屏" inactive-color="rgba(0,0,0,0.1)"/>
          <van-switch-cell v-model="checked3" title="阅读时隐藏想法" inactive-color="rgba(0,0,0,0.1)"/>
          <van-switch-cell v-model="checked4" title="首行缩进" inactive-color="rgba(0,0,0,0.1)"/>
        </van-cell-group>
        <div class="pageturn">
          <span class="pageTurn">翻页方式</span>
          <van-dropdown-menu>
            <van-dropdown-item v-model="value" :options="option" />
          </van-dropdown-menu>
        </div>
        <div class="border"></div>
        <div class="setting-items">
          <router-link to="/Conceal" class="setting-item">
            <span>隐私</span>
            <i class="iconfont icon-more">&#xe015;</i>
          </router-link>
        </div>
        <div class="setting-items">
          <router-link to="/Conceal" class="setting-item">
            <span>通知</span>
            <i class="iconfont icon-more">&#xe015;</i>
          </router-link>
        </div>
        <div class="setting-items">
          <router-link to="/Conceal" class="setting-item">
            <span>清理缓存</span>
            <i class="iconfont icon-more">&#xe015;</i>
          </router-link>
        </div>
        <div class="border"></div>
          <div class="setting-items">
            <router-link to="/Conceal" class="setting-item">
              <span>关于微信读书</span>
              <i class="iconfont icon-more">&#xe015;</i>
           </router-link>
         </div>
        <div class="setting-items">
          <router-link to="/Conceal" class="setting-item">
            <span>关注微信公众号</span>
            <i class="iconfont icon-more">&#xe015;</i>
          </router-link>
        </div>
        <div class="setting-items">
          <router-link to="/Conceal" class="setting-item">
            <span>帮助与反馈</span>
            <i class="iconfont icon-more">&#xe015;</i>
          </router-link>
        </div>
        <div class="border"></div>
        <div class="sign-out">退出登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data() {
    return {
      checked1: true,
      checked2: true,
      checked3: false,
      checked4: true,
      value: 1,
      option: [
        { text: '仿真翻页', value: 0 },
        { text: '左右滑动', value: 1 },
        { text: '上下滚动', value: 2 }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper ,{click: true});
    })
   
  },
  methods: {
    returnMine () {
      this.$router.push({
        path: '/Mine'
      })
    }
  }
}
</script>

<style lang="stylus">
@import '../../assets/css/function.styl'
.setting
 width 100%
 .header
    margin-top px2rem(40px)
    height px2rem(80px)
    .icon-return
      float left
      margin-left px2rem(20px)
      font-size 18px
    span
      margin 0 auto
      font-weight 700
      color #000
 .wrapper
  overflow hidden
  position relative
  top 0
  height px2rem(1400px)
  .van-cell
    .van-cell__title
      span 
        font-size 15px
        float left
        color #000
  .pageturn
    display flex
    flex-wrap nowrap
    .pageTurn
      // float left
      margin-left px2rem(36px)
      margin-top px2rem(40px)
      font-size 15px
      color #000
    .van-dropdown-menu
      float right
      margin-left px2rem(460px)
      .van-dropdown-menu__title
        color #707070
  .border
    border 4px solid rgba(0,0,0,0.1)
  .setting-items
    height px2rem(50px)
    margin  px2rem(60px) 0
    width 100%
    .setting-item
      span
        margin-left px2rem(36px)
        font-size 16px
        color #000
        float left
      .icon-more
        margin-right px2rem(20px)
        font-size 12px
        float right
  .sign-out
    height px2rem(50px)
    margin  px2rem(40px) 0
    color red
    font-weight 700
</style>