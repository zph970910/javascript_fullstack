<template>
  <div class="c-test">
    Age:{{app.userInfor.age}}
    <button @click="changApp">change</button>
    </div>
</template>

<script>
export default {
  inject: ['app'],
  methods: {
    changApp () {
      app.userInfor.age = 16
    }
  }
}
</script>

<style>

</style>