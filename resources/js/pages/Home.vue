<template>
    <div>
        <div
            data-aos="fade-up"
            class="
                flex
                items-center
                w-full
                px-4
                pt-20
                pb-10
                bg-cover bg-center
                card
                bg-base-200
                mb-3
            "
            style="background-image: url('/images/background.jpg')"
        >
            <div
                class="
                    card
                    glass
                    min-lg:card-side
                    text-white
                    content-center
                    justify-center
                "
            >
                <div class="p-6 lg:pb-0 flex justify-center">
                    <img
                        src="/images/flag.png"
                        class="
                            rounded-lg
                            shadow-xl
                            max-h-44
                            lg:max-h-32
                            w-auto
                            h-auto
                        "
                    />
                </div>
                <div
                    class="
                        card-body
                        p-6
                        flex flex-wrap
                        content-center
                        justify-center
                    "
                >
                    <h1 class="m-0 p-0 mb-2">Japan</h1>
                    <h2 class="m-0 p-0 mb-2">
                        Japan is truly timeless, a place where ancient
                        traditions are fused with modern life as if it were the
                        most natural thing in the world.
                    </h2>
                </div>
            </div>
        </div>
        <div class="section max-w-none pb-8">
            <div class="bg-white p-4 rounded-lg mb-2">
                <p class="font-bold mt-0">Quick Search</p>
                <Search></Search>
            </div>
            <div>
                <h2 class="p-0 m-0" data-aos="fade-up">
                    Cities you should visit:
                </h2>
                <div
                    class="
                        grid grid-cols-1
                        gap-2
                        xl:grid-cols-2 xl:gap-4
                        min-xl:grid-cols-3 min-xl:gap-8
                    "
                >
                    <router-link
                        to="/places/tokyo"
                        class="tokyo text-black"
                        data-aos="fade-up"
                    >
                        <div
                            class="
                                card
                                min-2xl:card-side
                                text-center
                                shadow-xl
                                h-full
                            "
                        >
                            <div
                                class="
                                    p-6
                                    flex flex-wrap
                                    content-center
                                    justify-center justify
                                    center
                                "
                            >
                                <img
                                    src="/images/tokyo.jpg"
                                    class="
                                        rounded-xl
                                        object-cover
                                        max-auto max-h-44
                                    "
                                />
                            </div>
                            <div class="card-body pt-0">
                                <h2 class="card-title">Tokyo</h2>
                                <p>
                                    Is Japan's capital and the world's most
                                    populous metropolis. It is also one of
                                    Japan's 47 prefectures, consisting of 23
                                    central city wards and multiple cities,
                                    towns and villages west of the city center.
                                </p>
                            </div>
                        </div>
                    </router-link>

                    <router-link
                        to="/places/yokohama"
                        class="yokohama text-black"
                        data-aos="fade-up"
                    >
                        <div
                            class="
                                card
                                min-2xl:card-side
                                text-center
                                shadow-xl
                                h-full
                            "
                        >
                            <div
                                class="
                                    p-6
                                    flex flex-wrap
                                    content-center
                                    justify-center
                                "
                            >
                                <img
                                    src="/images/yokohama.jpg"
                                    class="
                                        rounded-xl
                                        object-cover
                                        max-auto max-h-44
                                    "
                                />
                            </div>
                            <div class="card-body pt-0">
                                <h2 class="card-title">Yokohama</h2>
                                <p>
                                    Is the second-largest city in Japan by
                                    population and the most populous
                                    municipality of Japan. It is the capital
                                    city and the most populous city in Kanagawa
                                    Prefecture, with a 2020 population of 3.8
                                    million.
                                </p>
                            </div>
                        </div>
                    </router-link>

                    <router-link
                        to="/places/kyoto"
                        class="kyoto text-black"
                        data-aos="fade-up"
                    >
                        <div
                            class="
                                card
                                min-2xl:card-side
                                text-center
                                shadow-xl
                                h-full
                            "
                        >
                            <div
                                class="
                                    p-6
                                    flex flex-wrap
                                    content-center
                                    justify-center
                                "
                            >
                                <img
                                    src="/images/kyoto.jpg"
                                    class="
                                        rounded-xl
                                        object-cover
                                        max-auto max-h-44
                                    "
                                />
                            </div>
                            <div class="card-body pt-0">
                                <h2 class="card-title">Kyoto</h2>
                                <p>
                                    Officially Kyoto City (京都市, Kyōto-shi,
                                    [kʲoːtoꜜɕi]), is the capital city of Kyoto
                                    Prefecture in Japan. Located in the Kansai
                                    region on the island of Honshu, Kyoto forms
                                    a part of the Keihanshin metropolitan area
                                    along with Osaka and Kobe.
                                </p>
                            </div>
                        </div>
                    </router-link>

                    <router-link
                        to="/places/osaka"
                        class="osaka text-black"
                        data-aos="fade-up"
                    >
                        <div
                            class="
                                card
                                min-2xl:card-side
                                text-center
                                shadow-xl
                                h-full
                            "
                        >
                            <div
                                class="
                                    p-6
                                    flex flex-wrap
                                    content-center
                                    justify-center
                                "
                            >
                                <img
                                    src="/images/osaka.jpg"
                                    class="
                                        rounded-xl
                                        object-cover
                                        max-auto max-h-44
                                    "
                                />
                            </div>
                            <div class="card-body pt-0">
                                <h2 class="card-title">Osaka</h2>
                                <p>
                                    Is a designated city in the Kansai region of
                                    Honshu in Japan. It is the capital and the
                                    most populous city in Osaka Prefecture, and
                                    the third most populous city in Japan,
                                    following Tokyo and Yokohama (both located
                                    in the Greater Tokyo Area and the Kantō
                                    region).
                                </p>
                            </div>
                        </div>
                    </router-link>

                    <router-link
                        to="/places/sapporo"
                        class="sapporo text-black"
                        data-aos="fade-up"
                    >
                        <div
                            class="
                                card
                                min-2xl:card-side
                                text-center
                                shadow-xl
                                h-full
                            "
                        >
                            <div
                                class="
                                    p-6
                                    flex flex-wrap
                                    content-center
                                    justify-center
                                "
                            >
                                <img
                                    src="/images/sapporo.jpg"
                                    class="
                                        rounded-xl
                                        object-cover
                                        max-auto max-h-44
                                    "
                                />
                            </div>
                            <div class="card-body pt-0">
                                <h2 class="card-title">Sapporo</h2>
                                <p>
                                    It is the largest city north of Tokyo, and
                                    the largest city on Hokkaido, the
                                    northernmost main island of the country. It
                                    is the capital city of Hokkaido Prefecture
                                    and Ishikari Subprefecture. Sapporo lies in
                                    the southwest of Hokkaido, within the
                                    alluvial fan of the Toyohira River, which is
                                    a tributary stream of the Ishikari.
                                </p>
                            </div>
                        </div>
                    </router-link>

                    <router-link
                        to="/places/nagoya"
                        class="nagoya text-black"
                        data-aos="fade-up"
                    >
                        <div
                            class="
                                card
                                min-2xl:card-side
                                text-center
                                shadow-xl
                                h-full
                            "
                        >
                            <div
                                class="
                                    p-6
                                    flex flex-wrap
                                    content-center
                                    justify-center
                                "
                            >
                                <img
                                    src="/images/nagoya.jpg"
                                    class="
                                        rounded-xl
                                        object-cover
                                        max-auto max-h-44
                                    "
                                />
                            </div>
                            <div class="card-body pt-0">
                                <h2 class="card-title">Nagoya</h2>
                                <p>
                                    the fourth-most populous city and third most
                                    populous urban area in Japan, with a
                                    population of 2.3 million in 2020. Located
                                    on the Pacific coast on central Honshu, it
                                    is the capital and the most populous city of
                                    Aichi Prefecture, and is one of Japan's
                                    major ports along with those of Tokyo,
                                    Osaka, Kobe, Yokohama, and Chiba.
                                </p>
                            </div>
                        </div>
                    </router-link>
                </div>
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
        AOS.init();
    },
    components: {
        Search: () => import("./Search.vue"),
    },
};
</script>

<style >
</style>

<style scoped>
</style>