<template>
    <b-col sm id="mobile-menu" class="d-sm-block d-md-none sticky-top">
        <b-button pill variant="outline-info">
            <b-icon-map></b-icon-map>
            На карте
        </b-button>
        <b-button pill variant="outline-info" style="margin-left: 5px">
            <b-icon-filter-circle></b-icon-filter-circle>
            Фильтры
        </b-button>
        <b-button pill variant="outline-info" style="margin-left: 5px">
            <b-icon-three-dots></b-icon-three-dots>
        </b-button>
    </b-col>
</template>

<script>
export default {};
</script>

<style scoped>
#mobile-menu {
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 4px 6px -4px;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>