<template>
    <div
        class="
            flex
            items-center
            justify-center
            min-md:w-2/3 min-xl:w-1/2
            md:w-full
            p-6
            m-auto
            bg-white
            shadow-md
            rounded
            mt-6
        "
    >
        <form @submit.prevent="onSubmit" class="grid grid-cols-1 w-full">
            <p class="text-4xl mb-4">Login</p>
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
            <!-- <div class="flex items-center space-x-2">
                <label class="flex items-center">
                    <input
                        type="checkbox"
                        class="form-checkbox"
                        v-model="remember"
                    />
                    <span class="ml-2">Remember me</span>
                </label>
            </div> -->
            <div>
                <button
                    type="submit"
                    class="btn btn-dark w-full"
                    :disabled="try_after != 0"
                >
                    <span v-if="try_after != 0">
                        Try after: {{ try_after }}
                    </span>
                    <span v-else> Login </span>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { loader, toast, isEmpty, commonCatchBlock } from "../../functions";
import fields from "../../FormFields/login";
import setAuthToken from "../../functions/setAuthToken";
import { validateAll } from "../../functions/validator";
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
            remember: false,
            try_after: 0,
            try_after_message: "",
        };
    },
    components: {
        CustomInput: () => import("../../components/CustomInput"),
        CustomButton: () => import("../../components/CustomButton"),
    },
    mounted() {
        // loader("Loading");
        // toast("success", "asldkfjlaksdjf");
    },
    methods: {
        ...mapActions([]),
        isEmpty,
        startTimer(duration) {
            var timer = duration,
                minutes,
                seconds;
            let that = this;
            let interval = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                that.try_after = minutes + ":" + seconds;

                if (--timer < 0) {
                    that.errors = {};
                    that.try_after = 0;
                    clearInterval(interval);
                }
            }, 1000);
        },
        onSubmit: function (event) {
            let { email, password, remember } = this;
            if (isEmpty(validateAll(fields, this))) {
                loader("Loggin you in.");
                axios
                    .post("/login", { email, password, remember })
                    .then((res) => {
                        Swal.close();
                        if (res.data.status == "success") {
                            window.location.href = "/";
                        } else {
                            toast("error", res.data.message);
                            // Vue.$toast.open({
                            //     message: res.data.message,
                            //     type: "error",
                            //     duration: 3000,
                            //     dismissible: true,
                            //     position: "top-right"
                            // });
                        }
                    })
                    .catch((err) => {
                        Swal.close();
                        if (
                            err &&
                            err.response &&
                            err.response.status == 429 &&
                            false
                        ) {
                            toast("error", "Too many incorrect attempts.");
                            this.errors.email = "Too many attempts";
                            this.errors.password = "Too many attempts";
                            this.startTimer(
                                err.response.headers["retry-after"]
                            );
                        } else {
                            commonCatchBlock(this, err);
                        }
                    });
            }
        },
    },
};
</script>
