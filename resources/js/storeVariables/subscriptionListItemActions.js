import Vue from "vue";
import axios from "axios";
import { fields } from "../webCMS/SubscriptionListItems.vue";
import { commonCatchBlock, toast } from "../functions";
import Swal from "sweetalert2";

let field = _.values(fields).filter(field => field.filterable == undefined)[0];

export default {
    state: {
        subscription_list_items: {
            subscription_list_items: [],
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
        ["SET_PROCESS_SUBSCRIPTION_LIST_ITEMS"](state, payload) {
            state.subscription_list_items.process = payload;
        },
        ["SET_VAR_SUBSCRIPTION_LIST_ITEMS"](state, payload) {
            state.subscription_list_items = { ...state.subscription_list_items, ...payload };
        },
        ["SET_SUBSCRIPTION_LIST_ITEMS"](state, payload) {
            state.subscription_list_items.subscription_list_items = payload.result;
            state.subscription_list_items.count = payload.count;
            state.subscription_list_items.process = "";
        }
    },
    getters: {},
    actions: {
        setVarSubscriptionListItems({ commit }, data) {
            commit("SET_VAR_SUBSCRIPTION_LIST_ITEMS", data);
        },
        getSubscriptionListItems({ commit }, data) {
            commit("SET_PROCESS_SUBSCRIPTION_LIST_ITEMS", "Loading our team items.");

            axios
                .post("/get-subscription-list-items", data)
                .then(res => {
                    commit("SET_SUBSCRIPTION_LIST_ITEMS", res.data);
                })
                .catch(err => {
                    commit("SET_PROCESS_SUBSCRIPTION_LIST_ITEMS", "");
                    commonCatchBlock({}, err)
                });
        },
    }
};
