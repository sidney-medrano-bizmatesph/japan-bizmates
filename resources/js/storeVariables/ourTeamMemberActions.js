import Vue from "vue";
import axios from "axios";
import { fields } from "../webCMS/OurTeamMembers.vue";
import { commonCatchBlock, toast } from "../functions";
import Swal from "sweetalert2";

let field = _.values(fields).filter(field => field.filterable == undefined)[0];

export default {
    state: {
        our_team_members: {
            our_team_members: [],
            process: "",
            order: {
            },
            count: 0,
            page: 0,
            rowsPerPage: 5,
            filter: [
                {
                    searchField: field.name,
                    type: "begins",
                    searchValue: "",
                    fieldType: field.type,
                    DBRaw:
                        field.loadParameters != undefined &&
                            field.loadParameters.DBRaw != undefined
                            ? field.loadParameters.DBRaw
                            : ""
                }
            ],
        }
    },
    mutations: {
        ["SET_PROCESS_OUR_TEAM_MEMBERS"](state, payload) {
            state.our_team_members.process = payload;
        },
        ["SET_VAR_OUR_TEAM_MEMBERS"](state, payload) {
            state.our_team_members = { ...state.our_team_members, ...payload };
        },
        ["SET_OUR_TEAM_MEMBERS"](state, payload) {
            state.our_team_members.our_team_members = payload.result;
            state.our_team_members.count = payload.count;
            state.our_team_members.process = "";
        }
    },
    getters: {},
    actions: {
        setVarOurTeamMembers({ commit }, data) {
            commit("SET_VAR_OUR_TEAM_MEMBERS", data);
        },
        getOurTeamMembers({ commit }, data) {
            commit("SET_PROCESS_OUR_TEAM_MEMBERS", "Loading our team members.");

            axios
                .post("/get-our-team-members", data)
                .then(res => {
                    commit("SET_OUR_TEAM_MEMBERS", res.data);
                })
                .catch(err => {
                    commit("SET_PROCESS_OUR_TEAM_MEMBERS", "");
                    commonCatchBlock({}, err)
                });
        },
    }
};
