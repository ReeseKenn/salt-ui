<template>
  <div class="col" :class="colClasses" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "SCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    colClasses() {
      const {span, offset} = this
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`
      ]
    },
    colStyle() {
      const {gutter} = this
      return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px',
      }
    }
  },
  methods: {}
}
</script>
<style scoped lang="scss">
.col {
  width: 100%;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>