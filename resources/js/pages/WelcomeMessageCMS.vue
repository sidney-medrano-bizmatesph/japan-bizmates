<template>
    <div class="section mission lg:pt-5" id="mission">
        <div class="flex items-center mb-8 w-full">
            <img
                class="mr-4"
                :src="`/storage/webCMS/images/${general.logo_only}`"
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
            ></p>
        </div>
        <div class="grid grid-cols-1 min-xl:grid-cols-2 min-xl:gap-10">
            <div class="program-picture">
                <img
                    class="rounded-full lg:mb-4"
                    :src="`/storage/webCMS/images/${data.picture}`"
                    alt=""
                    srcset=""
                />
            </div>
            <div class="flex flex-wrap content-center program-description mt-5">
                <div>
                    <p class="text-2xl mb-4 from-cms" v-html="data.content"></p>
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
            data: {},
        };
    },
    mounted() {
        axios
            .post("/web/welcome-initialize")
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