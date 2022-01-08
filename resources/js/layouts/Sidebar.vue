<template>
    <div>
        <nav
            :class="{
                'nav-bar': true,
                'pl-64': isOpen,
                'primary-red': true,
            }"
        >
            <div class="flex items-center">
                <button
                    class="ml-2 mr-2"
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
                <img
                    :src="`/storage/webCMS/images/${general.round_logo}`"
                    alt="Logo"
                    :class="{
                        'h-8 w-8': true,
                    }"
                />
                <p
                    :class="{
                        'ml-4 font-bold': true,
                    }"
                >
                    {{ !isEmpty($route.meta.topBar) ? $route.meta.topBar : "" }}
                </p>
            </div>
            <div class="flex items-center">
                <div class="flex justify-between bg-transparent">
                    <router-link to="/home"
                        ><span class="btn btn-ghost"
                            >Go to website</span
                        ></router-link
                    >
                    <p class="px-3 py-3 font-medium">
                        {{ auth.user.email }}
                    </p>
                    <a
                        @click.prevent="logoutUser"
                        href=""
                        v-if="!isEmpty(auth.user)"
                        class="
                            flex
                            items-center
                            px-3
                            py-3
                            font-medium
                            text-center
                            bg-orange-600
                            rounded
                            text-white
                            hover:bg-orange-700
                            focus:outline-none
                            focus:bg-orange-400
                            cursor-pointer
                        "
                    >
                        <!-- <p class="font-bold text-black-50"> -->
                        LOGOUT
                        <!-- </p> -->
                    </a>
                </div>
            </div>

            <!-- <transition
                enter-class="opacity-0"
                enter-active-class="ease-out transition-medium"
                enter-to-class="opacity-100"
                leave-class="opacity-100"
                leave-active-class="ease-out transition-medium"
                leave-to-class="opacity-0"
            >
                <div
                    @keydown.esc="isOpen = false"
                    v-show="isOpen"
                    class="z-10 fixed inset-0 transition-opacity"
                >
                    <div
                        
                        class="absolute inset-0 bg-green-700 opacity-50"
                        tabindex="0"
                    ></div>
                </div>
            </transition> -->
            <aside
                :class="{
                    'transform top-0 w-64 left-0 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 text-white': true,
                    'translate-x-0': isOpen,
                    '-translate-x-full': !isOpen,
                    'primary-red': true,
                }"
            >
                <span class="w-full p-4">
                    <p class="font-bold text-center">PLE-REAP</p>
                </span>

                <!-- <span
                    class="flex items-center pl-4 pr-4 pt-2 pb-2"
                    v-if="
                        !isEmpty(auth.user) && !isEmpty(loggedInRoutesComputed)
                    "
                    >{{ auth.user.acc_type == 0 ? "Admin" : "" }}</span
                > -->
                <template
                    v-if="
                        !isEmpty(auth.user) && !isEmpty(loggedInRoutesComputed)
                    "
                >
                    <template v-for="(route, key) in loggedInRoutesComputed">
                        <router-link
                            v-if="!route.hidden"
                            :to="route.path"
                            :key="`loggedInRoute-${key}`"
                        >
                            <span class="side-nav-link"
                                ><span class="mr-2">
                                    <i
                                        :class="
                                            !isEmpty(route.icon)
                                                ? route.icon
                                                : 'far fa-user'
                                        "
                                    ></i>
                                </span>
                                <span class="nav-title">{{
                                    route.title
                                }}</span></span
                            >
                        </router-link>
                    </template>
                </template>
                <span
                    class="flex items-center pl-4 pr-4 pt-2 pb-2"
                    v-if="!isEmpty(authRoutesComputed)"
                    >Auth</span
                >
                <template v-if="!isEmpty(authRoutesComputed)">
                    <template v-for="(route, key) in authRoutesComputed">
                        <router-link
                            v-if="!route.hidden"
                            :to="route.path"
                            :key="`authRoute-${key}`"
                        >
                            <span class="side-nav-link"
                                ><span class="mr-2">
                                    <i
                                        :class="
                                            !isEmpty(route.icon)
                                                ? route.icon
                                                : 'far fa-user'
                                        "
                                    ></i>
                                </span>
                                <span class="nav-title">{{
                                    route.title
                                }}</span></span
                            >
                        </router-link>
                    </template>
                </template>
                <a @click.prevent="logoutUser" v-if="!isEmpty(auth.user)">
                    <!-- <p class="font-bold text-black-50"> -->
                    <span
                        class="
                            flex
                            items-center
                            p-4
                            hover:bg-blue-900
                            hover:text-yellow-200
                            transition-all
                        "
                        ><span class="mr-2">
                            <i class="far fa-user"></i>
                        </span>
                        <span>Log out</span></span
                    >
                    <!-- </p> -->
                </a>
            </aside>
        </nav>
        <div
            id="page-content"
            :class="{
                'page-content': true,
                'pl-64': isOpen,
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
import authRoutes from "../routes/auth";
import loggedInRoutes from "../routes/loggedIn";
export default {
    data() {
        return {
            isOpen: false,
        };
    },
    computed: {
        ...mapState(["auth", "general"]),
        authRoutesComputed() {
            const { auth } = this;
            return !isEmpty(auth.user) ? authRoutes[1] : authRoutes[0];
        },
        loggedInRoutesComputed() {
            const { auth } = this;

            if (isEmpty(auth.user)) {
                return [];
            } else {
                return loggedInRoutes.filter((res) => {
                    return res.users.includes(auth.user.role_id);
                });
            }
        },
    },
    methods: {
        ...mapActions(["logoutUser"]),
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
    mounted() {
        if (!isEmpty(this.auth.user)) {
            this.isOpen = true;
        }
        // document.addEventListener("keydown", (e) => {
        //     if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
        // });
    },
};
</script>

<style scoped>
.padding-top-63px {
    padding-top: 63px;
}
</style>
