import Home from "../webCMS/Home";
import General from "../webCMS/General";
import Welcome from "../webCMS/Welcome";
import Vision from "../webCMS/Vision";
import Mission from "../webCMS/Mission";
import About from "../webCMS/About";
import FutureOfferings from "../webCMS/FutureOfferings";
import ContentPartner from "../webCMS/ContentPartner";
import OurTeam from "../webCMS/OurTeam";
import SubscriptionList from "../webCMS/SubscriptionList";
import Footer from "../webCMS/Footer";



import website_name from "./website";
export default [
    {
        users: [2],
        path: "/cms/general",
        title: "General",
        meta: {
            title: "General - " + website_name,
            topBar: "General",
            layout: "sidebar"
        },
        component: General,
        icon: 'las la-angle-double-right text-2xl'
    },
    {
        users: [2],
        path: "/cms/home",
        title: "Home",
        meta: {
            title: "Home - " + website_name,
            topBar: "Home",
            layout: "sidebar"
        },
        component: Home,
        icon: 'las la-angle-double-right text-2xl'
    },
    {
        users: [2],
        path: "/cms/home/study-guide-videos/edit/:id",
        title: "Home",
        meta: {
            title: "Home - " + website_name,
            topBar: "Home",
            layout: "sidebar"
        },
        component: Home,
        icon: 'las la-angle-double-right text-2xl',
        hidden: true
    },
    {
        users: [2],
        path: "/cms/home/inspiration-videos/edit/:id",
        title: "Home",
        meta: {
            title: "Home - " + website_name,
            topBar: "Home",
            layout: "sidebar"
        },
        component: Home,
        icon: 'las la-angle-double-right text-2xl',
        hidden: true
    },
    {
        users: [2],
        path: "/cms/welcome",
        title: "Welcome",
        meta: {
            title: "Welcome - " + website_name,
            topBar: "Welcome",
            layout: "sidebar"
        },
        component: Welcome,
        icon: 'las la-angle-double-right text-2xl'
    },
    {
        users: [2],
        path: "/cms/vision",
        title: "Vision",
        meta: {
            title: "Vision - " + website_name,
            topBar: "Vision",
            layout: "sidebar"
        },
        component: Vision,
        icon: 'las la-angle-double-right text-2xl'
    },
    {
        users: [2],
        path: "/cms/mission",
        title: "Mission",
        meta: {
            title: "Mission - " + website_name,
            topBar: "Mission",
            layout: "sidebar"
        },
        component: Mission,
        icon: 'las la-angle-double-right text-2xl'
    },
    {
        users: [2],
        path: "/cms/about",
        title: "About the program",
        meta: {
            title: "About the program - " + website_name,
            topBar: "About the program",
            layout: "sidebar"
        },
        component: About,
        icon: 'las la-angle-double-right text-2xl'
    },
    {
        users: [2],
        path: "/cms/future-offerings",
        title: "Future offerings",
        meta: {
            title: "Future offerings - " + website_name,
            topBar: "Future offerings",
            layout: "sidebar"
        },
        component: FutureOfferings,
        icon: 'las la-angle-double-right text-2xl'
    },
    {
        users: [2],
        path: "/cms/content-partners",
        title: "Content partners",
        meta: {
            title: "Content partners - " + website_name,
            topBar: "Content partners",
            layout: "sidebar"
        },
        component: ContentPartner,
        icon: 'las la-angle-double-right text-2xl'
    },
    {
        users: [2],
        path: "/cms/content-partners/edit/:id",
        title: "Edit Content partners",
        meta: {
            title: "Edit Content partners - " + website_name,
            topBar: "Edit Content partners",
            layout: "sidebar"
        },
        component: ContentPartner,
        icon: 'las la-angle-double-right text-2xl',
        hidden: true
    },
    {
        users: [2],
        path: "/cms/our-team",
        title: "Our Team",
        meta: {
            title: "Our Team - " + website_name,
            topBar: "Our Team",
            layout: "sidebar"
        },
        component: OurTeam,
        icon: 'las la-angle-double-right text-2xl'
    },
    {
        users: [2],
        path: "/cms/our-team/edit/:id",
        title: "Edit our team",
        meta: {
            title: "Edit our team - " + website_name,
            topBar: "Edit our team",
            layout: "sidebar"
        },
        component: OurTeam,
        icon: 'las la-angle-double-right text-2xl',
        hidden: true
    },
    {
        users: [2],
        path: "/cms/subscription-list",
        title: "Subscription list",
        meta: {
            title: "Subscription list - " + website_name,
            topBar: "Subscription list",
            layout: "sidebar"
        },
        component: SubscriptionList,
        icon: 'las la-angle-double-right text-2xl'
    },
    {
        users: [2],
        path: "/cms/subscription-list/edit/:id",
        title: "Edit subscription list",
        meta: {
            title: "Edit subscription list - " + website_name,
            topBar: "Edit subscription list",
            layout: "sidebar"
        },
        component: SubscriptionList,
        icon: 'las la-angle-double-right text-2xl',
        hidden: true
    },
    {
        users: [2],
        path: "/cms/footer",
        title: "Footer",
        meta: {
            title: "Footer - " + website_name,
            topBar: "Footer",
            layout: "sidebar"
        },
        component: Footer,
        icon: 'las la-angle-double-right text-2xl'
    },

];