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
                <p class="text-xl">Items</p>
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
                                field: fields.name,
                                value: name,
                                that,
                            }"
                        ></CustomInput>
                        <CustomInput
                            :inputData="{
                                field: fields.subjects,
                                value: subjects,
                                that,
                            }"
                        ></CustomInput>
                        <CustomInput
                            :inputData="{
                                field: fields.amount,
                                value: amount,
                                that,
                            }"
                        ></CustomInput>
                        <CustomInput
                            :inputData="{
                                field: fields.months,
                                value: months,
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
                    :tableGroupData="{ tableName: 'Items table' }"
                >
                    <CustomFilter
                        :fields="fields"
                        :getter="getter"
                        :setter="that[page_variables.setter]"
                        :mainVariable="subscription_list_items"
                    ></CustomFilter>
                    <CustomTable
                        :fields="fields"
                        :getter="getter"
                        :setter="that[page_variables.setter]"
                        :mainVariable="subscription_list_items"
                    >
                        <tr
                            v-for="(
                                partner, key
                            ) in subscription_list_items.subscription_list_items"
                            :key="`partner-${key}`"
                        >
                            <td>
                                {{
                                    subscription_list_items.page *
                                        subscription_list_items.rowsPerPage +
                                    key +
                                    1
                                }}
                            </td>

                            <td>
                                <router-link
                                    :to="`/cms/subscription-list/edit/${partner.id}`"
                                    ><span
                                        class="btn btn-primary btn-sm mb-2 mr-2"
                                        >Edit</span
                                    ></router-link
                                >
                                <button
                                    class="btn btn-error btn-sm"
                                    @click="() => deleteItem(partner)"
                                >
                                    <i class="fas fa-trash"></i>
                                </button>
                            </td>
                            <td>{{ partner.name }}</td>
                            <td>{{ partner.subjects }}</td>
                            <td>{{ partner.amount }}</td>
                            <td>{{ partner.months }}</td>
                        </tr>
                    </CustomTable>
                    <CustomPagination
                        :getter="getter"
                        :setter="that[page_variables.setter]"
                        :mainVariable="subscription_list_items"
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
    variable_name: "subscription_list_item",
    variable_name_plural: "subscription_list_items",
    parent_url: "/cms/subscription-list",
    add_url: "/add-subscription-list-item",
    edit_url: "/cms/subscription-list/edit",
    get_url: "/get-subscription-list-item",
    getter: "getSubscriptionListItems",
    setter: "setVarSubscriptionListItems",
};

export const fields = {
    actions: {
        name: "actions",
        labelText: "Actions",
        filterable: false,
        sortable: false,
    },
    name: {
        type: "text",
        name: "name",
        labelText: "Name",
        placeholder: "Name",
        wrapperClass: "mb-2 mr-2 inline-block w-full",
        validation: ["required"],
    },
    subjects: {
        type: "number",
        name: "subjects",
        labelText: "Subjects",
        placeholder: "Subjects",
        wrapperClass: "mb-2 mr-2 inline-block w-full",
        validation: ["required", "min:0"],
        inputProps: {
            min: 0,
        },
    },
    amount: {
        type: "number",
        name: "amount",
        labelText: "Amount",
        placeholder: "Amount",
        wrapperClass: "mb-2 mr-2 inline-block w-full",
        validation: ["required", "min:1"],
        inputProps: {
            min: 1,
            step: 0.01,
        },
    },
    months: {
        type: "number",
        name: "months",
        labelText: "Months",
        placeholder: "Months",
        wrapperClass: "mb-2 mr-2 inline-block w-full",
        validation: ["required", "min:1"],
        inputProps: {
            min: 1,
        },
    },
};

const field_values = {
    subjects: "",
    name: "",
    subjects: "",
    amount: "",
    months: "",
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
    },

    methods: {
        ...mapActions([page_variables.getter, page_variables.setter]),
        isEmpty,
        clear() {
            formClearer(field_values, this);
        },
        deleteItem({ id, name }) {
            Swal.fire({
                icon: "info",
                title: "Are you sure?",
                text: `This action will delete: ${name}`,
                showCancelButton: true,
            }).then((res) => {
                if (res.value) {
                    axios
                        .post("/delete-subscription-list-item", { id })
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
                amount: this[page_variables.variable_name_plural].amount,
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
            if (isEmpty(validateAll(localFields, this))) {
                let data = dataSetter(field_values, this);
                if (this.edit) {
                    data.edit = this.edit;
                    data.id = id;
                }
                this.submitting = true;
                let that = this;
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