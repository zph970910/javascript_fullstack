<template>
  <div class="inform">
    <v-message></v-message>
    <div class="inform-content">
      当前暂无通知
    </div>
  </div>
  
</template>

<script>
import Message from '../common/Message'
export default {
  components: {
    'v-message': Message
  }
}
</script>

<style lang="stylus">
.inform
  height 100px
  .inform-content
    position fixed
    left 50%
    top 50%
    transform translate(-50%, -50%)
    font-size 15px
    font-weight 600
    color #707070
</style>