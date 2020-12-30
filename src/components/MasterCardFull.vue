<template>
    <b-row>
        <b-col md="3">
            <div class="go-back-button d-md-block d-none" @click="$router.go(-1)">
                <b-icon-caret-left-fill variant="info"></b-icon-caret-left-fill>К результатам поиска
            </div>
        </b-col>
        <b-col md="6" sm>
            <div class="master-card">
                <b-row>
                    <b-col sm md="4">
                        <b-avatar style="width: 100%; height: auto" square variant="info"></b-avatar>
                        <b-form-rating
                            style="padding: 0"
                            value="4.5"
                            variant="info"
                            no-border="true"
                            readonly
                        ></b-form-rating>
                    </b-col>
                    <b-col sm md="8">
                        <div class="master-name">Имя мастера</div>
                        <div class="master-description">
                            Краткое описание мастера, где он указывает, какие работы может
                            выполнять.
                        </div>
                        <span
                            class="master-description"
                            style="font-weight: bolder"
                        >Санкт-Петербург - 1.2км от вас - Был вчера</span>
                    </b-col>
                </b-row>
                <b-row style="margin-top: 10px">
                    <b-col sm>
                        <b-button variant="info">
                            <b-icon-telephone-fill></b-icon-telephone-fill> Позвонить
                        </b-button>
                        <b-button variant="info" style="margin-left: 6px">
                            <b-icon-chat-text-fill></b-icon-chat-text-fill> Написать
                        </b-button>
                    </b-col>
                </b-row>
            </div>
            <div class="master-card">
                <b-row>
                    <b-col>
                        Отзывы (100500)
                        <div class="master-card negative-review">
                            <b-row>
                                <b-form-rating
                                        style="padding: 0"
                                        value="2"
                                        variant="warning"
                                        no-border="true"
                                        readonly
                                    ></b-form-rating>
                            </b-row>
                            <b-row>
                                <b-col cols="3">
                                    <b-avatar
                                        style="width: 100%; height: auto"
                                        square
                                        variant="info"
                                    ></b-avatar>
                                </b-col>
                                <b-col cols="9">
                                    <p class="comment">Все починил, но не очень хорошо</p>
                                </b-col>
                            </b-row>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-col>
    </b-row>
</template>

<style scoped>
.go-back-button {
    padding-top: 10px;
    cursor: pointer;
    position: sticky;
    top: 0;
}
.master-name {
    font-size: 1.4rem;
    font-weight: bolder;
    color: var(--secondary);
}
.master-description {
    font-size: 0.9rem;
    color: var(--secondary);
}
</style>