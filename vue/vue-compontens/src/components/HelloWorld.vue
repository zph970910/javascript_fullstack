<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <i-button size="small" @on-click="btn1">
      <i slot="icon">*</i>
      按钮
    </i-button>
    <i-button size="large" @on-click="btn2">提交</i-button>
    <!-- <div @click="oSure">
      <i-button size="default" ref="sure" >确认</i-button>
    </div> -->
    <i-button size="default" ref="sure" @click.native="oSure" @sendMsg="getMsg">确认</i-button>
    <div>{{mess}}</div>
  </div>
</template>

<script>
import button from './button'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      mess: ''
    }
  },
  components: {
    'i-button': button
  },
  methods: {
   btn1 () {
     console.log('hello')
   },
   btn2 () {
     console.log('你好')
   },
   oSure () {
     this.$refs.sure.sureClick()
   },
   getMsg(e) {
     this.mess = e
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
