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
                        <b-form-group label="Рейтинг выше или равен:">
                            <b-form-rating
                                style="padding: 0"
                                value="3"
                                variant="warning"
                                no-border="true"
                            ></b-form-rating>
                        </b-form-group>
                    </b-form>
                </b-col>
            </b-row>
        </div>
        <b-dropdown variant="outline-info">
            <template slot="button-content">
                <b-icon-sort-down-alt></b-icon-sort-down-alt>Сортировать
            </template>
            <b-dropdown-item>По расстоянию</b-dropdown-item>
            <b-dropdown-item>По рейтингу</b-dropdown-item>
            <b-dropdown-item>По расстоянию и рейтингу</b-dropdown-item>
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
                range: "1",
            },
        };
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