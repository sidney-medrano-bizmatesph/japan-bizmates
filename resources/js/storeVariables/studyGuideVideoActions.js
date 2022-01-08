import Vue from "vue";
import axios from "axios";
import { fields } from "../webCMS/StudyGuideVideos.vue";
import { commonCatchBlock, toast } from "../functions";
import Swal from "sweetalert2";

let field = _.values(fields).filter(field => field.filterable == undefined)[0];

export default {
    state: {
        study_guide_videos: {
            study_guide_videos: [],
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
        ["SET_PROCESS_STUDY_GUIDE_VIDEOS"](state, payload) {
            state.study_guide_videos.process = payload;
        },
        ["SET_VAR_STUDY_GUIDE_VIDEOS"](state, payload) {
            state.study_guide_videos = { ...state.study_guide_videos, ...payload };
        },
        ["SET_STUDY_GUIDE_VIDEOS"](state, payload) {
            state.study_guide_videos.study_guide_videos = payload.result;
            state.study_guide_videos.count = payload.count;
            state.study_guide_videos.process = "";
        }
    },
    getters: {},
    actions: {
        setVarStudyGuideVideos({ commit }, data) {
            commit("SET_VAR_STUDY_GUIDE_VIDEOS", data);
        },
        getStudyGuideVideos({ commit }, data) {
            commit("SET_PROCESS_STUDY_GUIDE_VIDEOS", "Loading study guide videos.");

            axios
                .post("/get-study-guide-videos", data)
                .then(res => {
                    commit("SET_STUDY_GUIDE_VIDEOS", res.data);
                })
                .catch(err => {
                    commit("SET_PROCESS_STUDY_GUIDE_VIDEOS", "");
                    commonCatchBlock({}, err)
                });
        },
    }
};
