<template>
    <div>
        <TopBarMobile />
        <b-row id="main">
            <GoBackTopBar />
            <MasterCardFull />
            <MasterReview />
        </b-row>
    </div>
</template>

<script>
import MasterCardFull from "../components/MasterCardFull.vue";
import TopBarMobile from "../components/TopBarMobile.vue";
import GoBackTopBar from "../components/GoBackTopBar.vue";
import MasterReview from "../components/MasterReview";

export default {
    components: {
        MasterCardFull,
        TopBarMobile,
        GoBackTopBar,
        MasterReview,
    },
};
</script>