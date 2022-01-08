<template>
    <FormAndTable>
        <template v-slot:form>
            <h1>Page not found</h1>
        </template>
    </FormAndTable>
</template>

<script>
export default {
    components: {
        FormAndTable: () => import("../layouts/FormAndTable")
    }
};
</script>
