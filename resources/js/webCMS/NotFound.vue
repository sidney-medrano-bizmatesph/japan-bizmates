<template>
    <FormAndTable>
        <template v-slot:form>
            <div class="text-center pt-20">
                <h1 class="text-2xl">Page not found</h1>
            </div>
        </template>
    </FormAndTable>
</template>

<script>
export default {
    components: {
        FormAndTable: () => import("../layouts/FormAndTable"),
    },
};
</script>
