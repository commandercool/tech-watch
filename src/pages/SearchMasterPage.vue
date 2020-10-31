<template>
    <div>
        <TopBarMobile/>
        <b-row id="main">
            <MobileTopBar/>
            <MasterSearchResults/>
        </b-row>
        <MobileBottomBar/>
    </div>
</template>

<script>
import MobileTopBar from '../components/MobileTopBar.vue'
import MasterSearchResults from '../components/MasterSearchResults.vue'
import MobileBottomBar from '../components/MobileBottomBar.vue'
import TopBarMobile from '../components/TopBarMobile.vue'

export default {
  components: {
      MobileTopBar,
      MasterSearchResults,
      MobileBottomBar,
      TopBarMobile
  }
}
</script>