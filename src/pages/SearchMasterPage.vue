<template>
    <div>
        <Header />
        <b-row id="main">
            <b-col md="3" class="d-md-block d-none navigation">
            </b-col>
            {{lat}}
                {{long}}
            <MobileTopBar />
            <MasterSearchResults />
        </b-row>
        <Footer />
    </div>
</template>

<script>
import MobileTopBar from "../components/MobileTopBar.vue";
import MasterSearchResults from "../components/MasterSearchResults.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
    data: function() {
        return {
            lat: null,
            long: null
        }
    },
    components: {
        MobileTopBar,
        MasterSearchResults,
        Header,
        Footer,
    },
    mounted() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.lat = position.coords.latitude;
                this.long = position.coords.longitude;
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
            },
            (error) => {
                console.log(error.message);
            }
        );
    },
};
</script>