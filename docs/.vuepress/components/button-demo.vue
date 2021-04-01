<template>
  <div class="button-wrapper">
    <s-button>默认按钮</s-button>
  </div>
</template>

<script>
import Button from '../../../src/button'

export default {
  components: {
    's-button': Button
  },
  data() {
    return {
      content: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.button-wrapper {
  padding: 10px 0;
}
</style>