<template>
    <b-row class="top-bar" variant="info">
        <b-col>
            <router-link to="/">
                <div style="font-size: 2.5rem; float: left">
                    <b-icon-laptop class="rounded-circle bg-light p-2" variant="info"></b-icon-laptop>
                </div>
                <div style="float: left; color: white; line-height: 4rem; font-size: 1.4rem; margin-left: .2rem;">
                    Мастерская
                </div>
            </router-link>
        </b-col>
    </b-row>
</template>

<style scoped>
.top-bar {
    background-color: var(--info);
    color: white;
}
</style>