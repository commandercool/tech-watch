<template>
    <div>
        <div class="master-card">
            <router-link to="/master">
                <b-row>
                    <b-col sm md="4">
                        <b-avatar style="width: 100%; height: auto" square variant="info" :src="master.avatar"></b-avatar>
                        <b-form-rating
                            style="padding: 0"
                            :value="master.rating"
                            variant="info"
                            no-border="true"
                            readonly
                        ></b-form-rating>
                    </b-col>
                    <b-col sm md="8">
                        <div class="master-name">{{ master.name }}</div>
                        <div class="master-description">{{ master.description }}</div>
                        <span
                            class="master-description"
                            style="font-weight: bolder"
                        >Санкт-Петербург - 1.2км от вас - Был вчера</span>
                    </b-col>
                </b-row>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ["master"],
};
</script>

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
.master-card:hover {
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);
}
</style>