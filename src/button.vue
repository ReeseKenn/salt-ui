<template>
  <button class="s-button" :class="{[`icon-${iconPosition}`]:true,'button-circle':circle}" @click="$emit('click')">
    <s-icon v-if="icon&&!loading" class="icon" :name="icon"></s-icon>
    <s-icon v-if="loading" class="loading icon" name="loading"></s-icon>
    <div v-if="!circle" :style="getStyles()" class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from './icon'

export default {
  components: {'s-icon': Icon},
  props: {
    icon: {},
    circle: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right'
      }
    }
  },
  methods: {
    getStyles() {
      const style = {}
      if (!this.icon && !this.loading) {
        return style
      }
      style[`margin-${this.iconPosition}`] = this.$slots.default ? '0.3em' : 0
      return style
    }
  }
}
</script>
<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-hover-bg: rgba(130, 204, 221, 0.1);
$button-active-bg: rgba(130, 204, 221, 0.3);
$border-radius: 4px;
$color: #3c6382;
$border-color: #60a3bc;
$border-color-hover: #60a3bc;
$text-color: #0a3d62;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.s-button {
  color: $text-color;
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  line-height: 1;

  svg {
    fill: $text-color;
  }

  &:hover {
    cursor: pointer;
    border-color: $border-color-hover;
    background-color: $button-hover-bg;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }

  .icon {
    height: 1em;
    width: 1em;
    /*margin-right: 0.3em;*/
  }

  > .icon {
    order: 1;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      /*margin-left: 0.3em;*/
    }

    > .content {
      order: 1;
    }
  }

  &.button-circle {
    border-radius: 50%;
    height: $button-height;
    width: $button-height;
    padding: 0;
  }

  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>