<template>
    <FormAndTable>
        <template v-slot:form>
            <div
                :class="{
                    'rounded p-4 transition-all duration-300 bg-white shadow-lg mb-8': true,
                }"
            >
                <h1 class="text-4xl mb-4">Inspiration</h1>
                <form @submit.prevent="onSubmit">
                    <div class="grid grid-cols-1 min-md:grid-cols-2 gap-x-5">
                        <CustomInput
                            :inputData="{
                                field: fields.inspiration_title,
                                value: inspiration_title,
                                that,
                            }"
                        ></CustomInput>

                        <CustomInput
                            :inputData="{
                                field: fields.inspiration_description,
                                value: inspiration_description,
                                that,
                            }"
                        ></CustomInput>
                    </div>
                    <button
                        type="submit"
                        class="btn btn-primary"
                        :disabled="!isEmpty(errors) || submitting"
                    >
                        <Submitting :submitting="submitting">Submit</Submitting>
                    </button>
                </form>
            </div>
            <InspirationVideos></InspirationVideos>
        </template>
    </FormAndTable>
</template>

<script>
import { commonCatchBlock, dataSetter, isEmpty, toast } from "../functions";
import { validateAll } from "../functions/validator";

const fields = {
    inspiration_title: {
        type: "tiny",
        name: "inspiration_title",
        labelText: "Title",
        placeholder: "Title",
        wrapperClass: "mb-2 mr-2 inline-block",
        validation: ["required"],
    },
    inspiration_description: {
        type: "tiny",
        name: "inspiration_description",
        labelText: "Description",
        placeholder: "Description",
        wrapperClass: "mb-2 mr-2 inline-block",
        validation: ["required"],
    },
};

const field_values = {
    inspiration_title: "",
    inspiration_description: "",
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
                .post("/inspiration-initialize")
                .then((res) => {
                    this.inspiration_title = res.data.title;

                    this.inspiration_description = res.data.description;
                })
                .catch((err) => {
                    commonCatchBlock(this, err);
                });
        },
        onSubmit() {
            if (isEmpty(validateAll(fields, this))) {
                let data = {
                    title: this.inspiration_title,
                    description: this.inspiration_description,
                };

                this.submitting = true;
                axios
                    .post("/inspiration-cms", data)
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
        InspirationVideos: () => import("./InspirationVideos.vue"),
    },
};
</script>