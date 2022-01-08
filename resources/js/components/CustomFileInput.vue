<template>
    <div
        :class="{
            [inputData.field.wrapperClassName]:
                inputData.field.wrapperClassName,
        }"
    >
        <label
            :for="inputData.field.name"
            v-if="inputData.field.labelText && inputData.field.labelText != ''"
            :class="{
                'text-red-600': error && error != '',
                'text-green-600': success,
                'disabled-text': inputData.disabled,
            }"
        >
            {{ inputData.field.labelText }}
            <span
                class="text-red-600"
                v-if="
                    inputData.field.validation &&
                    inputData.field.validation.includes('required')
                "
                >*</span
            >
        </label>
        <div
            :class="{
                'dropbox mb-2': true,
                'success-form-control': success,
                'error-form-control': error && error != '',
                'default-form-control': !error && !success,
                [inputData.field.className]:
                    inputData.field.className != undefined,
            }"
        >
            <input
                type="file"
                :multiple="
                    inputData.field.multiple != undefined
                        ? inputData.field.multiple
                        : true
                "
                :name="inputData.field.name"
                @change="onChange"
                :accept="inputData.field.accept ? inputData.field.accept : '*'"
                class="input-file"
                :key="key"
            />

            <p>
                <i class="fa fa-upload strong-upload-text"></i>
                <strong class="strong-upload-text">Drag</strong> your file(s) or
                <strong class="strong-upload-text">click</strong> to browse
            </p>
        </div>
        <div v-if="!isEmpty(unAccepted)">
            <p class="text-red-600 m-0"><b>Un accepted files: </b></p>
            <ul>
                <li v-for="(file, key) in unAccepted" :key="key">
                    {{ file.file.name }}
                    <span class="text-red-600" v-if="file.error == 'size'"
                        >Size exceeded the limit:
                        {{ Math.ceil(inputData.field.max_size) }}MB</span
                    >
                    <span class="text-red-600" v-if="file.error == 'fileType'"
                        >File type not accepted.</span
                    >
                </li>
            </ul>
        </div>
        <slot name="preview" v-if="inputData.noPreview"> </slot>
        <template v-else>
            <div class="table-responsive" v-if="filesCount > 0">
                <table class="table-own">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Preview</th>
                            <th>Name</th>
                            <th>Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(file, key) in inputData.that[
                                inputData.field.name
                            ]"
                            :key="key"
                        >
                            <td>
                                <button
                                    type="button"
                                    class="btn btn-error"
                                    @click="remove(key)"
                                >
                                    <i class="fa fa-times"></i>
                                </button>
                            </td>
                            <td>
                                <a
                                    v-if="file.type.split('/')[0] == 'image'"
                                    :href="display(file)"
                                    class="spotlight"
                                >
                                    <img
                                        :src="display(file)"
                                        class="preview"
                                        alt
                                    />
                                </a>
                                <img
                                    v-else
                                    :src="display(file)"
                                    alt
                                    class="preview"
                                />
                            </td>
                            <td>{{ file.name }}</td>
                            <td>
                                {{
                                    Math.round(
                                        (file.size / 1024 / 1024) * 100
                                    ) / 100
                                }}MB
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </template>
        <span
            v-if="
                inputData.that.errors[inputData.field.name] != '' &&
                inputData.that.errors[inputData.field.name]
            "
            :class="`helper-text block text-red-600`"
            >{{ errorText }}</span
        >
        <span
            v-if="inputData.field.max_size != undefined"
            :class="`helper-text block`"
            >{{ `Max size: ${inputData.field.max_size}MB` }}</span
        >
    </div>
</template>

<script>
import { display, isEmpty } from "../functions";
import { validate } from "../functions/validator";
export default {
    props: ["inputData"],
    data() {
        return {
            uploadedFiles: [],
            uploadError: null,
            currentStatus: null,
            files: [],
            unAccepted: [],
            key: 0,
        };
    },
    computed: {
        error() {
            const {
                inputData: { that },
                inputData,
            } = this;
            return that.errors[inputData.field.name];
        },
        success() {
            const {
                inputData: { that },
                inputData,
            } = this;
            return that.successes[inputData.field.name];
        },
        errorText() {
            const {
                inputData: { that },
                inputData,
            } = this;
            let errorText = "";
            if (Array.isArray(inputData.that.errors[inputData.field.name])) {
                inputData.that.errors[inputData.field.name].map((res) => {
                    errorText += `${res} `;
                });
            } else {
                errorText = inputData.that.errors[inputData.field.name];
            }
            return errorText;
        },
        filesCount() {
            const {
                inputData: { that },
                inputData,
            } = this;
            return that[inputData.field.name].length;
        },
    },
    methods: {
        isEmpty,
        display,
        reset() {},
        save(formData) {},
        async onChange(event) {
            // event.preventDefault();
            const {
                inputData,
                inputData: { that },
            } = this;
            const { name, files } = event.target;
            const acceptArray = inputData.field.accept.split(",");

            if (inputData.onChange) {
                inputData.onChange(event);
            }

            if (!files.length) return;

            let unAccepted = [];
            that[name] = [];
            // that.errors[name] = {};

            if (files.length > 100) {
                Swal.fire({
                    icon: "error",
                    title: "Please don't upload more than 100 files at once.",
                });

                return;
            } else {
            }

            Array.from(Array(files.length).keys()).map((x) => {
                let file = files[x];
                let size = Math.round((file.size / 1024 / 1024) * 100) / 100; // MB
                let acceptedInFileType = false;
                let fileNameSplit = file.name.split(".");
                let extension = "." + fileNameSplit[fileNameSplit.length - 1];

                if (
                    inputData.field.acceptedExtensions ||
                    inputData.field.unAcceptedExtensions
                ) {
                    if (
                        inputData.field.acceptedExtensions &&
                        inputData.field.acceptedExtensions.includes(extension)
                    ) {
                        acceptedInFileType = true;
                    }

                    if (
                        inputData.field.unAcceptedExtensions &&
                        inputData.field.unAcceptedExtensions.includes(extension)
                    ) {
                        acceptedInFileType = false;
                    } else if (
                        inputData.field.acceptedExtensions == undefined
                    ) {
                        acceptedInFileType = true;
                    }
                } else {
                    acceptedInFileType = true;
                }

                if (acceptedInFileType) {
                    if (
                        inputData.field.max_size != undefined &&
                        size > Math.ceil(parseFloat(inputData.field.max_size))
                    ) {
                        unAccepted.push({
                            file: {
                                name: file.name,
                                size: file.size,
                                type: file.type,
                            },
                            error: "size",
                        });
                    } else {
                        that[name].push(file);
                        validate(inputData.field, 1, that);
                        $(
                            `#file-preview-${this.inputData.field.name}`
                        ).collapse("show");
                    }
                } else {
                    unAccepted.push({
                        file: {
                            name: file.name,
                            size: file.size,
                            type: file.type,
                        },
                        error: "fileType",
                    });
                }
            });
            this.key = `${this.inputData.field.name}-${Date.now()}`;
            this.unAccepted = unAccepted;
        },
        remove(key) {
            const {
                inputData: { that, field },
            } = this;
            let files = that[field.name];
            let keys = Array.from(Array(files.length).keys()).filter((x) => {
                return x != key;
            });
            that[field.name] = [];
            keys.map((key) => {
                that[field.name].push(files[key]);
            });
            validate(field, that[field.name], that);
            if (that[field.name].length < 1) {
                $(`#file-preview-${this.inputData.field.name}`).collapse(
                    "hide"
                );
            }
        },
    },
    mounted() {
        this.key = `${this.inputData.field.name}-${Date.now()}`;
        this.reset();
    },
    watch: {
        filesCount(newValue) {
            if (newValue < 1) {
                $(`#file-preview-${this.inputData.field.name}`).collapse(
                    "hide"
                );
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.dropbox {
    border: 2px dashed grey; /* when mouse over to the drop zone, change color */
    background: #f0f0f0;
    color: dimgray;
    position: relative;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
    border-radius: 20px;
    min-height: 38px;
}

.input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: pointer;
    // padding: 10px 10px;
}

.dropbox:hover {
    border: 2px dashed #052683; /* when mouse over to the drop zone, change color */
    background: white;
    color: black;
}

.strong-upload-text {
    transition: all ease-in-out 0.2s;
}

.dropbox:hover .strong-upload-text {
    color: #052683;
}

.dropbox p {
    text-align: center;
    padding: 5px 0;
    margin-bottom: 0px;
}

.preview {
    max-width: 100%;
    max-height: 50px;
    vertical-align: middle;
    transition: all 0.3s ease-in-out;
}

.preview:hover {
    background-color: rgb(201, 201, 201);
}

.preview-overlay {
    position: absolute !important;
    display: none;
    bottom: 0;
    right: 0;
}

.preview:hover ~ .preview-overlay,
.preview-overlay:hover {
    // background-color: rgb(248, 248, 248);
    // animation: fadeInDown 2s;
    display: inline-block;
}
.preview-container:hover .preview {
    filter: blur(8px);
}
</style>
