<template>
    <div class="home-div">
        <!-- <img src="/img/Curves-TOP.png" alt="" class="home-page-bg lg:hidden" /> -->
        <div class="overlay" v-if="showOverlay">
            <div class="overlay__inner">
                <div class="overlay__content">
                    <div class="lds-roller">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block">
            <div
                class="
                    full-page
                    flex flex-wrap
                    content-end
                    pb-8
                    section
                    home-page
                "
            >
                <!-- <div
                    class="
                        
                        mb-4
                    "
                > -->
                <div class="flex flex-wrap w-full h-full">
                    <div
                        class="
                            flex flex-col
                            justify-end
                            mb-4
                            w-full
                            text-black
                            min-xl:text-white
                            lg:mt-8
                        "
                    >
                        <div
                            class="
                                w-full
                                min-xl:w-1/2
                                ml-auto
                                min-xl:text-right
                            "
                        >
                            <p
                                class="home-title m-0"
                                v-html="home.title ? home.title : ''"
                            >
                                PLE-REAP <em>Medicine</em>
                            </p>
                            <p
                                class="home-sub-title m-0 mb-8"
                                v-html="home.subtitle ? home.subtitle : ''"
                            >
                                Philippine Licensure Examination: Read, Explore,
                                and Assess Program
                            </p>
                            <div class="text-black min-xl:text-yellow-200">
                                <p
                                    class="text-3xl font-bold mb-2"
                                    v-html="home.heading ? home.heading : ''"
                                >
                                    Bringing out the best version of YOU
                                </p>
                                <p
                                    class="text-2xl"
                                    v-html="
                                        home.description ? home.description : ''
                                    "
                                >
                                    PLE-REAP Medicine is a high-yielding digital
                                    platform that empowers Philippine medical
                                    students and graduates for the grueling
                                    Physician Licensure Examination.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    :class="{
                        'btn-own btn-danger w-full p-2 rounded-full primary-red': true,
                    }"
                    id="register-button"
                    @click="redirectToRegister"
                >
                    <span class="flex justify-center items-center"
                        ><img
                            :src="`/storage/webCMS/images/${general.round_logo}`"
                            style="height: 40px; margin: 0; padding: 0"
                            alt=""
                        />
                        <span class="font-bold mr-3">PLE-REAP Application</span>
                        <span
                            class="
                                p-3
                                rounded-full
                                bg-white
                                text-black
                                font-bold
                            "
                            >{{ payment.button }}</span
                        ></span
                    >
                </button>
                <button
                    :class="{
                        'btn-own btn-danger w-full p-2 rounded-full primary-red': true,
                        hidden: !passed,
                        fixed: passed,
                    }"
                    style="width: 91.4vw; z-index: 998; bottom: 20px"
                    @click="redirectToRegister"
                >
                    <span class="flex justify-center items-center"
                        ><img
                            :src="`/storage/webCMS/images/${general.round_logo}`"
                            style="height: 40px; margin: 0; padding: 0"
                            class="mr-3"
                            alt=""
                        />
                        <span class="font-bold mr-3">PLE-REAP Application</span>
                        <span
                            class="
                                p-3
                                rounded-full
                                bg-white
                                text-black
                                font-bold
                            "
                            >{{ payment.button }}</span
                        ></span
                    >
                </button>
            </div>
        </div>
        <div
            class="section application-features py-20"
            id="application-features"
        >
            <div class="flex items-center mb-4 w-full" data-aos="zoom-in">
                <p class="text-white w-full" data-aos="zoom-in">
                    <span
                        class="text-4xl font-bold"
                        v-html="features.title ? features.title : ''"
                        >Application Features: <i>Study Framework</i></span
                    >
                </p>
            </div>
            <div class="grid grid-cols-1 min-xl:grid-cols-2 min-xl:gap-10">
                <div
                    class="flex flex-wrap content-center program-picture"
                    data-aos="zoom-in"
                >
                    <img
                        class="rounded-full lg:mb-4 ml-auto mr-auto"
                        :src="`/storage/webCMS/images/${features.name_on_disk}`"
                        alt=""
                        srcset=""
                        style="max-height: 90%"
                    />
                </div>
                <div
                    class="
                        flex flex-wrap
                        content-center
                        program-description
                        mt-5
                    "
                >
                    <div
                        data-aos="zoom-in"
                        class="text-2xl text-white from-cms"
                        v-html="
                            features.description ? features.description : ''
                        "
                    ></div>
                </div>
            </div>
        </div>

        <div class="section study-guide lg:pb-20" id="study-guide">
            <div class="flex flex-wrap content-center pt-10">
                <div class="mb-10 w-full" data-aos="zoom-in">
                    <p
                        class="mb-4 border-bottom-blue text-blue w-full"
                        data-aos="zoom-in"
                    >
                        <span
                            class="text-4xl font-bold"
                            v-html="study_guide.title"
                        ></span>
                    </p>
                    <p class="text-xl" v-html="study_guide.description"></p>
                </div>
                <div class="flex justify-center w-full" data-aos="zoom-in">
                    <splide
                        :slides="study_guide_videos"
                        :options="{
                            classes: {
                                pagination: 'splide__pagination hidden',
                            },
                            width: '100%',
                            perPage: 3,
                            autoWidth: true,
                            rewind: true,
                            gap: '50px',
                            padding: {
                                left: '75px',
                                right: '75px',
                            },
                            breakpoints: {
                                768: {
                                    perPage: 1,
                                },
                            },
                        }"
                    >
                        <splide-slide
                            v-for="(video, key) in study_guide_videos"
                            :key="`study-guide-video-${key}`"
                        >
                            <div style="min-width: 25vw">
                                <iframe
                                    width="100%"
                                    height="300"
                                    :src="`https://www.youtube.com/embed/${video.code}`"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                                <p class="text-lg font-bold">
                                    {{ video.title }}
                                </p>
                            </div>
                        </splide-slide>
                    </splide>
                </div>
            </div>
        </div>

        <div class="section inspiration lg:pb-20" id="inspiration">
            <div class="flex flex-wrap content-center">
                <div class="mb-8 w-full" data-aos="zoom-in">
                    <p
                        class="
                            mb-4
                            border-bottom-blue
                            text-blue
                            w-full
                            text-4xl
                            font-bold
                        "
                        data-aos="zoom-in"
                        v-html="inspiration.title"
                    ></p>
                    <p class="text-xl" v-html="inspiration.description"></p>
                </div>
                <div class="flex justify-center w-full" data-aos="zoom-in">
                    <splide
                        :slides="inspiration_videos"
                        :options="{
                            classes: {
                                pagination: 'splide__pagination hidden',
                            },
                            width: '100%',
                            autoWidth: true,
                            perPage: 3,
                            rewind: true,
                            gap: '50px',
                            padding: {
                                left: '75px',
                                right: '75px',
                            },
                            breakpoints: {
                                768: {
                                    perPage: 1,
                                },
                            },
                            trimSpace: true,
                        }"
                    >
                        <splide-slide
                            v-for="(video, key) in inspiration_videos"
                            :key="`inspiration-video-${key}`"
                        >
                            <div style="min-width: 25vw">
                                <iframe
                                    width="100%"
                                    height="300"
                                    :src="`https://www.youtube.com/embed/${video.code}`"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                            <p class="text-lg font-bold">
                                {{ video.title }}
                            </p>
                        </splide-slide>
                    </splide>
                </div>
            </div>
        </div>

        <div class="section events lg:pb-20" id="events" data-aos="zoom-in">
            <!-- <div class="flex flex-wrap content-center full-page"> -->
            <div class="mb-2 w-full">
                <p
                    class="
                        mb-4
                        border-bottom-blue
                        text-blue
                        w-full
                        text-4xl
                        font-bold
                    "
                    v-html="event.title"
                ></p>
            </div>
            <splide
                :slides="inspiration_videos"
                :options="{
                    classes: {
                        pagination: 'splide__pagination hidden',
                    },
                    width: '100%',
                    autoWidth: true,
                    perPage: 3,
                    rewind: true,
                    gap: '50px',
                    padding: {
                        left: '75px',
                        right: '75px',
                    },
                    breakpoints: {
                        768: {
                            perPage: 1,
                        },
                    },
                    trimSpace: true,
                }"
            >
                <splide-slide
                    v-for="(video, key) in event_videos"
                    :key="`event-video-${key}`"
                >
                    <div style="max-width: 25vw">
                        <video
                            width="100%"
                            muted="muted"
                            preload="metadata"
                            :data-src="`/storage/webCMS/videos/${video.name_on_disk}`"
                            class="banner-video"
                            :src="`/storage/webCMS/videos/${video.name_on_disk}`"
                            controls
                            playsInline
                        ></video>
                    </div>
                </splide-slide>
            </splide>
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
import AOS from "aos";
import Splide from "@splidejs/splide";
import { validateAll } from "../functions/validator";
import { commonCatchBlock } from "../functions";
import { mapState } from "vuex";
export default {
    data() {
        return {
            that: this,
            successes: {},
            errors: {},
            area_id: "",
            passed: false,
            home: {},
            features: {},
            study_guide: {},
            study_guide_videos: [],
            showOverlay: false,
            inspiration: {},
            inspiration_videos: [],
            event: {},
            event_videos: [],
            payment: {},
        };
    },
    mounted() {
        const that = this;
        this.showModal = true;
        axios
            .post("/web/home-initialize")
            .then((res) => {
                this.payment = res.data.payment;
                this.showModal = false;
                this.home = res.data.home;
                this.features = res.data.features;
                this.study_guide = res.data.study_guide;
                this.study_guide_videos = res.data.study_guide_videos;
                this.inspiration = res.data.inspiration;
                this.inspiration_videos = res.data.inspiration_videos;
                this.event = res.data.event;
                this.event_videos = res.data.event_videos;
                this.data = res.data;
            })
            .catch((err) => {
                this.showModal = false;

                commonCatchBlock(this, err);
            });

        window.addEventListener("scroll", function () {
            var elementTarget = document.getElementById("register-button");
            var footer = document.getElementById("footer");
            if (elementTarget != null) {
                if (
                    !that.passed &&
                    window.scrollY >
                        elementTarget.offsetTop + elementTarget.offsetHeight
                ) {
                    that.passed = true;
                } else if (
                    that.passed &&
                    window.scrollY <
                        elementTarget.offsetTop + elementTarget.offsetHeight
                ) {
                    that.passed = false;
                }
            }
        });

        if (this.$route.hash) {
            let element = document.getElementById(this.$route.hash.substr(1));
            let top = element.offsetTop;
            window.scrollTo(0, top);
        }
        AOS.init();
    },
    computed: {
        ...mapState(["general"]),
    },
    methods: {
        redirectToRegister() {
            window.open("https://med.ple-reap.com/login");
        },
        onClick() {
            validateAll(
                [
                    {
                        name: "area_id",
                        placeholder: "Area",
                        labelText: "Area",
                        type: "select2Sync",
                        wrapperClassName: "col-lg-6",
                        validation: ["required"],
                        hidden: true,
                        filterable: false,
                    },
                ],
                this
            );
        },
    },
    watch: {
        study_guide_videos: function (newValue) {
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
    },
    components: {
        CustomButton: () => import("../components/CustomButton"),
        CustomInput: () => import("../components/CustomInput"),
        Footer: () => import("../layouts/Footer.vue"),
    },
};
</script>

<style >
@media only screen and (min-width: 1281px) {
    .program-grid:nth-child(even) .program-picture {
        grid-column: 2;
        grid-row: 1;
    }
    .program-grid:nth-child(even) .program-description {
        grid-column: 1;
        grid-row: 1;
    }
}
@media only screen and (max-width: 1280px) {
    .video-div {
        grid-row: 1;
    }
    .program-picture {
        grid-row: 1;
    }
}
</style>

<style scoped>
.application-features-text {
    min-height: 60px;
    color: white;
    background-color: rgb(63, 63, 63);
    font-size: 1.25rem;
    line-height: 1.75rem;
    text-align: center;
    vertical-align: middle;
    padding-top: 10px;
}
/* .footer-page-bg {
    z-index: -1;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0%;
    height: calc(100% - 50px);
} */
/* .study-guide-bg {
    z-index: -1;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0%;
} */

/* .home-page-bg {
    display: none;
    z-index: -1;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0%;
} */
/* .event-page-bg {
    z-index: -1;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0%;
} */

/*.events {
    margin-top: -5px;
}*/

.events {
    /*background-image: url("/img/vision background.png");*/
    background-position: top;
    background-size: 100%;
    background-repeat: no-repeat;
    margin-top: -8px;
    padding-top: 50px;
}
.application-features {
    background-color: #13254a;
}

.program-information {
    background-image: url("/img/program-information background.png");
    background-position-y: top;
    background-position-x: center;
    background-size: 100%;
    background-repeat: no-repeat;
    margin-top: -2px;
}

.mission {
    background-image: url("/img/program-information background.png");
    background-position-y: top;
    background-position-x: center;
    background-size: 100%;
    background-repeat: no-repeat;
    margin-top: -2px;
}

.study-guide {
    background-image: url("/img/vision background.png");
    background-position: top;
    background-size: 100%;
    background-repeat: no-repeat;
    margin-top: -8px;
    padding-top: 100px;
}

/*.study-guide {
    background-image: url("/img/study-guide background.png");
    background-position-x: center;
    background-position-y: bottom;

    background-size: 100%;
    background-repeat: no-repeat;
} */

.event-pill-l {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
}
.event-pill-r {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
}

/* .home-page {
    margin-top: 50px;
} */

@media only screen and (min-width: 1281px) {
    .home-page {
        background-image: url("/img/Curves-TOP-NEW.png");
        background-position-x: center;
        background-position-y: top;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .logo-red,
    .logo-blue {
        color: white;
    }
}
</style>