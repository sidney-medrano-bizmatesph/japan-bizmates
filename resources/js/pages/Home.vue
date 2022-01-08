<template>
    <div class="section max-w-none mt-4">
        <div
            class="
                flex
                items-center
                w-full
                px-4
                py-10
                bg-cover bg-center
                card
                bg-base-200
                mb-3
            "
            style="background-image: url('/images/background.webp')"
        >
            <div class="card glass min-lg:card-side text-black content-center">
                <div class="p-6 lg:pb-0 flex justify-center">
                    <img
                        src="/images/flag.png"
                        class="
                            rounded-lg
                            shadow-lg
                            max-h-44
                            lg:max-h-32
                            w-auto
                            h-auto
                        "
                    />
                </div>
                <div class="card-body p-6">
                    <h1 class="m-0 p-0 mb-2">Japan</h1>
                    <h2 class="m-0 p-0 mb-2">
                        Japan is truly timeless, a place where ancient
                        traditions are fused with modern life as if it were the
                        most natural thing in the world.
                    </h2>
                    <div class="card-actions mt-0">
                        <button class="btn btn-primary rounded-full">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <h2 class="p-0 m-0">Cities you should visit.</h2>
            <div class="grid gap-7 grid-cols-3">
                <router-link to="/places/tokyo" class="tokyo text-">
                    <div class="card text-center shadow-2xl">
                        <div class="p-6">
                            <img
                                src="/images/tokyo.jpg"
                                class="rounded-xl object-cover max-w-full"
                            />
                        </div>
                        <div class="card-body pt-0">
                            <h2 class="card-title">Tokyo</h2>
                            <p>
                                Tokyo (東京, Tōkyō) is Japan's capital and the
                                world's most populous metropolis. It is also one
                                of Japan's 47 prefectures, consisting of 23
                                central city wards and multiple cities, towns
                                and villages west of the city center.
                            </p>
                        </div>
                    </div>
                </router-link>

                <div class="yokohama"><h3 class="p-0 m-0">Yokohama</h3></div>

                <div class="kyoto"><h3 class="p-0 m-0">Kyoto</h3></div>

                <div class="osaka"><h3 class="p-0 m-0">Osaka</h3></div>

                <div class="sapporo"><h3 class="p-0 m-0">Sapporo</h3></div>

                <div class="Nagoya"><h3 class="p-0 m-0">Nagoya</h3></div>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from "aos";
import Splide from "@splidejs/splide";
import { validateAll } from "../functions/validator";
import { commonCatchBlock } from "../functions";
export default {
    mounted() {
        const that = this;

        AOS.init();

        axios.post("/");

        // new Splide(".splide-events", {
        //     perPage: 3,
        //     rewind: true,
        //     gap: "20px",
        //     padding: {
        //         left: "75px",
        //         right: "75px",
        //     },
        //     breakpoints: {
        //         768: {
        //             perPage: 1,
        //         },
        //     },
        // }).mount();

        // new Splide(".splide-inspiration", {
        //     perPage: 3,
        //     rewind: true,
        //     gap: "20px",
        //     padding: {
        //         left: "75px",
        //         right: "75px",
        //     },
        //     breakpoints: {
        //         768: {
        //             perPage: 1,
        //         },
        //     },
        // }).mount();

        // new Splide(".splide-study-guide", {
        //     perPage: 3,
        //     rewind: true,
        //     gap: "20px",
        //     padding: {
        //         left: "75px",
        //         right: "75px",
        //     },
        //     breakpoints: {
        //         768: {
        //             perPage: 1,
        //         },
        //     },
        // }).mount();
    },
    data() {
        return {
            that: this,
            successes: {},
            errors: {},
            area_id: "",
            passed: false,
        };
    },
    methods: {},
    components: {
        CustomInput: () => import("../components/CustomInput"),
        Footer: () => import("../layouts/Footer.vue"),
    },
};
</script>

<style >
</style>

<style scoped>
</style>