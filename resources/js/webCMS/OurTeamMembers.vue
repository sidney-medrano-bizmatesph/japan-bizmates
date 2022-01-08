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
                <p class="text-xl">Members</p>
                <form @submit.prevent="onSubmit">
                    <div
                        class="
                            grid grid-cols-1
                            min-md:grid-cols-2 min-lg:grid-cols-3
                            gap-x-5
                        "
                    >
                        <div class="min-lg:col-span-2">
                            <CustomInput
                                :inputData="{
                                    field: fields.sequence,
                                    value: sequence,
                                    that,
                                }"
                            ></CustomInput>
                            <CustomInput
                                :inputData="{
                                    field: fields.name,
                                    value: name,
                                    that,
                                }"
                            ></CustomInput>
                            <CustomInput
                                :inputData="{
                                    field: fields.position,
                                    value: position,
                                    that,
                                }"
                            ></CustomInput>
                        </div>

                        <div>
                            <div
                                class="shadow w-full bg-gray-300 mt-2 rounded"
                                v-if="submitting"
                            >
                                <div
                                    class="
                                        rounded
                                        animate-pulse
                                        bg-blue-900
                                        text-xs
                                        leading-none
                                        py-1
                                        text-center text-white
                                        transition-all
                                    "
                                    :style="`width: ${processProgress}%`"
                                >
                                    {{ processProgress }}%
                                </div>
                            </div>
                            <CustomFileInput
                                :inputData="{
                                    field: {
                                        ...fields.picture,
                                        validation: [
                                            `${edit ? 'success' : 'required'}`,
                                        ],
                                    },
                                    value: picture,
                                    that,
                                }"
                            ></CustomFileInput>
                            <div class="w-full" v-if="edit">
                                <p>Current picture</p>
                                <a
                                    class="spotlight"
                                    :href="`/storage/webCMS/images/${preview}`"
                                >
                                    <img
                                        :src="`/storage/webCMS/images/${preview}`"
                                        alt=""
                                        class="max-h-52"
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
                    :tableGroupData="{ tableName: 'Members table' }"
                >
                    <CustomFilter
                        :fields="fields"
                        :getter="getter"
                        :setter="that[page_variables.setter]"
                        :mainVariable="our_team_members"
                    ></CustomFilter>
                    <CustomTable
                        :fields="fields"
                        :getter="getter"
                        :setter="that[page_variables.setter]"
                        :mainVariable="our_team_members"
                    >
                        <tr
                            v-for="(
                                partner, key
                            ) in our_team_members.our_team_members"
                            :key="`partner-${key}`"
                        >
                            <td>
                                {{
                                    our_team_members.page *
                                        our_team_members.rowsPerPage +
                                    key +
                                    1
                                }}
                            </td>

                            <td>
                                <router-link
                                    :to="`/cms/our-team/edit/${partner.id}`"
                                    ><span
                                        class="btn btn-primary btn-sm mb-2 mr-2"
                                        >Edit</span
                                    ></router-link
                                >
                                <button
                                    class="btn btn-error btn-sm"
                                    @click="() => deleteMember(partner)"
                                >
                                    <i class="fas fa-trash"></i>
                                </button>
                            </td>
                            <td>
                                <a
                                    class="spotlight"
                                    :href="`/storage/webCMS/images/${partner.picture}`"
                                    ><img
                                        :src="`/storage/webCMS/images/${partner.picture}`"
                                        class="max-h-28"
                                        alt=""
                                /></a>
                            </td>
                            <td>{{ partner.name }}</td>
                            <td>{{ partner.position }}</td>
                            <td>{{ partner.sequence }}</td>
                        </tr>
                    </CustomTable>
                    <CustomPagination
                        :getter="getter"
                        :setter="that[page_variables.setter]"
                        :mainVariable="our_team_members"
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
    variable_name: "our_team_member",
    variable_name_plural: "our_team_members",
    parent_url: "/cms/our-team",
    add_url: "/add-our-team-member",
    edit_url: "/cms/our-team/edit",
    get_url: "/get-our-team-member",
    getter: "getOurTeamMembers",
    setter: "setVarOurTeamMembers",
};

export const fields = {
    actions: {
        name: "actions",
        labelText: "Actions",
        filterable: false,
        sortable: false,
    },
    picture: {
        name: "picture",
        labelText: "Picture",
        accept: "image/*",
        type: "file",
        max_size: "50", //MB,
        multiple: false,
        validation: ["success"],
        sortable: false,
        filterable: false,
    },
    name: {
        type: "text",
        name: "name",
        labelText: "Name",
        placeholder: "Name",
        wrapperClass: "mb-2 mr-2 inline-block w-full",
        validation: ["required"],
    },
    position: {
        type: "text",
        name: "position",
        labelText: "Position",
        placeholder: "Position",
        wrapperClass: "mb-2 mr-2 inline-block w-full",
        validation: ["required"],
    },
    sequence: {
        type: "number",
        name: "sequence",
        labelText: "Order",
        placeholder: "Order",
        wrapperClass: "mb-2 mr-2 inline-block w-full",
        inputProps: {
            min: 1,
        },
    },
};

const field_values = {
    position: "",
    name: "",
    sequence: 1,
    picture: [],
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
            processProgress: 0,
            preview: "",
        };
    },
    computed: {
        ...mapState([[page_variables.variable_name_plural]]),
    },
    mounted() {
        this.getter();
        if (this.$route.path.includes(page_variables.edit_url)) {
            this.edit = true;
            this.ourTeamGetter();
        }
        this.sequence = this.our_team_members.count + 1;
    },

    methods: {
        ...mapActions([page_variables.getter, page_variables.setter]),
        isEmpty,
        clear() {
            formClearer(field_values, this, ["sequence"]);
            this.sequence = this.our_team_members.count + 1;
        },
        deleteMember({ id, name }) {
            Swal.fire({
                icon: "info",
                title: "Are you sure?",
                text: `This action will delete: ${name}`,
                showCancelButton: true,
            }).then((res) => {
                if (res.value) {
                    axios
                        .post("/delete-our-team-member", { id })
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
        ourTeamGetter() {
            const { id } = this.$route.params;

            axios
                .post(page_variables.get_url, { id })
                .then((res) => {
                    if (res.data.status == "success") {
                        formSetter(
                            field_values,
                            fields,
                            res.data.result,
                            this,
                            ["picture"]
                        );
                        if (res.data.result.picture)
                            this.preview = res.data.result.picture;
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
                sequence: this[page_variables.variable_name_plural].sequence,
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
            let localFields = _.cloneDeep(fields);
            localFields.picture = {
                ...localFields.picture,
                validation: [`${this.edit ? "success" : "required"}`],
            };
            if (isEmpty(validateAll(localFields, this))) {
                let data = new FormData();
                data.append("position", this.position);
                data.append("name", this.name);
                data.append("sequence", this.sequence);
                if (this.picture.length > 0)
                    data.append("picture", this.picture[0]);
                if (this.edit) {
                    data.append("edit", this.edit);
                    data.append("id", id);
                }
                this.submitting = true;
                let that = this;
                const config = {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    onUploadProgress: function (progressEvent) {
                        var percentCompleted = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                        that.processProgress = percentCompleted;
                    },
                };
                axios
                    .post(page_variables.add_url, data, config)
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
                    if (res.picture) this.preview = res.picture;
                } else this.fundGetter();
            } else {
                this.edit = false;
                this.clear();
            }
        },
        "our_team_members.count": function (newValue) {
            this.sequence = newValue + 1;
        },
    },
    components: {
        FormAndTable: () => import("../layouts/FormAndTable.vue"),
        CustomInput: () => import("../components/CustomInput"),
        CustomFileInput: () => import("../components/CustomFileInput"),
        Submitting: () => import("../components/Submitting"),
        CustomFilter: () => import("../components/CustomFilter"),
        CustomTable: () => import("../components/CustomTable"),
        CustomPagination: () => import("../components/CustomPagination"),
        CustomTableGroup: () => import("../components/CustomTableGroup"),
    },
};
</script>