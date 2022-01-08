<template>
    <FormAndTable>
        <template v-slot:form>
            <h1></h1>
        </template>
        <template v-slot:table>
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 p-10">
                <div>
                    <div class="grid grid-cols-3 lg:mb-5 mb-5">
                    <button>All</button>
                    <button>MCQ</button>
                    <button>Flash Card</button>
                    </div>
                    <!--  -->
                    <!-- <TableGroup :tableGroupData="{ tableName: 'Sidney' }">
                        <template v-slot:content>
                            <Search></Search>
                            <Table></Table>
                            <Pagination></Pagination>
                        </template>
                    </TableGroup> -->
                </div>
                <div>
                    <strong>Pod Cast</strong>
                    <div class="video-div lg:mb-5 mb-5">
                        <video
                            width="100%"
                            muted="muted"
                            preload="none"
                            data-src="/videos/enz.mp4"
                            class="banner-video"
                            src="/videos/enz.mp4"
                            controls
                        ></video>
                    </div>
                    <span class="mt-1">Video Title Podcast</span>
                     <div
                    class="splide splide-study-guide"
                    data-aos="zoom-in"
                    style="width: 100%"
                >
                    <div class="splide__track">
                        <ul class="splide__list">
                            <li class="splide__slide">
                                <div class="splide__slide__container">
                                    <video
                                        width="100%"
                                        loop="loop"
                                        muted="muted"
                                        preload="metadata"
                                        data-src="/videos/1.mp4"
                                        class="banner-video"
                                        src="/videos/1.mp4"
                                        controls
                                    ></video>
                                </div>
                                Slide 1
                            </li>
                            <li class="splide__slide">
                                <div class="splide__slide__container">
                                    <video
                                        width="100%"
                                        loop="loop"
                                        muted="muted"
                                        preload="metadata"
                                        data-src="/videos/2.mp4"
                                        class="banner-video"
                                        src="/videos/2.mp4"
                                        controls
                                    ></video>
                                </div>
                                Slide 2
                            </li>
                            <li class="splide__slide">
                                <div class="splide__slide__container">
                                    <video
                                        width="100%"
                                        loop="loop"
                                        muted="muted"
                                        preload="metadata"
                                        data-src="/videos/3.mp4"
                                        class="banner-video"
                                        src="/videos/3.mp4"
                                        controls
                                    ></video>
                                </div>
                                Slide 3
                            </li>
                            <li class="splide__slide">
                                <div class="splide__slide__container">
                                    <video
                                        width="100%"
                                        loop="loop"
                                        muted="muted"
                                        preload="metadata"
                                        data-src="/videos/4.mp4"
                                        class="banner-video"
                                        src="/videos/4.mp4"
                                        controls
                                    ></video>
                                </div>
                                Slide 4
                            </li>
                            <li class="splide__slide">
                                <div class="splide__slide__container">
                                    <video
                                        width="100%"
                                        loop="loop"
                                        muted="muted"
                                        preload="metadata"
                                        data-src="/videos/5.mp4"
                                        class="banner-video"
                                        src="/videos/5.mp4"
                                        controls
                                    ></video>
                                </div>
                                Slide 5
                            </li>
                        </ul>
                    </div>
                </div>

                    
                </div>
                <!-- <Table></Table> -->
            </div>
        </template>
    </FormAndTable>
</template>



<script>
import AOS from "aos";
import Splide from "@splidejs/splide";
export default {
    mounted() {
       
        AOS.init({once: true});
        new Splide(".splide-events", {
            perPage: 3,
            rewind: true,
            gap: "20px",
            padding: {
                left: "75px",
                right: "75px",
            },
            breakpoints: {
                768: {
                    perPage: 1,
                },
            },
        }).mount();
        new Splide(".splide-study-guide", {
            perPage: 3,
            rewind: true,
            gap: "20px",
            padding: {
                left: "75px",
                right: "75px",
            },
            breakpoints: {
                768: {
                    perPage: 1,
                },
            },
        }).mount();
    },
    data() {
        return {
            that: this,
            successes: {},
            errors: {},
            passed: false,
        };
    },
    methods: {
        
    },
    components: {
        FormAndTable: () => import("../../layouts/FormAndTable"),
    },
};
</script>