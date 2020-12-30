<template>
    <div>
        <Header />
        <b-row id="main">
            <b-col md="3" class="d-md-block d-none navigation">
            </b-col>
            <MobileTopBar />
            <MasterSearchResults />
        </b-row>
        <Footer />
    </div>
</template>

<script>
import MobileTopBar from '../components/MobileTopBar.vue';
import MasterSearchResults from '../components/MasterSearchResults.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue'

export default {
    components: {
        MobileTopBar,
        MasterSearchResults,
        Header,
        Footer
    },
};
</script>