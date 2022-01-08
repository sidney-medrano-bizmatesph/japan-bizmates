<template>
    <FormAndTable>
        <template v-slot:form>
            <div class="section">
                <div
                    :class="{
                        'rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg min-lg:w-1/2 mx-auto': true,
                    }"
                >
                    <h1 class="text-4xl mb-1" style="margin-bottom: 5px">
                        Contact us
                    </h1>
                    <form @submit.prevent="onSubmit">
                        <div class="grid grid-cols-1 gap-x-5">
                            <CustomInput
                                :inputData="{
                                    field: fields.name,
                                    value: name,
                                    that,
                                }"
                            ></CustomInput>
                            <CustomInput
                                :inputData="{
                                    field: fields.contact_number,
                                    value: contact_number,
                                    that,
                                }"
                            ></CustomInput>
                            <CustomInput
                                :inputData="{
                                    field: fields.email,
                                    value: email,
                                    that,
                                }"
                            ></CustomInput>
                            <CustomInput
                                :inputData="{
                                    field: fields.subject,
                                    value: subject,
                                    that,
                                }"
                            ></CustomInput>
                            <CustomInput
                                :inputData="{
                                    field: fields.content,
                                    value: content,
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
            </div>
        </template>
    </FormAndTable>
</template>

<script>
import { commonCatchBlock, dataSetter, isEmpty, toast } from "../functions";
import { validateAll } from "../functions/validator";
const fields = {
    subject: {
        type: "text",
        name: "subject",
        labelText: "Subject",
        placeholder: "Subject",
        wrapperClass: "mb-2 mr-2",
        validation: ["required"],
    },
    content: {
        type: "tiny",
        name: "content",
        labelText:
            "Program inquiry or Payment concerns or Suggestions and Recommendations or Content Feedback :",
        placeholder: "Content",
        wrapperClass: "mb-2 mr-2",
        validation: ["required"],
    },
    name: {
        type: "text",
        name: "name",
        labelText: "Name",
        placeholder: "Name",
        wrapperClass: "mb-2 mr-2",
        validation: ["required"],
    },
    contact_number: {
        type: "text",
        name: "contact_number",
        labelText: "Contact number",
        placeholder: "Contact number",
        wrapperClass: "mb-2 mr-2",
        validation: ["required"],
    },
    email: {
        type: "text",
        name: "email",
        labelText: "Email",
        placeholder: "Email",
        wrapperClass: "mb-2 mr-2",
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
    subject: "",
    content: "",
    name: "",
    contact_number: "",
    email: "",
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
    mounted() {},

    methods: {
        isEmpty,
        onSubmit() {
            if (isEmpty(validateAll(fields, this))) {
                let data = dataSetter(field_values, this);
                this.submitting = true;
                axios
                    .post("/contact-us", data)
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
    },
};
</script>
