<template>
    <FormAndTable>
        <template v-slot:form>
            <div class="section">
                <div class="rounded p-4 bg-white my-6 shadow-lg">
                    <CustomInput
                        :inputData="{
                            field: {
                                name: 'cms',
                                labelText: 'CMS',
                                placeholder: 'CMS',
                                type: 'select',
                            },
                            value: cms,
                            that,
                            menuItems: [
                                { id: 'home', text: 'Home' },
                                { id: 'features', text: 'Features' },
                                { id: 'study-guide', text: 'Study Guide' },
                                { id: 'inspirations', text: 'Inspirations' },
                                { id: 'events', text: 'Events' },
                            ],
                            onChangeAfter: (event) => {
                                $router.push(
                                    `/cms/home?cms=${event.target.value}`
                                );
                            },
                        }"
                    >
                    </CustomInput>
                </div>
                <div
                    v-if="cms == 'home'"
                    :class="{
                        'rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg': true,
                    }"
                >
                    <h1 class="text-4xl mb-4">Home</h1>
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
                                    field: fields.subtitle,
                                    value: subtitle,
                                    that,
                                }"
                            ></CustomInput>
                            <CustomInput
                                :inputData="{
                                    field: fields.heading,
                                    value: heading,
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
                            <!-- <CustomFileInput
                            :inputData="{
                                field: fields.files,
                                that: that,
                            }"
                        >
                        </CustomFileInput> -->
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
                <div class="mb-6" v-else-if="cms == 'features'">
                    <Features></Features>
                </div>
                <div class="mb-6" v-else-if="cms == 'study-guide'">
                    <StudyGuide></StudyGuide>
                </div>
                <div class="mb-6" v-else-if="cms == 'events'">
                    <Events></Events>
                </div>
                <div class="mb-6" v-else-if="cms == 'inspirations'">
                    <Inspiration></Inspiration>
                </div>
            </div>
        </template>
    </FormAndTable>
</template>

<script>
import { commonCatchBlock, dataSetter, isEmpty, toast } from "../functions";
import { validateAll } from "../functions/validator";
import Editor from "@tinymce/tinymce-vue";
const fields = {
    title: {
        type: "tiny",
        name: "title",
        labelText: "Title",
        placeholder: "Title",
        wrapperClass: "mb-2 mr-2 inline-block",
        validation: ["required"],
    },
    subtitle: {
        type: "tiny",
        name: "subtitle",
        labelText: "Subtitle",
        placeholder: "Subtitle",
        wrapperClass: "mb-2 mr-2 inline-block",
        validation: ["required"],
    },
    heading: {
        type: "tiny",
        name: "heading",
        labelText: "Heading",
        placeholder: "Heading",
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
    // files: {
    //     name: "files",
    //     labelText: "File",
    //     wrapperClassName: "col-md-6",
    //     accept: "application/pdf",
    //     type: "file",
    //     max_size: "50", //MB,
    //     acceptedExtensions: [".pdf"],
    //     multiple: false,
    //     validation: ["required"],
    //     sortable: false,
    //     filterable: false,
    //     hidden: true,
    // },
};

const field_values = {
    title: "",
    subtitle: "",
    heading: "",
    description: "",
    // files: []
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
            cms: "home",
        };
    },
    updated() {},
    mounted() {
        const { cms } = this.$route.query;
        if (cms) {
            this.cms = cms;
        }
        axios
            .post("/home-initialize")
            .then((res) => {
                this.title = res.data.title;
                this.subtitle = res.data.subtitle;

                this.heading = res.data.heading;
                this.description = res.data.description;
            })
            .catch((err) => {
                commonCatchBlock(this, err);
            });
    },

    methods: {
        isEmpty,
        onSubmit() {
            if (isEmpty(validateAll(fields, this))) {
                let data = dataSetter(field_values, this);
                this.submitting = true;
                axios
                    .post("/home-cms", data)
                    .then((res) => {
                        this.submitting = false;
                        toast(res.data.status, res.data.message);
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
        Features: () => import("./Features.vue"),
        Events: () => import("./Events.vue"),
        StudyGuide: () => import("./StudyGuide.vue"),
        Inspiration: () => import("./Inspiration.vue"),
        Editor,
    },
};
</script>