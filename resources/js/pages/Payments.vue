<template>
    <div class="payments-div mt-5">
        <div class="section payments full-page pb-8" id="payments">
            <div class="flex items-center mb-1 w-full">
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
                        mb-1
                        border-bottom-blue
                        text-blue
                        w-full
                    "
                >
                    Study Bundles
                </p>
            </div>
            <div class="
                    max-w-m
                    rounded-sm
                    overflow-hidden"
            >
                <div class="mx-6 my-4 text-white">
                     <img
                        class=" lg:mb-4 ml-auto mr-auto"
                        src="/img/SUBJECTS.png"
                        alt=""
                        srcset=""
                        style="max-height: 100%"
                    />
                </div> 
            
            </div>
            
            <!--<div
                class="section selected-header py-5 ml-10"
                id="selected-header"
            >
                <div class="flex justify-center items-center mb-4 w-full" >
                    <p class="text-white w-full text-center">
                        <span class="text-5xl font-bold"
                            >Choose one of 2 subject-based bundled</span
                        > <br>
                        <span class="text-5xl font-bold"
                            >OR</span
                        > <br>
                         <span class="text-5xl font-bold"
                            >Choose ALL of these subjects</span
                        >
                    </p>
                </div>
             </div>
             <div
                class="section selected-body py-1 mb-5 ml-10"
                id="selected-body"
            >
                <div class="flex justify-center items-center mb-4 w-full" >
                    <p class="text-3xl text-white w-full text-left p-10 ml-5">
                        <span>Anatomy and Histology</span> <br>
                        <span>Biochemistry</span> <br>
                        <span>Microbiology and Parasitology</span> <br>
                        <span >Pathology</span> <br>
                        <span >Pharmacology and Therapeutics</span> <br>
                        <span >Physiology</span>
                    </p> 
                     <p class="text-3xl text-white w-full text-left">
                        <span>Internal Medicine</span> <br>
                        <span>Legal Medicine, Ethics, and Jurisprudence</span> <br>
                        <span>Obstetrics and Gynecology</span> <br>
                        <span>Pediatrics and Nutrition</span> <br>
                        <span>Preventive Medicine and Public Health</span> <br>
                        <span class="text-2xl">Surgery, Ophthalmology, and Otorhinolaryngology</span>
                    </p> 
                </div>
             </div> -->
            <p class="font-bold text-xl text-red mb-6">
                Select the bundle that works best for you!
            </p>
            <div class="py-5 px-16 border-2 border-red-500 rounded-3xl mb-10">
                <p class="text-xl text-red font-bold mb-6">
                    ONE (1) year subject-specific subscription.
                </p>
                <div
                    class="
                        grid grid-cols-1
                        min-xl:grid-cols-2
                        gap-x-5 gap-y-3
                        mb-6
                    "
                >
                    <div
                        :class="{
                            'border-2  rounded-3xl flex justify-center p-9 cursor-pointer transition-all duration-150': true,
                            'bg-blue-100 border-blue ring-4 ring-blue-400':
                                selected == 1,
                            'border-red-500': selected != 1,
                        }"
                        @click="() => onClick(1)"
                        style="min-width: 200px; min-height-200px"
                    >
                        <div>
                            <p
                                :class="{
                                    'font-bold': true,
                                    'text-red': selected != 1,
                                    'text-blue': selected == 1,
                                }"
                            >
                                <span class="text-5xl">3</span>
                                <span class="text-3xl underline">Subjects</span>
                            </p>
                            <p class="font-bold text-2xl">Php 10,000.00</p>
                        </div>
                    </div>

                    <div
                        :class="{
                            'border-2  rounded-3xl flex justify-center p-9 cursor-pointer transition-all duration-150': true,
                            'bg-blue-100 border-blue ring-4 ring-blue-400':
                                selected == 2,
                            'border-red-500': selected != 2,
                        }"
                        @click="() => onClick(2)"
                        style="min-width: 200px; min-height-200px"
                    >
                        <div>
                            <p
                                :class="{
                                    'font-bold': true,
                                    'text-red': selected != 2,
                                    'text-blue': selected == 2,
                                }"
                            >
                                <span class="text-5xl">6</span>
                                <span class="text-3xl underline">Subjects</span>
                            </p>
                            <p class="font-bold text-2xl">Php 12,500.00</p>
                        </div>
                    </div>
                </div>
                <button
                    class="btn-own btn-danger w-full"
                    :disabled="selected < 1 || selected > 4"
                >
                    Launching SOON!
                </button>
            </div>
            <p class="font-bold text-xl text-red mb-6">Avail all subjects!</p>
            <div class="py-5 px-16 border-2 border-red-500 rounded-3xl mb-10">
                <div
                    class="
                        grid grid-cols-1
                        min-xl:grid-cols-2
                        gap-x-5 gap-y-3
                        mb-6
                    "
                >
                    <div>
                        <p class="text-red font-bold text-2xl mb-5">
                            Six (6) months
                        </p>
                        <div
                            :class="{
                                'border-2  rounded-3xl flex justify-center p-9 cursor-pointer transition-all duration-150': true,
                                'bg-blue-100 border-blue ring-4 ring-blue-400':
                                    selected == 5,
                                'border-red-500': selected != 5,
                            }"
                            @click="() => onClick(5)"
                            style="min-width: 200px; min-height-200px"
                        >
                            <div>
                                <p
                                    :class="{
                                        'font-bold': true,
                                        'text-red': selected != 5,
                                        'text-blue': selected == 5,
                                    }"
                                >
                                    <!--<span class="text-5xl">12</span>
                                    <span class="text-3xl underline"
                                        >Subjects</span
                                    >-->
                                </p>
                                <p class="font-bold text-4xl">Php 10,000.00</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="text-red font-bold text-2xl mb-5">
                            Twelve (12) months
                        </p>
                        <div
                            :class="{
                                'border-2  rounded-3xl flex justify-center p-9 cursor-pointer transition-all duration-150': true,
                                'bg-blue-100 border-blue ring-4 ring-blue-400':
                                    selected == 6,
                                'border-red-500': selected != 6,
                            }"
                            @click="() => onClick(6)"
                            style="min-width: 200px; min-height-200px"
                        >
                            <div>
                                <p
                                    :class="{
                                        'font-bold': true,
                                        'text-red': selected != 6,
                                        'text-blue': selected == 6,
                                    }"
                                >
                                    <!--<span class="text-5xl">12</span>
                                    <span class="text-3xl underline"
                                        >Subjects</span
                                    >-->
                                </p>
                                <p class="font-bold text-4xl">Php 15,000.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="btn-own btn-danger w-full"
                    :disabled="selected < 5"
                >
                    Launching SOON!
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 0,
        };
    },
    methods: {
        onClick(id) {
            if (this.selected == id) {
                this.selected = 0;
            } else {
                this.selected = id;
            }
        },
    },
};
</script>

<style scoped>
.selected-header {
    background-color: #13254a;
}
.selected-body {
    background-color: #69181c;
}
</style>