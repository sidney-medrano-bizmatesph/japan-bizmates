<template>
    <div>
        <select
            :id="!isEmpty(field.id) ? field.id : field.name"
            :name="field.name"
            :disabled="disabled"
        >
            <!-- <option
                v-for="menuItem in menuItems"
                :key="menuItem.key"
                :value="menuItem.id"
            >{{ menuItem.text }}</option>-->
        </select>
    </div>
</template>

<script>
import { isEmpty } from "../functions";
import { mapState, mapActions } from "vuex";
let tokens = {};
let results = {};
export default {
    props: [
        "field",
        "className",
        "onChange",
        "error",
        "success",
        "value",
        "disabled",
        "readonly",
        "menuItems",
    ],
    mounted() {
        let that = this;
        const { field, value } = this;

        $(`#${field.id ? field.id : field.name}`).on(
            "select2:select",
            this.onChange
        );

        $(`#${field.id ? field.id : field.name}`).select2({
            readonly: this.readonly,
            width: "100%",
            theme: "bootstrap",
            placeholder: field.placeholder,
            data: that.menuItems,
        });

        if (value != null && !isEmpty(value)) {
            if (value.id == undefined) {
                $(`#${field.id ? field.id : field.name}`).val(value); // Select the option with a value of '1'
            } else {
                $(`#${field.id ? field.id : field.name}`).val(value.id); // Select the option with a value of '1'
            }
            $(`#${field.id ? field.id : field.name}`).trigger("change");
        } else {
            $(`#${field.id ? field.id : field.name}`).val(null); // Select the option with a value of '1'
            $(`#${field.id ? field.id : field.name}`).trigger("change");
        }
        $(
            `#${
                field.id ? field.id : field.name
            } ~ .select2-container > .selection > .select2-selection`
        ).addClass("form-control input-bordered input-primary height-37px");
    },
    methods: {
        ...mapActions(["logoutUser"]),
        isEmpty,
    },
    watch: {
        value(newValue) {
            const { field } = this;
            if (newValue != null && !isEmpty(newValue)) {
                $(`#${field.id ? field.id : field.name}`).val(newValue.id); // Select the option with a value of '1'
                $(`#${field.id ? field.id : field.name}`).trigger("change");
            } else {
                $(`#${field.id ? field.id : field.name}`).val(null); // Select the option with a value of '1'
                $(`#${field.id ? field.id : field.name}`).trigger("change");
            }
        },
        menuItems(newValue) {
            let { field, value, error, success } = this;
            console.log(newValue, field);
            $(`#${field.id ? field.id : field.name}`)
                .empty()
                .select2({
                    width: "100%",
                    theme: "bootstrap",
                    placeholder: field.placeholder,
                    data: newValue,
                });

            $(
                `#${
                    field.id ? field.id : field.name
                } ~ .select2-container > .selection > .select2-selection`
            ).addClass("form-control input-bordered input-primary height-37px");

            if (value != null && !isEmpty(value)) {
                $(`#${field.id ? field.id : field.name}`).val(value.id); // Select the option with a value of '1'
                $(`#${field.id ? field.id : field.name}`).trigger("change");
            } else {
                $(`#${field.id ? field.id : field.name}`).val(null); // Select the option with a value of '1'
                $(`#${field.id ? field.id : field.name}`).trigger("change");
            }

            if (!isEmpty(error)) {
                $(
                    `#${
                        field.id ? field.id : field.name
                    } ~ .select2-container > .selection > .select2-selection`
                ).addClass("input-error");
                $(
                    `#${
                        field.id ? field.id : field.name
                    } ~ .select2-container > .selection > .select2-selection`
                ).removeClass(["input-success", "input-primary"]);
            } else {
                $(
                    `#${
                        field.id ? field.id : field.name
                    } ~ .select2-container > .selection > .select2-selection`
                ).addClass("input-primary");
                $(
                    `#${
                        field.id ? field.id : field.name
                    } ~ .select2-container > .selection > .select2-selection`
                ).removeClass("input-error");
                if (success) {
                    $(
                        `#${
                            field.id ? field.id : field.name
                        } ~ .select2-container > .selection > .select2-selection`
                    ).addClass("input-success");
                    $(
                        `#${
                            field.id ? field.id : field.name
                        } ~ .select2-container > .selection > .select2-selection`
                    ).removeClass(["input-error", "input-primary"]);
                } else {
                    $(
                        `#${
                            field.id ? field.id : field.name
                        } ~ .select2-container > .selection > .select2-selection`
                    ).addClass("input-primary");
                    $(
                        `#${
                            field.id ? field.id : field.name
                        } ~ .select2-container > .selection > .select2-selection`
                    ).removeClass("input-success");
                }
            }
        },
        error() {
            let thisOfThis = this;
            const { field, error, success } = this;

            if (!isEmpty(error)) {
                $(
                    `#${
                        field.id ? field.id : field.name
                    } ~ .select2-container > .selection > .select2-selection`
                ).addClass("input-error");
                $(
                    `#${
                        field.id ? field.id : field.name
                    } ~ .select2-container > .selection > .select2-selection`
                ).removeClass(["input-success", "input-primary"]);
            } else {
                $(
                    `#${
                        field.id ? field.id : field.name
                    } ~ .select2-container > .selection > .select2-selection`
                ).addClass("input-primary");
                $(
                    `#${
                        field.id ? field.id : field.name
                    } ~ .select2-container > .selection > .select2-selection`
                ).removeClass("input-error");
            }
        },
        success() {
            let thisOfThis = this;
            const { field, error, success } = this;
            if (success && isEmpty(error)) {
                $(
                    `#${
                        field.id ? field.id : field.name
                    } ~ .select2-container > .selection > .select2-selection`
                ).addClass("input-success");
                $(
                    `#${
                        field.id ? field.id : field.name
                    } ~ .select2-container > .selection > .select2-selection`
                ).removeClass(["input-error", "input-primary"]);
            } else {
                $(
                    `#${
                        field.id ? field.id : field.name
                    } ~ .select2-container > .selection > .select2-selection`
                ).addClass("input-primary");
                $(
                    `#${
                        field.id ? field.id : field.name
                    } ~ .select2-container > .selection > .select2-selection`
                ).removeClass("input-success");
            }
        },
    },
};
</script>

<style>
</style>
