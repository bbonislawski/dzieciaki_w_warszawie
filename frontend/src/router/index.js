import Vue from 'vue'
import Router from 'vue-router'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueResource from 'vue-resource'
import Main from '@/components/Main'

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
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
