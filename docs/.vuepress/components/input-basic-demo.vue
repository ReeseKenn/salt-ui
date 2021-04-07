<template>
  <div class="wrapper">
    <div class="demo">
      <s-input v-model="value"></s-input>
    </div>
  </div>
</template>

<script>
import Input from '../../../src/Input'

export default {
  name: 'inputBasicDemo',
  components: {
    's-input': Input
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  .demo *{
    margin: 10px 0;
  }
}
</style>