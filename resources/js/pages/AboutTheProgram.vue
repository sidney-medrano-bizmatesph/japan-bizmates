<template>
    <div class="about-the-program-div pt-6">
        <div
            class="section about-the-program full-page pb-8"
            id="about-the-program"
        >
            <div class="flex items-center mb-4 w-full">
                <img
                    class="mr-4"
                    src="/img/logo only.png"
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
                >
                    About the program
                </p>
            </div>
            <div class="grid grid-cols-1 min-xl:grid-cols-2 gap-1">
                <div class="description flex flex-wrap content-center">
                    <p class="text-2xl font-bold mb-2">
                        Not much time? We’ll make it easier for you!
                    </p>
                    <p class="text-2xl font-bold mb-2">
                        Not sticking in your head? We know how to do it!
                    </p>

                    <p class="text-2xl font-bold mb-2">
                        Lacking confidence? We’ll take away your worries!
                    </p>

                    <p class="text-2xl font-bold mb-5">
                        Is it possible? We’ll make it happen!
                    </p>

                    <p class="text-4xl font-bold mb-4">
                        We know how it was, and ... <br />
                        PLE-REAP Medicine is here to help!
                    </p>
                </div>
                <div class="picture mb-8">
                    <img
                        src="/img/About.jpg"
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
export default {
    data() {
        return {};
    },
};
</script>

<style scoped>
/* .about-the-program-div {
    min-height: calc(80vh - 64px - 1.25rem);
    background-image: url("/img/semi circle.png");
    background-position-x: right;
    background-position-y: bottom;
    background-size: 100%;
    background-repeat: no-repeat;
} */
@media only screen and (max-width: 1280px) {
    .description {
        grid-row: 2;
    }
    .picture {
        grid-row: 1;
    }
}
</style>