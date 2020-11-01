<template>
    <b-row class="top-bar" variant="info">
        <router-link to="/">
            <b-col>
                <span style="font-size: 2.5rem">
                    <b-icon-laptop class="rounded-circle bg-light p-2" variant="info"></b-icon-laptop>
                </span>
            </b-col>
        </router-link>
    </b-row>
</template>

<style scoped>
.top-bar {
    background-color: var(--info);
    color: white;
}
</style>