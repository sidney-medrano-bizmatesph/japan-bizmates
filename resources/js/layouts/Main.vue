<template>
    <transition name="fade" mode="out-in">
        <Navigation></Navigation>
    </transition>
</template>
<script>
import Vue from "vue";
import routes from "../routes";

import Vuex from "vuex";
import VueSplide from "@splidejs/vue-splide";
import StoreData from "../store";
import VueRouter from "vue-router";

Vue.use(VueSplide);

Vue.use(Vuex);
export const store = new Vuex.Store(StoreData);

Vue.set(Vue.prototype, "_", _);

Vue.use(VueRouter);

export const router = new VueRouter({
    ...routes,
    scrollBehavior: function (to, from, savedPosition) {
        if (to.hash) {
            // return { selector: to.hash };
            //Or for Vue 3:
            return { selector: to.hash, behavior: "smooth" };
        } else {
            return { x: 0, y: 0, behavior: "smooth" };
        }
    },
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});
//for vue router
export default {
    store,
    components: {
        Navigation: () => import("./Navigation"),
    },
    computed: {},
    methods: {},
    mounted() {},
    watch: {},
    data() {
        return {};
    },
    router,
};
</script>
