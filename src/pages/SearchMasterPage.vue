<template>
    <div>
        <Header />
        <b-row id="main">
            <DesktopNavigation />
            <MobileTopBar />
            <MasterSearchResults />
        </b-row>
        <MobileBottomBar />
        <Footer />
    </div>
</template>

<script>
import MobileTopBar from '../components/MobileTopBar.vue';
import MasterSearchResults from '../components/MasterSearchResults.vue';
import MobileBottomBar from '../components/MobileBottomBar.vue';
import Header from '../components/Header.vue';
import DesktopNavigation from '../components/DesktopNavigation.vue';
import Footer from '../components/Footer.vue'

export default {
    components: {
        MobileTopBar,
        MasterSearchResults,
        MobileBottomBar,
        Header,
        DesktopNavigation,
        Footer
    },
};
</script>