<template>
   <div class="tab">
    <router-link to="/find" tag="div" class="tab-items">
      <div class="tab-item">
        <i class="iconfont icon-tar">&#xe001;</i>
        <span class="tab-link">发现</span>
      </div>
    </router-link>
    <router-link to="/bookshelf" tag="div" class="tab-items">
     <div class="tab-item">
        <i class="iconfont icon-tar">&#xe003;</i>
        <span class="tab-link">书架</span>
     </div>
    </router-link>
    <router-link to="/story" tag="div" class="tab-items">
      <div class="tab-item">
        <i class="iconfont icon-tar">&#xe005;</i>
        <span class="tab-link">故事</span>
      </div>
    </router-link>
    <router-link to="/mine" tag="div" class="tab-items">
     <div class="tab-item">
        <i class="iconfont icon-tar">&#xe007;</i>
        <span class="tab-link">我</span>
     </div>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function.styl'
.tab
  position fixed
  bottom 0
  display flex
  width 100%
  z-index 1000
  opacity 1
  font-size 14px
  background rgba(0, 0, 0, 0.03)
  padding-top px2rem(20px)
  .tab-items
    font-size 12px
    flex 1
    .tab-item
      width px2rem(60px)
      margin 0 auto
      .icon-tar
        font-size 24px
      .tab-link
        display inline-block
        margin 10px 0
  .router-link-active
    .tab-item
    .tab-link
      color #336afc
</style>