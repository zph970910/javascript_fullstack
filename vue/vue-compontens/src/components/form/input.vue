<template>
  <input type="text" @input="handleInput" @blur="bandleBlur" :value="currentValue">
</template>

<script>
import Emitter from '../../mixin/emitter'

export default {
  name: 'iInput',
  mixins: [ Emitter ],
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  },
  methods: {
    handleInput (event) {
      const value = event.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.dispatch('iFormItem', 'on-form-change', value)
    },
    bandleBlur () {
      this.dispatch('iFormItem', 'on-form-blur', this.currentValue)
    }
  }
}
</script>

<style>

</style>