// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import * as VueGoogleMaps from 'vue2-google-maps'
import BootstrapVue from 'bootstrap-vue'
import StarRating from 'vue-star-rating'
import VueCookie from 'vue-cookie'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(BootstrapVue);
Vue.use(VueCookie);
Vue.component('star-rating', StarRating);
if(window.location.href.indexOf('localhost') > -1)
  window.API_URL='http://localhost:3000/api'
else
  window.API_URL='/api'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD_W4oHoXACZ9cUwLiZxRistJ2ye-qlZw4',
    libraries: 'places.drawing',
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  http: {
    root: '/api',
  },
  template: '<App/>',
  components: { App }
})
