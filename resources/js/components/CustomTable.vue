<template>
    <div class="overflow-x-auto w-full relative mt-1" :style="wrapper_style">
        <div class="table-loader" v-if="mainVariable.process != ''">
            <div class="loader loader-default-class h-20 w-20 m-auto"></div>
        </div>
        <div class="mb-1" v-if="filterable != false">
            <strong>Filters:</strong>
            <template
                v-if="
                    mainVariable.filter &&
                    !isEmpty(
                        mainVariable.filter.filter(
                            (res) => res.searchValue != ''
                        )
                    )
                "
            >
                <template
                    v-for="(filterItem, key) in mainVariable.filter.filter(
                        (res) => res.searchValue != ''
                    )"
                >
                    <a
                        :key="key"
                        @click="
                            clearFilter(fields[filterItem.searchField].name)
                        "
                    >
                        <span class="order-link">
                            {{
                                fields[filterItem.searchField].altLabelText
                                    ? fields[filterItem.searchField]
                                          .altLabelText
                                    : fields[filterItem.searchField].labelText
                            }}
                        </span>
                        -
                        {{
                            customFilterFields.type.menuItems.filter(
                                (res) => res.id == filterItem.type
                            )[0].text
                        }}
                        "{{ filterItem.searchValue }}" , {{ " " }}
                    </a>
                </template>
                <a class="order-link" @click="clearFilter()">Clear</a>
            </template>
            <template v-else>No filter</template>
        </div>
        <div class="" v-if="sortable != false">
            <strong>Sorting:</strong>
            <template v-if="mainVariable.order && !isEmpty(mainVariable.order)">
                <template v-for="orderKey in Object.keys(mainVariable.order)">
                    <a
                        :key="orderKey"
                        class="order-link"
                        @click="clearOrder(orderKey)"
                        >{{
                            nonHiddenFields[orderKey].altLabelText
                                ? nonHiddenFields[orderKey].altLabelText
                                : nonHiddenFields[orderKey].labelText
                        }}</a
                    >
                    : {{ mainVariable.order[orderKey].type }}
                </template>
            </template>
            <template v-else>No sorting</template>
            <a
                v-if="!isEmpty(mainVariable.order)"
                class="order-link"
                @click="clearOrder()"
                >Clear</a
            >
        </div>
        <table class="table-own table-zebra" :style="table_style">
            <thead>
                <tr
                    class="
                        rounded-lg
                        text-sm
                        font-medium
                        text-gray-700 text-left
                    "
                    style="font-size: 0.9674rem"
                >
                    <template v-if="this.$slots.header == undefined">
                        <th
                            class="px-4 py-2"
                            style="background-color: #f8f8f8; width: 50px"
                            v-if="no_count == false || no_count == undefined"
                        ></th>
                        <th
                            v-for="field in nonHiddenFields"
                            :key="field.name"
                            :class="{
                                'px-4 py-2': true,
                                [field.thClass]: field.thClass != undefined,
                            }"
                            :style="`background-color:#f8f8f8;${
                                field.thStyle ? field.thStyle : ''
                            }`"
                        >
                            <template v-if="field.sortable == undefined">
                                <a
                                    @click="onSort(field.name)"
                                    class="cursor-pointer"
                                >
                                    {{
                                        field.altLabelText
                                            ? field.altLabelText
                                            : field.labelText
                                    }}
                                    <i
                                        v-if="mainVariable.order[field.name]"
                                        :class="
                                            mainVariable.order[field.name]
                                                .type == 'asc'
                                                ? 'fa fa-caret-up'
                                                : 'fa fa-caret-down'
                                        "
                                    ></i>
                                </a>
                            </template>
                            <template v-else>
                                <span>
                                    {{
                                        field.altLabelText
                                            ? field.altLabelText
                                            : field.labelText
                                    }}
                                </span>
                            </template>
                        </th>
                    </template>
                    <template v-else>
                        <slot name="header"></slot>
                    </template>
                </tr>
            </thead>
            <tbody
                class="text-sm font-normal text-gray-700"
                v-if="this.$slots.default == undefined"
            >
                <!-- <tr class="hover:bg-gray-100 border-b border-gray-200 py-10">
                    <td class="px-4 py-4">1</td>
                    <td class="px-4 py-4">2</td>
                    <td class="px-4 py-4">3</td>
                </tr> -->
                <template v-if="isEmpty(data)">
                    <tr
                        class="hover:bg-gray-100 border-b border-gray-200 py-10"
                    >
                        <td
                            class="px-4 py-4 text-center"
                            :colspan="Object.keys(nonHiddenFields).length + 2"
                        >
                            <p class="text-lg">No Results</p>
                        </td>
                    </tr>
                </template>
                <template v-else>
                    <tr
                        v-for="(dataItem, key) in data"
                        :id="`tr_id_${key}`"
                        class="hover:bg-gray-100 border-b border-gray-200 py-10"
                        :key="key"
                    >
                        <td
                            v-for="item in dataItem"
                            :key="item.key"
                            :class="{
                                'px-4 py-4': true,
                                [item.className]: item.className,
                            }"
                        >
                            <template v-if="Array.isArray(item)">
                                <template v-for="(result, item_key) in item">
                                    <button
                                        :key="item_key"
                                        :class="{
                                            btn: true,
                                            [result.className]:
                                                result.className,
                                        }"
                                        v-if="result.type == 'button'"
                                        type="button"
                                        @click="result.onClick"
                                        :disabled="result.disabled"
                                    >
                                        <i
                                            v-if="result.icon"
                                            :class="{
                                                [result.icon]: result.icon,
                                                'mr-2': true,
                                            }"
                                        ></i
                                        >{{
                                            result.altLabelText
                                                ? result.altLabelText
                                                : result.labelText
                                        }}
                                    </button>
                                    <div
                                        v-else-if="item.type == 'html'"
                                        v-html="result.html"
                                        :key="result.key"
                                        :class="item.wrapperClass"
                                    ></div>
                                </template>
                            </template>
                            <template v-else-if="typeof item == 'object'">
                                <div
                                    v-if="item.type == 'html'"
                                    v-html="item.html"
                                    :class="item.wrapperClass"
                                ></div>
                                <button
                                    :key="item_key"
                                    :class="{
                                        btn: true,
                                        [item.className]: item.className,
                                    }"
                                    v-if="item.type == 'button'"
                                    type="button"
                                    @click="item.onClick"
                                    :disabled="item.disabled"
                                >
                                    <i
                                        v-if="item.icon"
                                        :class="{
                                            [item.icon]: item.icon,
                                            'mr-2': true,
                                        }"
                                    ></i
                                    >{{
                                        item.altLabelText
                                            ? item.altLabelText
                                            : item.labelText
                                    }}
                                </button>

                                <template v-else>
                                    {{
                                        item.altLabelText
                                            ? item.altLabelText
                                            : item.labelText
                                    }}
                                </template>
                            </template>
                            <template v-else>{{ item }}</template>
                        </td>
                    </tr>
                </template>
            </tbody>
            <tbody v-else>
                <slot></slot>
            </tbody>
        </table>
    </div>
</template>

<script>
import { isEmpty } from "../functions";
import customFilterFields from "../FormFields/customFilter";

export default {
    props: {
        filterable: {
            type: Boolean,
            default: true,
        },
        sortable: {
            type: Boolean,
            default: true,
        },
        no_count: {
            type: Boolean,
            default: false,
        },
        wrapper_style: {
            type: String,
            default: "",
        },
        table_style: {
            type: String,
            default: "",
        },
        getter: {
            type: Function,
            default: () => {},
        },
        setter: {
            type: Function,
            default: () => {},
        },
        data: {
            type: Array,
            default: function () {
                return [];
            },
        },
        fields: {
            type: Object,
            default: function () {
                return {};
            },
        },
        mainVariable: {
            type: Object,
            default: function () {
                return { process: "" };
            },
        },
    },
    data() {
        return { customFilterFields };
    },
    components: {
        CustomButton: () => import("../components/CustomButton"),
    },
    computed: {
        nonHiddenFields: function () {
            return _.pickBy(this.fields, (field) => !field.hidden);
        },
    },
    methods: {
        isEmpty,
        clearFilter(searchField = "") {
            const { mainVariable, getter, setter, fields } = this;
            this.searchValue = "";
            let field = _.values(fields).filter(
                (field) => field.filterable == undefined
            )[0];
            let defaultFilter = [
                {
                    searchField: field.name,
                    type: "begins",
                    searchValue: "",
                    fieldType: field.type,
                    DBRaw:
                        field.loadParameters && field.loadParameters.DBRaw
                            ? field.loadParameters.DBRaw
                            : "",
                },
            ];
            let filters = [];

            if (isEmpty(searchField)) {
                filters = defaultFilter;
            } else {
                filters = mainVariable.filter.filter((res, key) => {
                    return res.searchField != searchField;
                });
            }
            setter({ filter: filters });
            getter({
                filter: filters,
            });
        },
        onSort(name) {
            let order = _.cloneDeep(this.mainVariable.order);
            let deleted = false;
            if (order[name]) {
                if (order[name].type == "asc") {
                    order[name].type = "desc";
                } else if (order[name].type == "desc") {
                    delete order[name];
                    deleted = true;
                }
            } else {
                order[name] = { type: "asc" };
            }
            if (!deleted)
                order[name] = {
                    ...order[name],
                    sort: this.fields[name].sort
                        ? this.fields[name].sort
                        : undefined,
                };

            this.setter({ order });

            this.getter({
                order: order,
            });
        },
        clearOrder(name = "") {
            const { getter, setter, mainVariable } = this;
            let order = {};
            if (name != "") {
                order = _.omit(mainVariable.order, [name]);
            }
            setter({ order });
            getter({
                filter: mainVariable.filter,
                order: order,
                page: mainVariable.page,
                rowsPerPage: mainVariable.rowsPerPage,
                category_id: mainVariable.category_id,
            });
        },
    },
};
</script>

<style></style>

<style scoped>
@-webkit-keyframes spinner {
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.table-loader {
    margin-top: 36px;
    position: absolute;
    width: 100%;
    height: calc(100% - 36px);
    background-color: rgba(255, 255, 255, 0.5);
    padding-top: 20px;
}
</style>
