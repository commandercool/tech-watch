<template>
    <b-col md="9" style="padding: 10px; margin-bottom: 48px">
        <MasterCard :master="master" v-for="master in masterList" :key="master.name" />
    </b-col>
</template>

<script>
import MasterCard from "./MasterCard.vue";

export default {
    data: function () {
        return {
            masterList: [
                {
                    name: "Чувак Чуваков",
                    rating: "3.5",
                    description:
                        "Переустанавливаю операционные системы, имею большой опыт с Windows и Linux.",
                },
                {
                    name: "Чувак Чуваков",
                    rating: "3.5",
                    description:
                        "Переустанавливаю операционные системы, имею большой опыт с Windows и Linux.",
                },
                {
                    name: "Чувак Чуваков",
                    rating: "3.5",
                    description:
                        "Переустанавливаю операционные системы, имею большой опыт с Windows и Linux.",
                },
                {
                    name: "Чувак Чуваков",
                    rating: "3.5",
                    description:
                        "Переустанавливаю операционные системы, имею большой опыт с Windows и Linux.",
                },
                {
                    name: "Чувак Чуваков",
                    rating: "3.5",
                    description:
                        "Переустанавливаю операционные системы, имею большой опыт с Windows и Linux.",
                },
                {
                    name: "Чувак Чуваков",
                    rating: "3.5",
                    description:
                        "Переустанавливаю операционные системы, имею большой опыт с Windows и Linux.",
                },
            ],
        };
    },
    components: {
        MasterCard,
    },
};
</script>

<style scoped>
:root {
    color: var(--secondary);
}
</style>