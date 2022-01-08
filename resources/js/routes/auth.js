import Login from "../pages/auth/Login";
import website_name from "./website";
export default {
    0: [
        {
            path: "/login",
            title: "Login",
            component: Login,
            // breadCrumbs: [{ title: "Login" }],
            meta: { title: "Login - " + website_name, topBar: "Login", layout: "sidebar" },
            icon: ""
        }
    ],
    1: [
    ]
};
