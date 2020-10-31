<template>
    <div class="master-card">
        <b-row>
            <b-col sm md="4">
                <b-avatar style="width: 100%; height: auto" square variant="primary"></b-avatar>
                <b-form-rating
                    style="padding: 0"
                    value="4.5"
                    variant="primary"
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
                <b-button variant="primary">
                    <b-icon-telephone-fill></b-icon-telephone-fill>
                    Позвонить
                </b-button>
                <b-button variant="primary" style="margin-left: 6px">
                    <b-icon-chat-text-fill></b-icon-chat-text-fill>
                    Написать
                </b-button>
            </b-col>
        </b-row>
    </div>
</template>

<style scoped>
.master-name {
    font-size: 1.4rem;
    font-weight: bolder;
    color: var(--secondary);
}
.master-description {
    font-size: 0.9rem;
    color: var(--secondary);
}
.master-card {
    margin-top: 10px;
    border: 1px solid;
    border-color: lightgrey;
    border-radius: 6px 6px 6px 6px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding: 10px;
    margin: 10px;
}
</style>