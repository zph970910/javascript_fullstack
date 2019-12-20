<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import Tar from "./components/common/Tar"
export default {
  name: "App",
  components: {
  },
  data() {
    return {
      // tabShow: true
    };
  },
  beforeRouteLeave (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  // watch: {
  //   $route(to, from) {
  //     console.log('to',to,'from', from);
      
  //     console.log(this.$route);
  //     if (to.path === "/find" || "/bookshelf" || "/story" || "/mine") {
  //       this.tabShow = true;
  //     }
  //   }
  // };
}
</script>

<style lang="stylus" scoped>
@font-face {
  font-family: 'iconfont'; /* project id 1558842 */
  src: url('//at.alicdn.com/t/font_1558842_rjxk7pfng8d.eot');
  src: url('//at.alicdn.com/t/font_1558842_rjxk7pfng8d.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1558842_rjxk7pfng8d.woff2') format('woff2'), url('//at.alicdn.com/t/font_1558842_rjxk7pfng8d.woff') format('woff'), url('//at.alicdn.com/t/font_1558842_rjxk7pfng8d.ttf') format('truetype'), url('//at.alicdn.com/t/font_1558842_rjxk7pfng8d.svg#iconfont') format('svg');
}

body, html {
  height: 100%;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  color: #fff;
  position: relative;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
</style>
