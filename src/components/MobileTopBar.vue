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
                    </b-form>
                </b-col>
            </b-row>
        </div>
        <b-button pill variant="outline-info">
            <b-icon-map></b-icon-map>На карте
        </b-button>
        <b-button
            pill
            variant="outline-info"
            style="margin-left: 5px"
            @click="filtersDisplayed = true"
        >
            <b-icon-filter-circle></b-icon-filter-circle>Фильтры
        </b-button>
        <b-button pill variant="outline-info" style="margin-left: 5px">
            <b-icon-three-dots></b-icon-three-dots>
        </b-button>
    </b-col>
</template>

<script>
export default {
    data: function () {
        return {
            filtersDisplayed: false,
            filter: {
                range: '1'
            }
        };
    },
};
</script>

<style scoped>
#filter-form {
    color: var(--secondary)
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
}
</style>