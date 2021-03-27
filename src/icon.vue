<template>
  <svg class="s-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: "sIcon",
  props: ['name']
}
</script>

<style scoped lang="scss">
.s-icon {
  width: 1em;
  margin-right: 0.3em;
}
</style>