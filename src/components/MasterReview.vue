<template>
    <div class="master-card">
        Отзывы (100500)
        <div class="master-card negative-review">
            <b-row>
                <b-col lg>Чайник</b-col>
                <b-col cols="3">
                    <b-avatar style="width: 100%; height: auto" square variant="info"></b-avatar>
                </b-col>
                <b-col cols="9">
                    <b-form-rating
                        style="padding: 0"
                        value="2"
                        variant="warning"
                        no-border="true"
                        readonly
                    ></b-form-rating>
                    <p class="comment">Все починил, но не очень хорошо</p>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<style scoped>
.comment {
    line-height: 0.9rem;
    font-weight: 0.9rem;
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
.master-card {
    width: 100%;
    margin-top: 10px;
    border: 1px solid;
    border-color: lightgrey;
    border-radius: 6px 6px 6px 6px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding: 10px;
}
.negative-review {
    border-color: var(--danger);
}
</style>
