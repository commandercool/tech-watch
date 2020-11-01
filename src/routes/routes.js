import SearchMasterPage from '../pages/SearchMasterPage.vue'
import MasterCardPage from '../pages/MasterCardPage.vue'
import HomePage from '../pages/HomePage.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchMasterPage
  },
  {
    path: '/master',
    name: 'Master',
    component: MasterCardPage
  }
]

export default routes;