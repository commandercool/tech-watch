<template>
    <b-row class="d-sm-block d-md-none sticky-top">
        <b-col sm id="mobile-back-bar" @click="$router.go(-1)">
            <p>
                <b-icon-caret-left-fill variant="info"></b-icon-caret-left-fill>
                К списку мастеров
            </p>
        </b-col>
    </b-row>
</template>

<style scoped>
#mobile-back-bar {
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 4px 6px -4px;
    cursor: pointer;
    padding-top: 8px;
    padding-bottom: 8px;
}
p {
    color: var(--info);
    font-size: 1.2rem;
    margin: 0;
}
</style>