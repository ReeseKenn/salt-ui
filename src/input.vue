<template>
  <div class="wrapper">
    <input type="text" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: "SInput",
  props:{
    placeholder:{
      type: String,
      default:'请输入内容'
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #60a3bc;
$border-color-focus: #3c6382;
$height: 32px;

.wrapper input {
  height: $height;
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  &:focus {
    border-color: $border-color;
    outline: none;
  }
}


</style>