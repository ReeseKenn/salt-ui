---
title: Input-输入框
---

# Input-输入框

## 基础用法

<ClientOnly>
<input-basic-demo></input-basic-demo>
</ClientOnly>

```vue
<template>
  <s-input v-model="value"></s-input>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```

## 禁用状态&可读状态
<ClientOnly>
<input-disabled-demo></input-disabled-demo>
</ClientOnly>

```vue
<template>
  <s-input placeholder="请输入内容" v-model="value" disabled></s-input>
  <s-input placeholder="请输入内容" v-model="value" readonly></s-input>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```

## 错误提示
<ClientOnly>
<input-error-demo></input-error-demo>
</ClientOnly>

```vue
<template>
  <s-input v-model="value" error="请输入正确的信息"></s-input>
</template>
<script>
export default {
  data() {
    return {
      value: '你好'
    }
  }
}
</script>
```

## Input Attributes
|  参数   | 说明  |类型| 可选值 | 默认值|
|  ----  | ---- |---- | ---- |---- |
| value / v-model  | 绑定值 | string|--|--|
| placeholder  | 输入框占位文本 |string|--|--|
| disabled  | 禁用 |boolean|--|false |
| readonly  | 只读 |boolean|--|false|

## Input Events
|  时间名称   | 说明  |回调参数|
|  ----  | ---- |---- |
| blur  | 在 Input 失去焦点时触发 | (value: string)|
| focus  | 在 Input 获得焦点时触发 | (value: string)|
| blur  | 在 Input 失去焦点或用户按下回车时触发 | (value: string)|
| blur  |在 Input 值改变时触发 | (value: string)|