<template>
    <button
        @click="computedOnClick"
        :type="isEmpty(buttonType) ? 'button' : buttonType"
        :class="
            buttonClassOverride == undefined
                ? {
                      btn: true,
                      'btn-primary': type == 'primary',
                      'btn-success': type == 'success',
                      'btn-danger': type == 'error',
                      'btn-warning': type == 'warning',
                      'btn-info': type == 'info',
                      'btn-dark': type == 'dark',
                      'btn-light': type == 'light',
                      'btn-disabled': inputProps && inputProps.disabled,
                      [buttonClass]: buttonClass,
                  }
                : buttonClassOverride
        "
        v-bind="{ ...inputProps }"
    >
        <slot></slot>
    </button>
</template>

<script>
import { mapState } from "vuex";
import { isEmpty } from "../functions";

export default {
    methods: {
        isEmpty,
    },
    computed: {
        ...mapState(["auth"]),
        computedOnClick() {
            if (this.onClick != undefined) {
                return this.onClick;
            } else return () => ({});
        },
    },
    props: [
        "buttonType",
        "buttonClass",
        "type",
        "text",
        "inputProps",
        "buttonClassOverride",
        "onClick",
    ],
};
</script>
