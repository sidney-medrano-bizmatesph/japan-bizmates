import Vue from "vue";
import axios from "axios";
import { fields } from "../webCMS/ContentPartnerItems.vue";
import { commonCatchBlock, toast } from "../functions";
import Swal from "sweetalert2";

let field = _.values(fields).filter(field => field.filterable == undefined)[0];

export default {
    state: {
        content_partner_items: {
            content_partner_items: [],
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
        ["SET_PROCESS_CONTENT_PARTNER_ITEMS"](state, payload) {
            state.content_partner_items.process = payload;
        },
        ["SET_VAR_CONTENT_PARTNER_ITEMS"](state, payload) {
            state.content_partner_items = { ...state.content_partner_items, ...payload };
        },
        ["SET_CONTENT_PARTNER_ITEMS"](state, payload) {
            state.content_partner_items.content_partner_items = payload.result;
            state.content_partner_items.count = payload.count;
            state.content_partner_items.process = "";
        }
    },
    getters: {},
    actions: {
        setVarContentPartnerItems({ commit }, data) {
            commit("SET_VAR_CONTENT_PARTNER_ITEMS", data);
        },
        getContentPartnerItems({ commit }, data) {
            commit("SET_PROCESS_CONTENT_PARTNER_ITEMS", "Loading content partner items.");

            axios
                .post("/get-content-partner-items", data)
                .then(res => {
                    commit("SET_CONTENT_PARTNER_ITEMS", res.data);
                })
                .catch(err => {
                    commit("SET_PROCESS_CONTENT_PARTNER_ITEMS", "");
                    commonCatchBlock({}, err)
                });
        },
    }
};
