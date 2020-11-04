<template>
    <b-col md="3" class="d-md-block d-none navigation">
        <b-row class="sticky-top">
            <b-col lg>
                <b-form id="filter-form">
                    <b-form-group label="Расстояние:">
                        <b-form-input value="4" type="range" min="1" max="15"></b-form-input>
                        <div class="mt-2">км</div>
                    </b-form-group>
                    <b-form-group label="Рейтинг не ниже:">
                        <b-form-rating style="padding: 0" variant="warning" no-border="true"></b-form-rating>
                    </b-form-group>
                    <b-button variant="info">Применить</b-button>
                </b-form>
            </b-col>
        </b-row>
    </b-col>
</template>

<style scoped>
.navigation {
    margin-top: 10px;
    border: 1px solid;
    border-color: lightgrey;
    border-radius: 6px 6px 6px 6px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding: 10px;
    margin-left: 10px;
}
</style>