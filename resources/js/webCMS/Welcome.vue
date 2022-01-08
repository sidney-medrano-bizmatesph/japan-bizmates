<template>
    <FormAndTable>
        <template v-slot:form>
            <div class="section">
                <div
                    :class="{
                        'rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg': true,
                    }"
                >
                    <h1 class="text-4xl mb-4">Welcome</h1>
                    <form @submit.prevent="onSubmit">
                        <div
                            class="grid grid-cols-1 min-md:grid-cols-2 gap-x-5"
                        >
                            <div>
                                <CustomFileInput
                                    :inputData="{
                                        field: fields.picture,
                                        that: that,
                                    }"
                                >
                                </CustomFileInput>
                                <div class="flex">
                                    <div v-if="current_picture != ''">
                                        <p>Current picture</p>
                                        <a
                                            class="spotlight"
                                            :href="`/storage/webCMS/images/${current_picture}`"
                                        >
                                            <img
                                                :src="`/storage/webCMS/images/${current_picture}`"
                                                class="max-h-80"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <CustomInput
                                :inputData="{
                                    field: fields.content,
                                    value: content,
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
            </div>
        </template>
    </FormAndTable>
</template>

<script>
import { commonCatchBlock, dataSetter, isEmpty, toast } from "../functions";
import { validateAll } from "../functions/validator";
const fields = {
    content: {
        type: "tiny",
        name: "content",
        labelText: "Content",
        placeholder: "Content",
        wrapperClass: "mb-2 mr-2 inline-block",
        validation: ["required"],
    },
    picture: {
        name: "picture",
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
};

const field_values = {
    content: "",
    picture: [],
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
            current_picture: "",
        };
    },
    computed: {
        preview() {
            return this.picture.length > 0 ? URL.createObjectURL(file) : "";
        },
    },
    mounted() {
        this.getter();
    },

    methods: {
        isEmpty,
        getter() {
            axios
                .post("/welcome-initialize")
                .then((res) => {
                    this.content = res.data.content;

                    this.current_picture = res.data.picture;
                })
                .catch((err) => {
                    commonCatchBlock(this, err);
                });
        },
        onSubmit() {
            if (isEmpty(validateAll(fields, this))) {
                let data = new FormData();
                if (this.picture.length > 0)
                    data.append("picture", this.picture[0]);

                data.append("content", this.content);

                this.submitting = true;
                const config = {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                };
                axios
                    .post("/welcome-cms", data, config)
                    .then((res) => {
                        this.submitting = false;
                        toast(res.data.status, res.data.message);
                        if (res.data.status == "success") {
                            this.getter();
                            this.picture = [];
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