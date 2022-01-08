<template>
    <FormAndTable>
        <template v-slot:form>
            <div class="section">
                <div
                    :class="{
                        'rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg mb-8': true,
                    }"
                >
                    <h1 class="text-4xl mb-4">Our team</h1>
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
                                    field: fields.description,
                                    value: description,
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
                <OurTeamMembers></OurTeamMembers>
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
    description: {
        type: "tiny",
        name: "description",
        labelText: "Description",
        placeholder: "Description",
        wrapperClass: "mb-2 mr-2 inline-block",
        validation: ["required"],
    },
};

const field_values = {
    title: "",
    description: "",
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
                .post("/our-team-initialize")
                .then((res) => {
                    this.title = res.data.title;

                    this.description = res.data.description;
                })
                .catch((err) => {
                    commonCatchBlock(this, err);
                });
        },
        onSubmit() {
            if (isEmpty(validateAll(fields, this))) {
                let data = {
                    title: this.title,
                    description: this.description,
                };

                this.submitting = true;
                axios
                    .post("/our-team-cms", data)
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
        OurTeamMembers: () => import("./OurTeamMembers.vue"),
    },
};
</script>