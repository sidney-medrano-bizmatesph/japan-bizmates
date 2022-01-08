<template>
    <FormAndTable>
        <template v-slot:form>
            <div
                :class="{
                    'rounded p-4 transition-all duration-300 bg-white shadow-lg': true,
                }"
            >
                <h1 class="text-4xl mb-4">Features</h1>
                <form @submit.prevent="onSubmit">
                    <div class="grid grid-cols-1 min-md:grid-cols-2 gap-x-5">
                        <CustomInput
                            :inputData="{
                                field: fields.features_title,
                                value: features_title,
                                that,
                            }"
                        ></CustomInput>

                        <CustomInput
                            :inputData="{
                                field: fields.features_description,
                                value: features_description,
                                that,
                            }"
                        ></CustomInput>
                        <CustomFileInput
                            :inputData="{
                                field: fields.features_picture,
                                that: that,
                            }"
                        >
                        </CustomFileInput>
                        <div class="flex">
                            <div v-if="picture != ''">
                                <p>Current picture</p>
                                <a
                                    class="spotlight"
                                    :href="`/storage/webCMS/images/${picture}`"
                                >
                                    <img
                                        :src="`/storage/webCMS/images/${picture}`"
                                        class="max-h-80"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
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
    features_title: {
        type: "tiny",
        name: "features_title",
        labelText: "Title",
        placeholder: "Title",
        wrapperClass: "mb-2 mr-2 inline-block",
        validation: ["required"],
    },
    features_picture: {
        name: "features_picture",
        labelText: "File",
        accept: "image/*",
        type: "file",
        max_size: "50", //MB,
        multiple: false,
        validation: ["success"],
        sortable: false,
        filterable: false,
        hidden: true,
    },
    features_description: {
        type: "tiny",
        name: "features_description",
        labelText: "Description",
        placeholder: "Description",
        wrapperClass: "mb-2 mr-2 inline-block",
        validation: ["required"],
    },
};

const field_values = {
    features_title: "",
    features_description: "",
    features_picture: [],
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
            picture: "",
        };
    },
    computed: {
        preview() {
            return this.features_picture.length > 0
                ? URL.createObjectURL(file)
                : "";
        },
    },
    mounted() {
        this.getter();
    },

    methods: {
        isEmpty,
        getter() {
            axios
                .post("/features-initialize")
                .then((res) => {
                    this.features_title = res.data.title;

                    this.features_description = res.data.description;

                    this.picture = res.data.name_on_disk;
                })
                .catch((err) => {
                    commonCatchBlock(this, err);
                });
        },
        onSubmit() {
            if (isEmpty(validateAll(fields, this))) {
                let data = new FormData();
                if (this.features_picture.length > 0)
                    data.append("picture", this.features_picture[0]);

                data.append("title", this.features_title);
                data.append("description", this.features_description);

                this.submitting = true;
                const config = {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                };
                loader("Uploading");
                axios
                    .post("/features-cms", data, config)
                    .then((res) => {
                        Swal.close();
                        this.submitting = false;
                        toast(res.data.status, res.data.message);
                        if (res.data.status == "success") {
                            this.getter();
                            this.features_picture = [];
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