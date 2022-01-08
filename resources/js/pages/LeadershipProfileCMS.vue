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
                <div class="w-full">
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
                        v-html="our_team.title"
                    ></p>
                    <p class="text-xl" v-html="our_team.title"></p>
                </div>
            </div>
            <div
                class="
                    grid grid-cols-1
                    min-xl:grid-cols-3
                    gap-x-24 gap-y-7
                    min-xl:px-16
                    w-full
                "
            >
                <!-- 1 -->
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
                    v-for="our_team_member in our_teams"
                    :key="`our-team-member-${our_team_member.id}`"
                >
                    <center>
                        <img
                            :src="`/storage/webCMS/images/${our_team_member.picture}`"
                            class="rounded-full h-60 mb-7"
                            alt=""
                        />
                        <p
                            class="text-blue text-2xl font-bold"
                            v-html="our_team_member.name"
                        ></p>
                        <p
                            class="text-red text-xl font-bold mb-6"
                            v-html="our_team_member.position"
                        ></p>
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
            our_team: {},
            our_teams: [],
        };
    },
    mounted() {
        let that = this;
        axios
            .post("/web/our-team-initialize")
            .then((res) => {
                this.our_team = res.data.our_team;
                this.our_teams = res.data.our_teams;
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
