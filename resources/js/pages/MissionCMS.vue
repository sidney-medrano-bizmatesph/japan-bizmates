<template>
    <div class="section mission pt-6" id="mission">
        <div class="flex items-center w-full mb-4">
            <div>
                <img
                    class="mr-4"
                    :src="`/storage/webCMS/images/${general.round_logo}`"
                    alt=""
                    style="max-height: 100px"
                />
            </div>
            <p
                class="text-4xl font-bold border-bottom-blue text-blue w-full"
                v-html="data.title"
            >
                Mission
            </p>
        </div>
        <div class="grid grid-cols-1 min-xl:grid-cols-2 min-xl:gap-10">
            <div class="flex flex-wrap content-center description from-cms">
                <div>
                    <p class="text-2xl mb-4" v-html="data.content"></p>
                </div>
            </div>
            <div class="picture mb-12">
                <img
                    class="rounded-full lg:mb-4"
                    :src="`/storage/webCMS/images/${data.picture}`"
                    alt=""
                    srcset=""
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { commonCatchBlock } from "../functions";
export default {
    data() {
        return {
            data: {},
        };
    },
    mounted() {
        axios
            .post("/web/mission-initialize")
            .then((res) => {
                this.data = res.data;
            })
            .catch((err) => commonCatchBlock(this, err));
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
