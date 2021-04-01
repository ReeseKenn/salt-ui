<template>
  <div class="button-wrapper">
    <div class="demo">
      <s-button>默认按钮</s-button>
      <s-button icon="download">图标按钮</s-button>
      <s-button icon="download"></s-button>
      <s-button icon="download" circle></s-button>
      <s-button icon="download" icon-position="right" :loading="loading" @click="loading=!loading">
        下载
      </s-button>
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
      content: '',
      loading: false,
      loading1: false
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