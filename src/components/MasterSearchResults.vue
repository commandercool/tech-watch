<template>
    <b-col md="6" style="margin-bottom: 48px; margin-top: 10px">
        <b-row class="d-md-block d-none">
            <b-col>
                <b-dropdown variant="outline-info">
                    <template slot="button-content">
                        <b-icon-sort-down-alt></b-icon-sort-down-alt>Сортировать
                    </template>
                    <b-dropdown-item >По популярности</b-dropdown-item>
                    <b-dropdown-item >По расстоянию</b-dropdown-item>
                    <b-dropdown-item >По рейтингу</b-dropdown-item>
                    <b-dropdown-item >По расстоянию и рейтингу</b-dropdown-item>
                </b-dropdown>
                <b-button variant="outline-info" style="margin-left: 4px; ">
                    <b-icon-geo-alt></b-icon-geo-alt>
                    Показать на карте
                </b-button>
            </b-col>
        </b-row>
        <MasterCard :master="master" v-for="master in masterListFiltered" :key="master.name" />
    </b-col>
</template>

<script>
import MasterCard from "./MasterCard.vue";

export default {
    data: function () {
        return {
            filtersHidden: true,
            masterList: [
                {
                    name: "Чувак Чуваков",
                    rating: "3.5",
                    description:
                        "Переустанавливаю операционные системы, имею большой опыт с Windows и Linux.",
                },
                {
                    name: "Мастер Фломастер",
                    rating: "5",
                    description:
                        "Переустанавливаю операционные системы, имею большой опыт с Windows и Linux.",
                },
                {
                    name: "Форест Гамп",
                    rating: "2",
                    description:
                        "Переустанавливаю операционные системы, имею большой опыт с Windows и Linux.",
                },
                {
                    name: "Том Круз",
                    rating: "4.5",
                    description:
                        "Переустанавливаю операционные системы, имею большой опыт с Windows и Linux.",
                },
            ],
            masterListFiltered: "",
        };
    },
    components: {
        MasterCard,
    },
    methods: {
        search(filter) {
            this.masterListFiltered = this.masterList.filter(
                (master) => master.rating >= filter.rating
            );
        },
    },
    mounted() {
        this.masterListFiltered = this.masterList;
        this.$vueEventBus.$on("filter-updated", this.search);
    },
    beforeDestroy() {
        this.$vueEventBus.$off("filter-updated");
    },
};
</script>

<style scoped>
:root {
    color: var(--secondary);
}
</style>