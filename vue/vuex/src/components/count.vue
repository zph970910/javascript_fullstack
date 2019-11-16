<template>
  <div class="count">
    {{count}}
    <button @click="addAction(status)">+</button>
    <button @click="reduceAction">-</button>
    {{getCount}}
  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
     // myCount: null
    }
  },
  // mounted () {
  //   this.myCount = $store.state.count
  // },
  // computed: {
  //   myCount () {
  //     return this.$store.state.count
  //   }

  // },
  // computed: mapState ({
  //   myCount: state => state.count
  //   // myCount (state) {
  //   //   return state.count
  //   // }
  // }),
  // computed: mapState(['count']),
  computed: {
    ...mapState([
      'count'
    ]),
    ...mapGetters([
      'getCount'
    ])
  },
  methods: {
    ...mapMutations([
      'add',
      'reduce'
    ]),
    ...mapActions([
      'addAction',
      'reduceAction'
    ])
  }
}
</script>

<style>

</style>