
export default {
   
    date_acquired: {
        name: "date_acquired",
        labelText: "Date Acquired",
    },
    date_expired: {
        name: "date_expired",
        labelText: "Date Expired",
    },

}

export const displayProfiles = (toConcat = [], that, result, count) => {
    const { page_variables } = that;

    toConcat.push({
        labelText: count,
        className: "bg-gray-200"
    });
    let actionsArray = [{
        type: "button",

        className: "btn btn-success mr-2 mb-2",
        icon: "fa fa-edit",
        onClick: function (event) {
            that[page_variables.setter]({
                active_profile: result
            })
            if (
                that.$route.path !=
                `${page_variables.parent_url}${page_variables.contrib_url}${result.pi_id}`
            )
                that.$router.push(
                    `${page_variables.parent_url}${page_variables.contrib_url}${result.pi_id}`
                );
        },
        labelText: "Contributions"
    },
    {
        type: "button",

        className: "btn btn-success mr-2 mb-2",
        icon: "fa fa-edit",
        onClick: function (event) {
            that[page_variables.setter]({
                active_profile: result
            })
            if (
                that.$route.path !=
                `${page_variables.parent_url}${page_variables.deduct_earning_url}${result.pi_id}`
            )
                that.$router.push(
                    `${page_variables.parent_url}${page_variables.deduct_earning_url}${result.pi_id}`
                );
        },
        labelText: "Deductions | Earnings"
    },
    {
        type: "button",

        className: "btn btn-success mr-2 mb-2",
        icon: "fa fa-edit",
        onClick: function (event) {
            that[page_variables.setter]({
                active_profile: result
            })
            if (
                that.$route.path !=
                `${page_variables.parent_url}${page_variables.salary_setting_url}${result.pi_id}`
            )
                that.$router.push(
                    `${page_variables.parent_url}${page_variables.salary_setting_url}${result.pi_id}`
                );
        },
        labelText: "Salary"
    },
    {
        type: "button",

        className: "btn btn-success mr-2 mb-2",
        icon: "fa fa-edit",
        onClick: function (event) {
            that[page_variables.setter]({
                active_profile: result
            })
            if (
                that.$route.path !=
                `${page_variables.parent_url}${page_variables.loan_url}${result.pi_id}`
            )
                that.$router.push(
                    `${page_variables.parent_url}${page_variables.loan_url}${result.pi_id}`
                );
        },
        labelText: "Loans"
    }
    ];
    toConcat.push(actionsArray); // action
    toConcat.push(`${result.full_name}`);

    return toConcat;
}