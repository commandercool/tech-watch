<template>
    <div>
        <Header />
        <b-row>
            <b-col lg class="landing main-home" style="height: 20rem">
                <div class="slogan">Компьютерный мастер по соседству</div>
                <div style="margin-top: 2rem">
                    <p class="slogan-description">
                        Проблемы с комьютером, телефоном или планшетом?
                    </p>
                    <p class="slogan-description">
                        Найдите мастера по рядом с вами и пригласите его, чтобы
                        он починил вашу технику!
                    </p>
                </div>
                <div>
                    <router-link to="/search">
                        <b-button variant="danger" class="search-button">Найти!</b-button>
                    </router-link>
                </div>
            </b-col>
        </b-row>
        <b-row style="text-align:center; margin-top: 4rem; margin-bottom: 6rem">
            <b-col lg="12">
                <h2 style="font-weight: bolder; text-align: center">Как это работает</h2>
            </b-col>
            <b-col sm style="margin-top: 2rem">
                <h1>
                    <b-icon-search class="rounded-circle bg-danger p-2" variant="light"></b-icon-search>
                </h1>
                <h3>Находите</h3>
                <p>Опытные компьютерные мастера в пешей доступности от вас</p>
            </b-col>
            <b-col sm style="margin-top: 2rem">
                <h1>
                    <b-icon-telephone class="rounded-circle bg-danger p-2" variant="light"></b-icon-telephone>
                </h1>
                <h3>Договаривайтесь</h3>
                <p>Позвоните или напишите мастеру, чтобы договориться на удобное для вас время</p>
            </b-col>
            <b-col sm style="margin-top: 2rem">
                <h1>
                    <b-icon-laptop class="rounded-circle bg-danger p-2" variant="light"></b-icon-laptop>
                </h1>
                <h3>Чините!</h3>
                <p>Получайте качественный ремонт вашей техники по низкой цене</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col id="master" lg class="main-home become-master" style="height: 20rem">
                <div class="slogan">Зарегистрироваться как мастер</div>
                <div style="margin-top: 2rem">
                    <p class="slogan-description"
                    >Разбираетесь в компьютерах? Умеете переустанавливать Windows?</p>
                    <p class="slogan-description">Регистрируйтесь на сайте и помогайте соседям!</p>
                </div>
                <router-link to="/register">
                    <b-button variant="info" class="search-button">Я - мастер</b-button>
                </router-link>
            </b-col>
        </b-row>
        <b-row style="text-align:center; margin-top: 4rem; margin-bottom: 6rem">
            <b-col sm style="margin-top: 2rem">
                <h1>
                    <b-icon-person class="rounded-circle bg-info p-2" variant="light"></b-icon-person>
                </h1>
                <h3>Регистрируйтесь</h3>
                <p>Быстрая регистрация по номеру телефона</p>
            </b-col>
            <b-col sm style="margin-top: 2rem">
                <h1>
                    <b-icon-list-check class="rounded-circle bg-info p-2" variant="light"></b-icon-list-check>
                </h1>
                <h3>Заполняйте анкету</h3>
                <p>Опишите свои навыки и то, какую помощь вы готовы оказать</p>
            </b-col>
            <b-col sm style="margin-top: 2rem">
                <h1>
                    <b-icon-tools class="rounded-circle bg-info p-2" variant="light"></b-icon-tools>
                </h1>
                <h3>Чините!</h3>
                <p>Помогайте соседям и получайте от них оплату напрямую без посредников и комиссий</p>
            </b-col>
        </b-row>
        <Footer />
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
    components: {
        Header,
        Footer,
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
    position: relative;
}
.slogan {
    color: white;
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: bold;
}
.slogan-description {
    color: white;
    font-size: 1rem;
    line-height: 0.8rem;
    font-weight: normal;
}
.landing {
    background-image: url("~@/assets/laptop-dimmed.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.become-master {
    background-image: url("~@/assets/become-master-dimmed.jpg");
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
h3,
h2 {
    color: var(--secondary);
}
p {
    color: var(--secondary);
    font-size: 1.2rem;
}
</style>