export default {
    state: {
        general: {
            logo_only: "",
            round_logo: ""
        }
    },
    mutations: {
        ["SET_VAR_GENERAL"](state, payload) {
            state.general = { ...state.general, ...payload };
        },
    },
    getters: {},
    actions: {
        setVarGeneral({ commit }, data) {
            commit("SET_VAR_GENERAL", data);
        },
    }
};
