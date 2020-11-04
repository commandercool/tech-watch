<template>
  <b-container fluid class id="app">
    <router-view></router-view>
  </b-container>
</template>

<style>
p {
  color: var(--secondary)
}
</style>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
.b-rating .b-rating-star, .b-rating .b-rating-value {
    padding: 0;
}
a:hover {
  text-decoration: none;
}
body {
  background-color: var(--light);
}
</style>