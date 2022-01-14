<template>
    <div class="section" style="padding-top: 74px">
        <div class="bg-white rounded-lg mb-4">
            <div class="breadcrumbs">
                <ul>
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link
                            :to="{
                                path: `/places/${$route.params.place}`,
                                query: $route.query,
                            }"
                            >{{
                                $route.params.place.charAt(0).toUpperCase() +
                                $route.params.place.slice(1)
                            }}</router-link
                        >
                    </li>
                    <li>{{ place.name }}</li>
                </ul>
            </div>
        </div>
        <div class="p-4 bg-white mb-4 rounded-lg">
            <div class="mb-2">
                <splide
                    :slides="photos"
                    :options="{
                        classes: {
                            pagination: 'splide__pagination hidden',
                        },
                        width: '100%',
                        perPage: 5,
                        autoWidth: true,
                        rewind: true,
                        gap: '50px',
                        padding: {
                            left: '75px',
                            right: '75px',
                        },
                        breakpoints: {
                            1500: { perPage: 4 },
                            1366: {
                                perPage: 3,
                            },
                            768: {
                                perPage: 2,
                            },
                            767: {
                                perPage: 1,
                            },
                        },
                    }"
                >
                    <splide-slide
                        v-for="(photo, key) in photos"
                        :key="`photo-${key}`"
                    >
                        <div>
                            <a
                                class="spotlight"
                                :href="`${photo.prefix}original${photo.suffix}`"
                            >
                                <img
                                    :src="`${photo.prefix}300x300${photo.suffix}`"
                                    :alt="`Photo of ${place.name}.`"
                                />
                            </a>
                        </div>
                    </splide-slide>
                </splide>
            </div>
            <div
                class="flex flex-wrap content-center"
                v-if="place.stats && place.stats.total_ratings"
            >
                <h2 class="my-2 mr-2">{{ place.name }}</h2>
                <p class="self-center m-0">
                    <span class="badge badge-success badge-lg"
                        ><i class="fas fa-star mr-3"></i> {{ place.rating }} /
                        10
                    </span>
                    / {{ place.stats.total_ratings }} ratings
                </p>
            </div>
            <p>
                <span
                    v-for="(category, key) in place.categories"
                    :key="`category-key-${key}`"
                >
                    {{ category.name
                    }}{{ key + 1 != place.categories.length ? "," : "" }}
                </span>
            </p>
            <p class="mb-0" v-if="place.location && place.location.address">
                {{ place.location.address }}, {{ place.location.region }}
            </p>
        </div>
        <div class="grid grid-cols-5 gap-4">
            <div
                class="
                    col-span-1
                    md:col-span-5
                    min-md:col-span-2
                    min-lg:col-span-1
                "
            >
                <div class="p-4 bg-white mb-4 rounded-lg">
                    <p
                        v-if="place.hours && place.hours.open_now"
                        :class="{
                            'font-bold': true,
                            'text-green-500': place.hours.open_now,
                            'text-red-500': !place.hours.open_now,
                        }"
                    >
                        {{ place.hours.open_now ? "Open now" : "Closed" }}
                    </p>
                    <template
                        v-if="
                            place.hours &&
                            place.hours.regular &&
                            place.hours.regular.filter(
                                (res) => res.day == today
                            ).length > 0
                        "
                    >
                        <p class="font-bold">
                            {{ moment().format("dddd") }}
                        </p>
                        <p>
                            <i class="fas fa-clock mr-2"></i>
                            <span
                                v-for="(
                                    hour, key
                                ) in place.hours.regular.filter(
                                    (res) => res.day == today
                                )"
                                :key="`hour-${key}`"
                            >
                                {{
                                    moment(
                                        hour.open.match(/.{1,2}/g).join(":"),
                                        "HH:mm"
                                    ).format("hh:mm a")
                                }}
                                -
                                {{
                                    moment(
                                        hour.close.match(/.{1,2}/g).join(":"),
                                        "HH:mm"
                                    ).format("hh:mm a")
                                }}{{
                                    key + 1 !=
                                    place.hours.regular.filter(
                                        (res) => res.day == today
                                    ).length
                                        ? ","
                                        : ""
                                }}
                            </span>
                        </p>
                    </template>
                    <template v-if="place.tel != ''">
                        <p><i class="fas fa-phone mr-2"></i>{{ place.tel }}</p>
                    </template>
                    <template v-if="place.website && place.website != ''">
                        <a
                            :href="place.website"
                            class="link no-underline"
                            target="_blank"
                        >
                            <p>
                                <i class="fas fa-globe mr-2"></i>Official
                                Website
                            </p>
                        </a>
                    </template>
                    <template v-if="place.social_media">
                        <a
                            :href="`${links[soc_med]}${place.social_media[soc_med]}`"
                            v-for="(soc_med, key) in Object.keys(
                                place.social_media
                            )"
                            :key="`soc-med-${key}`"
                            class="link no-underline"
                            target="_blank"
                        >
                            <p>
                                <i
                                    :class="`fab fa-${
                                        soc_med == 'facebook_id'
                                            ? 'facebook'
                                            : soc_med
                                    } mr-2`"
                                ></i
                                >{{ place.social_media[soc_med] }}
                            </p>
                        </a>
                    </template>
                </div>
            </div>
            <div
                class="
                    p-4
                    bg-white
                    mb-4
                    rounded-lg
                    md:col-span-5
                    min-md:col-span-3
                    min-lg:col-span-4
                    col-span-4
                "
            >
                <h3 class="my-2" v-if="place.stats && place.stats.total_tips">
                    Tips - {{ tips.length }}/{{ place.stats.total_tips }}
                </h3>
                <div
                    v-for="(tip, key) in tips"
                    :key="`tip-${key}`"
                    style="border-bottom: 2px solid #c5c5c5"
                >
                    <p>
                        {{ moment(tip.created_at).format("MMMM DD, YYYY") }}
                    </p>
                    <p
                        class="text-lg pl-4 py-2"
                        style="border-left: 2px solid rgb(59, 130, 246)"
                    >
                        {{ tip.text }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
import { commonCatchBlock } from "../functions";
export default {
    data() {
        return {
            place: {},
            photos: [],
            tips: [],
            today: moment().isoWeekday(),
            links: {
                facebook_id: "https://www.facebook.com/",
                twitter: "https://twitter.com/",
                instagram: "https://www.instagram.com/",
            },
        };
    },
    mounted() {
        /**
         * get place details, photos and tips
         */
        axios
            .post("/get-place", { fsq_id: this.$route.params.fsq_id })
            .then((res) => {
                this.place = res.data.place_details;
                this.photos = res.data.photos;
                this.tips = res.data.tips;
            })
            .catch((err) => {
                commonCatchBlock(this, err);
            });
    },
    methods: {
        moment,
    },
};
</script>