<template>
    <FormAndTable>
        <template v-slot:form
            ><div
                :class="{
                    'rounded p-4 transition-all duration-300 mt-10 bg-white': true,
                }"
            >
                <CustomModal
                    :showModal="showProcess"
                    :disabledClose="true"
                    :header="processHeader"
                >
                    <p class="text-lg">{{ uploadFileName }}</p>
                    <div class="shadow w-full bg-gray-300 mt-2 rounded">
                        <div
                            class="
                                rounded
                                animate-pulse
                                bg-blue-900
                                text-xs
                                leading-none
                                py-1
                                text-center text-white
                                transition-all
                            "
                            :style="`width: ${processProgress}%`"
                        >
                            {{ processProgress }}%
                        </div>
                    </div>
                </CustomModal>
                <CustomModal
                    :showModal="showRename"
                    :afterHideModal="() => (showRename = false)"
                    :disabledClose="submittingRename"
                    header="Rename"
                >
                    <form @submit.prevent="onSubmitRename">
                        <p>
                            The display order is based on the name.
                            (Alphabetically)
                        </p>
                        <CustomInput
                            :inputData="{
                                field: {
                                    name: 'name',
                                    labelText: 'Name',
                                    placeholder: 'Name',
                                    type: 'text',
                                    validation: ['required'],
                                },
                                value: name,
                                that,
                            }"
                        ></CustomInput>
                        <button
                            class="btn btn-primary"
                            :disabled="submittingRename"
                        >
                            Save
                        </button>
                    </form>
                </CustomModal>
                <h1 class="text-4xl mb-4">Events</h1>
                <form @submit.prevent="onSubmitTitle" class="mb-8">
                    <CustomInput
                        :inputData="{
                            field: {
                                type: 'tiny',
                                name: 'event_title',
                                labelText: 'Title',
                                placeholder: 'Title',
                                wrapperClass: 'mb-2 mr-2 inline-block w-full',
                                validation: ['success'],
                            },
                            value: event_title,
                            that,
                        }"
                    ></CustomInput>
                    <button
                        type="submit"
                        class="btn btn-primary"
                        :disabled="submitting"
                    >
                        <Submitting :submitting="submitting">Submit</Submitting>
                    </button>
                </form>
                <form @submit.prevent="onSubmit" class="mb-8">
                    <p class="text-lg">Please convert your video to mp4</p>
                    <div class="grid grid-cols-1 gap-x-5 gap-y-2">
                        <CustomFileInput
                            :inputData="{
                                field: fields.videos,
                                value: videos,
                                that,
                            }"
                        ></CustomFileInput>
                    </div>
                    <button
                        type="submit"
                        class="btn btn-primary"
                        :disabled="!isEmpty(errors) || submitting"
                    >
                        <Submitting :submitting="submitting">Submit</Submitting>
                    </button>
                    <button
                        type="button"
                        class="btn btn-dark"
                        @click="clear"
                        :disabled="submitting"
                    >
                        <Submitting :submitting="submitting">Clear</Submitting>
                    </button>
                </form>
                <div
                    class="grid grid-cols-2 min-lg:grid-cols-3 gap-x-5 gap-y-3"
                >
                    <div
                        v-for="(video, key) in uploadedVideos"
                        :key="`video-${key}`"
                    >
                        <div class="flex justify-between">
                            <p class="text-lg mb-3 pr-2">{{ video.name }}</p>
                            <div>
                                <button
                                    class="btn btn-primary btn-sm"
                                    @click="
                                        () => {
                                            showRename = true;
                                            currentItem = video;
                                            name = video.name;
                                        }
                                    "
                                >
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button
                                    class="btn btn-error btn-sm"
                                    @click="() => deleteVideo(video)"
                                >
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <video
                            class="w-full"
                            :src="`/storage/webCMS/videos/${video.name_on_disk}`"
                            controls
                            preload="metadata"
                        ></video>
                    </div>
                </div></div
        ></template>
    </FormAndTable>
</template>

<script>
import { mapActions, mapState } from "vuex";
import {
    commonCatchBlock,
    dataSetter,
    formClearer,
    formSetter,
    isEmpty,
    loader,
    toast,
    ifEmptyThen,
} from "../functions";

import { validateAll } from "../functions/validator";

export { fields };

const fields = {
    videos: {
        name: "videos",
        labelText: "File",
        accept: "video/mp4|video/quicktime|video/x-ms-wmv|video/x-msvideo",
        type: "file",
        max_size: "50", //MB,
        acceptedExtensions: [".mp4", ".mov", ".ogg"],
        multiple: true,
        validation: ["required"],
    },
};

const field_values = {
    videos: [],
};
export default {
    mounted() {
        axios
            .post("/event-initialize")
            .then((res) => {
                this.event_title = res.data.title;
            })
            .catch((err) => commonCatchBlock(this, err));
        this.getter();
    },
    data() {
        return {
            fields,
            successes: {},
            errors: {},
            that: this,
            submitting: false,
            ...field_values,
            processProgress: 0,
            processHeader: "",
            showProcess: false,
            uploadFileName: "",
            uploadedVideos: [],
            name: "",
            showRename: false,
            currentItem: "",
            submittingRename: false,
            event_title: "",
        };
    },
    computed: {
        ...mapState(["auth"]),
    },
    methods: {
        isEmpty,
        ifEmptyThen,
        onSubmitTitle() {
            axios
                .post("/event-cms", { title: this.event_title })
                .then((res) => toast(res.data.status, res.data.message))
                .catch((err) => {
                    commonCatchBlock(this, err);
                });
        },
        getter() {
            axios.post("/get-events").then((res) => {
                this.uploadedVideos = res.data;
            });
        },
        deleteVideo(video) {
            Swal.fire({
                title: "Are you sure?",
                text: `This action will delete ${video.name}`,
                icon: "info",
                showCancelButton: true,
            }).then((res) => {
                if (res.value) {
                    loader("Deleting");
                    axios
                        .post("/delete-event", { id: video.id })
                        .then((res) => {
                            Swal.close();
                            toast(res.data.status, res.data.message);
                            if (res.data.status == "success") this.getter();
                        })
                        .catch((err) => {
                            Swal.close();
                            commonCatchBlock(this, err);
                        });
                }
            });
        },

        onSubmitRename(Event) {
            let fields = {
                name: {
                    name: "name",
                    labelText: "Name",
                    placeholder: "Name",
                    validation: ["required"],
                },
            };
            if (isEmpty(validateAll(fields, this))) {
                this.submittingRename = true;
                let data = {
                    id: this.currentItem.id,
                    name: this.name,
                };
                axios
                    .post("/rename-event", data)
                    .then((res) => {
                        toast(res.data.status, res.data.message);
                        this.submittingRename = false;
                        this.showRename = false;
                        if (res.data.status == "success") {
                            this.getter();
                        }
                    })
                    .catch((err) => {
                        this.submittingRename = false;
                        commonCatchBlock(this, err);
                    });
            }
        },
        clear() {
            formClearer(field_values, this);
        },
        async onSubmit() {
            let that = this;
            console.log(isEmpty(validateAll(fields, this)));
            if (isEmpty(validateAll(fields, this))) {
                if (this.videos.length > 0) {
                    for (let i = 0; i < this.videos.length; ) {
                        this.processHeader = `${i + 1} out of ${
                            this.videos.length
                        }`;
                        let data = new FormData();
                        data.append("file", this.videos[i]);
                        this.uploadFileName = this.videos[i].name;
                        this.submitting = true;
                        const config = {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                            onUploadProgress: function (progressEvent) {
                                var percentCompleted = Math.round(
                                    (progressEvent.loaded * 100) /
                                        progressEvent.total
                                );
                                that.processProgress = percentCompleted;
                            },
                        };
                        this.showProcess = true;
                        await axios
                            .post("/add-event", data, config)
                            .then((res) => {
                                this.submitting = false;
                                i++;
                                // if (i == this.videos.length) {
                                //     this.showProcess = false;
                                //     this.clear();
                                //     this.getter();
                                // }
                                toast(res.data.status, res.data.message);
                            })
                            .catch((err) => {
                                this.submitting = false;
                                i++;

                                commonCatchBlock(this, err);
                            });
                        if (i == this.videos.length) {
                            this.showProcess = false;
                            this.clear();
                            this.getter();
                        }
                    }
                }
            }
        },
    },
    components: {
        Submitting: () => import("../components/Submitting"),
        CustomInput: () => import("../components/CustomInput"),
        CustomFileInput: () => import("../components/CustomFileInput"),
        FormAndTable: () => import("../layouts/FormAndTable.vue"),
        CustomModal: () => import("../components/CustomModal.vue"),
    },
    watch: {
        $route() {},
    },
};
</script>
