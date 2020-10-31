import SearchMasterPage from '../pages/SearchMasterPage.vue'
import MasterCardPage from '../pages/MasterCardPage.vue'

const routes = [
    {
      path: '/',
      name: 'Info',
      component: SearchMasterPage
    },
    {
      path: '/master',
      name: 'Master',
      component: MasterCardPage
    }
]

export default routes;