<template>
    <div>
        <select
            :id="field.id ? field.id : field.name"
            :name="field.name"
            :disabled="disabled"
            :multiple="multiple"
        ></select>
    </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import { isEmpty } from "../functions";
import { mapState, mapActions } from "vuex";
const CancelToken = axios.CancelToken;
let tokens = {};
let results = {};
export default {
    props: [
        "field",
        "className",
        "onChange",
        "error",
        "success",
        "value",
        "functions",
        "disabled",
        "readonly",
        "multiple",
    ],
    beforeDestroy: function () {
        const { field, value } = this;
        $(`#${field.name}`).select2("destroy");
    },
    mounted() {
        let that = this;
        const { field, value } = this;

        let mySelect2 = $(`#${field.name}`).select2({
            width: "100%",
            theme: "bootstrap",
            placeholder: field.placeholder,
            ajax: {
                data: that.functions.dataFunction
                    ? that.functions.dataFunction
                    : function (params) {
                          return {
                              filter: [
                                  {
                                      searchValue: params.term
                                          ? params.term
                                          : "",
                                      searchField:
                                          field.loadParameters.searchField,
                                      type: field.loadParameters.type,
                                      DBRaw:
                                          field.loadParameters.DBRaw !=
                                          undefined
                                              ? field.loadParameters.DBRaw
                                              : "",
                                  },
                              ],
                              order: {
                                  [field.loadParameters.searchField]: {
                                      type: "asc",
                                  },
                              },
                              additionalParameters: field.additionalParameters,
                              rowsPerPage: field.loadParameters.rowsPerPage,
                              page: params.page ? params.page - 1 : 0,
                          };
                      },
                transport: that.functions.transportFunction
                    ? that.functions.transportFunction
                    : function (params, success, failure) {
                          const url = field.loadParameters.url;
                          if (tokens[url] != undefined) {
                              tokens[url]();
                          }
                          axios
                              .post(field.loadParameters.url, params.data, {
                                  cancelToken: new CancelToken(
                                      function executor(c) {
                                          // An executor function receives a cancel function as a parameter
                                          tokens[url] = c;
                                      }
                                  ),
                              })
                              .then((res) => {
                                  tokens[url] = undefined;
                                  success(res.data);
                              })
                              .catch((err) => {
                                  if (
                                      err.response &&
                                      err.response.data &&
                                      err.response.data.message &&
                                      err.response.data.message ==
                                          "Token has expired"
                                  ) {
                                      that.logoutUser();
                                  }
                              });
                      },
                processResults: that.functions.processResults
                    ? that.functions.processResults
                    : function (data, params) {
                          return {
                              results: data.result.map((item) => ({
                                  id: item.id,
                                  text: item[field.loadParameters.searchField],
                              })),
                              pagination: {
                                  more:
                                      (params.page ? params.page : 0 + 1) *
                                          field.loadParameters.rowsPerPage <
                                      data.count,
                              },
                              // totals: data.count
                          };
                      },
            },
        });

        if (this.multiple == false) {
            if (value != null && !isEmpty(value))
                $(`#${field.name}`).append(
                    `<option value=${value.id} selected>${value.text}</option>`
                );

            $(`#${field.name}`).on("select2:select", this.onChange);
            $(`#${field.name}`).on("select2:unselect", (event) => {});
        } else {
            $(`#${field.name}`).on("select2:select", (event) => {
                let option = new Option("Sidney", 60759, true, true);
                let options = [];
                options.push(option);
                mySelect2.append(options).trigger("change");
            });
            $(`#${field.name}`).on("select2:unselect", (event) => {
                let remainingData = $(`#${field.name}`)
                    .select2("data")
                    .filter((res) => parseFloat(res.id) != event.params.data.id)
                    .map((res) => res.id);
                mySelect2.val(remainingData).trigger("change");
            });
        }

        $(
            `#${field.name} ~ .select2-container > .selection > .select2-selection`
        ).addClass("default-form-control");
    },
    methods: {
        ...mapActions(["logoutUser"]),
    },
    watch: {
        error() {
            let thisOfThis = this;
            const { field, error, success } = this;
            if (!isEmpty(error)) {
                $(
                    `#${field.name} ~ .select2-container > .selection > .select2-selection`
                ).addClass("error-form-control");
                $(
                    `#${field.name} ~ .select2-container > .selection > .select2-selection`
                ).removeClass(["success-form-control", "default-form-control"]);
            } else {
                $(
                    `#${field.name} ~ .select2-container > .selection > .select2-selection`
                ).addClass("default-form-control");
                $(
                    `#${field.name} ~ .select2-container > .selection > .select2-selection`
                ).removeClass("error-form-control");
            }
        },
        success() {
            let thisOfThis = this;
            const { field, error, success } = this;
            if (success && isEmpty(error)) {
                $(
                    `#${field.name} ~ .select2-container > .selection > .select2-selection`
                ).addClass("success-form-control");
                $(
                    `#${field.name} ~ .select2-container > .selection > .select2-selection`
                ).removeClass("error-form-control default-form-control");
            } else {
                $(
                    `#${field.name} ~ .select2-container > .selection > .select2-selection`
                ).addClass("default-form-control");
                $(
                    `#${field.name} ~ .select2-container > .selection > .select2-selection`
                ).removeClass("success-form-control");
            }
        },
        value(newValue, oldValue) {
            const { field } = this;
            if (!isEmpty(newValue) && newValue != null) {
                $(`#${field.name}`).append(
                    `<option value=${newValue.id} selected>${newValue.text}</option>`
                );
            } else {
                $(`#${field.name}`).append(
                    `<option value='' selected></option>`
                );
            }
        },
    },
};
</script>

<style></style>
