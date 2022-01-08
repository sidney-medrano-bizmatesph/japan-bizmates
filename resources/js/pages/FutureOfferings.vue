<template>
    <div class="future-offerings-div pt-10">
        <div
            class="section future-offerings full-page pb-8"
            id="future-offerings"
        >
            <div class="flex items-center mb-8 w-full">
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
                        mb-4
                        border-bottom-blue
                        text-blue
                        w-full
                    "
                >
                    Future Offerings
                </p>
            </div>
            <div class="grid grid-cols-1 min-xl:grid-cols-2 gap-5">
                <div class="flex flex-wrap content-center description">
                    <p class="text-2xl mb-4">
                        <strong>PLE-REAP</strong> utilizes the fullest extent of
                        our technology in delivering effective learning for
                        medical students and those preparing for their licensure
                        exams alike. With the innovative use of evidence-based
                        assessment tools, our learning interface ensures that
                        the learners receive maximum content retention and
                        mastery. Carefully crafted by some of the best in the
                        profession, PLE-REAP is tailored to be your simple,
                        straightforward, and productive study companion.
                    </p>

                    <p class="text-2xl mb-4">
                        Our programs are designed to address your varying needs,
                        from specific subjects to the whole repertoire of
                        medical science.
                    </p>

                    <div class="flex items-center w-full">
                        <img
                            class="mr-4"
                            src="/img/round logo.png"
                            alt=""
                            style="max-height: 70px"
                        />
                        <p class="text-2xl">PLE REAP Medicine</p>
                    </div>
                    <div class="w-full pl-10">
                        <p class="text-2xl pl-12">Upcoming features:</p>
                    </div>
                    <div class="mb-4 w-full pl-10">
                        <p class="text-2xl mb-4 pl-20">
                            <b>The MockBoards </b><br />
                            <b>The QBank </b><br />
                            <b>The Medical Intern's Survival Guide </b>
                        </p>
                    </div>

                    <div class="flex items-center mb-4 w-full">
                        <img
                            class="mr-4"
                            src="/img/logo-nursing.png"
                            alt=""
                            style="max-height: 70px"
                        />
                        <p class="text-2xl mb-4">PLE REAP Nursing</p>
                    </div>
                    <div class="flex items-center mb-4 w-full">
                        <img
                            class="mr-4"
                            src="/img/logo-medtech.png"
                            alt=""
                            style="max-height: 70px"
                        />
                        <p class="text-2xl mb-4">PLE REAP Medical Technology</p>
                    </div>
                    <div class="flex items-center mb-4 w-full">
                        <img
                            class="mr-4"
                            src="/img/logo-pharma.png"
                            alt=""
                            style="max-height: 70px"
                        />
                        <p class="text-2xl mb-4">PLE REAP Pharmacy</p>
                    </div>
                    <div class="flex items-center mb-4 w-full">
                        <img
                            class="mr-4"
                            src="/img/logo-pt.png"
                            alt=""
                            style="max-height: 70px"
                        />
                        <p class="text-2xl mb-4">PLE REAP Physical Therapy</p>
                    </div>
                </div>
                <div class="program-picture">
                    <img
                        src="/img/FUTURE OFFERINGS.jpg"
                        class="rounded-full w-full"
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
.future-offerings-div {
    min-height: calc(80vh - 64px - 1.25rem);
    /*background-image: url("/img/semi circle.png");*/
    background-position-x: right;
    background-position-y: bottom;
    background-size: 100%;
    background-repeat: no-repeat;
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