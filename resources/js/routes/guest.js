import website_name from "./website";

export default [
    {
        path: "/home",
        title: "Home",
        component: () => import("../pages/Home"),
        meta: { title: "Home - " + website_name, topBar: "Home" }
    },
    {
        path: "/home-cms",
        title: "Home",
        component: () => import("../pages/HomeCMS"),
        meta: { title: "Home - " + website_name, topBar: "Home" },
        hidden: true
    },
    {
        title: "Who we are",
        path: ''
    },
    {
        path: "/welcome-message",
        title: "Welcome message",
        component: () => import("../pages/WelcomeMessageCMS"),
        meta: { title: "Welcome message - " + website_name, topBar: "Welcome Message" }
    },
    {
        path: "/welcome-message-cms",
        title: "Welcome message",
        component: () => import("../pages/WelcomeMessageCMS"),
        meta: { title: "Welcome message - " + website_name, topBar: "Welcome Message" },
        hidden: true
    },
    {
        path: "/vision",
        title: "Vision",
        component: () => import("../pages/VisionCMS"),
        meta: { title: "Vision - " + website_name, topBar: "Vision" }
    },
    {
        path: "/vision-cms",
        title: "Vision",
        component: () => import("../pages/VisionCMS"),
        meta: { title: "Vision - " + website_name, topBar: "Vision" }, hidden: true
    },
    {
        path: "/mission",
        title: "Mission",
        component: () => import("../pages/MissionCMS"),
        meta: { title: "Mission - " + website_name, topBar: "Mission" }
    },
    {
        path: "/mission-cms",
        title: "Mission",
        component: () => import("../pages/MissionCMS"),
        meta: { title: "Mission - " + website_name, topBar: "Mission" }, hidden: true
    },
    // {
    //     path: "/home#study-guide",
    //     title: "Study guide",
    //     component: () => import("../pages/Home"),
    //     meta: { title: "Home - " + website_name, topBar: "Home" }
    // },
    {
        path: "/content-partners",
        title: "Content partners",
        component: () => import("../pages/ContentPartnersCMS"),
        meta: { title: "Content partners - " + website_name, topBar: "Content partners" }
    },
    {
        path: "/content-partners-cms",
        title: "Content partners",
        component: () => import("../pages/ContentPartnersCMS"),
        meta: { title: "Content partners - " + website_name, topBar: "Content partners" }, hidden: true
    },
    {
        path: "/content-editors",
        title: "Content editors",
        component: () => import("../pages/ContentEditors"),
        meta: { title: "Content editors - " + website_name, topBar: "Content editors" }
    },
    {
        path: "/leadership-profile",
        title: "Our team",
        component: () => import("../pages/LeadershipProfileCMS"),
        meta: { title: "Our team - " + website_name, topBar: "Our team" }
    },
    {
        path: "/leadership-profile-cms",
        title: "Our team",
        component: () => import("../pages/LeadershipProfileCMS"),
        meta: { title: "Our team - " + website_name, topBar: "Our team" }, hidden: true
    },
    {
        title: "What we offer",
        path: ''
    },
    {
        path: "/about-the-program",
        title: "About the program",
        component: () => import("../pages/AboutTheProgramCMS"),
        meta: { title: "About the program - " + website_name, topBar: "About the program" }
    },
    {
        path: "/about-the-program-cms",
        title: "About the program",
        component: () => import("../pages/AboutTheProgramCMS"),
        meta: { title: "About the program - " + website_name, topBar: "About the program" }, hidden: true
    },
    {
        path: "/payments",
        title: "Payments",
        component: () => import("../pages/PaymentsCMS"),
        meta: { title: "Payments - " + website_name, topBar: "Payments" }
    },
    {
        path: "/payments-cms",
        title: "Payments",
        component: () => import("../pages/PaymentsCMS"),
        meta: { title: "Payments - " + website_name, topBar: "Payments" }, hidden: true
    },
    {
        path: "/future-offerings",
        title: "Future offerings",
        component: () => import("../pages/FutureOfferingsCMS"),
        meta: { title: "Future offerings - " + website_name, topBar: "Future offerings" }
    },
    {
        path: "/future-offerings-cms",
        title: "Future offerings",
        component: () => import("../pages/FutureOfferingsCMS"),
        meta: { title: "Future offerings - " + website_name, topBar: "Future offerings" }, hidden: true
    },
    {
        path: "/contact-us",
        title: "Contact us",
        component: () => import("../pages/ContactUs"),
        meta: { title: "Contact us - " + website_name, topBar: "Contact us" }
    },
    // {
    //     path: "/about",
    //     title: "Test",
    //     component: Test,
    //     meta: { title: "Test - " + website_name, topBar: "Test" },
    //     icon: "fas fa-stream"
    // },
];
