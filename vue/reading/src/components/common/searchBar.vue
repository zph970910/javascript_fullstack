<template>
  <div class="search-box">
    <i class="iconfont icon-search">&#xe009;</i>
    <input type="text" class="box" :placeholder="placeholder">
    <span class="book">书城</span>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '剑王朝'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function'
.search-box
  display flex
  align-items center
  box-sizing border-box
  width 100%
  padding 0 px2rem(50px) 0 px2rem(30px)
  height px2rem(100px)
  background #ffffff
  border-radius 50px
  .icon-search 
    font-size 18px
    color #6b6a6a
  .box 
    flex 1
    margin 0 px2rem(30px)
    height px2rem(100px)
    background #ffffff
    color #000
    font-size 14px
    outline 0
    &:placeholder 
      color #707070
  .book
    color #707070
    font-weight 580
    border-left 0.1px solid #707070
    padding-left 20px
</style>