<template>
    <div>
        <autocomplete :search="search"
        placeholder="Введите адрес"></autocomplete>
    </div>
</template>

<script>
import Autocomplete from "@trevoreyre/autocomplete-vue";
import '@trevoreyre/autocomplete-vue/dist/style.css'

export default {
    components: {
        Autocomplete,
    },
    data: function () {
        return {
            ymaps: null,
            searchVal: "",
            res: []
        };
    },
    methods: {
        search(input) {
            if (input.length < 3) {
                return [];
            }
            return window.ymaps.geocode("Санкт-Петербург " + input).then((result) => {
                return result.geoObjects._collectionComponent._baseArrayComponent._children.map(
                    (item) => {
                        return item._geoObjectComponent._properties._data.text;
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