import routes from "../routes";
import jwt_decode from "jwt-decode";
// import {store} from "../layouts/Main";
import Vue from "vue";



export const defaultInit = {
    height: 200,
    plugins: [
        'advlist autolink lists link image imagetools charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount',
    ],
    toolbar:
        'undo redo | formatselect | bold italic underline strikethrough forecolor backcolor casechange | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | preview | help',


}

export const isEmpty = value =>
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0) ||
    (typeof value === "array" && value.length === 0);


export const commonCatchBlock = (that, err) => {
    console.log(err);
    if (err && err.response && err.response.status != 400) {
        if (err.response.data.message) {
            toast("error", err.response.data.message)
        } else {
            toast("error", err.message)

        }
    } else {
        console.log(err);
        if (err && err.response && that.errors) that.errors = { ...err.response.data };
    }
    logoutIfTokenExpired(err);
};

export const logoutIfTokenExpired = err => {
    // CSRF token mismatch.
    if (
        err &&
        err.response &&
        err.response.data &&
        err.response.data.message

    ) {
        if (err.response.data.message == "Token has expired" || err.response.data.message == "The token has been blacklisted") {
            Swal.fire({
                icon: "error",
                title: "Token has expired.",
                text: "You will be logged out in 3 seconds. Or close this to log out immediately.",
                timer: 3000
            }).then(res => {
                if (err.response.data.message == "Token has expired") {
                    Vue.store.actions.logoutUser()
                } else {
                }
                window.location.href = "/home";
            })
        } else if (err.response.data.message == "CSRF token mismatch.") {
            Swal.fire({
                icon: "error",
                title: "You were in active.",
                text: "You will be logged out in 3 seconds. Or close this to log out immediately.",
                timer: 3000
            }).then(res => {
                window.location.href = "/home";
            })
        }
        // setTimeout(function() {
        //     localStorage.removeItem("payroll_spa_auth");
        //     window.location.href = "/login";
        // }, 3000);
    }
};

export const toast = (status = "success", message) => {
    // Vue.$toast.open({
    //     message: message,
    //     type: status,
    //     dismissible: true,
    //     duration: 3000,
    //     position: "top-right"
    // });

    toastr[status](message)
};

export const loader = (title = "Loading.") => {
    Swal.fire({
        title: title,
        html: `
            <center>
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </center>
`,
        allowOutsideClick: false,
        showCancelButton: false,
        showConfirmButton: false,
        allowEscapeKey: false,
    });
};


export const fieldHider = (fields, toHide) => {
    let toReturn = {};
    let toHideKeys = Object.keys(toHide);
    Object.keys(fields).map(fieldKey => {
        if (toHideKeys.includes(fieldKey)) {
            toReturn[fieldKey] = { ...fields[fieldKey], ...toHide[fieldKey] };
        } else {
            toReturn[fieldKey] = { ...fields[fieldKey], hidden: false };
        }
    });
    return toReturn;
};

export const routeDataGetter = path => {
    let route = routes.routes.filter(route => {
        let routePath = route.path;
        if (route.path.includes(":"))
            routePath = route.path.substring(0, route.path.indexOf(":"));
        if (path == routePath) {
            return true;
        } else if (path != "/") {
            if (routePath != "/") return path.includes(routePath);
        }
    })[0];
    return !isEmpty(route) ? route : routes.routes[0];
};

//to be edited based on the field type
export const formSetter = (var_values, fields, values, that, dont_set = []) => {
    $(window).scrollTop(0);

    Object.keys(var_values).map(var_key => {
        if (!dont_set.includes(var_key)) {
            if (values[var_key] == undefined) {
                return null;
            }
            if (fields[var_key] && fields[var_key].type) {
                if (fields[var_key].type == "select2Async" || fields[var_key].type == "select2Sync") {
                    let name = var_key.replace("_id", "_name");
                    that[var_key] = { id: values[var_key], text: values[name] };
                } else if (fields[var_key].type == "file") { } else that[var_key] = values[var_key];
            } else {
                that[var_key] = values[var_key];
            }
        }
    });
};

export const formClearer = (var_values, that, dont_clear = []) => {
    Object.keys(var_values).map(var_key => {
        if (dont_clear.includes(var_key)) { } else that[var_key] = var_values[var_key];
    });
    that.successes = {};
    that.errors = {};
};

export const dataSetter = (var_values, that) => {
    let data = {};
    Object.keys(var_values).map(var_key => {
        data[var_key] = that[var_key];
    });
    return data;
};

export const variableNameGetter = page_variables => {
    return page_variables.v_name_plural ?
        page_variables.v_name_plural :
        page_variables.variable_name + "s";
};

export const ifEmptyThen = (value, text) => {
    if (isEmpty(value)) {
        return text;
    } else {
        return value;
    }
};

export const display = (file, useFileName = false) => {
    let fileType = file.type.split("/");
    let temp = "/images/WORD.png";

    if (fileType[0] == "image") {
        if (useFileName) {
            temp = file.name;
        } else temp = URL.createObjectURL(file);
    } else {
        switch (file.type) {
            case "application/vnd.ms-excel":
            case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
            case "application/vnd.openxmlformats-officedocument.spreadsheetml.template":
            case "application/vnd.ms-excel.sheet.macroenabled.12":
                temp = "/images/EXCEL.png";
                break;
            case "application/msword":
            case "application/vnd.ms-word.document.macroenabled.12":
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                temp = "/images/WORD.png";
                break;
            case "application/vnd.ms-powerpoint":
            case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
            case "application/vnd.ms-powerpoint.presentation.macroenabled.12":
                temp = "/images/POWERPOINT.png";
                break;
            case "application/pdf":
                temp = "/images/PDF.png";
                break;
            case "application/x-mspublisher":
            case "application/vnd.ms-publisher":
                temp = "/images/PUBLISHER.png";
                break;
            default:
                temp = "/images/FILE.png";
        }
    }

    return temp;
};