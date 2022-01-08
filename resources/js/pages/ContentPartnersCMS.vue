<template>
    <div class="content-partner-div mt-5">
        <div
            class="
                section
                content-partners
                full-page
                flex flex-wrap
                content-center
                pb-8
            "
            id="content-partners"
        >
            <div class="flex items-start w-full mb-8">
                <img
                    class="mr-4"
                    :src="`/storage/webCMS/images/${general.round_logo}`"
                    alt=""
                    style="max-height: 100px"
                />
                <div>
                    <p
                        class="
                            text-4xl
                            font-bold
                            border-bottom-blue
                            text-blue
                            w-full
                            mb-3
                            mt-1
                        "
                        v-html="content_partner.title"
                    ></p>
                    <p class="text-xl" v-html="content_partner.description"></p>
                </div>
            </div>
            <!-- <div class="w-full"></div> -->
            <div
                class="
                    grid grid-cols-1
                    min-xl:grid-cols-3
                    gap-x-24 gap-y-7
                    min-xl:px-16
                "
            >
                <!-- Abuluyan -->
                <div
                    class="
                        w-full
                        bg-gray-100
                        shadow-lg
                        p-11
                        mb-10
                        transition-all
                    "
                    style="border-radius: 75px"
                    v-for="content_partner_item in content_partners"
                    :key="`content-partner-item-${content_partner_item.id}`"
                >
                    <center>
                        <img
                            :src="`/storage/webCMS/images/${content_partner_item.picture}`"
                            class="rounded-full max-height-60 mb-7"
                            alt=""
                        />
                        <p class="text-blue text-2xl font-bold">
                            {{ content_partner_item.name }}
                        </p>
                        <p class="text-red text-xl font-bold mb-6"></p>
                        <p
                            class="text-black text-l text-left from-cms"
                            v-html="content_partner_item.details"
                        ></p>
                        <div
                            class="
                                content
                                max-h-0
                                overflow-hidden
                                transition-all
                                duration-300
                            "
                        >
                            <p
                                class="text-l mb-6 text-left from-cms"
                                v-html="content_partner_item.collapse"
                            ></p>
                        </div>

                        <button
                            class="collapse-button btn btn-ghost rounded-full"
                        >
                            <i class="las la-plus text-3xl font-bold"></i>
                        </button>
                    </center>
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
            content_partner: {},
            content_partners: [],
        };
    },
    mounted() {
        let that = this;
        $("body").on("click", ".collapse-button", function () {
            let div = $(this).prev(".content");
            div.toggleClass("max-h-0");
            div.toggleClass("max-h-screen");
        });

        axios
            .post("/web/content-partner-initialize")
            .then((res) => {
                this.content_partner = res.data.content_partner;
                this.content_partners = res.data.content_partners;
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
.max-height-60 {
    max-height: 240px;
}
</style>