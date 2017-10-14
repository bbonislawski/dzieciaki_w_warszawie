import Vue from 'vue'
import Router from 'vue-router'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueResource from 'vue-resource'
import Place from '@/components/Place'
import PlacesList from '@/components/PlacesList'

Vue.use(Router)
Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places.drawing',
  }
})
export default new Router({
  routes: [
    {
      path: '/places',
      name: 'Places List',
      component: PlacesList
    },
    {
      path: '/',
      name: 'Places List',
      component: PlacesList
    },
    {
      path: '/places/:id',
      name: 'Place',
      component: Place
    }
  ]
})
