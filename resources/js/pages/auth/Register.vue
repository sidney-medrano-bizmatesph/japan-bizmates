<template>
    <div
        class="
            flex
            items-center
            justify-center
            min-md:w-2/3
            min-xl:w-1/2
            w-full
            px-6
            m-auto
        "
    >
        <form
            @submit.prevent="onSubmit"
            class="grid grid-cols-1 rounded min-md:p-10 p-3 shadow-md w-full"
        >
            <CustomInput
                :inputData="{
                    field: fields.email,
                    value: email,
                    that,
                }"
            >
            </CustomInput>

            <CustomInput
                :inputData="{
                    field: fields.password,
                    value: password,
                    that,
                }"
            >
            </CustomInput>
            <div class="flex items-center space-x-2">
                <label class="flex items-center">
                    <input type="checkbox" class="form-checkbox" />
                    <span class="ml-2"
                        >I agree to the
                        <span class="underline">privacy policy</span></span
                    >
                </label>
            </div>
            <div>
                <button type="submit" class="btn btn-dark w-full">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { loader, toast, isEmpty } from "../../functions";
import fields from "../../FormFields/login";
import setAuthToken from "../../functions/setAuthToken";
var field_values = {
    email: "",
    password: "",
};
export default {
    data() {
        return {
            fields,
            successes: {},
            errors: {},
            that: this,
            ...field_values,
            invalid_credentials: "",
        };
    },
    components: {
        CustomInput: () => import("../../components/CustomInput"),
    },
    mounted() {
        // loader("Loading");
        // toast("success", "asldkfjlaksdjf");
    },
    methods: {
        ...mapActions([]),
        isEmpty,
        onSubmit: function (event) {
            let { username, password } = this;
            return;
            axios
                .post("/login", { username, password })
                .then((res) => {
                    const { token, user } = res.data;
                    localStorage.setItem("bizmates_auth", res.data.token);

                    if (user.acc_type == 0) {
                        localStorage.setItem(
                            "bizmates_admin_auth",
                            res.data.token
                        );
                    }

                    setAuthToken(token);
                    window.location.href = "/welcome";
                })
                .catch((err) => {
                    if (err.response.status == 401) {
                        this.invalid_credentials =
                            "The username or password is incorrect";
                        this.successes = {};
                    } else {
                        if (
                            err.response &&
                            err.response.data &&
                            err.response.data.message
                        )
                            toast("error", err.response.data.message);
                    }
                });
            // axios
            //     .post("/login", {
            //         username,
            //         password
            //     })
            //     .then(res => {
            //         console.log(res);
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     });
        },
    },
};
</script>
