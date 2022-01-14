<template>
    <form @submit.prevent="onSubmit" class="flex flex-wrap items-baseline">
        <CustomInput
            :inputData="{
                field: customFilterFields.searchField,
                value: searchField,
                that,
                menuItems: filterableFields,
                onChange,
            }"
        ></CustomInput>
        <CustomInput
            :inputData="{
                field: customFilterFields.type,
                value: type,
                that,
                menuItems: customFilterFields.type.menuItems,
            }"
        ></CustomInput>
        <CustomInput
            :inputData="{
                field: customFilterFields.searchValue,
                value: searchValue,
                that,
            }"
        ></CustomInput>
        <button type="submit" class="btn btn-primary filter-button mb-2">
            <i class="fas fa-search"></i>
        </button>
        <button
            type="button"
            class="btn btn-error filter-button mb-2"
            @click="clearSearch"
        >
            <i class="fas fa-times"></i>
        </button>
    </form>
</template>

<script>
import { mapState } from "vuex";
import customFilterFields from "../FormFields/customFilter";
import { ifEmptyThen, isEmpty } from "../functions";
export default {
    props: ["fields", "mainVariable", "getter", "setter", "id"],
    data() {
        return {
            customFilterFields,

            searchField: this.mainVariable.filter[0].searchField,
            type: this.mainVariable.filter[0].type,
            searchValue: this.mainVariable.filter[0].searchValue,
            fieldType: this.mainVariable.filter[0].fieldType,
            DBRaw: this.mainVariable.filter[0].DBRaw,
            that: this,
            successes: {},
            errors: {},
        };
    },
    computed: {
        filterableFields() {
            let filterableFields = _.pickBy(this.fields, (value, key) => {
                return value.filterable == undefined;
            });
            return Object.keys(filterableFields).map((filterable) => ({
                text: filterableFields[filterable].altLabelText
                    ? filterableFields[filterable].altLabelText
                    : filterableFields[filterable].labelText,
                id: filterableFields[filterable].name,
            }));
        },
    },
    methods: {
        isEmpty,
        onChange(event) {
            event.preventDefault();
            this.searchValue = "";

            this.fieldType = this.fields[event.target.value].type;
            this.DBRaw =
                this.fields[event.target.value].loadParameters &&
                this.fields[event.target.value].loadParameters.DBRaw
                    ? this.fields[event.target.value].loadParameters.DBRaw
                    : "";
            this[event.target.name] = event.target.value;
        },
        clearSearch(event) {
            const { fields } = this;
            this.searchValue = "";
            let field = _.values(fields).filter(
                (field) => field.filterable == undefined
            )[0];
            this.setter({
                page: 0,
                filter: [
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
                ],
            });
            this.getter({
                page: 0,
                filter: [
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
                ],
            });
        },
        onSubmit(event) {
            event.preventDefault();
            let newFilter = {
                searchField: this.searchField,
                type: this.type,
                searchValue: this.searchValue,
                fieldType: this.fieldType,
                DBRaw: this.DBRaw,
            };

            let filters = this.mainVariable.filter;
            let index = 0;
            let selectedFilter = filters.filter((res, key) => {
                if (res.searchField == this.searchField) {
                    index = key;
                    return true;
                }
            });
            if (isEmpty(selectedFilter)) {
                filters.push(newFilter);
            } else {
                filters[index] = newFilter;
            }
            this.setter({
                page: 0,
                filter: filters,
            });

            this.getter({
                page: 0,
                filter: filters,
            });
        },
    },
    components: {
        CustomInput: () => import("./CustomInput"),
    },
};
</script>
