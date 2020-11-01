<template>
    <div>
        <Header />
        <b-row>
            <b-col lg class="landing main-home">
                <div class="slogan">Компьютерный мастер по соседству</div>
                <div>
                    <router-link to="/search">
                        <b-button variant="danger" class="search-button">Найти!</b-button>
                    </router-link>
                </div>
            </b-col>
        </b-row>
        <b-row style="text-align:center; margin-top: 4rem">
            <b-col sm>
                <h2 style="font-weight: bolder; text-align: center">Как это работает</h2>
            </b-col>
            <b-col sm style="margin-top: 2rem">
                <h1>
                    <b-icon-search class="rounded-circle bg-danger p-2" variant="light"></b-icon-search>
                </h1>
                <h3>Находи мастера рядом с домом</h3>
            </b-col>
            <b-col sm style="margin-top: 2rem">
                <h1>
                    <b-icon-telephone class="rounded-circle bg-danger p-2" variant="light"></b-icon-telephone>
                </h1>
                <h3>Договаривайся на удобное время</h3>
            </b-col>
            <b-col sm style="margin-top: 2rem">
                <h1>
                    <b-icon-laptop class="rounded-circle bg-danger p-2" variant="light"></b-icon-laptop>
                </h1>
                <h3>Чини технику!</h3>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
    components: {
        Header,
    },
};
</script>

<style scoped>
.search-button {
    opacity: 0.7;
    font-size: 1.4rem;
}
.main-home {
    text-align: center;
    height: 18rem;
    font-size: 2.7rem;
    font-weight: 700;
    padding-top: 4rem;
}
.slogan {
    color: white;
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: bolder;
}
.landing {
    position: relative;
    background-image: url("~@/assets/laptop-dimmed.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.center {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
h3 {
    color: var(--secondary);
}
</style>