<template>
    <div class="custom-pagination mt-1 flex flex-wrap items-end">
        <div class="rounded rounded-r-none bg-gray-200" style="padding: 6.5px">
            <label class="input-group-text" for="inputGroupSelect01"
                ><template v-if="mainVariable.rowsPerPage != -1">
                    Showing
                    {{
                        mainVariable.count > 0
                            ? mainVariable.page * mainVariable.rowsPerPage + 1
                            : 0
                    }}
                    -
                    {{
                        mainVariable.rowsPerPage * (mainVariable.page + 1) >
                        mainVariable.count
                            ? mainVariable.count
                            : mainVariable.rowsPerPage * (mainVariable.page + 1)
                    }}
                    /
                </template>
                <template v-else> All = </template>
                {{ mainVariable.count }}</label
            >
            <label class="input-group-text" for="inputGroupSelect01"
                >Rows Per Page</label
            >
        </div>
        <select
            name="rowsPerPage"
            id="rowsPerPage"
            class="plain-form-control custom-select height-37px bg-gray-200"
            style="width: auto !important; border-radius: 0 !important"
            @change="onRowsPerPageChange"
            :value="mainVariable.rowsPerPage"
        >
            <template v-if="rowsPerPageOptions != undefined">
                <option
                    v-for="rowsPerPageOption in rowsPerPageOptions"
                    :key="rowsPerPageOption"
                    :value="rowsPerPageOption"
                >
                    {{ rowsPerPageOption == -1 ? "All" : rowsPerPageOption }}
                </option>
            </template>
            <template v-else>
                <option
                    v-for="rowsPerPageOption in rowsPerPageOptionsLocal"
                    :key="rowsPerPageOption"
                    :value="rowsPerPageOption"
                >
                    {{ rowsPerPageOption }}
                </option>
            </template>
        </select>
        <button
            class="btn-own btn-light filter-button m-0 rounded-none"
            @click="(event) => onPageChange(event, 'first')"
            type="button"
            :disabled="mainVariable.page == 0"
        >
            First
        </button>
        <button
            class="btn-own btn-light filter-button m-0 rounded-none"
            type="button"
            @click="(event) => onPageChange(event, 'prev')"
            :disabled="mainVariable.page == 0"
        >
            Prev
        </button>
        <select
            name="page"
            id="page"
            @change="(event) => onPageChange(event, 'select')"
            v-model="mainVariable.page"
            class="plain-form-control custom-select height-37px bg-gray-200"
            style="width: auto !important; border-radius: 0 !important"
        >
            <option
                v-for="pageOption in pageOptions"
                :key="pageOption.id"
                :value="pageOption.id"
            >
                {{ pageOption.name }}
            </option>
        </select>
        <button
            class="btn-own btn-light filter-button m-0 rounded-none"
            type="button"
            @click="(event) => onPageChange(event, 'next')"
            :disabled="mainVariable.page == pages - 1"
        >
            Next
        </button>
        <button
            class="btn-own btn-light filter-button m-0 rounded-l-none"
            type="button"
            @click="(event) => onPageChange(event, 'last')"
            :disabled="mainVariable.page == pages - 1"
        >
            Last
        </button>
    </div>
</template>

<script>
import { isEmpty } from "../functions";
export default {
    data() {
        return { disabledFirstNext: true, disabledPrevLast: false };
    },
    props: ["rowsPerPageOptions", "mainVariable", "getter", "setter"],
    computed: {
        rowsPerPageOptionsLocal() {
            const { mainVariable } = this;
            const { count } = mainVariable;
            if (this.rowsPerPageOptions) {
                return this.rowsPerPageOptions;
            } else {
                let temp = 5;
                let toReturn = [5];
                let start = [5, 15];
                let i = 0;
                while (temp < count) {
                    if (i < 2) {
                        temp += start[i];
                        toReturn.push(temp);
                        i++;
                    } else {
                        temp += temp;
                        if (temp > count) {
                            temp = count;
                        }
                        toReturn.push(temp);
                    }
                }
                return toReturn;
            }
        },
        pageOptions() {
            const { mainVariable } = this;
            let pages = Math.ceil(
                mainVariable.count / mainVariable.rowsPerPage
            );
            let pageOptions = [];
            for (let i = 0; i < pages; i++) {
                pageOptions.push({ id: i, name: i + 1 });
            }
            return pageOptions;
        },
        pages() {
            const { mainVariable } = this;
            return Math.ceil(mainVariable.count / mainVariable.rowsPerPage);
        },
    },
    methods: {
        onRowsPerPageChange(event) {
            const { value } = event.target;
            const { mainVariable, getter, setter } = this;
            let localValue = value;
            setter({ rowsPerPage: localValue, page: 0 });
            // this.$router.push({
            //     query: { ...this.$route.query, page: 0 + 1, rowsPerPage: localValue }
            // });
            getter({
                page: 0,
                rowsPerPage: localValue,
            });
        },
        onPageChange(event, type) {
            const { mainVariable, getter, setter } = this;
            const { value } = event.target;
            let count = mainVariable.count;

            let state = { ["page"]: 0 },
                pages = Math.ceil(count / mainVariable["rowsPerPage"]);

            switch (type) {
                case "first":
                    state["page"] = 0;
                    break;
                case "prev":
                    if (parseInt(mainVariable["page"]) - 1 >= 0)
                        state["page"] = parseInt(mainVariable["page"]) - 1;
                    break;
                case "select":
                    state["page"] = value;
                    break;
                case "next":
                    if (parseInt(mainVariable["page"]) + 1 < pages)
                        state["page"] = parseInt(mainVariable["page"]) + 1;
                    break;
                case "last":
                    state["page"] = pages - 1;
                    break;
            }
            if (state["page"] == 0) {
                this.disabledFirstNext = true;
            } else {
                this.disabledFirstNext = false;
            }
            if (state["page"] == pages - 1) {
                this.disabledPrevLast = true;
            } else {
                this.disabledPrevLast = false;
            }

            // this.$router.push({
            //     query: { ...this.$route.query, page: state.page + 1 }
            // });

            setter({ page: state.page });
            getter({
                page: state.page,
            });
        },
    },
    mounted() {},
};
</script>

<style></style>
