<template>
    <div class="section" style="padding-top: 64px">
        <div class="self-center justify-self-center">
            <h1 class="pt-4 m-0">Page not found</h1>
            <router-link to="/">Return to home</router-link>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        FormAndTable: () => import("../layouts/FormAndTable"),
    },
};
</script>
