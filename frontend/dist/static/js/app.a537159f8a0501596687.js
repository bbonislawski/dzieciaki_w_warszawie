webpackJsonp([1],{

/***/ "/yRs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_streetViewPanoramaImpl_js__ = __webpack_require__("diQi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_streetViewPanoramaImpl_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_streetViewPanoramaImpl_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_25106eac_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_streetViewPanorama_vue__ = __webpack_require__("gj5N");
function injectStyle (ssrContext) {
  __webpack_require__("TeRy")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_streetViewPanoramaImpl_js___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_25106eac_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_streetViewPanorama_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3170":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PlaceRating__ = __webpack_require__("c4i+");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'place',
  data() {
    return {
      place: { name: '', image: '', description: '' }
    };
  },
  methods: {
    getPlace() {
      this.$http.get(API_URL + '/places/' + this.$route.params.id).then(response => {
        console.log(response.body);
        this.place = response.body;
        this.place.rated = this.$cookie.get('place_rated_' + this.place.id) == 'true';
      }, response => {
        console.log('error');
      });
    }
  },
  beforeMount() {
    this.getPlace();
  },
  components: {
    PlaceRating: __WEBPACK_IMPORTED_MODULE_0__PlaceRating__["a" /* default */]
  }
});

/***/ }),

/***/ "3nV7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{ref:"input",attrs:{"type":"text","placeholder":_vm.placeholder},domProps:{"value":_vm.value}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "5ZbH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mapImpl_js__ = __webpack_require__("kXiA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mapImpl_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_mapImpl_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_9438afc6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_map_vue__ = __webpack_require__("R6gD");
function injectStyle (ssrContext) {
  __webpack_require__("VpZ1")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mapImpl_js___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_9438afc6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_map_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "5cLx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_infoWindowImpl_js__ = __webpack_require__("Vj7G");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_infoWindowImpl_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_infoWindowImpl_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_bc6030e6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_infoWindow_vue__ = __webpack_require__("iyMW");
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_infoWindowImpl_js___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_bc6030e6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_infoWindow_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "9M+g":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "A37c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PlaceRating__ = __webpack_require__("c4i+");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'places-list',
  data() {
    return {
      places: [],
      selectedAge: null,
      minRating: null,
      freeEntrance: null,
      minRatingOptions: [1, 2, 3, 4, 5],
      freeEntranceOptions: [{ value: 'false', text: 'Nie' }, { value: 'true', text: 'Tak' }]
    };
  },
  methods: {
    getPlaces(filters) {
      this.$http.get(API_URL + '/places', { params: filters }).then(response => {
        this.places = response.body;
        for (let place of this.places) {
          place.rated = this.$cookie.get('place_rated_' + place.id) == 'true';
        }
      }, response => {
        console.log('error');
      });
    },
    filterPlaces() {
      let filters = {
        q: {}
      };
      if (!!this.selectedAge) {
        filters.q.min_age_lt = this.selectedAge;
        filters.q.max_age_gt = this.selectedAge;
      }
      if (!!this.freeEntrance) {
        filters.q.free_entrance_eq = this.freeEntrance == 'true';
      }
      if (!!this.minRating) {
        filters.q.avg_rating_gteq = this.minRating;
      }
      this.getPlaces(filters);
    }
  },
  beforeMount() {
    this.getPlaces();
  },
  components: {
    PlaceRating: __WEBPACK_IMPORTED_MODULE_0__PlaceRating__["a" /* default */]
  }
});

/***/ }),

/***/ "ENy6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Jmt5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "LP6r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-row',[_c('b-card',{staticClass:"mb-2",staticStyle:{"width":"100%"},attrs:{"title":this.place.name,"img-src":this.place.image,"img-alt":this.place.name,"img-top":"","tag":"article"}},[_c('p',{staticClass:"card-text"},[_vm._v("\n    "+_vm._s(this.place.description)+"\n\n    "),_c('place-rating',{attrs:{"place":_vm.place}})],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25441132_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("Vq/C");
function injectStyle (ssrContext) {
  __webpack_require__("WpCr")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25441132_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "MPZa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-row',[_c('b-col',{attrs:{"sm":"3"}},[_c('b-form-group',{attrs:{"id":"fieldset1","label":"Wiek dziecka"}},[_c('b-form-input',{attrs:{"type":"number","min":"0","max":"20"},model:{value:(_vm.selectedAge),callback:function ($$v) {_vm.selectedAge=$$v},expression:"selectedAge"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"sm":"3"}},[_c('b-form-group',{attrs:{"id":"fieldset2","label":"Minimalna ocena"}},[_c('b-form-select',{staticClass:"mb-3",attrs:{"options":_vm.minRatingOptions},model:{value:(_vm.minRating),callback:function ($$v) {_vm.minRating=$$v},expression:"minRating"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"sm":"3"}},[_c('b-form-group',{attrs:{"id":"fieldset3","label":"Darmowe wejscie"}},[_c('b-form-select',{staticClass:"mb-3",attrs:{"options":_vm.freeEntranceOptions},model:{value:(_vm.freeEntrance),callback:function ($$v) {_vm.freeEntrance=$$v},expression:"freeEntrance"}})],1)],1),_vm._v(" "),_c('b-button',{staticStyle:{"height":"50px","width":"150px","margin-top":"27px"},attrs:{"variant":"secondary"},on:{"click":function($event){_vm.filterPlaces()}}},[_vm._v("\n        Filtruj\n      ")])],1),_vm._v(" "),_c('b-row',_vm._l((_vm.places),function(place){return _c('b-col',{attrs:{"sm":"4"}},[_c('b-card',{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{"title":place.name,"img-src":place.image,"img-alt":place.name,"img-top":"","tag":"article"}},[_c('p',{staticClass:"card-text"},[_vm._v("\n          "+_vm._s(place.short_description)+"\n        ")]),_vm._v(" "),_c('place-rating',{attrs:{"place":place}}),_vm._v(" "),_c('b-button',{staticStyle:{"border-radius":"15em"},attrs:{"href":'/#/places/' + place.id,"variant":"primary"}},[_vm._v("Sprawdź")])],1)],1)}))],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_resource__ = __webpack_require__("ORbq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_vue__ = __webpack_require__("sCSS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_star_rating__ = __webpack_require__("X+2x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_star_rating___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_star_rating__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_cookie__ = __webpack_require__("K/Lq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bootstrap_dist_css_bootstrap_css__ = __webpack_require__("Jmt5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_bootstrap_vue_dist_bootstrap_vue_css__ = __webpack_require__("9M+g");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_bootstrap_vue_dist_bootstrap_vue_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_bootstrap_vue_dist_bootstrap_vue_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.










__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vue_resource__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4_bootstrap_vue__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_6_vue_cookie___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('star-rating', __WEBPACK_IMPORTED_MODULE_5_vue_star_rating___default.a);
if (window.location.href.indexOf('localhost') > -1) window.API_URL = 'http://localhost:3000/api';else window.API_URL = '/api';

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  http: {
    root: '/api'
  },
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "R6gD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-map-container"},[_c('div',{ref:"vue-map",staticClass:"vue-map"}),_vm._v(" "),_c('div',{staticClass:"vue-map-hidden"},[_vm._t("default")],2),_vm._v(" "),_vm._t("visible")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "RktK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Place_vue__ = __webpack_require__("3170");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8aa85090_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Place_vue__ = __webpack_require__("LP6r");
function injectStyle (ssrContext) {
  __webpack_require__("pnGr")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8aa85090"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Place_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8aa85090_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Place_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "TeRy":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "VpZ1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Vq/C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('navigation'),_vm._v(" "),_c('b-container',{staticClass:"bv-example-row"},[_c('router-view')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "WpCr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YI6p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_placeInputImpl_js__ = __webpack_require__("jIen");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_placeInputImpl_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_placeInputImpl_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_28fda5d2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_placeInput_vue__ = __webpack_require__("t2bh");
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_placeInputImpl_js___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_28fda5d2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_placeInput_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue2_google_maps__ = __webpack_require__("sA6N");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue2_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue2_google_maps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_resource__ = __webpack_require__("ORbq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Place__ = __webpack_require__("RktK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PlacesList__ = __webpack_require__("vEw1");







__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2_vue2_google_maps__, {
  load: {
    key: 'AIzaSyD_W4oHoXACZ9cUwLiZxRistJ2ye-qlZw4',
    libraries: 'places.drawing'
  }
});
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/places',
    name: 'Places List',
    component: __WEBPACK_IMPORTED_MODULE_5__components_PlacesList__["a" /* default */]
  }, {
    path: '/',
    name: 'Root',
    component: __WEBPACK_IMPORTED_MODULE_5__components_PlacesList__["a" /* default */]
  }, {
    path: '/places/:id',
    name: 'Place',
    component: __WEBPACK_IMPORTED_MODULE_4__components_Place__["a" /* default */]
  }]
}));

/***/ }),

/***/ "b5Pc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('star-rating',{staticStyle:{"justify-content":"center"},attrs:{"increment":1,"max-rating":5,"rating":_vm.place.rating,"read-only":_vm.isRated(_vm.place),"inactive-color":"#000","show-rating":false,"active-color":_vm.starColor(_vm.place),"star-size":30},on:{"rating-selected":function($event){_vm.setRating($event, _vm.place)}}}),_vm._v(" "),_c('p',[_vm._v("\n    "+_vm._s(_vm.getRating(_vm.place))+"\n  ")])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "bVQ/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'navigation',
  data() {
    return {};
  }
});

/***/ }),

/***/ "bwGm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Navigation_vue__ = __webpack_require__("bVQ/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a2e57a9a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navigation_vue__ = __webpack_require__("jkHU");
function injectStyle (ssrContext) {
  __webpack_require__("olYf")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a2e57a9a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Navigation_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a2e57a9a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navigation_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "c4i+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PlaceRating_vue__ = __webpack_require__("tER9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e4e21216_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PlaceRating_vue__ = __webpack_require__("b5Pc");
function injectStyle (ssrContext) {
  __webpack_require__("lG1T")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e4e21216"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PlaceRating_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e4e21216_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PlaceRating_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "gj5N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-street-view-pano-container"},[_c('div',{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),_vm._v(" "),_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "iyMW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{ref:"flyaway"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "jkHU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-navbar',{attrs:{"toggleable":"md","type":"dark"}},[_c('b-nav-toggle',{attrs:{"target":"nav_collapse"}}),_vm._v(" "),_c('b-navbar-brand',{staticStyle:{"width":"80%","padding-left":"10%"},attrs:{"href":"#"}},[_c('b-img',{staticStyle:{"width":"100%"},attrs:{"src":"/static/logo1.png"}})],1),_vm._v(" "),_c('b-collapse',{attrs:{"is-nav":"","id":"nav_collapse"}},[_c('b-nav',{staticClass:"ml-auto",staticStyle:{"padding-right":"25%"},attrs:{"is-nav-bar":""}},[_c('b-nav-item',{attrs:{"href":"/#/places","active":""}},[_vm._v("Miejsca")]),_vm._v(" "),_c('b-nav-item',{attrs:{"href":"/#/events"}},[_vm._v("Wydarzenia")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "lG1T":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "olYf":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "pnGr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "preG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_autocompleteImpl_js__ = __webpack_require__("osty");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_autocompleteImpl_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_autocompleteImpl_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_e19c2312_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_autocomplete_vue__ = __webpack_require__("3nV7");
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_autocompleteImpl_js___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_e19c2312_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_autocomplete_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "t2bh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_c('span',{domProps:{"textContent":_vm._s(_vm.label)}}),_vm._v(" "),_c('input',{ref:"input",class:_vm.className,attrs:{"type":"text","placeholder":_vm.placeholder}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "tER9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'place-rating',
  props: ['place'],
  data() {
    return {};
  },
  methods: {
    setRating(rating, place) {
      this.$http.post(API_URL + '/places/' + place.id + '/rate', { rating: rating }).then(response => {
        this.$cookie.set('place_rated_' + place.id, rating, 30);
        place.rated = true;
        place.rating = response.body.rating;
      }, response => {
        console.log('error');
      });
    },
    starColor(place) {
      if (this.isRated(place)) return '#bb0000';else return '#fff000';
    },
    getRating(place) {
      if (this.isRated(place)) {
        return "Twoja ocena to: " + this.$cookie.get('place_rated_' + place.id);
      } else {
        return " ";
      }
    },
    isRated(place) {
      return !!this.$cookie.get('place_rated_' + place.id);
    }
  }
});

/***/ }),

/***/ "vEw1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PlacesList_vue__ = __webpack_require__("A37c");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_399d96ae_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PlacesList_vue__ = __webpack_require__("MPZa");
function injectStyle (ssrContext) {
  __webpack_require__("ENy6")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-399d96ae"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PlacesList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_399d96ae_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PlacesList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navigation__ = __webpack_require__("bwGm");
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  components: {
    Navigation: __WEBPACK_IMPORTED_MODULE_0__components_Navigation__["a" /* default */]
  }
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.a537159f8a0501596687.js.map