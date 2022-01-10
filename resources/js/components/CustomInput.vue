<template>
    <div
        :class="{
            'form-control': true,
            [inputData.field.wrapperClass]:
                inputData.field.wrapperClass != undefined,
        }"
    >
        <label
            :class="{
                'block mb-2 text-sm font-bold text-gray-700': true,

                'text-red-500': error && error != '',
                // 'text-gray-500': success && !(error && error != ''),
                'text-gray-400': inputData.disabled,
                [inputData.field.labelClass]:
                    inputData.field.labelClass != undefined,
            }"
            :for="
                inputData.field.type == 'tumbowyg' ? '' : inputData.field.name
            "
            v-if="!isEmpty(inputData.field.labelText)"
        >
            {{ inputData.field.labelText }}
        </label>
        <template
            v-if="
                inputData.field.type == 'text' ||
                inputData.field.type == 'number' ||
                inputData.field.type == 'password' ||
                inputData.field.type == 'email' ||
                inputData.field.type == 'date'
            "
        >
            <input
                @keyup="onChange"
                @change="onChange"
                :class="
                    !inputData.field.inputClassOverride
                        ? {
                              'input input-bordered': true,
                              [inputData.field.inputClass]:
                                  inputData.field.inputClass != undefined,
                              'input-primary':
                                  !(error && error != '') &&
                                  !success &&
                                  !inputData.disabled,
                              'input-error': error && error != '',
                              'input-success':
                                  success && !(error && error != ''),
                          }
                        : inputData.field.inputClassOverride
                "
                v-model="inputData.value"
                :id="
                    !isEmpty(inputData.field.id)
                        ? inputData.field.id
                        : inputData.field.name
                "
                :name="inputData.field.name"
                :type="ifEmptyThen(inputData.field.type, 'text')"
                :placeholder="ifEmptyThen(inputData.field.placeholder, '')"
                v-bind="{ ...inputData.field.inputProps }"
            />
        </template>
        <template v-else-if="inputData.field.type == 'textarea'">
            <textarea
                @keyup="onChange"
                @change="onChange"
                :name="inputData.field.name"
                :class="
                    !inputData.field.inputClassOverride
                        ? {
                              'input input-bordered': true,
                              [inputData.field.inputClass]:
                                  inputData.field.inputClass != undefined,
                              'input-primary':
                                  !(error && error != '') &&
                                  !success &&
                                  !inputData.disabled,
                              'input-error': error && error != '',
                              'input-success':
                                  success && !(error && error != ''),
                          }
                        : inputData.field.inputClassOverride
                "
                :id="
                    inputData.field.id
                        ? inputData.field.id
                        : inputData.field.name
                "
                v-model="inputData.value"
                cols="30"
                rows="10"
                :placeholder="inputData.field.placeholder"
                v-bind="{ ...inputData.field.inputProps }"
            ></textarea>
        </template>
        <template v-else-if="inputData.field.type == 'tiny'">
            <Editor
                @onBlur="onChangeTiny"
                api-key="op65uuks84ilm2ymjosobqkizu8m9wlfs283br53r6ds2xby"
                :id="
                    inputData.field.id
                        ? inputData.field.id
                        : inputData.field.name
                "
                v-model="inputData.value"
                :init="inputData.init ? inputData.init : defaultInit"
                v-bind="{ ...inputData.field.inputProps }"
            ></Editor>
        </template>
        <template v-else-if="inputData.field.type == 'select2Async'">
            <CustomSelect
                :field="inputData.field"
                :onChange="select2Select"
                :value="inputData.value"
                :error="error"
                :success="success"
                :functions="inputData.functions ? inputData.functions : {}"
                :disabled="inputData.disabled ? inputData.disabled : false"
                :multiple="inputData.multiple ? inputData.multiple : false"
                v-if="!inputData.readonly"
            ></CustomSelect>
            <input
                v-else
                :name="inputData.field.name"
                :placeholder="inputData.field.placeholder"
                type="text"
                :class="{
                    [alwaysTrueClass]: true,
                    [errorClass]: error && error != '',
                    [successColor]: success,
                    [defaultClass]: !error && !success,
                }"
                :readonly="true"
                v-model="inputData.value.text"
            />
        </template>
        <template v-else-if="inputData.field.type == 'select2Sync'">
            <CustomSelectSync
                :field="inputData.field"
                :onChange="select2Select"
                :value="inputData.value"
                :error="error"
                :success="success"
                :disabled="inputData.disabled ? inputData.disabled : false"
                :menuItems="inputData.menuItems"
                v-if="!inputData.readonly"
            ></CustomSelectSync>
            <input
                v-else
                :name="inputData.field.name"
                :placeholder="
                    inputData.field.placeholder
                        ? inputData.field.placeholder
                        : ''
                "
                type="text"
                :class="{
                    [alwaysTrueClass]: true,
                    [errorClass]: error && error != '',
                    [successColor]: success,
                    [defaultClass]: !error && !success,
                }"
                :readonly="true"
                :value="
                    inputData.value && inputData.value.text
                        ? inputData.value.text
                        : ''
                "
            />
        </template>
        <template v-else-if="inputData.field.type == 'select'">
            <select
                :name="inputData.field.name"
                :id="inputData.field.name"
                :class="
                    !inputData.field.inputClassOverride
                        ? {
                              'select select-bordered': true,
                              [inputData.field.inputClass]:
                                  inputData.field.inputClass != undefined,
                              'select-error': error && error != '',
                              'select-success': success,
                              'select-primary': !error && !success,
                          }
                        : inputData.field.inputClassOverride
                "
                v-bind="{ ...inputData.field.inputProps }"
                @change="onChange"
            >
                <option
                    v-for="menuItem in inputData.menuItems"
                    :key="menuItem.key"
                    :value="menuItem.id"
                    :selected="
                        typeof inputData.value == 'string' ||
                        Array.isArray(inputData.value)
                            ? inputData.value.includes(menuItem.id)
                            : inputData.value == menuItem.id
                    "
                >
                    {{ menuItem.text }}
                </option>
            </select>
        </template>
        <span
            v-if="inputData.field.helperText"
            :class="
                inputData.field.helperTextClassOverride
                    ? inputData.field.helperTextClassOverride
                    : `text-gray-500 text-sm block`
            "
            >{{ inputData.field.helperText }}</span
        >
        <span
            v-if="error != '' && error"
            :class="`text-red-500 text-sm block`"
            >{{ error }}</span
        >
    </div>
</template>
<script>
import { ifEmptyThen, isEmpty, defaultInit } from "../functions";
import { validate } from "../functions/validator";
export default {
    props: ["inputData"],
    data() {
        return {
            defaultInit,
        };
    },
    components: {
        CustomSelectSync: () => import("./CustomSelect2Sync"),
        CustomSelect: () => import("./CustomSelect2"),
        Editor: () => import("@tinymce/tinymce-vue"),
    },
    computed: {
        error() {
            const {
                inputData: { that },
                inputData,
            } = this;

            let temp = that.errors[inputData.field.name];
            if (!isEmpty(temp)) {
                if (Array.isArray(temp)) {
                    return temp.toString();
                } else {
                    return temp;
                }
            } else {
                return temp;
            }
        },
        success() {
            const {
                inputData: { that },
                inputData,
            } = this;
            return that.successes[inputData.field.name];
        },
    },
    methods: {
        ifEmptyThen,
        isEmpty,
        onChangeTiny(event, editor) {
            const {
                inputData: { that },
                inputData,
            } = this;
            if (inputData.onChangeBefore != undefined)
                inputData.onChangeBefore(event, editor);

            if (inputData.onChange != undefined) {
                inputData.onChange(event, editor);
            } else {
                that[inputData.field.name] = editor.getContent();
                validate(inputData.field, editor.getContent(), that);

                if (inputData.onChangeAfter != undefined) {
                    inputData.onChangeAfter(event, editor);
                }
            }
            validate(inputData.field, editor.getContent(), that);
            // alert(editor.getContent());
        },
        onChange(event) {
            event.preventDefault();

            const {
                inputData: { that },
                inputData,
            } = this;
            if (inputData.onChangeBefore != undefined)
                inputData.onChangeBefore(event);

            if (inputData.onChange != undefined) {
                inputData.onChange(event);
            } else {
                that[event.target.name] = $(`#${inputData.field.name}`).val();
                validate(inputData.field, event.target.value, that);
                if (inputData.onChangeAfter != undefined) {
                    inputData.onChangeAfter(event);
                }
            }
        },
        select2Select(event) {
            var data = event.params.data;
            const {
                inputData: { field, that },
                inputData,
            } = this;

            if (inputData.onChange) {
                inputData.onChange(field, data);
                /*
                onChange(field, data){
                    that[field.name] = { id: data.id, text: data.text };
                    validate(field, data.id, that);
                }
                */
            } else {
                that[field.name] = { ...data };
                validate(field, data.id, that);
            }
        },
    },
};
</script>
