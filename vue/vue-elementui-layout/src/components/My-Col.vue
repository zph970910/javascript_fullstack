<script>
export default {
  props: {
    span: Number
  },
  render (h) {
    const tag = this.tag || 'div'
    const classCol = `my-el-col-${this.span}`
    // 1~6
    // <h1 if>
    // <h2 else-if>
    // <h3 else-if>
    // const level = this.props
    // const htag = 'h' = level
    // h(htag)
    return h(tag, {
      class: [classCol]
    }, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>
@for $i from 0 through 24 {
  .my-el-col-#{$i} {
    width: (1 / 24 * $i * 100) * 1%

  }
}
</style>