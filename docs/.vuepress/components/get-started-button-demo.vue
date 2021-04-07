<template>
  <div class="button-wrapper">
    <div class="demo">
      <s-button>默认按钮</s-button>
    </div>

  </div>
</template>

<script>
import Button from '../../../src/button'

export default {
  name: 'buttonDemo',
  components: {
    's-button': Button
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.button-wrapper {
  .demo *{
    margin-bottom: 10px;
  }
}
</style>