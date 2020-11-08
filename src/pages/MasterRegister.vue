<template>
    <div>
        <Header />
        <b-row style="margin-top: 20px; margin-bottom: 20px">
            <b-col lg="3"></b-col>
            <b-col lg="6">
                <h2>Регистрация</h2>
                <div class="master-card" style="padding: 20px">
                    <b-form style="master-card">
                        <b-form-group label="Адрес электронной почты:">
                            <b-form-input placeholder="Электронная почта"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Имя:">
                            <b-form-input placeholder="Имя"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Фамилия:">
                            <b-form-input placeholder="Фамилия"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Возраст">
                            <b-form-input type="number"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Адрес:">
                            <b-form-input placeholder="Адрес"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Образование:">
                            <b-form-input placeholder="Образование"></b-form-input>
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
                        <b-button>Зарегистрироваться</b-button>
                    </b-form>
                </div>
            </b-col>
        </b-row>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue'

export default {
    components: {
        Header,
        Footer
    },
};
</script>