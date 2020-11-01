<template>
    <div>
        <Header/>
        <b-row id="main">
            <MobileTopBar/>
            <MasterSearchResults/>
        </b-row>
        <MobileBottomBar/>
        <SearchFilters />
    </div>
</template>

<script>
import MobileTopBar from '../components/MobileTopBar.vue'
import MasterSearchResults from '../components/MasterSearchResults.vue'
import MobileBottomBar from '../components/MobileBottomBar.vue'
import Header from '../components/Header.vue'
import SearchFilters from '../components/SearchFilters.vue'

export default {
  components: {
      MobileTopBar,
      MasterSearchResults,
      MobileBottomBar,
      Header,
      SearchFilters
  }
}
</script>