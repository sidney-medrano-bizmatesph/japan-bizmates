import Vue from "vue";
import axios from "axios";
import { fields } from "../webCMS/InspirationVideos.vue";
import { commonCatchBlock, toast } from "../functions";
import Swal from "sweetalert2";

let field = _.values(fields).filter(field => field.filterable == undefined)[0];

export default {
    state: {
        inspiration_videos: {
            inspiration_videos: [],
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
        ["SET_PROCESS_INSPIRATION_VIDEOS"](state, payload) {
            state.inspiration_videos.process = payload;
        },
        ["SET_VAR_INSPIRATION_VIDEOS"](state, payload) {
            state.inspiration_videos = { ...state.inspiration_videos, ...payload };
        },
        ["SET_INSPIRATION_VIDEOS"](state, payload) {
            state.inspiration_videos.inspiration_videos = payload.result;
            state.inspiration_videos.count = payload.count;
            state.inspiration_videos.process = "";
        }
    },
    getters: {},
    actions: {
        setVarInspirationVideos({ commit }, data) {
            commit("SET_VAR_INSPIRATION_VIDEOS", data);
        },
        getInspirationVideos({ commit }, data) {
            commit("SET_PROCESS_INSPIRATION_VIDEOS", "Loading inspiration videos.");

            axios
                .post("/get-inspiration-videos", data)
                .then(res => {
                    commit("SET_INSPIRATION_VIDEOS", res.data);
                })
                .catch(err => {
                    commit("SET_PROCESS_INSPIRATION_VIDEOS", "");
                    commonCatchBlock({}, err)
                });
        },
    }
};
