<template>
    <FormAndTable>
        <template v-slot:form>
            <div class="section">
                <div
                    :class="{
                        'rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg': true,
                    }"
                >
                    <h1 class="text-4xl mb-4">General</h1>
                    <form @submit.prevent="onSubmit">
                        <div
                            class="grid grid-cols-1 min-md:grid-cols-2 gap-x-5"
                        >
                            <div>
                                <CustomFileInput
                                    :inputData="{
                                        field: fields.round_logo,
                                        that: that,
                                    }"
                                >
                                </CustomFileInput>
                                <div class="flex">
                                    <div v-if="round_logo_preview != ''">
                                        <p>Current round logo</p>
                                        <a
                                            class="spotlight"
                                            :href="`/storage/webCMS/images/${round_logo_preview}`"
                                        >
                                            <img
                                                :src="`/storage/webCMS/images/${round_logo_preview}`"
                                                class="max-h-80"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <CustomFileInput
                                    :inputData="{
                                        field: fields.logo,
                                        that: that,
                                    }"
                                >
                                </CustomFileInput>
                                <div class="flex">
                                    <div v-if="logo_preview != ''">
                                        <p>Current logo</p>
                                        <a
                                            class="spotlight"
                                            :href="`/storage/webCMS/images/${logo_preview}`"
                                        >
                                            <img
                                                :src="`/storage/webCMS/images/${logo_preview}`"
                                                class="max-h-80"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            class="btn btn-primary"
                            :disabled="!isEmpty(errors) || submitting"
                        >
                            <Submitting :submitting="submitting"
                                >Submit</Submitting
                            >
                        </button>
                    </form>
                </div>
            </div>
        </template>
    </FormAndTable>
</template>

<script>
import {
    commonCatchBlock,
    dataSetter,
    isEmpty,
    loader,
    toast,
} from "../functions";
import { validateAll } from "../functions/validator";
const fields = {
    round_logo: {
        name: "round_logo",
        labelText: "Round logo",
        accept: "image/*",
        type: "file",
        max_size: "50", //MB,
        multiple: false,
        validation: ["success"],
        sortable: false,
        filterable: false,
        hidden: true,
    },
    logo: {
        name: "logo",
        labelText: "Logo",
        accept: "image/*",
        type: "file",
        max_size: "50", //MB,
        multiple: false,
        validation: ["success"],
        sortable: false,
        filterable: false,
        hidden: true,
    },
};

const field_values = {
    round_logo: [],
    logo: [],
};

export default {
    data() {
        return {
            successes: {},
            errors: {},
            that: this,
            submitting: false,
            fields,
            ...field_values,
            round_logo_preview: "",
            logo_preview: "",
        };
    },
    computed: {
        // current_round_logo_preview() {
        //     return this.round_logo.length > 0 ? URL.createObjectURL(file) : "";
        // },
        // current_logo_preview() {
        //     return this.logo.length > 0 ? URL.createObjectURL(file) : "";
        // },
    },
    mounted() {
        this.getter();
    },

    methods: {
        isEmpty,
        getter() {
            axios
                .post("/general-initialize")
                .then((res) => {
                    this.logo_preview = res.data.logo;
                    this.round_logo_preview = res.data.round_logo;
                })
                .catch((err) => {
                    commonCatchBlock(this, err);
                });
        },
        onSubmit() {
            if (isEmpty(validateAll(fields, this))) {
                let data = new FormData();
                if (this.round_logo.length > 0)
                    data.append("round_logo", this.round_logo[0]);

                if (this.logo.length > 0) {
                    data.append("logo", this.logo[0]);
                }

                this.submitting = true;
                const config = {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                };
                loader("Uploading");
                axios
                    .post("/general-cms", data, config)
                    .then((res) => {
                        Swal.close();
                        this.submitting = false;
                        toast(res.data.status, res.data.message);
                        if (res.data.status == "success") {
                            this.getter();
                            this.round_logo = [];
                            this.logo = [];
                        }
                    })
                    .catch((err) => {
                        Swal.close();
                        this.submitting = false;
                        commonCatchBlock(this, err);
                    });
            }
        },
    },
    components: {
        FormAndTable: () => import("../layouts/FormAndTable.vue"),
        CustomInput: () => import("../components/CustomInput"),
        Submitting: () => import("../components/Submitting"),
        CustomFileInput: () => import("../components/CustomFileInput"),
    },
};
</script>