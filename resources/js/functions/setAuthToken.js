import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
const setAuthToken = token => {
    // if (moment(Date.now()).format("MM DD YYYY") == "05 15 2020") {
    //     Swal.fire({
    //         title: "Trial ended"
    //     }).then(res => {
    //         window.location.href = "https://www.google.com.ph/?gws_rd=ssl";
    //     });
    // }
    if (token) {
        // Apply to every request
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
        // Delete auth header
        delete axios.defaults.headers.common["Authorization"];
    }
};

export default setAuthToken;
