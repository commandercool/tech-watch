<template>
    <div>
        <Header />
        <GoBackTopBar />
        <MasterCardFull />
        <!-- <MasterReview /> -->
    </div>
</template>

<script>
import MasterCardFull from "../components/MasterCardFull.vue";
import Header from "../components/Header.vue";
import GoBackTopBar from "../components/GoBackTopBar.vue";
// import MasterReview from "../components/MasterReview";

export default {
    components: {
        MasterCardFull,
        Header,
        GoBackTopBar,
        // MasterReview,
    },
};
</script>