<template>
    <div class="payments-div mt-5">
        <div class="section payments full-page pb-8" id="payments">
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
                    v-html="payment.title"
                ></p>
            </div>
            <div class="flex justify-center">
                <div class="mx-6 my-4 text-white">
                    <img
                        class="lg:mb-4 ml-auto mr-auto"
                        src="/img/SUBJECTS.png"
                        alt=""
                        srcset=""
                        style="max-height: 100%"
                    />
                </div>
            </div>
            <template v-if="!isEmpty(freetrials)">
                <p class="font-bold text-xl text-red mb-6">Free trials</p>
                <div
                    class="py-5 px-16 border-2 border-red-500 rounded-3xl mb-10"
                >
                    <div
                        class="
                            grid grid-cols-1
                            min-xl:grid-cols-2
                            gap-x-5 gap-y-3
                            mb-6
                        "
                    >
                        <div
                            v-for="payment_item in freetrials"
                            :key="`freetrials-${payment_item.id}`"
                        >
                            <p class="text-red font-bold text-2xl mb-5">
                                {{ payment_item.name }}
                            </p>
                            <div
                                :class="{
                                    'border-2  rounded-3xl flex justify-center p-9 cursor-pointer transition-all duration-150': true,
                                    'bg-blue-100 border-blue ring-4 ring-blue-400':
                                        selected == payment_item.id,
                                    'border-red-500':
                                        selected != payment_item.id,
                                }"
                                @click="() => onClick(payment_item.id)"
                                style="min-width: 200px; min-height-200px"
                            >
                                <div class="text-center">
                                    <p
                                        :class="{
                                            'font-bold': true,
                                            'text-red':
                                                selected != payment_item.id,
                                            'text-blue':
                                                selected == payment_item.id,
                                        }"
                                    >
                                        <!--<span class="text-5xl">12</span>
                                    <span class="text-3xl underline"
                                        >Subjects</span
                                    >-->
                                    </p>
                                    <template
                                        v-if="
                                            payment_item.pre_selling != null &&
                                            stringToDate(
                                                payment_item.pre_selling
                                            ) >= today
                                        "
                                    >
                                        <div>
                                            <!-- <p class="font-bold text-4xl">
                                                Php
                                                {{
                                                    numberWithCommas(
                                                        decimalPlaces(
                                                            payment_item.amount *
                                                                (payment_item.discount /
                                                                    100),
                                                            2
                                                        )
                                                    )
                                                }}
                                            </p> -->
                                            <p
                                                class="text-lg text-red"
                                                v-if="
                                                    payment_item.promo_details !=
                                                    null
                                                "
                                            >
                                                {{ payment_item.promo_details }}
                                            </p>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <!-- <p class="font-bold text-4xl">
                                            Php
                                            {{
                                                numberWithCommas(
                                                    decimalPlaces(
                                                        payment_item.amount,
                                                        2
                                                    )
                                                )
                                            }}
                                        </p> -->
                                        <p
                                            class="text-lg text-red"
                                            v-if="
                                                payment_item.promo_details !=
                                                null
                                            "
                                        >
                                            {{ payment_item.promo_details }}
                                        </p>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        class="btn-own btn-danger w-full"
                        :disabled="!freetrials_ids.includes(selected)"
                        @click="redirectToRegister"
                    >
                        {{ payment.button }}
                    </button>
                </div>
            </template>
            <p
                class="font-bold text-xl text-red mb-6"
                v-html="payment.bundle_header"
            ></p>
            <div class="py-5 px-16 border-2 border-red-500 rounded-3xl mb-10">
                <p
                    class="text-xl text-red font-bold mb-6"
                    v-html="payment.one_year_header"
                ></p>
                <div
                    class="
                        grid grid-cols-1
                        min-xl:grid-cols-2
                        gap-x-5 gap-y-3
                        mb-6
                    "
                >
                    <div
                        v-for="payment_item in payments_upper"
                        :key="`payment-item-${payment_item.id}`"
                        :class="{
                            'border-2  rounded-3xl flex justify-center p-9 cursor-pointer transition-all duration-150': true,
                            'bg-blue-100 border-blue ring-4 ring-blue-400':
                                selected == payment_item.id,
                            'border-red-500': selected != payment_item.id,
                        }"
                        @click="() => onClick(payment_item.id)"
                        style="min-width: 200px; min-height-200px"
                    >
                        <div class="text-center">
                            <p
                                :class="{
                                    'font-bold': true,
                                    'text-red': selected != payment_item.id,
                                    'text-blue': selected == payment_item.id,
                                }"
                            >
                                <span class="text-5xl">{{
                                    payment_item.subjects
                                }}</span>
                                <span class="text-3xl underline">Subjects</span>
                            </p>
                            <template
                                v-if="
                                    payment_item.pre_selling != null &&
                                    stringToDate(payment_item.pre_selling) >=
                                        today
                                "
                            >
                                <div>
                                    <p class="font-bold text-4xl">
                                        Php
                                        {{
                                            numberWithCommas(
                                                decimalPlaces(
                                                    payment_item.amount *
                                                        (payment_item.discount /
                                                            100),
                                                    2
                                                )
                                            )
                                        }}
                                    </p>
                                    <!-- <p class="line-through text-xl text-red">
                                        Php
                                        {{
                                            numberWithCommas(
                                                decimalPlaces(
                                                    payment_item.amount,
                                                    2
                                                )
                                            )
                                        }}
                                    </p> -->
                                    <p
                                        class="text-lg text-red"
                                        v-if="
                                            payment_item.promo_details != null
                                        "
                                    >
                                        {{ payment_item.promo_details }}
                                    </p>
                                </div>
                            </template>
                            <template v-else>
                                <p class="font-bold text-4xl">
                                    Php
                                    {{
                                        numberWithCommas(
                                            decimalPlaces(
                                                payment_item.amount,
                                                2
                                            )
                                        )
                                    }}
                                </p>
                                <p
                                    class="text-lg text-red"
                                    v-if="payment_item.promo_details != null"
                                >
                                    {{ payment_item.promo_details }}
                                </p>
                            </template>
                        </div>
                    </div>
                </div>
                <button
                    class="btn-own btn-danger w-full"
                    :disabled="!payments_upper_ids.includes(selected)"
                    @click="redirectToRegister"
                >
                    {{ payment.button }}
                </button>
            </div>
            <p
                class="font-bold text-xl text-red mb-6"
                v-html="payment.avail_all_header"
            ></p>
            <div class="py-5 px-16 border-2 border-red-500 rounded-3xl mb-10">
                <div
                    class="
                        grid grid-cols-1
                        min-xl:grid-cols-2
                        gap-x-5 gap-y-3
                        mb-6
                    "
                >
                    <div
                        v-for="payment_item in payments"
                        :key="`payments-${payment_item.id}`"
                    >
                        <p class="text-red font-bold text-2xl mb-5">
                            {{ payment_item.name }}
                        </p>
                        <div
                            :class="{
                                'border-2  rounded-3xl flex justify-center p-9 cursor-pointer transition-all duration-150': true,
                                'bg-blue-100 border-blue ring-4 ring-blue-400':
                                    selected == payment_item.id,
                                'border-red-500': selected != payment_item.id,
                            }"
                            @click="() => onClick(payment_item.id)"
                            style="min-width: 200px; min-height-200px"
                        >
                            <div class="text-center">
                                <p
                                    :class="{
                                        'font-bold': true,
                                        'text-red': selected != payment_item.id,
                                        'text-blue':
                                            selected == payment_item.id,
                                    }"
                                ></p>
                                <template
                                    v-if="
                                        payment_item.pre_selling != null &&
                                        stringToDate(
                                            payment_item.pre_selling
                                        ) >= today
                                    "
                                >
                                    <div>
                                        <p class="font-bold text-4xl">
                                            Php
                                            {{
                                                numberWithCommas(
                                                    decimalPlaces(
                                                        payment_item.amount *
                                                            (payment_item.discount /
                                                                100),
                                                        2
                                                    )
                                                )
                                            }}
                                        </p>
                                        <p
                                            class="text-lg text-red"
                                            v-if="
                                                payment_item.promo_details !=
                                                null
                                            "
                                        >
                                            {{ payment_item.promo_details }}
                                        </p>
                                    </div>
                                </template>
                                <template v-else>
                                    <p class="font-bold text-4xl">
                                        Php
                                        {{
                                            numberWithCommas(
                                                decimalPlaces(
                                                    payment_item.amount,
                                                    2
                                                )
                                            )
                                        }}
                                    </p>
                                    <p
                                        class="text-lg text-red"
                                        v-if="
                                            payment_item.promo_details != null
                                        "
                                    >
                                        {{ payment_item.promo_details }}
                                    </p>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="btn-own btn-danger w-full"
                    :disabled="!payments_ids.includes(selected)"
                    @click="redirectToRegister"
                >
                    {{ payment.button }}
                </button>
            </div>
            <template v-if="!isEmpty(review_bundles)">
                <p class="font-bold text-xl text-red mb-6">
                    Review bundle - Lifelines Lecture Series
                </p>
                <div
                    class="py-5 px-16 border-2 border-red-500 rounded-3xl mb-10"
                >
                    <div
                        class="
                            grid grid-cols-1
                            min-xl:grid-cols-2
                            gap-x-5 gap-y-3
                            mb-6
                        "
                    >
                        <div
                            v-for="payment_item in review_bundles"
                            :key="`review_bundles-${payment_item.id}`"
                        >
                            <p class="text-red font-bold text-2xl mb-5">
                                {{ payment_item.name }}
                            </p>
                            <div
                                :class="{
                                    'border-2  rounded-3xl flex justify-center p-9 cursor-pointer transition-all duration-150': true,
                                    'bg-blue-100 border-blue ring-4 ring-blue-400':
                                        selected == payment_item.id,
                                    'border-red-500':
                                        selected != payment_item.id,
                                }"
                                @click="() => onClick(payment_item.id)"
                                style="min-width: 200px; min-height-200px"
                            >
                                <div class="text-center">
                                    <p
                                        :class="{
                                            'font-bold': true,
                                            'text-red':
                                                selected != payment_item.id,
                                            'text-blue':
                                                selected == payment_item.id,
                                        }"
                                    >
                                        <!--<span class="text-5xl">12</span>
                                    <span class="text-3xl underline"
                                        >Subjects</span
                                    >-->
                                    </p>
                                    <template
                                        v-if="
                                            payment_item.pre_selling != null &&
                                            stringToDate(
                                                payment_item.pre_selling
                                            ) >= today
                                        "
                                    >
                                        <div>
                                            <p class="font-bold text-4xl">
                                                Php
                                                {{
                                                    numberWithCommas(
                                                        decimalPlaces(
                                                            payment_item.amount *
                                                                (payment_item.discount /
                                                                    100),
                                                            2
                                                        )
                                                    )
                                                }}
                                            </p>
                                            <p
                                                class="text-lg text-red"
                                                v-if="
                                                    payment_item.promo_details !=
                                                    null
                                                "
                                            >
                                                {{ payment_item.promo_details }}
                                            </p>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <p class="font-bold text-4xl">
                                            Php
                                            {{
                                                numberWithCommas(
                                                    decimalPlaces(
                                                        payment_item.amount,
                                                        2
                                                    )
                                                )
                                            }}
                                        </p>
                                        <p
                                            class="text-lg text-red"
                                            v-if="
                                                payment_item.promo_details !=
                                                null
                                            "
                                        >
                                            {{ payment_item.promo_details }}
                                        </p>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        class="btn-own btn-danger w-full"
                        :disabled="!review_bundle_ids.includes(selected)"
                        @click="redirectToRegister"
                    >
                        {{ payment.button }}
                    </button>
                </div>
            </template>
            <template v-if="!isEmpty(podclass)">
                <p class="font-bold text-xl text-red mb-6">PLE AMC Pod Class</p>
                <div
                    class="py-5 px-16 border-2 border-red-500 rounded-3xl mb-10"
                >
                    <div
                        class="
                            grid grid-cols-1
                            min-xl:grid-cols-2
                            gap-x-5 gap-y-3
                            mb-6
                        "
                    >
                        <div
                            v-for="payment_item in podclass"
                            :key="`podclass-${payment_item.id}`"
                        >
                            <p class="text-red font-bold text-2xl mb-5">
                                {{ payment_item.name }}
                            </p>
                            <div
                                :class="{
                                    'border-2  rounded-3xl flex justify-center p-9 cursor-pointer transition-all duration-150': true,
                                    'bg-blue-100 border-blue ring-4 ring-blue-400':
                                        selected == payment_item.id,
                                    'border-red-500':
                                        selected != payment_item.id,
                                }"
                                @click="() => onClick(payment_item.id)"
                                style="min-width: 200px; min-height-200px"
                            >
                                <div class="text-center">
                                    <p
                                        :class="{
                                            'font-bold': true,
                                            'text-red':
                                                selected != payment_item.id,
                                            'text-blue':
                                                selected == payment_item.id,
                                        }"
                                    >
                                        <!--<span class="text-5xl">12</span>
                                    <span class="text-3xl underline"
                                        >Subjects</span
                                    >-->
                                    </p>
                                    <template
                                        v-if="
                                            payment_item.pre_selling != null &&
                                            stringToDate(
                                                payment_item.pre_selling
                                            ) >= today
                                        "
                                    >
                                        <div>
                                            <p class="font-bold text-4xl">
                                                Php
                                                {{
                                                    numberWithCommas(
                                                        decimalPlaces(
                                                            payment_item.amount *
                                                                (payment_item.discount /
                                                                    100),
                                                            2
                                                        )
                                                    )
                                                }}
                                            </p>
                                            <p
                                                class="text-lg text-red"
                                                v-if="
                                                    payment_item.promo_details !=
                                                    null
                                                "
                                            >
                                                {{ payment_item.promo_details }}
                                            </p>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <p class="font-bold text-4xl">
                                            Php
                                            {{
                                                numberWithCommas(
                                                    decimalPlaces(
                                                        payment_item.amount,
                                                        2
                                                    )
                                                )
                                            }}
                                        </p>
                                        <p
                                            class="text-lg text-red"
                                            v-if="
                                                payment_item.promo_details !=
                                                null
                                            "
                                        >
                                            {{ payment_item.promo_details }}
                                        </p>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        class="btn-own btn-danger w-full"
                        :disabled="!podclass_ids.includes(selected)"
                        @click="redirectToRegister"
                    >
                        {{ payment.button }}
                    </button>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { commonCatchBlock, isEmpty } from "../functions";
export default {
    data() {
        return {
            selected: 0,
            payment: {},
            payments_upper: [],
            payments: [],
            payments_upper_ids: [],
            payments_ids: [],
            review_bundles: [],
            review_bundle_ids: [],
            podclass: [],
            podclass_ids: [],
            freetrials: [],
            freetrials_ids: [],
            today: new Date(),
        };
    },
    mounted() {
        axios
            .post("/web/payments-initialize")
            .then((res) => {
                res.data.payments_upper.map((i) => {
                    this.payments_upper_ids.push(i.id);
                });
                res.data.payments.map((i) => {
                    this.payments_ids.push(i.id);
                });
                res.data.review_bundles.map((i) => {
                    this.review_bundle_ids.push(i.id);
                });
                res.data.podclass.map((i) => {
                    this.podclass_ids.push(i.id);
                });

                res.data.freetrials.map((i) => {
                    this.freetrials_ids.push(i.id);
                });

                this.freetrials = res.data.freetrials;
                this.payment = res.data.payment;
                this.payments_upper = res.data.payments_upper;
                this.payments = res.data.payments;
                this.review_bundles = res.data.review_bundles;
                this.podclass = res.data.podclass;
            })
            .catch((err) => {
                commonCatchBlock(this, err);
            });
    },
    computed: {
        ...mapState(["general"]),
    },
    methods: {
        isEmpty,
        stringToDate(date_string) {
            return new Date(date_string);
        },
        redirectToRegister() {
            window.open("https://med.ple-reap.com/register");
        },
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        decimalPlaces(val, places = 1) {
            return parseFloat(val).toFixed(places);
        },
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