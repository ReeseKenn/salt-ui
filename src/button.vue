<template>
    <button class="s-button" :class="{[`icon-${iconPosition}`]:true,'button-circle':circle}" @click="$emit('click')">
        <s-icon class="icon" v-if="icon&&!loading" :name="icon"></s-icon>
        <s-icon class="loading icon" v-if="loading" name="loading"></s-icon>
        <div v-if="!circle" :style="getStyles()" class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
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
<style lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .s-button {
        color: #0a3d62;
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

        svg {
            fill: #0a3d62;
        }

        &:hover {
            cursor: pointer;
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
            height: var(--button-height);
            width: var(--button-height);
            padding: 0;
        }

        .loading {
            animation: spin 2s infinite linear;
        }
    }
</style>
