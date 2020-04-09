<template>
  <div class="loginbox">
    <form name="login" id="login">
      <span class="user_text">账号</span>
      <input type="text" placeholder="请输入账号" class="user username" ref="username" />
      <span class="pwd_text">密码</span>
      <input type="password" placeholder="请输入密码" class="user pwd" ref="password" />
      <input type="button" value="登录" class="btn" @click="login" />
    </form>
  </div>
</template>

<script>
import $ from 'jquery'
import { Dialog } from 'vant';
export default {
  data () {
    return {
     
    }
  },
  methods: {
    login () {
      var uname = this.$refs.username.value
      var pwd = this.$refs.password.value
      var flag = false
      var user = this.$store.state.user
      var isLogin = this.$store.state.isLogin
      for (let i = 0; i < user.length; i ++) {
        if (user[i].username == uname && user[i].password == pwd) {
          this.$store.commit('i', i)
          isLogin = true
          this.$store.commit('login', isLogin)
          flag = true
          Dialog.alert({
            title: '提示',
            message: '登陆成功'
          }).then(() => {
            this.$router.push({
              path: '/Mine'
            })
          });
         
        }
      }
      if (!flag) {
        Dialog.alert({
          title: '提示',
          message: '输入的账号或密码不正确'
        }).then(() => {
          document.getElementById("login").reset()
        });    
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function'
.loginbox
  width 80%
  height 50%
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  margin auto
  span
    font-size 18px
    color #707070
  input 
    outline none
    display: block
    background: #fff
    display flex
    align-items center
    justify-content center
  .user_text 
    position absolute
    top px2rem(58px)
    left 0
  .pwd_text
    position absolute
    top px2rem(176px)
    left 0
  .user
    width 70%
    height px2rem(100px)
    margin-top 10px
    padding-left 50px
  .btn 
    margin-top 20px
    height px2rem(100px)
    width 100%
    background rgb(69, 143, 204)
    border-radius 10px
    font-weight 600
    font-size 15px
    color #fff
</style>>


