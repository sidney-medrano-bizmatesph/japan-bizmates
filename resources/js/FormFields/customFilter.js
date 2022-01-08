export default {
    searchField: {
        name: "searchField",
        type: "select",
        wrapperClass: "mb-2 mr-2 inline-block ",
        placeholder: "Please Select",
        inputClassOverride: "select select-bordered select-primary"
    },
    type: {
        name: "type",
        type: "select",
        wrapperClass: "mb-2 mr-2 inline-block ",
        placeholder: "Please Select",
        menuItems: [
            { text: "Begins with", id: "begins" },
            { text: "Does not begin", id: "not begins" },
            { text: "Contains", id: "contains" },
            {
                text: "Does not contain",
                id: "not contains"
            },
            { text: "Ends with", id: "ends" },
            { text: "Does not end with", id: "not ends" },
            { text: "Equal to", id: "equal" },
            { text: "Not equal to", id: "not equal" }
        ],
        inputClassOverride: "select select-bordered select-primary"
    },
    searchValue: {
        type: "text",
        name: "searchValue",
        placeholder: "Search",
        wrapperClass: "mb-2 mr-2 inline-block",
        inputProps: {
            size: 45
        },
        inputClassOverride: "input input-bordered input-primary"
    }
};
