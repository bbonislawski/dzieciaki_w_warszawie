import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Place from '@/components/Place'
import PlaceQuestionary from '@/components/PlaceQuestionary'
import PlacesList from '@/components/PlacesList'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/places',
      name: 'Places List',
      component: PlacesList
    },
    {
      path: '/',
      name: 'Root',
      component: PlacesList
    },
    {
      path: '/places/:id',
      name: 'Place',
      component: Place
    },
    {
      path: '/places/:id/questionary',
      name: 'Place Questionary',
      component: PlaceQuestionary
    }
  ]
})
