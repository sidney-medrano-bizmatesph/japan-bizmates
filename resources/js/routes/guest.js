import website_name from "./website";

export default [
    {
        path: "/home",
        title: "Home",
        component: () => import("../pages/Home"),
        meta: { title: "Home - " + website_name, topBar: "Home" }
    },
    {
        path: "/places/:place",
        title: "Places",
        component: () => import("../pages/Places"),
        meta: { title: "Places - " + website_name, topBar: "Places" },
        hidden: true
    },
    {
        path: "/places/tokyo",
        title: "Tokyo",
        component: () => import("../pages/Places"),
        meta: { title: "Tokyo - " + website_name, topBar: "Tokyo" },
    },
    {
        path: "/places/yokohama",
        title: "Yokomaha",
        component: () => import("../pages/Places"),
        meta: { title: "Yokomaha - " + website_name, topBar: "Yokohama" },
    },
    {
        path: "/places/kyoto",
        title: "Kyoto",
        component: () => import("../pages/Places"),
        meta: { title: "Kyoto - " + website_name, topBar: "Kyoto" },
    },
    {
        path: "/places/osaka",
        title: "Osaka",
        component: () => import("../pages/Places"),
        meta: { title: "Osaka - " + website_name, topBar: "Osaka" },
    },
    {
        path: "/places/sapporo",
        title: "Sapporo",
        component: () => import("../pages/Places"),
        meta: { title: "Sapporo - " + website_name, topBar: "Sapporo" },
    },
    {
        path: "/places/nagoya",
        title: "Nagoya",
        component: () => import("../pages/Places"),
        meta: { title: "Nagoya - " + website_name, topBar: "Nagoya" },
    },

    {
        path: "/places/:place/:fsq_id",
        title: "Place",
        component: () => import("../pages/Place"),
        meta: { title: "Place details - " + website_name, topBar: "Place details" },
        hidden: true
    }
];
