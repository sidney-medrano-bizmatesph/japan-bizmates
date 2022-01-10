<template>
    <div class="section" style="padding-top: 74px">
        <div class="bg-white rounded-lg mb-4">
            <div class="breadcrumbs">
                <ul>
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="`/places/${$route.params.place}`">{{
                            $route.params.place.charAt(0).toUpperCase() +
                            $route.params.place.slice(1)
                        }}</router-link>
                    </li>
                    <li>{{ place.name }}</li>
                </ul>
            </div>
        </div>
        <div class="p-4 bg-white mb-4 rounded-lg">
            <div class="mb-2">
                <splide
                    :slides="place.photos"
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
                        v-for="(photo, key) in place.photos"
                        :key="`photo-${key}`"
                    >
                        <div>
                            <a
                                class="spotlight"
                                :href="`${photo.prefix}original${photo.suffix}`"
                            >
                                <img
                                    :src="`${photo.prefix}300x300${photo.suffix}`"
                                    alt=""
                                />
                            </a>
                        </div>
                    </splide-slide>
                </splide>
            </div>
            <div class="flex flex-wrap content-center">
                <h2 class="my-2 mr-2">{{ place.name }}</h2>
                <p class="self-center m-0">
                    <span class="badge badge-success badge-lg"
                        ><i class="fas fa-star mr-3"></i>
                        {{ place.rating }}</span
                    >
                </p>
            </div>
            <p class="mb-0">
                <span
                    v-for="(category, key) in place.categories"
                    :key="`category-key-${key}`"
                >
                    {{ category.name
                    }}{{ key + 1 != place.categories.length ? "," : "" }}
                </span>
            </p>
        </div>
    </div>
</template>

<script>
import { commonCatchBlock } from "../functions";
export default {
    data() {
        return {
            place: {},
        };
    },
    mounted() {
        axios
            .post("/get-place", { fsq_id: this.$route.params.fsq_id })
            .then((res) => {
                this.place = res.data;
            })
            .catch((err) => {
                commonCatchBlock(this, err);
            });
    },
};
</script>