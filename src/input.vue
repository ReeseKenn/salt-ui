<template>
  <div class="wrapper">
    <input type="text">
  </div>
</template>

<script>
export default {
  name: "SInput"
}
</script>

<style lang="scss" scoped>
$border-color: #60a3bc;
$border-color-focus: #3c6382;
$height: 32px;

.wrapper input {
  height: $height;

  &:focus {
    border-color: $border-color-focus;
    outline: none;
  }
}


</style>