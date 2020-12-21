<template>
    <div>
        <Header />
        <b-row style="margin-top: 20px; margin-bottom: 20px">
            <b-col lg="3"></b-col>
            <b-col lg="6">
                <h2>Регистрация</h2>
                <div class="master-card" style="padding: 20px">
                    <b-form style="master-card">
                        <b-form-group label="Аватар:">
                            <b-avatar square style="width: 100%; height: auto; margin-bottom: 4px"></b-avatar>
                            <b-form-file placeholder="Выберите фотографию для аватара"></b-form-file>
                        </b-form-group>
                        <b-form-group label="Имя:">
                            <b-form-input placeholder="Имя"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Фамилия:">
                            <b-form-input placeholder="Фамилия"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Телефон:">
                            <b-form-input placeholder="89870000000" type="number"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Возраст">
                            <b-form-input type="number"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Адрес:">
                            <autocomplete :search="search" placeholder="Введите адрес" auto-select></autocomplete>
                        </b-form-group>
                        <b-form-group label="Образование:">
                            <b-form-input placeholder="Образование"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Личный сайт:">
                            <b-form-input placeholder="https://mysite"></b-form-input>
                        </b-form-group>
                        <b-form-group
                            label="Краткая информация:"
                            description="Краткая информация отображается в карточке в результатах поиска"
                        >
                            <b-form-input placeholder="Краткая информация, не более 140 символов"></b-form-input>
                        </b-form-group>
                        <b-form-group
                            label="Подробная информация:"
                            description="Подробная информация отображается в карточке мастера"
                        >
                            <b-form-textarea
                                placeholder="Подробная информация с выполняемыми услугами и прайсами"
                            ></b-form-textarea>
                        </b-form-group>
                        <b-form-group>
                            <b-link>Согласие на обработку персональных данных</b-link>
                        </b-form-group>
                        <b-form-group>
                            <b-button>Зарегистрироваться</b-button>
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
            ymaps: null,
            searchVal: "",
            res: [],
        };
    },
    methods: {
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