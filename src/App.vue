<template>
  <b-container fluid class id="app">
    <TopBarMobile/>
    <b-row id="main">
      <MobileTopBar/>
      <MasterSearchResults/>
    </b-row>
    <MobileBottomBar/>
  </b-container>
</template>

<script>
import MobileTopBar from './components/MobileTopBar.vue'
import MasterSearchResults from './components/MasterSearchResults.vue'
import MobileBottomBar from './components/MobileBottomBar.vue'
import TopBarMobile from './components/TopBarMobile.vue'

export default {
  name: 'App',
  components: {
    MobileTopBar,
    MasterSearchResults,
    MobileBottomBar,
    TopBarMobile
  }
}
</script>