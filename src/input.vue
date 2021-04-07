<template>
  <div class="wrapper" :class="{error}">
    <input :value="value" type="text" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @input="('input',$event.target.value)">
    <template v-if="error">
      <s-icon name="setting" class="icon-error"></s-icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import sIcon from './icon'

export default {
  name: "SInput",
  components: {sIcon},
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #60a3bc;
$border-color-focus: #3c6382;
$height: 32px;
$font-size: 14px;
$error-color: #eb2f06;

.wrapper {
  display: inline-block;
  font-size: $font-size;

  input {height: $height;-webkit-appearance: none;background-color: #fff;background-image: none;
    border-radius: 4px;border: 1px solid #dcdfe6;box-sizing: border-box;color: #606266;
    display: inline-block;font-size: inherit;line-height: 40px;outline: none;padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);

    &:focus {border-color: $border-color;box-shadow: 0 0 4px $border-color;
      -moz-box-shadow: 0 0 4px $border-color;-webkit-box-shadow: 0 0 4px $border-color;
      outline: none;}
    &:disabled {background: #f7f7f7;cursor: not-allowed;}
    &[readonly] {}

  }

  &.error {
    > input { border-color: $error-color;
      &:focus {box-shadow: 0 0 4px $error-color;-moz-box-shadow: 0 0 4px $error-color;
        -webkit-box-shadow: 0 0 4px $error-color;}
    }
  }
  .icon-error { fill: $error-color; }
  .errorMessage { color: $error-color; }
}


</style>
