<template>
    <div class="future-offerings-div pt-10">
        <div
            class="section future-offerings full-page pb-8"
            id="future-offerings"
        >
            <div class="flex items-center mb-8 w-full">
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
                        mb-4
                        border-bottom-blue
                        text-blue
                        w-full
                    "
                    v-html="future_offering.title"
                ></p>
            </div>
            <div class="grid grid-cols-1 min-xl:grid-cols-2 gap-5">
                <div class="flex flex-wrap content-center description">
                    <p
                        class="text-2xl mb-4 content from-cms"
                        v-html="future_offering.content"
                    ></p>
                </div>
                <div class="picture">
                    <img
                        :src="`/storage/webCMS/images/${future_offering.picture}`"
                        class="rounded-full w-full"
                        alt=""
                    />
                </div>
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
            future_offering: {},
        };
    },
    mounted() {
        axios
            .post("/web/future-offerings-initialize")
            .then((res) => {
                this.future_offering = res.data;
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

<style>
.future-offerings .content img {
    display: inline-block;
}

@media only screen and (max-width: 1280px) {
    .description {
        grid-row: 2;
    }
    .picture {
        grid-row: 1;
    }
}
</style>