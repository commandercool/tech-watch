<template>
    <b-col md="9" style="padding: 10px; margin-bottom: 48px">
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
                }
            ],
            masterListFiltered: ""
        };
    },
    components: {
        MasterCard,
    },
    methods: {
        search(filter) {
            this.masterListFiltered = this.masterList.filter(master => master.rating >= filter.rating);
        }
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