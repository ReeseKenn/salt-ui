<template>
  <div class="s-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sButtonGroup",
  mounted() {
    for (let node of this.$el.children) {
      let nodeName = node.nodeName.toLowerCase()
      if (nodeName !== 'button') {
        console.error(`'s-button-group''只允许以'button'为子元素'，'${nodeName}'不被允许插入`)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.s-button-group {
  display: inline-flex;
  vertical-align: top;

  > .s-button {
    border-radius: 0;

    &:not(:last-of-type) {
      margin-right: -1px;
    }

    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }

    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }

    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>