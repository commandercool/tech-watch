<template>
    <div>
        <b-form>
            <b-form-input v-model="searchVal"></b-form-input>
            <b-button @click="search()">Поиск</b-button>
        </b-form>
        {{ res }}
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            ymaps: null,
            searchVal: "",
            res: [],
        };
    },
    methods: {
        search() {
            window.ymaps.geocode(this.searchVal).then((result) => {
                this.res =
                    result.geoObjects._collectionComponent._baseArrayComponent._children
                    .map(item => {
                      return item._geoObjectComponent._properties._data.text
                    });
                console.log(this.res);
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
                    // window.ymaps.geocode("Народного ополчения").then((res) => {
                    //     this.res =
                    //         res.geoObjects._collectionComponent._baseArrayComponent._children;
                    //     console.log(this.res);
                    // });
                });
            })
            .catch((e) => {
                console.log("failed to load map" + e);
                // Failed to fetch script
            });
    },
};
</script>