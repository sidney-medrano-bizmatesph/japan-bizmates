<template>
    <div id="app">
        <transition name="fade" appear>
            <div
                class="modal-overlay"
                v-if="showModalLocal"
                @click="hideModal"
            ></div>
        </transition>
        <transition name="pop" appear>
            <div class="modal-own" role="dialog" v-if="showModalLocal">
                <div
                    class="header flex justify-between items-center"
                    v-if="header != ''"
                >
                    <h1 class="text-xl">{{ header }}</h1>
                    <button
                        class="btn btn-transparent btn-sm text-xl"
                        @click="hideModal"
                        :disabled="disabledClose"
                    >
                        x
                    </button>
                </div>
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        showModal: {
            type: Boolean,
            default: false,
        },
        afterHideModal: {
            type: Function,
        },
        header: {
            type: String,
            default: "",
        },
        disabledClose: {
            type: Boolean,
            default: false,
        },
    },
    mounted() {
        this.showModalLocal = this.showModal;
    },
    data() {
        return { showModalLocal: false };
    },
    methods: {
        hideModal() {
            if (this.disabledClose) {
            } else {
                this.showModalLocal = false;
                if (this.afterHideModal) {
                    this.afterHideModal();
                }
            }
        },
    },
    watch: {
        showModal(newValue) {
            this.showModalLocal = newValue;
        },
    },
};
</script>

<style scoped>
.modal-own {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: fit-content;
    height: fit-content;
    max-width: 22em;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    background: #fff;
    z-index: 999;
    transform: none;
    overflow: auto;
    max-height: 90vh;
    margin-top: 5vh;
}

/* // Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .modal-own {
        min-width: calc(100% - 5px);
    }
}

@media (min-width: 576px) and (max-width: 767.98px) {
    .modal-own {
        min-width: calc(100% - 20px);
    }
}

@media (min-width: 768px) and (max-width: 991.98px) {
    .modal-own {
        min-width: calc(100% - 100px);
    }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
    .modal-own {
        min-width: calc(100% - 200px);
    }
}

@media (min-width: 1200px) {
    .modal-own {
        min-width: calc(100% - 600px);
    }
}

/* .modal h1 {
    margin: 0 0 1rem;
} */

.modal-overlay {
    content: "";
    position: absolute;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    background: #2c3e50;
    opacity: 0.6;
    cursor: pointer;
}

/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
    transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
    opacity: 0;
    transform: scale(0.3) translateY(-50%);
}
</style>