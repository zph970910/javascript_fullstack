<script>
// render jsx
export default {
  props: {
    tag: String
  },
  render(h) {
    const tag = this.tag || 'div';
    // 第一个参数代表 标签名 组件名
    // 2 标签上的属性 class style width
    // 3 子节点
    return h(tag, {
      class: 'my-el-row'
    }, this.$slots.default)
  }
}
</script>

<style>
.my-el-row {
  width: 100%;
}
</style>