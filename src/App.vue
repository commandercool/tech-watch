<template>
  <b-container fluid class id="app">
    <!-- <TopBarMobile/>
    <b-row id="main">
      <MobileTopBar/>
      <MasterSearchResults/>
    </b-row>
    <MobileBottomBar/> -->
    <router-view></router-view>
  </b-container>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>