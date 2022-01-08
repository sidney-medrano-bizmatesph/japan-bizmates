<template>
    <FormAndTable>
        <template v-slot:form>
            <div
                :class="{
                    'rounded p-4 transition-all duration-300 shadow-lg mb-8': true,
                    'bg-white': !edit,
                    'bg-green-50 ring-2 ring-green-200': edit,
                }"
            >
                <p class="text-xl">Videos</p>
                <form @submit.prevent="onSubmit">
                    <div
                        class="
                            grid grid-cols-1
                            min-md:grid-cols-2 min-lg:grid-cols-4
                            gap-x-5
                        "
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
                                field: fields.code,
                                value: code,
                                that,
                            }"
                        ></CustomInput>

                        <CustomInput
                            :inputData="{
                                field: fields.sequence,
                                value: sequence,
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
                    <button
                        type="button"
                        class="btn btn-dark"
                        :disabled="submitting"
                        @click="clear"
                    >
                        <Submitting :submitting="submitting">Clear</Submitting>
                    </button>
                    <button
                        type="button"
                        class="btn btn-error"
                        :disabled="submitting"
                        @click="() => $router.push(page_variables.parent_url)"
                        v-if="edit"
                    >
                        <Submitting :submitting="submitting">Cancel</Submitting>
                    </button>
                </form>
            </div>
        </template>
        <template v-slot:table>
            <div
                class="
                    rounded
                    p-4
                    transition-all
                    duration-300
                    bg-white
                    shadow-lg
                    mb-8
                "
            >
                <CustomTableGroup
                    :tableGroupData="{ tableName: ' Inspiration videos table' }"
                >
                    <CustomFilter
                        :fields="fields"
                        :getter="getter"
                        :setter="that[page_variables.setter]"
                        :mainVariable="inspiration_videos"
                    ></CustomFilter>
                    <CustomTable
                        :fields="fields"
                        :getter="getter"
                        :setter="that[page_variables.setter]"
                        :mainVariable="inspiration_videos"
                    >
                        <tr
                            v-for="(
                                video, key
                            ) in inspiration_videos.inspiration_videos"
                            :key="`video-${key}`"
                        >
                            <td>
                                {{
                                    inspiration_videos.page *
                                        inspiration_videos.rowsPerPage +
                                    key +
                                    1
                                }}
                            </td>
                            <td>
                                <router-link
                                    :to="`/cms/home/inspiration-videos/edit/${video.id}?cms=inspiration`"
                                    ><span class="btn btn-primary"
                                        >Edit</span
                                    ></router-link
                                >
                                <button
                                    class="btn btn-error"
                                    @click="() => deleteVideo(video)"
                                >
                                    <i class="fas fa-trash"></i>
                                </button>
                            </td>
                            <td>{{ video.sequence }}</td>
                            <td>{{ video.title }}</td>
                            <td>
                                <a
                                    :href="`https://youtube.com/watch?v=${video.code}`"
                                    class="text-blue-500 hover:underline"
                                    target="_blank"
                                    >{{ video.code }}</a
                                >
                            </td>
                        </tr>
                    </CustomTable>
                    <CustomPagination
                        :getter="getter"
                        :setter="that[page_variables.setter]"
                        :mainVariable="inspiration_videos"
                    ></CustomPagination>
                </CustomTableGroup>
            </div>
        </template>
    </FormAndTable>
</template>

<script>
import {
    commonCatchBlock,
    dataSetter,
    formClearer,
    formSetter,
    isEmpty,
    toast,
} from "../functions";
import { validateAll } from "../functions/validator";
import { mapActions, mapState } from "vuex";

export const page_variables = {
    variable_name: "inspiration_video",
    variable_name_plural: "inspiration_videos",
    parent_url: "/cms/home?cms=inspirations",
    add_url: "/add-inspiration-video",
    edit_url: "/cms/home/inspiration-videos/edit",
    get_url: "/get-inspiration-video",
    getter: "getInspirationVideos",
    setter: "setVarInspirationVideos",
};

export const fields = {
    actions: {
        name: "actions",
        labelText: "Actions",
        filterable: false,
        sortable: false,
    },
    sequence: {
        type: "text",
        name: "sequence",
        labelText: "Order",
        placeholder: "Order",
        wrapperClass: "mb-2 mr-2 inline-block",
        validation: ["required"],
        inputProps: {
            min: 1,
        },
    },
    title: {
        type: "text",
        name: "title",
        labelText: "Title",
        placeholder: "Title",
        wrapperClass: "mb-2 mr-2 inline-block min-lg:col-span-2",
        validation: ["required"],
    },
    code: {
        type: "text",
        name: "code",
        labelText: "Youtube code",
        placeholder: "Youtube code",
        wrapperClass: "mb-2 mr-2 inline-block",
        validation: ["required"],
        helperText: "Copy the code: youtube.com/watch?v=<code>",
    },
};

const field_values = {
    title: "",
    code: "",
    sequence: 1,
};

export default {
    data() {
        return {
            page_variables,
            successes: {},
            errors: {},
            that: this,
            submitting: false,
            fields,
            ...field_values,
            edit: false,
        };
    },
    computed: {
        ...mapState(["inspiration_videos"]),
    },
    mounted() {
        this.getter();
        if (this.$route.path.includes(page_variables.edit_url)) {
            this.edit = true;
            this.inspirationVideoGetter();
        }
        this.sequence = this.inspiration_videos.count + 1;
    },

    methods: {
        ...mapActions([page_variables.getter, page_variables.setter]),
        isEmpty,
        clear() {
            formClearer(field_values, this, ["sequence"]);
        },
        deleteVideo({ id, title }) {
            Swal.fire({
                icon: "info",
                title: "Are you sure?",
                text: `This action will delete the video: ${title}`,
                showCancelButton: true,
            }).then((res) => {
                if (res.value) {
                    axios
                        .post("/delete-inspiration-video", { id })
                        .then((res) => {
                            toast(res.data.status, res.data.message);
                            this.getter();
                        })
                        .catch((err) => {
                            commonCatchBlock(this, err);
                        });
                }
            });
        },
        inspirationVideoGetter() {
            const { id } = this.$route.params;

            axios
                .post(page_variables.get_url, { id })
                .then((res) => {
                    if (res.data.status == "success") {
                        formSetter(field_values, fields, res.data.result, this);
                    } else {
                        toast(res.data.status, res.data.message);
                        this.$router.push(page_variables.parent_url);
                    }
                })
                .catch((err) => {
                    commonCatchBlock(this, err);
                });
        },
        getter(data) {
            let defaultData = {
                filter: this[page_variables.variable_name_plural].filter,
                order: this[page_variables.variable_name_plural].order,
                page: this[page_variables.variable_name_plural].page,
                rowsPerPage:
                    this[page_variables.variable_name_plural].rowsPerPage,
                type: this[page_variables.variable_name_plural].type,
            };
            if (!isEmpty(data)) {
                defaultData = { ...defaultData, ...data };
            }
            this[page_variables.getter](defaultData);
        },
        onSubmit() {
            const { id } = this.$route.params;

            if (isEmpty(validateAll(fields, this))) {
                let data = dataSetter(field_values, this);
                if (this.edit) {
                    data.edit = this.edit;
                    data.id = id;
                }
                this.submitting = true;
                axios
                    .post(page_variables.add_url, data)
                    .then((res) => {
                        this.submitting = false;
                        toast(res.data.status, res.data.message);

                        if (res.data.status == "success") {
                            this.clear();
                            this.getter();
                            if (this.edit) {
                                this.$router.push(page_variables.parent_url);
                            }
                        }
                    })
                    .catch((err) => {
                        this.submitting = false;
                        commonCatchBlock(this, err);
                    });
            }
        },
    },
    watch: {
        $route() {
            this.errors = {};
            this.successes = {};
            if (this.$route.path.includes(page_variables.edit_url)) {
                this.edit = true;
                const { id } = this.$route.params;
                let variable_name = page_variables.variable_name_plural;
                if (!isEmpty(this[variable_name][variable_name])) {
                    let res = this[variable_name][variable_name].filter(
                        (res) => res.id == id
                    )[0];

                    formSetter(field_values, fields, res, this);
                } else this.fundGetter();
            } else {
                this.edit = false;
                this.clear();
            }
        },
        "inspiration_videos.count": function (newValue) {
            this.sequence = newValue + 1;
        },
    },
    components: {
        FormAndTable: () => import("../layouts/FormAndTable.vue"),
        CustomInput: () => import("../components/CustomInput"),
        Submitting: () => import("../components/Submitting"),
        CustomFilter: () => import("../components/CustomFilter"),
        CustomTable: () => import("../components/CustomTable"),
        CustomPagination: () => import("../components/CustomPagination"),
        CustomTableGroup: () => import("../components/CustomTableGroup"),
    },
};
</script>