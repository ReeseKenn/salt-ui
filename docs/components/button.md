---
title: Button
---

# Button-按钮

<ClientOnly>
<button-demo></button-demo>
</ClientOnly>

```vue
<template>
  <s-button>默认按钮</s-button>
  <s-button icon="download">图标按钮</s-button>
  <s-button icon="download"></s-button>
  <s-button icon="download" circle></s-button>
  <s-button
      icon="download"
      icon-position="right"
      :loading="loading"
      @click="loading=!loading"
  >
    下载
  </s-button>
</template>
<script>
export default {
  data() {
    return {
      loading: false
    }
  }
}
</script>
```