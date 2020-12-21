import SearchMasterPage from '../pages/SearchMasterPage.vue'
import MasterCardPage from '../pages/MasterCardPage.vue'
import HomePage from '../pages/HomePage.vue'
import MasterRegister from '../pages/MasterRegister.vue'

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
  },
  {
    path: '/register',
    name: 'Register',
    component: MasterRegister
  }
]

export default routes;