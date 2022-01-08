<template>
    <div class="section mission pt-6" id="mission">
        <div class="flex items-center w-full mb-4">
            <div>
                <img
                    class="mr-4"
                    src="/img/logo only.png"
                    alt=""
                    style="max-height: 100px"
                />
            </div>
            <p class="text-4xl font-bold border-bottom-blue text-blue w-full">
                Mission
            </p>
        </div>
        <div class="grid grid-cols-1 min-xl:grid-cols-2 min-xl:gap-10">
            <div class="flex flex-wrap content-center description">
                <div>
                    <p class="text-2xl mb-4">
                        The development of the PLE-REAP Medicine app stems from
                        the need for a convenient and accessible mobile
                        assistance that medical students and graduates need.
                        Designed by medical professionals who have had extensive
                        backgrounds in their respective fields, including those
                        who aced their Physician Licensure Examinations,
                        PLE-REAP is what you need to confidently perform well as
                        a student, a reviewee, and a doctor.
                    </p>
                </div>
            </div>
            <div class="picture mb-12">
                <img
                    class="rounded-full lg:mb-4"
                    src="/img/AlternativeM.jpg"
                    alt=""
                    srcset=""
                />
            </div>
        </div>
    </div>
</template>

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
