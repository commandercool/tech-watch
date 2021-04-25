<template>
    <div>
        <Header />
        <b-row style="margin-top: 20px; margin-bottom: 20px">
            <b-col lg="3"></b-col>
            <b-col lg="6">
                <h2>Регистрация</h2>
                <div class="master-card" style="padding: 20px">
                    <b-form style="master-card" @submit="register">
                        <b-form-group label="Аватар:">
                            <b-avatar
                                :src="this.url"
                                square
                                style="width: 100%; height: auto; margin-bottom: 4px"
                            ></b-avatar>
                            <b-form-file
                                @change="avatarSelected"
                                placeholder="Выберите фотографию для аватара"
                            ></b-form-file>
                        </b-form-group>
                        <b-form-group label="Имя:">
                            <b-form-input
                                v-model="reg.name"
                                placeholder="Имя"
                                required
                                oninvalid="this.setCustomValidity('Пожалуйста, укажите свое имя')"
                                oninput="setCustomValidity('')"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group label="Фамилия:">
                            <b-form-input
                                v-model="reg.secondname"
                                placeholder="Фамилия"
                                required
                                oninvalid="this.setCustomValidity('Пожалуйста, укажите свою фамилию')"
                                oninput="setCustomValidity('')"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group label="Телефон:">
                            <b-form-input
                                v-model="reg.phone"
                                placeholder="89870000000"
                                type="number"
                                required
                                oninvalid="this.setCustomValidity('Пожалуйста, укажите свой телефон')"
                                oninput="setCustomValidity('')"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group label="Возраст">
                            <b-form-input v-model="reg.age" type="number"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Адрес:">
                            <autocomplete
                                required
                                @submit="searchSubmit"
                                :search="search"
                                placeholder="Введите адрес"
                                auto-select
                                oninvalid="this.setCustomValidity('Пожалуйста, укажите свой адрес')"
                                oninput="setCustomValidity('')"
                            ></autocomplete>
                        </b-form-group>
                        <b-form-group label="Образование:">
                            <b-form-input v-model="reg.education" placeholder="Образование"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Личный сайт:">
                            <b-form-input
                                v-model="reg.personalWebPage"
                                placeholder="https://mysite"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                            label="Краткая информация:"
                            description="Краткая информация отображается в карточке в результатах поиска"
                        >
                            <b-form-input
                                v-model="reg.summary"
                                placeholder="Краткая информация, не более 140 символов"
                                required
                                oninvalid="this.setCustomValidity('Пожалуйста, заполните краткую информацию о себе')"
                                oninput="setCustomValidity('')"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                            label="Подробная информация:"
                            description="Подробная информация отображается в карточке мастера"
                        >
                            <b-form-textarea
                                v-model="reg.description"
                                placeholder="Подробная информация с выполняемыми услугами и прайсами"
                                required
                                oninvalid="this.setCustomValidity('Пожалуйста, опишите подробно услуги, которые вы оказываете')"
                                oninput="setCustomValidity('')"
                            ></b-form-textarea>
                        </b-form-group>
                        <b-form-group>
                            <b-link>Согласие на обработку персональных данных</b-link>
                        </b-form-group>
                        <b-form-group>
                            <b-button type="submit">Зарегистрироваться</b-button>
                        </b-form-group>
                    </b-form>
                </div>
            </b-col>
        </b-row>
        <Footer />
    </div>
</template>

<style>
.autocomplete-input {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    width: 100%;
    padding: 8px 12px 12px 48px;
    padding-bottom: 12px;
    box-sizing: border-box;
    position: relative;
    font-size: 16px;
    line-height: 1.5;
    flex: 1;
    background-color: white;
    background-repeat: no-repeat;
    height: calc(1.5em + 0.75rem + 2px);
}
</style>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Autocomplete from "@trevoreyre/autocomplete-vue";
import "@trevoreyre/autocomplete-vue/dist/style.css";

export default {
    components: {
        Header,
        Footer,
        Autocomplete,
    },
    data: function () {
        return {
            url: null,
            ymaps: null,
            searchVal: "",
            res: [],
            reg: {},
        };
    },
    methods: {
        avatarSelected(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        },
        search(input) {
            if (input.length < 3) {
                return [];
            }
            return window.ymaps
                .geocode("Санкт-Петербург " + input)
                .then((result) => {
                    return result.geoObjects._collectionComponent._baseArrayComponent._children.map(
                        (item) => {
                            return item._geoObjectComponent._properties._data
                                .text;
                        }
                    );
                });
        },
        searchSubmit(result) {
            this.reg.address = result;
        },
        register(event) {
            event.preventDefault();
            console.log(event);
        },
    },
    created() {
        this.$loadScript(
            "https://api-maps.yandex.ru/2.1/?apikey=c1684f97-10ea-4269-bc2f-77df54c062a3&lang=ru_RU"
        )
            .then(() => {
                window.ymaps.ready(() => {
                    this.ymaps = window.ymaps;
                });
            })
            .catch((e) => {
                console.log("failed to load map" + e);
            });
    },
};
</script>