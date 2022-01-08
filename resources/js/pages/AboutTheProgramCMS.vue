<template>
    <div class="about-the-program-div pt-6">
        <div
            class="section about-the-program full-page pb-8"
            id="about-the-program"
        >
            <div class="flex items-center mb-4 w-full">
                <img
                    class="mr-4"
                    :src="`/storage/webCMS/images/${general.round_logo}`"
                    alt=""
                    style="max-height: 100px"
                />
                <p
                    class="
                        text-4xl
                        font-bold
                        border-bottom-blue
                        text-blue
                        w-full
                    "
                    v-html="about.title"
                ></p>
            </div>
            <div class="grid grid-cols-1 min-xl:grid-cols-2 gap-1">
                <div class="description flex flex-wrap content-center">
                    <p
                        class="text-2xl font-bold mb-2 from-cms"
                        v-html="about.content"
                    >
                        Not much time? We’ll make it easier for you!
                    </p>
                </div>
                <div class="picture mb-8">
                    <img
                        :src="`storage/webCMS/images/${about.picture}`"
                        class="w-full rounded-full"
                        alt=""
                    />
                </div>
            </div>

            <!-- <div class="grid grid-cols-1 gap-x-24 gap-y-7 px-16">
                <img
                    src="/img/organizational structure.jpg"
                    class=""
                    style="width: 100vw"
                    alt=""
                />
            </div> -->
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { commonCatchBlock } from "../functions";
export default {
    data() {
        return { about: {} };
    },
    computed: {
        ...mapState(["general"]),
    },
    mounted() {
        axios
            .post("/web/about-initialize")
            .then((res) => {
                this.about = res.data;
            })
            .catch((err) => {
                commonCatchBlock(this, err);
            });
    },
    computed: {
        ...mapState(["general"]),
    },
};
</script>

<style scoped>
@media only screen and (max-width: 1280px) {
    .description {
        grid-row: 2;
    }
    .picture {
        grid-row: 1;
    }
}
</style>