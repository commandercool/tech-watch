<template>
    <b-row class="d-sm-block d-md-none sticky-top">
        <b-col sm id="mobile-back-bar" @click="$router.go(-1)">
            <p class="h2 mb-2">
                <b-icon-caret-left-fill variant="primary"></b-icon-caret-left-fill>
            </p>
        </b-col>
    </b-row>
</template>

<style scoped>
#mobile-back-bar {
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 4px 6px -4px;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>