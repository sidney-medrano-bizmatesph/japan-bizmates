<template>
    <FormAndTable>
        <template v-slot:form>
            <div class="section">
                <div
                    :class="{
                        'rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg': true,
                    }"
                >
                    <h1 class="text-4xl mb-4">Footer</h1>
                    <form @submit.prevent="onSubmit">
                        <div
                            class="grid grid-cols-1 min-md:grid-cols-2 gap-x-5"
                        >
                            <div>
                                <CustomInput
                                    :inputData="{
                                        field: fields.emails,
                                        value: emails,
                                        that,
                                    }"
                                ></CustomInput>
                                <CustomInput
                                    :inputData="{
                                        field: fields.contact_numbers,
                                        value: contact_numbers,
                                        that,
                                    }"
                                ></CustomInput>
                                <CustomInput
                                    :inputData="{
                                        field: fields.facebook,
                                        value: facebook,
                                        that,
                                    }"
                                ></CustomInput>
                                <CustomInput
                                    :inputData="{
                                        field: fields.instagram,
                                        value: instagram,
                                        that,
                                    }"
                                ></CustomInput>
                                <CustomInput
                                    :inputData="{
                                        field: fields.twitter,
                                        value: twitter,
                                        that,
                                    }"
                                ></CustomInput>
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
                                    <div v-if="current_logo != ''">
                                        <p>Current logo</p>
                                        <a
                                            class="spotlight"
                                            :href="`/storage/webCMS/images/${current_logo}`"
                                        >
                                            <img
                                                :src="`/storage/webCMS/images/${current_logo}`"
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
    toast,
    formSetter,
} from "../functions";
import { validateAll } from "../functions/validator";
const fields = {
    emails: {
        type: "text",
        name: "emails",
        labelText: "Emails",
        placeholder: "Emails",
        wrapperClass: "mb-2 mr-2",
        validation: ["required"],
        helperText: "Separate with comma (,)",
    },
    contact_numbers: {
        type: "text",
        name: "contact_numbers",
        labelText: "Contact numbers",
        placeholder: "Contact numbers",
        wrapperClass: "mb-2 mr-2",
        validation: ["required"],
        helperText: "Separate with comma (,)",
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
    facebook: {
        type: "text",
        name: "facebook",
        labelText: "Facebook",
        placeholder: "Facebook",
        wrapperClass: "mb-2 mr-2",
        validation: ["required"],
    },
    instagram: {
        type: "text",
        name: "instagram",
        labelText: "Instagram",
        placeholder: "Instagram",
        wrapperClass: "mb-2 mr-2",
        validation: ["required"],
    },
    twitter: {
        type: "text",
        name: "twitter",
        labelText: "Twitter",
        placeholder: "Twitter",
        wrapperClass: "mb-2 mr-2",
        validation: ["required"],
    },
};

const field_values = {
    emails: "",
    contact_numbers: "",
    logo: [],
    facebook: "",
    instagram: "",
    twitter: "",
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
            current_logo: "",
        };
    },
    computed: {
        preview() {
            return this.logo.length > 0 ? URL.createObjectURL(file) : "";
        },
    },
    mounted() {
        this.getter();
    },

    methods: {
        isEmpty,
        getter() {
            axios
                .post("/footer-initialize")
                .then((res) => {
                    formSetter(field_values, fields, res.data, this);

                    this.current_logo = res.data.logo;
                })
                .catch((err) => {
                    commonCatchBlock(this, err);
                });
        },
        onSubmit() {
            if (isEmpty(validateAll(fields, this))) {
                let data = new FormData();
                if (this.logo.length > 0) data.append("logo", this.logo[0]);

                data.append("emails", this.emails);
                data.append("contact_numbers", this.contact_numbers);
                data.append("facebook", this.facebook);
                data.append("twitter", this.twitter);
                data.append("instagram", this.instagram);

                this.submitting = true;
                const config = {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                };
                axios
                    .post("/footer-cms", data, config)
                    .then((res) => {
                        this.submitting = false;
                        toast(res.data.status, res.data.message);
                        if (res.data.status == "success") {
                            this.getter();
                            this.logo = [];
                        }
                    })
                    .catch((err) => {
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