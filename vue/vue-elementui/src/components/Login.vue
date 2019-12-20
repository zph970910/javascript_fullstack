<template>
  <div class="login">
    <div class="login-wrapper">
      <h2>xxx管理系统</h2>
      <el-input placeholder="请输入内容" v-model="user" class="user int"></el-input>
      <el-input placeholder="请输入密码" v-model="input" show-password class="pas int"></el-input>
      <el-button type="primary" class="int" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: '',
      input: ''
    }
  },
  methods: {
    login () {
      if (this.user !== '' && this.password !== '') {
        localStorage.setItem('name', this.user)
        this.$router.push({path: '/main'})
      } else {
        this.$message.error('账号或密码不能为空');
      }
    }
  }
}
</script>

<style>
.login {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
.login-wrapper {
  width: 350px;
  height: 350px;
  text-align: center;
  box-shadow: 0 0 10px #aaa;
  border-radius: 25px;
  margin-top: 150px;
}
.int {
  width: 80%;
  margin: 0 auto;
  display: block;
  margin-bottom: 30px;
}
</style>