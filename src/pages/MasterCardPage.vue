<template>
    <div>
        <Header />
        <b-row id="main">
            <GoBackTopBar />
            <MasterCardFull />
            <MasterReview />
        </b-row>
    </div>
</template>

<script>
import MasterCardFull from "../components/MasterCardFull.vue";
import Header from "../components/Header.vue";
import GoBackTopBar from "../components/GoBackTopBar.vue";
import MasterReview from "../components/MasterReview";

export default {
    components: {
        MasterCardFull,
        Header,
        GoBackTopBar,
        MasterReview,
    },
};
</script>