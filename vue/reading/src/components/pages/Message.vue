<template>
  <div class="message">
    <i class="iconfont icon-return" @click="returnMine">&#xe014;</i>
    <div class="container">
      <ul>
      <router-link to="/Message/Chat" class="content">
        <span class="chat">私信</span>
      </router-link>
      <router-link to="/Message/Inform" class="content">
        <span class="inform">通知</span>
      </router-link>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    returnMine () {
      this.$router.push({
        path: '/Mine'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function.styl'
.message
  position fixed
  top  0
  display flex
  width 100%
  z-index 100
  margin-top px2rem(40px)
  .icon-return
    // float left
    margin-left px2rem(20px)
    font-size 18px
    color #707070
  .container
    margin 0 auto
    font-weight 600
    .inform
      padding-right px2rem(80px)
      font-size 16px
      font-weight 600
    .chat
      padding-right px2rem(60px)
      font-size 16px
      font-weight 600
    .router-link-active
      color #336afc
</style>