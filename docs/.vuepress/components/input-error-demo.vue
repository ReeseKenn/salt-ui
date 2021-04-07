<template>
  <div class="wrapper">
    <div class="demo">
      <s-input v-model="value" error="请输入正确的信息"></s-input>
    </div>
  </div>
</template>

<script>
import Input from '../../../src/Input'

export default {
  name: "input-error-demo",
  components: {
    's-input': Input
  },
  data() {
    return {
      value: '你好'
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  .demo * {
    margin: 10px 0;
  }
}
</style>