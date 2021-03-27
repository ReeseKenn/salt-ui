<template>
  <button class="s-button" :class="{[`icon-${iconPosition}`]:true}">
    <s-icon class="icon" v-if="icon" :name="icon"/>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>
<script>
export default {
  props: {
    icon: {},
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
  }
}
</script>
<style lang="scss">
.s-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  line-height: 1;

  &:hover {
    border-color: var(--border-color-hover);
    background-color: var(--button-hover-bg)
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  .icon {
    width: 1em;
    margin-right: 0.3em;
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
      margin-left: 0.3em;
    }

    > .content {
      order: 1;
    }
  }
}
</style>
