import _ from "lodash";
// import createPersistedState from "vuex-persistedstate";
import createMutationsSharer from "vuex-shared-mutations";

import authActions from "./storeVariables/authActions";


export default {
    state: {
        auth: { ...Object.values(authActions.state)[0] },


    },
    mutations: _.assign(
        {},
        authActions.mutations,


    ),
    getters: _.assign(
        {},
        authActions.getters,


    ),
    actions: _.assign(
        {},
        authActions.actions,


    ),
    plugins: [
        // createPersistedState({
        //      paths: ["sales.transaction", "sales.payments"]
        // }),
        createMutationsSharer({ predicate: ["SET_CURRENT_USER"] })
    ]
};
