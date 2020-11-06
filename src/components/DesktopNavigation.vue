<template>
    <b-col md="3" class="d-md-block d-none navigation">
        <b-row>
            <b-col lg>
                <SearchFilterForm />
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
import SearchFilterForm from './SearchFilterForm.vue'

export default {
    components: {
        SearchFilterForm
    }
}
</script>

<style scoped>
.navigation {
    margin-top: 10px;
    border: 1px solid;
    border-color: lightgrey;
    border-radius: 6px 6px 6px 6px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 35px;
    padding-right: 35px;
    margin-left: 10px;
    height: max-content;
    position: sticky;
    top: 0;
    background-color: white;
}
</style>