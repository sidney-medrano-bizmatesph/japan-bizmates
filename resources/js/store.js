import _ from "lodash";
// import createPersistedState from "vuex-persistedstate";
import createMutationsSharer from "vuex-shared-mutations";

import authActions from "./storeVariables/authActions";

import studyGuideVideoActions from "./storeVariables/studyGuideVideoActions";
import inspirationVideoActions from "./storeVariables/inspirationVideoActions";
import contentPartnerItemActions from "./storeVariables/contentPartnerItemActions";
import ourTeamMemberActions from "./storeVariables/ourTeamMemberActions";
import subscriptionListItemActions from "./storeVariables/subscriptionListItemActions";
import generalActions from "./storeVariables/generalActions";


export default {
    state: {
        auth: { ...Object.values(authActions.state)[0] },
        study_guide_videos: { ...Object.values(studyGuideVideoActions.state)[0] },
        inspiration_videos: { ...Object.values(inspirationVideoActions.state)[0] },
        content_partner_items: { ...Object.values(contentPartnerItemActions.state)[0] },
        our_team_members: { ...Object.values(ourTeamMemberActions.state)[0] },
        subscription_list_items: { ...Object.values(subscriptionListItemActions.state)[0] },
        general: { ...Object.values(generalActions.state)[0] },


    },
    mutations: _.assign(
        {},
        authActions.mutations,
        studyGuideVideoActions.mutations,
        inspirationVideoActions.mutations,
        contentPartnerItemActions.mutations,
        ourTeamMemberActions.mutations,
        subscriptionListItemActions.mutations,
        generalActions.mutations,


    ),
    getters: _.assign(
        {},
        authActions.getters,
        studyGuideVideoActions.getters,
        inspirationVideoActions.getters,
        contentPartnerItemActions.getters,
        ourTeamMemberActions.getters,
        subscriptionListItemActions.getters,
        generalActions.getters,


    ),
    actions: _.assign(
        {},
        authActions.actions,
        studyGuideVideoActions.actions,
        inspirationVideoActions.actions,
        contentPartnerItemActions.actions,
        ourTeamMemberActions.actions,
        subscriptionListItemActions.actions,
        generalActions.actions,


    ),
    plugins: [
        // createPersistedState({
        //      paths: ["sales.transaction", "sales.payments"]
        // }),
        createMutationsSharer({ predicate: ["SET_CURRENT_USER"] })
    ]
};
