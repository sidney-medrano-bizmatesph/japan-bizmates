import setAuthToken from "../functions/setAuthToken";
import { isEmpty, loader, toast } from "../functions";
// import { cryptoEncrypt } from "../functions";
import { encryptionToken } from "../variables/appData";
import Swal from "sweetalert2";
export default {
    state: {
        auth: {
            isAuthenticated: false,
            user: {},
            process: "",
        }
    },
    mutations: {
        ["SET_PROCESS_LOGIN"](state, payload) {
            state.auth.process = payload;
        },
        ["SET_CURRENT_USER"](state, payload) {
            state.auth.user = payload;
            state.auth.isAuthenticated = !isEmpty(payload);
            state.auth.process = "";
        },
        ["SET_VAR_AUTH"](state, payload) {
            state.auth = { ...state.auth, ...payload };
        }
    },
    getters: {},
    actions: {
        setCurrentUser({ commit }, data) {
            commit("SET_CURRENT_USER", data);
        },
        loginUser({ commit }, data) {
            commit("SET_PROCESS_LOGIN", "Logging in.");
            axios
                .post("/login", data.userData)
                .then(res => {
                    const { token, user } = res.data;
                    localStorage.setItem("payroll_spa_auth", res.data.token);

                    if (user.acc_type == 0) {
                        localStorage.setItem(
                            "payroll_spa_admin_auth",
                            res.data.token
                        );
                    }

                    setAuthToken(token);
                    window.location.href = "/welcome";
                })
                .catch(err => {
                    commit("SET_PROCESS_LOGIN", "");
                    if (err.response.status == 401) {
                        Object.keys(err.response.data).map(res => {
                            console.log("key", res, err.response.data[res]);
                            data.that.errors[res] = err.response.data[res];
                            delete data.that.successes[res];
                        });
                    }
                });
        },
        logoutUser({ commit }) {
            commit("SET_PROCESS_LOGIN", "Logging out");
            loader("Logging out");
            axios.post("/logout").then(res => {
                Swal.close();
                setAuthToken(false);
                commit("SET_CURRENT_USER", {});
                localStorage.removeItem("payroll_spa_auth");
                localStorage.removeItem("payroll_spa_admin_auth");
                window.location.href = "/login";
            })
                .catch(err => {
                    Swal.close();
                    if (err && err.response && err.response.status != 400) {
                        if (err.response.data.message) {
                            toast("error", err.response.data.message)
                        } else {
                            toast("error", err.message)

                        }
                    }
                })
        }
    }
};
