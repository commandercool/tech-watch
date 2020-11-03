<template>
    <b-col sm id="mobile-menu" class="d-sm-block d-md-none sticky-top">
        <div v-if="filtersDisplayed" id="filters">
            <b-row>
                <b-col lg style="padding: 10px; padding-right: 32px;">
                    <h2 style="cursor: pointer" @click="filtersDisplayed = false">
                        <b-icon-x style="float: right"></b-icon-x>
                    </h2>
                </b-col>
                <b-col lg>
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
                </b-col>
            </b-row>
        </div>
        <b-dropdown variant="outline-info">
            <template slot="button-content">
                <b-icon-sort-down-alt></b-icon-sort-down-alt>Сортировать
            </template>
            <b-dropdown-item @click="sortPop()" :active="sort.pop">По популярности</b-dropdown-item>
            <b-dropdown-item @click="sortDistance()" :active="sort.distance">По расстоянию</b-dropdown-item>
            <b-dropdown-item @click="sortRating()" :active="sort.rating">По рейтингу</b-dropdown-item>
            <b-dropdown-item @click="sortDisrat()" :active="sort.disrat">По расстоянию и рейтингу</b-dropdown-item>
        </b-dropdown>
        <b-button variant="outline-info" style="margin-left: 4px" @click="filtersDisplayed = true">
            <b-icon-filter-circle></b-icon-filter-circle>
        </b-button>
        <b-button variant="outline-info" style="margin-left: 4px">
            <b-icon-geo-alt></b-icon-geo-alt>
        </b-button>
    </b-col>
</template>

<script>
export default {
    data: function () {
        return {
            filtersDisplayed: false,
            filter: {
                range: "5",
                rating: "3",
            },
            sort: {
                pop: true,
                distance: false,
                rating: false,
                disrat: false
            }
        };
    },
    methods: {
        emitFilterUpdated() {
            console.log(this.filter.rating);
            this.$vueEventBus.$emit("filter-updated", this.filter);
            this.filtersDisplayed = false;
        },
        sortPop() {
            this.sort.pop = true;
            this.sort.distance = false;
            this.sort.rating = false;
            this.sort.disrat = false;
            this.$vueEventBus.$emit("sort-pop", this.filter);
        },
        sortDistance() {
            this.sort.pop = false;
            this.sort.distance = true;
            this.sort.rating = false;
            this.sort.disrat = false;
            this.$vueEventBus.$emit("sort-distance", this.filter);
        },
        sortRating() {
            this.sort.pop = false;
            this.sort.distance = false;
            this.sort.rating = true;
            this.sort.disrat = false;
            this.$vueEventBus.$emit("sort-disrat", this.filter);
        },
        sortDisrat() {
            this.sort.pop = false;
            this.sort.distance = false;
            this.sort.rating = false;
            this.sort.disrat = true;
        }
    },
};
</script>

<style scoped>
#filter-form {
    color: var(--secondary);
}
#mobile-menu {
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 4px 6px -4px;
    padding-top: 10px;
    padding-bottom: 10px;
}
#filters {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 16px;
    z-index: 9999;
}
</style>