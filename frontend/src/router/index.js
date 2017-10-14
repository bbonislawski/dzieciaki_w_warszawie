import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Place from '@/components/Place'
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
    }
  ]
})
