<template>
    <FormAndTable>
        <template v-slot:form>
            <div class="section">
                <div
                    :class="{
                        'rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg mb-8': true,
                    }"
                >
                    <h1 class="text-4xl mb-4">Payments</h1>
                    <form @submit.prevent="onSubmit">
                        <div
                            class="grid grid-cols-1 min-md:grid-cols-2 gap-x-5"
                        >
                            <CustomInput
                                :inputData="{
                                    field: fields.title,
                                    value: title,
                                    that,
                                }"
                            ></CustomInput>

                            <CustomInput
                                :inputData="{
                                    field: fields.bundle_header,
                                    value: bundle_header,
                                    that,
                                }"
                            ></CustomInput>
                            <CustomInput
                                :inputData="{
                                    field: fields.one_year_header,
                                    value: one_year_header,
                                    that,
                                }"
                            ></CustomInput>
                            <CustomInput
                                :inputData="{
                                    field: fields.avail_all_header,
                                    value: avail_all_header,
                                    that,
                                }"
                            ></CustomInput>
                            <CustomInput
                                :inputData="{
                                    field: fields.button,
                                    value: button,
                                    that,
                                }"
                            ></CustomInput>
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
                <SubscriptionListItems></SubscriptionListItems>
            </div>
        </template>
    </FormAndTable>
</template>

<script>
import { commonCatchBlock, dataSetter, isEmpty, toast } from "../functions";
import { validateAll } from "../functions/validator";

const fields = {
    title: {
        type: "tiny",
        name: "title",
        labelText: "Title",
        placeholder: "Title",
        wrapperClass: "mb-2 mr-2 inline-block",
        validation: ["required"],
    },
    bundle_header: {
        type: "tiny",
        name: "bundle_header",
        labelText: "Bundle header",
        placeholder: "Bundle header",
        wrapperClass: "mb-2 mr-2 inline-block",
        validation: ["required"],
    },
    one_year_header: {
        type: "tiny",
        name: "one_year_header",
        labelText: "One year header",
        placeholder: "One year header",
        wrapperClass: "mb-2 mr-2 inline-block",
        validation: ["required"],
    },
    avail_all_header: {
        type: "tiny",
        name: "avail_all_header",
        labelText: "Avail all header",
        placeholder: "Avail all header",
        wrapperClass: "mb-2 mr-2 inline-block",
        validation: ["required"],
    },

    button: {
        type: "text",
        name: "button",
        labelText: "Button text",
        placeholder: "Button text",
        wrapperClass: "mb-2 mr-2 inline-block",
        validation: ["required"],
    },
};

const field_values = {
    title: "",
    bundle_header: "",
    avail_all_header: "",
    one_year_header: "",
    button: "",
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
        };
    },
    computed: {},
    mounted() {
        this.getter();
    },

    methods: {
        isEmpty,
        getter() {
            axios
                .post("/subscription-list-initialize")
                .then((res) => {
                    this.button = res.data.button;
                    this.title = res.data.title;

                    this.bundle_header = res.data.bundle_header;

                    this.avail_all_header = res.data.avail_all_header;

                    this.one_year_header = res.data.one_year_header;
                })
                .catch((err) => {
                    commonCatchBlock(this, err);
                });
        },
        onSubmit() {
            if (isEmpty(validateAll(fields, this))) {
                let data = dataSetter(field_values, this);

                this.submitting = true;
                axios
                    .post("/subscription-list-cms", data)
                    .then((res) => {
                        this.submitting = false;
                        toast(res.data.status, res.data.message);
                        // if (res.data.status == "success") {
                        //     this.getter();
                        // }
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
        SubscriptionListItems: () => import("./SubscriptionListItems.vue"),
    },
};
</script>