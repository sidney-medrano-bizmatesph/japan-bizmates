<template>
    <div>
        <nav
            :class="{
                'nav-bar': true,
            }"
        >
            <div class="flex items-center">
                <template v-if="!isOpen">
                    <img
                        :src="`/images/logo.png`"
                        alt="Logo"
                        :class="{
                            'h-8 transition-all ease-in-out duration-300 rounded': true,
                        }"
                    />
                    <router-link to="/">
                        <p
                            :class="{
                                'ml-2 font-bold transition-all ease-in-out duration-300 text-white text-lg': true,
                            }"
                        >
                            Japan guide
                        </p>
                    </router-link>
                </template>
            </div>
            <div class="flex items-center">
                <div class="flex justify-between bg-transparent xl:hidden">
                    <template v-for="(guestRoute, key) in guestRoutes">
                        <router-link
                            v-if="!guestRoute.hidden"
                            :key="`guest-route-key-${key}`"
                            :to="guestRoute.path"
                        >
                            <span class="nav-link">
                                <span>{{ guestRoute.title }}</span></span
                            >
                        </router-link></template
                    >
                </div>
                <button
                    class="
                        ml-2
                        mr-2
                        min-xl:hidden
                        text-white
                        btn-own btn-transparent
                    "
                    aria-label="Open Menu"
                    @click="drawer"
                >
                    <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        class="w-8 h-8"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <aside
                :class="{
                    'transform top-0 left-0 w-full bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 border-r-2 ': true,
                    'translate-x-0 opacity-100': isOpen,
                    '-translate-x-full opacity-0': !isOpen,
                }"
            >
                <span
                    class="
                        flex
                        w-full
                        items-center
                        justify-between
                        border-b
                        p-4
                    "
                >
                    <img
                        src="/images/logo.png"
                        alt="Logo"
                        class="h-8 rounded"
                    />
                    <p class="ml-4 font-bold text-black">
                        {{
                            !isEmpty($route.meta.topBar)
                                ? $route.meta.topBar
                                : ""
                        }}
                    </p>
                    <button
                        class="ml-2 mr-2 text-black btn-own btn-transparent"
                        aria-label="Open Menu"
                        @click="drawer"
                    >
                        <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            class="w-8 h-8"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </span>
                <!-- <span
                    class="flex items-center pl-4 pr-4 pt-2 pb-2"
                    v-if="!isEmpty(guestRoutes)"
                    >Guest</span
                > -->
                <template v-for="(route, key) in guestRoutes">
                    <router-link
                        v-if="!route.hidden && route.path != ''"
                        :to="route.path"
                        :key="`guestRoute-${key}`"
                        @click.native="isOpen = false"
                    >
                        <span
                            class="
                                flex
                                items-center
                                p-4
                                text-black
                                hover:bg-blue-900 hover:text-white
                            "
                            ><span class="mr-2">
                                <i
                                    :class="
                                        !isEmpty(route.icon)
                                            ? route.icon
                                            : 'far fa-user'
                                    "
                                ></i>
                            </span>
                            <span>{{ route.title }}</span></span
                        >
                    </router-link>
                    <span
                        v-else-if="route.path == ''"
                        :key="`guestRoute-${key}`"
                        class="p-4 font-bold text-black"
                    >
                        {{ route.title }}</span
                    >
                </template>
            </aside>
        </nav>
        <div
            id="page-content"
            :class="{
                'page-content': true,
            }"
        >
            <transition name="fade" mode="out-in"
                ><router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { isEmpty } from "../functions";
import guestRoutes from "../routes/guest";
import authRoutes from "../routes/auth";
import loggedInRoutes from "../routes/loggedIn";
export default {
    data() {
        return {
            isOpen: false,
            guestRoutes,
        };
    },
    computed: {},
    methods: {
        isEmpty,
        drawer() {
            this.isOpen = !this.isOpen;
        },
    },
    watch: {
        isOpen: {
            immediate: true,
            handler(isOpen) {
                if (process.client) {
                    if (isOpen)
                        document.body.style.setProperty("overflow", "hidden");
                    else document.body.style.removeProperty("overflow");
                }
            },
        },
    },
    mounted() {},
    components: {},
};
</script>

