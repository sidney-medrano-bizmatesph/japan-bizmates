<template>
    <div class="">
        <div
            :style="`background-image: url(/images/${bg}.jpg); 
                    filter: blur(4px);
                    -webkit-filter: blur(2px);
                    padding-top: 64px;
                `"
            class="w-full h-40 bg-cover bg-center bg-no-repeat"
            alt=""
        ></div>
        <div class="section mt-4">
            <div class="bg-white p-4 rounded-lg">
                <div v-if="!loading_weather">
                    <p class="font-bold">Current Weather</p>
                    <div class="flex">
                        <img
                            :src="`http://openweathermap.org/img/wn/${weather.icon}@2x.png`"
                            :alt="`${weather.description.toUpperCase()} icon.`"
                        />
                        <p class="self-center font-bold">
                            {{ weather.description.toUpperCase() }}
                        </p>
                    </div>
                </div>
                <div v-else>
                    <p>
                        <svg
                            class="animate-spin h-5 w-5 mr-3 ..."
                            viewBox="0 0 24 24"
                        ></svg>
                        Loading weather
                    </p>
                </div>
                <Search></Search>
            </div>
            <h1>
                Top {{ count == 0 ? "" : count }} places in {{ place }}
                {{
                    $route.query.query_string
                        ? `related to ${$route.query.query_string}`
                        : ""
                }}
                {{
                    $route.query.radius
                        ? `within ${$route.query.radius} meters.`
                        : ""
                }}
            </h1>

            <div
                class="
                    grid grid-cols-1
                    gap-4
                    min-md:grid-cols-2
                    min-lg:grid-cols-5 min-lg:gap-8
                "
                v-if="!loading"
            >
                <div
                    data-aos="fade-up"
                    class="card text-center shadow-2xl"
                    v-for="(place, place_key) in places"
                    :key="place.fsq_id"
                >
                    <div class="">
                        <img
                            :src="
                                place.photos.length > 0
                                    ? `${place.photos[0].prefix}500x500${place.photos[0].suffix}`
                                    : '/images/placeholder.png'
                            "
                            :alt="`${place.name} sample photo.`"
                            class="rounded-xl w-full h-auto"
                        />
                    </div>
                    <div class="card-body p-6 pt-4">
                        <h2 class="card-title mb-0 text-blue-600">
                            <router-link
                                :to="{
                                    path: `${$route.path}/${place.fsq_id}`,
                                    query: $route.query,
                                }"
                                >{{ place_key + 1 }}.
                                {{ place.name }}</router-link
                            >
                        </h2>

                        <p class="mb-0">
                            <span
                                v-for="(category, key) in place.categories"
                                :key="`category-key-${key}`"
                            >
                                {{ category.name
                                }}{{
                                    key + 1 != place.categories.length
                                        ? ","
                                        : ""
                                }}
                            </span>
                        </p>
                        <p>
                            <span class="badge badge-success badge-lg"
                                ><i class="fas fa-star mr-3"></i>
                                {{ place.rating }}</span
                            >
                        </p>
                        <p>
                            {{
                                `${place.location.address}, ${place.location.region}`
                            }}
                        </p>
                        <p>
                            {{
                                place.description && place.description != ""
                                    ? place.description
                                    : "No description availabe."
                            }}
                        </p>
                    </div>
                </div>
            </div>
            <div v-else>
                <center>
                    <div class="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </center>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from "aos";
import { commonCatchBlock, loader } from "../functions";
export default {
    mounted() {
        this.mounting();
    },
    data() {
        return {
            that: this,
            successes: {},
            errors: {},
            places: {},
            loading: true,
            place: "",
            bg: "",
            count: 0,
            weather: {},
            loading_weather: true,
        };
    },
    methods: {
        /**
         * Fetch places and weather based on router params and query
         * @param {Object=} [route] vue-router object
         */
        mounting(route = {}) {
            AOS.init();

            if (route == {}) {
                route = this.$route;
            }

            let place;
            if (route.params.place != "") {
                place = route.params.place;
            }

            this.place = place.toUpperCase();

            let lowercase_place = place.toLowerCase();

            let predefined_places = [
                "tokyo",
                "yokohama",
                "kyoto",
                "osaka",
                "sapporo",
                "nagoya",
            ];
            /**
             * Redirects to home if the place param is not
             * in the predefined places
             */
            if (predefined_places.includes(lowercase_place)) {
                this.bg = lowercase_place;
                this.loading = true;
                axios
                    .post("/get-places", {
                        place: lowercase_place,
                        query_string: route.query.query_string,
                        radius: route.query.radius,
                    })
                    .then((res) => {
                        this.loading = false;
                        this.places = res.data.results;
                        this.count = res.data.results.length;
                    })
                    .catch((err) => {
                        commonCatchBlock(this, err);
                    });
                this.loading_weather = true;
                axios
                    .post("/get-weather", { place: lowercase_place })
                    .then((res) => {
                        this.weather = res.data.weather[0];
                        this.loading_weather = false;
                    });
            } else {
                this.$router.push("/home");
            }
        },
    },
    components: {
        Search: () => import("./Search.vue"),
    },
    watch: {
        ["$route"](newValue) {
            this.mounting(newValue);
        },
    },
};
</script>
