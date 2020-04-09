<template>
  <div class="chat">
    <div class="chat-content">
      当前暂无私信
    </div>
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="stylus">
.chat
  height 100px
  .chat-content
    position fixed
    left 50%
    top 50%
    transform translate(-50%, -50%)
    font-size 15px
    font-weight 600
    color #707070
</style>