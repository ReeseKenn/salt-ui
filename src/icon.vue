<template>
  <svg class="s-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './svg'
export default {
  name: 'SIcon',
  props: ['name']
}
</script>

<style scoped lang="scss">
.s-icon {
  width: 1em;
}
</style>
