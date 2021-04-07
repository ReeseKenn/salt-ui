<template>
  <div class="wrapper">
    <div class="demo">
      <s-input placeholder="请输入内容" v-model="value" disabled></s-input>
      <s-input placeholder="请输入内容" v-model="value" readonly></s-input>
    </div>
  </div>
</template>

<script>
import Input from '../../../src/Input'

export default {
  name: "input-disabled-demo",
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
  .demo * {
    margin: 10px 0;
  }
}
</style>