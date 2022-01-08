<template>
    <FormAndTable>
        <template v-slot:form>
            <div
                :class="{
                    'rounded p-4 transition-all duration-300 bg-white shadow-lg mb-8': true,
                }"
            >
                <h1 class="text-4xl mb-4">Study Guides</h1>
                <form @submit.prevent="onSubmit">
                    <div class="grid grid-cols-1 min-md:grid-cols-2 gap-x-5">
                        <CustomInput
                            :inputData="{
                                field: fields.study_guides_title,
                                value: study_guides_title,
                                that,
                            }"
                        ></CustomInput>

                        <CustomInput
                            :inputData="{
                                field: fields.study_guides_description,
                                value: study_guides_description,
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
            <StudyGuideVideos></StudyGuideVideos>
        </template>
    </FormAndTable>
</template>

<script>
import { commonCatchBlock, dataSetter, isEmpty, toast } from "../functions";
import { validateAll } from "../functions/validator";

const fields = {
    study_guides_title: {
        type: "tiny",
        name: "study_guides_title",
        labelText: "Title",
        placeholder: "Title",
        wrapperClass: "mb-2 mr-2 inline-block",
        validation: ["required"],
    },
    study_guides_description: {
        type: "tiny",
        name: "study_guides_description",
        labelText: "Description",
        placeholder: "Description",
        wrapperClass: "mb-2 mr-2 inline-block",
        validation: ["required"],
    },
};

const field_values = {
    study_guides_title: "",
    study_guides_description: "",
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
                .post("/study-guide-initialize")
                .then((res) => {
                    this.study_guides_title = res.data.title;

                    this.study_guides_description = res.data.description;
                })
                .catch((err) => {
                    commonCatchBlock(this, err);
                });
        },
        onSubmit() {
            if (isEmpty(validateAll(fields, this))) {
                let data = {
                    title: this.study_guides_title,
                    description: this.study_guides_description,
                };

                this.submitting = true;
                axios
                    .post("/study-guide-cms", data)
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
        StudyGuideVideos: () => import("./StudyGuideVideos.vue"),
    },
};
</script>