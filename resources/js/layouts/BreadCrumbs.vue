<template>
    <nav aria-label="breadcrumb" v-if="routeData.breadCrumbs != undefined">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
            </li>
            <template
                v-if="routeData.breadCrumbs && routeData.breadCrumbs != null"
            >
                <li
                    v-for="breadCrumb in routeData.breadCrumbs"
                    class="breadcrumb-item"
                    :key="breadCrumb.title"
                >
                    <a v-if="breadCrumb.path == undefined">{{
                        breadCrumb.title
                    }}</a>
                    <router-link
                        v-else
                        :to="{
                            path: breadCrumb.path,
                            params: breadCrumb.keepParams ? $route.params : {},
                            query: breadCrumb.keepQuery ? $route.query : {}
                        }"
                        >{{ breadCrumb.title }}</router-link
                    >
                </li>
            </template>
        </ol>
    </nav>
</template>

<script>
export default {
    computed: {
        routeData: function() {
            return this.$route.meta;
        }
    }
};
</script>

<style></style>
