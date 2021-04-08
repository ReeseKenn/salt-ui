---
title:快速上手
---

# 快速上手

## 引入必要资源

```javascript
import {Button} from "salt-ui-test";
import "salt-ui-test/dist/index.css";
```

## 注册组件

```javascript
export default {
  name: "ComponentName",
  components: {
    "s-button": Button,
  },
}
```

## 使用

代码：

```vue
<template>
  <div>
    <s-button>默认按钮</s-button>
  </div>
</template>
```

效果：
<ClientOnly>
<get-started-button-demo></get-started-button-demo>
</ClientOnly>

