<template>
    <b-form id="filter-form">
        <b-form-group label="Расстояние:">
            <b-form-input v-model="filter.range" type="range" min="1" max="15"></b-form-input>
            <div class="mt-2">{{ filter.range }} км</div>
        </b-form-group>
        <b-form-group label="Рейтинг не ниже:">
            <b-form-rating
                style="padding: 0"
                v-model="filter.rating"
                variant="warning"
                no-border="true"
            ></b-form-rating>
        </b-form-group>
        <b-button variant="info" @click="emitFilterUpdated">Применить</b-button>
    </b-form>
</template>

<script>
export default {
    data: function () {
        return {
            filter: {
                range: "5",
                rating: "3",
            },
        };
    },
    methods: {
        emitFilterUpdated() {
            console.log(this.filter.rating);
            this.$vueEventBus.$emit("filter-updated", this.filter);
            this.filtersDisplayed = false;
        },
    },
};
</script>