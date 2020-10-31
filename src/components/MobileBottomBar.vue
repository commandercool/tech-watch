<template>
    <b-row class="mobile-bottom d-sm-block d-md-none">
        <b-col style="padding: 0">
            <b-button variant="primary" class="mobile-bottom-button">
                <b-icon-search></b-icon-search>
            </b-button>
        </b-col>
        <b-col style="padding: 0">
            <b-button variant="primary" class="mobile-bottom-button">
                <b-icon-file-earmark-text></b-icon-file-earmark-text>
            </b-button>
        </b-col>
        <b-col style="padding: 0">
            <b-button variant="primary" class="mobile-bottom-button">
                <b-icon-envelope></b-icon-envelope>
            </b-button>
        </b-col>
        <b-col style="padding: 0">
            <b-button variant="primary" class="mobile-bottom-button">
                <b-icon-house></b-icon-house>
            </b-button>
        </b-col>
    </b-row>
</template>]

<style scoped>
.mobile-bottom {
    position: fixed;
    bottom: 0;
    background-color: white;
    width: 100%;
    height: 48px;
}
.mobile-bottom-button {
    outline: none;
    border-radius: 0;
    width: 100%;
    height: 100%;
}
</style>