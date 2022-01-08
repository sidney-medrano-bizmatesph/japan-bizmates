import NotFound from "./pages/NotFound";
import guest from "./routes/guest";
import website_name from "./routes/website";
let toRedirectTo = "/home";
export default {
    mode: "history",
    routes: [
        {
            path: "*",
            title: "Route not found",
            meta: { title: "Route not found - " + website_name },
            breadCrumbs: [{ title: "Not Found" }],
            component: NotFound
        },
        {
            path: "/",
            redirect: toRedirectTo
        }, ...guest,
    ]
};
