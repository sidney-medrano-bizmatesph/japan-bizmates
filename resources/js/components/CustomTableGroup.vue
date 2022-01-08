<template>
    <div class="bg-white pb-4 px-4 rounded-md w-full">
        <div
            class="flex justify-between w-full pt-6"
            v-if="tableGroupData && !isEmpty(tableGroupData.tableName)"
        >
            <p>{{ tableGroupData.tableName }}</p>
        </div>
        <div v-if="tableGroupData && !isEmpty(tableGroupData.tableName)">
            <slot></slot>
        </div>
        <div class="w-full pt-4" v-else>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { isEmpty } from "../functions";
export default {
    props: ["tableGroupData"],
    methods: {
        isEmpty
    }
};
</script>
