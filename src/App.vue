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
  color: var(--secondary)
}
.master-card {
    margin-top: 10px;
    border: 1px solid;
    border-color: lightgrey;
    border-radius: 6px 6px 6px 6px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding: 10px;
    background-color: white;
}
.b-rating .b-rating-star, .b-rating .b-rating-value {
    padding: 0;
}
</style>