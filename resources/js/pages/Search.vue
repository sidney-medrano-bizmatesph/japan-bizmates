<template>
    <form
        @submit.prevent="submitSearch"
        class="flex flex-wrap"
        data-aos="fade-up"
    >
        <CustomInput
            :inputData="{
                field: fields.looking_for,
                value: looking_for,
                that,
            }"
        ></CustomInput>
        <CustomInput
            :inputData="{
                field: fields.place,
                value: place,
                that,
                menuItems: [
                    { id: '', text: 'Please select.' },
                    {
                        id: 'tokyo',
                        text: 'Tokyo',
                    },
                    { id: 'yokohama', text: 'Yokohama' },
                    {
                        id: 'kyoto',
                        text: 'Kyoto',
                    },
                    { id: 'osaka', text: 'Osaka' },
                    {
                        id: 'sapporo',
                        text: 'Sapporo',
                    },
                    {
                        id: 'nagoya',
                        text: 'Nagoya',
                    },
                ],
            }"
        ></CustomInput>
        <CustomInput
            :inputData="{
                field: fields.radius,
                value: radius,
                that,
            }"
        ></CustomInput>
        <div class="" style="padding-top: 28px">
            <button class="btn btn-primary">
                <i class="fas fa-search"></i>
            </button>
        </div>
    </form>
</template>

<script>
import { isEmpty } from "../functions";
import { validateAll } from "../functions/validator";

/**
 * Fields for CustomInput containing properties for each input
 * @type {Object.<string, Object>}
 */
const fields = {
    looking_for: {
        name: "looking_for",
        labelText: "Looking for",
        placeholder: "Looking for",
        type: "text",
        wrapperClass: "",
        validation: ["success"],
        wrapperClass: "mr-4",
    },
    place: {
        name: "place",
        labelText: "City",
        placeholder: "City",
        type: "select",
        wrapperClass: "",
        validation: ["required"],
        wrapperClass: "mr-4",
    },
    radius: {
        name: "radius",
        labelText: "Radius",
        labelClass: "text-white",
        placeholder: "Radius",
        type: "number",
        wrapperClass: "",
        validation: ["required"],
        inputProps: {
            min: 0,
            max: 100000,
        },
        helperText: "in meters",
        wrapperClass: "mr-4",
    },
};

export default {
    mounted() {
        this.mounting();
    },
    data() {
        return {
            successes: {},
            errors: {},
            that: this,
            place: "",
            looking_for: "",
            radius: 2000,
            fields,
        };
    },
    methods: {
        /**
         * To assign values
         * @param {Object=} [route] vue-router object
         */
        mounting(route = {}) {
            if (route == {}) {
                route = this.$route;
            }
            this.looking_for = route.query.query_string
                ? route.query.query_string
                : "";
            this.radius = route.query.radius ? route.query.radius : 2000;
            this.place = route.params.place ? route.params.place : "";
        },
        /**
         * Redirects to page if the required fields are filled
         */
        submitSearch() {
            if (isEmpty(validateAll(fields, this))) {
                this.$router.push({
                    path: `/places/${this.place}`,
                    query: {
                        query_string: this.looking_for,
                        radius: this.radius,
                    },
                });
            }
        },
    },
    components: {
        CustomInput: () => import("../components/CustomInput"),
    },
    watch: {
        ["$route"](newValue) {
            this.mounting(newValue);
        },
    },
};
</script>