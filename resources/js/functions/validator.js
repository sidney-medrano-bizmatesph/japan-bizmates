import { isEmpty } from "./index";
import Vue from "vue";
export const validate = (field, value, that) => {
    let hasError = false;
    if (field.validation == undefined) {
        return true;
    }
    field.validation.every(validate => {
        let paramIndex = validate.indexOf(":");
        let validateString = validate;

        let localValue = value;

        // if (field.type == "react-draft") {
        //     localValue =
        //         draftToHtml(convertToRaw(value.getCurrentContent())).trim() ==
        //         "<p></p>"
        //             ? ""
        //             : draftToHtml(convertToRaw(value.getCurrentContent()))
        //                   .trim()
        //                   .replace(/(<([^>]+)>)/gi, "");
        // }
        if (paramIndex >= 0) {
            validateString = validate.substring(0, paramIndex);
            var parameter = validate.substring(paramIndex + 1);
        }

        switch (validateString) {
            case "required": {
                hasError = myValidator(
                    field.name,
                    [
                        {
                            errorTrap: isEmpty(localValue),
                            errorText: field.messages
                                ? field.messages.required
                                    ? field.messages.required
                                    : field.labelText + " is required."
                                : field.labelText + " is required."
                        }
                    ],
                    that
                );
                break;
            }
            case "max": {
                hasError = myValidator(
                    field.name,
                    [
                        {
                            errorTrap: localValue > parseInt(parameter),
                            errorText: field.messages
                                ? field.messages.max
                                    ? field.messages.max
                                    : field.labelText +
                                    " should not be greater than " +
                                    parameter +
                                    "."
                                : field.labelText +
                                " should not be greater than " +
                                parameter +
                                "."
                        }
                    ],
                    that
                );
                break;
            }
            case "min": {
                hasError = myValidator(
                    field.name,
                    [
                        {
                            errorTrap: localValue < parseInt(parameter),
                            errorText: field.messages
                                ? field.messages.min
                                    ? field.messages.min
                                    : field.labelText +
                                    " should not be lesser than " +
                                    parameter +
                                    "."
                                : field.labelText +
                                " should not be lesser than " +
                                parameter +
                                "."
                        }
                    ],
                    that
                );
                break;
            }
            case "max_len": {
                hasError = myValidator(
                    field.name,
                    [
                        {
                            errorTrap: localValue.length > parseInt(parameter),
                            errorText: field.messages
                                ? field.messages.max_len
                                    ? field.messages.max_len
                                    : field.labelText +
                                    " should not be greater than " +
                                    parameter +
                                    "."
                                : field.labelText +
                                " should not be greater than " +
                                parameter +
                                "."
                        }
                    ],
                    that
                );
                break;
            }
            case "min_len": {
                hasError = myValidator(
                    field.name,
                    [
                        {
                            errorTrap: localValue.length < parseInt(parameter),
                            errorText: field.messages
                                ? field.messages.min_len
                                    ? field.messages.min_len
                                    : field.labelText +
                                    " should not be less than " +
                                    parameter +
                                    "."
                                : field.labelText +
                                " should not be less than " +
                                parameter +
                                "."
                        }
                    ],
                    that
                );
                break;
            }
            case "number": {
                hasError = myValidator(
                    field.name,
                    [
                        {
                            errorTrap: isNaN(localValue),
                            errorText:
                                field.messages && field.messages.min_len
                                    ? field.messages.min_len
                                    : field.labelText +
                                    " should all be a number."
                        }
                    ],
                    that
                );
                break;
            }
            case "s_equal": {
                hasError = myValidator(
                    field.name,
                    [
                        {
                            errorTrap: that[field.name] != that[parameter],
                            errorText:
                                field.messages && field.messages.s_equal
                                    ? field.messages.s_equal
                                    : field.labelText +
                                    ` should be equal to ${that.fieldsValidation[parameter]
                                        .labelText
                                    }.`
                        }
                    ],
                    that
                );
                break;
            }
            case "email": {
                let re = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
                hasError = myValidator(
                    field.name,
                    [
                        {
                            errorTrap: !re.test(that[field.name]),
                            errorText:
                                field.messages && field.messages.email
                                    ? field.messages.email
                                    : field.labelText +
                                    ` must be a valid email.`
                        }
                    ],
                    that
                );
                break;
            }
            case "success": {
                hasError = myValidator(
                    field.name,
                    [
                        {
                            errorTrap: false,
                            errorText: ""
                        }
                    ],
                    that
                );
                break;
            }
        }
        if (hasError) {
            return false;
        } else {
            return true;
        }
    });
    return hasError;
};

export const myValidator = (name, conditions, that) => {
    let state = {};
    conditions.forEach(condition => {
        if (condition.errorTrap) {
            state = { error: { [name]: condition.errorText } };
        }
    });
    if (!isEmpty(state)) {
        let successes = that.successes;
        delete successes[name];

        Vue.set(that, "errors", { ...that.errors, ...state.error });
        Vue.set(that, "successes", { ...successes });
    } else {
        let errors = that.errors;
        delete errors[name];
        Vue.set(that, "errors", { ...errors });
        Vue.set(that, "successes", { ...that.successes, [name]: true });
    }

    return !isEmpty(state);
};

export const validateAll = (fields, that, values = {}) => {
    let errors = [];
    let { additionalValidation } = that;
    if (isEmpty(additionalValidation)) {
        additionalValidation = {};
    }

    Object.keys(fields).map(fieldName => {
        if (
            fields[fieldName].validation != undefined &&
            validate(
                additionalValidation[fieldName]
                    ? {
                        ...fields[fieldName],
                        validation: additionalValidation[fieldName]
                    }
                    : fields[fieldName],
                values[fieldName] != undefined
                    ? values[fieldName]
                    : that[fieldName],
                that
            )
        )
            errors.push(true);
    });

    return errors;
};
