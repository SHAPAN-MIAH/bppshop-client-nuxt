exports.ids = [23,12];
exports.modules = {

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5af22c96", content, true, context)
};

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_4b5bbe3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_4b5bbe3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_4b5bbe3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_4b5bbe3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_4b5bbe3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main-container[data-v-4b5bbe3b]{width:93%;padding-top:230px;color:grey}.main-container[data-v-4b5bbe3b],.product-content[data-v-4b5bbe3b]{margin:auto;font-family:\"Rajdhani\",sans-serif}.product-content[data-v-4b5bbe3b]{width:80%;padding-bottom:50px;display:flex}.img-container img[data-v-4b5bbe3b]{width:300px;margin:0 20px;border:.5px solid #dcdcdc;padding:20px}.product-details-content[data-v-4b5bbe3b]{padding:0 35px}.product-details-content h2[data-v-4b5bbe3b]{font-size:25px}.product-details-content h1[data-v-4b5bbe3b]{margin-top:10px;color:#ef8341}.product-details-content p[data-v-4b5bbe3b]{margin-top:10px}.dec[data-v-4b5bbe3b]{margin-top:20px}.btn-container[data-v-4b5bbe3b]{margin:30px 0 15px;display:flex}.increase-decrease-container[data-v-4b5bbe3b]{display:flex;margin-right:20px}.increase-decrease-container button[data-v-4b5bbe3b]{font-size:25px;font-weight:500;color:#a5a5a5;background:none;padding:5px 20px;cursor:pointer;border:1px solid #dcdcdc}.increase-decrease-container button[data-v-4b5bbe3b]:hover{background:#e7e7e7;color:#ef8341}.increase-decrease-container div[data-v-4b5bbe3b]{padding:10px 50px;cursor:default;border:1px solid #dcdcdc;background:none;font-weight:600;font-size:20px}#addToCartBtn[data-v-4b5bbe3b]{padding:12px 60px;font-size:15px;font-family:\"Rajdhani\",sans-serif;font-weight:500;background:#e7e7e7;border:none;color:#7c7c7c;cursor:pointer}#addToCartBtn[data-v-4b5bbe3b]:hover{color:#ef8341}.addWishListBtn[data-v-4b5bbe3b],.continueShoppingBtn[data-v-4b5bbe3b]{padding:10px;font-size:17px;font-family:\"Rajdhani\",sans-serif;font-weight:600;background:none;border:none;color:#9b9b9b;cursor:pointer}.addWishListBtn[data-v-4b5bbe3b]:hover,.continueShoppingBtn[data-v-4b5bbe3b]:hover{color:#ef8341}.continueShoppingBtn[data-v-4b5bbe3b]{margin-left:10px}#addToCartBtn[data-v-4b5bbe3b]:hover{background:#dcdcdc}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/grocery/_id.vue?vue&type=template&id=4b5bbe3b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.product)?_vm._ssrNode("<div data-v-4b5bbe3b>","</div>",[_vm._ssrNode("<div class=\"category-navbar\" data-v-4b5bbe3b>","</div>",[_c('Category-nav',{attrs:{"categoryName":"Grocery"}})],1),_vm._ssrNode(" <div class=\"main-container\" data-v-4b5bbe3b><div class=\"product-content\" data-v-4b5bbe3b><div class=\"img-container\" data-v-4b5bbe3b><img"+(_vm._ssrAttr("src",_vm.product.image))+" alt data-v-4b5bbe3b></div> <div class=\"product-details-content\" data-v-4b5bbe3b><h2 data-v-4b5bbe3b>"+_vm._ssrEscape(_vm._s(_vm.product.title))+"</h2> <h1 data-v-4b5bbe3b>"+_vm._ssrEscape("৳ "+_vm._s(_vm.product.price))+"</h1> <p data-v-4b5bbe3b><i class=\"bi bi-star\" data-v-4b5bbe3b></i> <i class=\"bi bi-star\" data-v-4b5bbe3b></i> <i class=\"bi bi-star\" data-v-4b5bbe3b></i> <i class=\"bi bi-star\" data-v-4b5bbe3b></i> <i class=\"bi bi-star\" data-v-4b5bbe3b></i></p> <div class=\"btn-container\" data-v-4b5bbe3b><div class=\"increase-decrease-container\" data-v-4b5bbe3b><button data-v-4b5bbe3b>-</button> <div data-v-4b5bbe3b>1</div> <button data-v-4b5bbe3b>+</button></div> <button id=\"addToCartBtn\" data-v-4b5bbe3b><i class=\"bi bi-bag-plus\" data-v-4b5bbe3b></i> Add To Cart</button></div> <div data-v-4b5bbe3b><button class=\"addWishListBtn\" data-v-4b5bbe3b><i class=\"bi bi-heart\" data-v-4b5bbe3b></i> Add to Wishlist</button> <button class=\"continueShoppingBtn\" data-v-4b5bbe3b><i class=\"bi bi-cart3\" data-v-4b5bbe3b></i> Continue Shopping</button></div> <p class=\"dec\" data-v-4b5bbe3b>"+_vm._ssrEscape(_vm._s(_vm.product.description))+"</p></div></div></div>")],2):_vm._ssrNode(("<div data-v-4b5bbe3b><h1 data-v-4b5bbe3b>product not found</h1></div>"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/grocery/_id.vue?vue&type=template&id=4b5bbe3b&scoped=true&

// EXTERNAL MODULE: ./components/SharedComponent/sidebar.vue + 2 modules
var sidebar = __webpack_require__(77);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/grocery/_id.vue?vue&type=script&lang=js&
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

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  layout: "categoryLayout",
  components: {
    Sidebar: sidebar["default"]
  },

  data() {
    return {
      images: {
        thumbs: [{
          id: 1,
          url: "https://res.cloudinary.com/olanetsoft/image/upload/v1647642978/h1-r3.jpg"
        }, {
          id: 2,
          url: "https://res.cloudinary.com/olanetsoft/image/upload/v1647644372/h3-r3.jpg"
        }, {
          id: 3,
          url: "https://res.cloudinary.com/olanetsoft/image/upload/v1647644758/h4-r3.jpg"
        }],
        normal_size: [{
          id: 1,
          url: "https://res.cloudinary.com/olanetsoft/image/upload/v1647642886/h1-r2.jpg"
        }, {
          id: 2,
          url: "https://res.cloudinary.com/olanetsoft/image/upload/v1647644372/h3-r2.jpg"
        }, {
          id: 3,
          url: "https://res.cloudinary.com/olanetsoft/image/upload/v1647644758/h4-r2.jpg"
        }],
        large_size: [{
          id: 1,
          url: "https://res.cloudinary.com/olanetsoft/image/upload/v1647642886/h1-r1.jpg"
        }, {
          id: 2,
          url: "https://res.cloudinary.com/olanetsoft/image/upload/v1647644372/h3-r1.jpg"
        }, {
          id: 3,
          url: "https://res.cloudinary.com/olanetsoft/image/upload/v1647644758/h4-r1.jpg"
        }]
      },
      zoomerOptions: {
        zoomFactor: 3,
        // scale for zoomer
        pane: "pane",
        // three type of pane ['pane', 'container-round', 'container']
        hoverDelay: 300,
        // how long after the zoomer take effects
        move_by_click: false,
        // move image by click thumb image or by mouseover
        scroll_items: 5,
        // thumbs for scroll
        choosed_thumb_border_color: "#bbdefb",
        // choosed thumb border color
        scroller_button_style: "line",
        scroller_position: "left",
        zoomer_pane_position: "right"
      }
    };
  },

  computed: {
    product() {
      return this.$store.getters.getProductById(this.$route.params.id);
    }

  },
  methods: {
    addToCart() {
      this.$store.dispatch('addProductToCart', {
        product: this.product,
        quantity: 1
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/grocery/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var grocery_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/grocery/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(139)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  grocery_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4b5bbe3b",
  "aac26480"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0d9de414", content, true, context)
};

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_6089b9da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_6089b9da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_6089b9da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_6089b9da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_6089b9da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sidebar[data-v-6089b9da]{width:18%;height:70vh;border:.01px solid #e9e9e9;padding:10px 20px;border-radius:5px;position:-webkit-sticky;position:sticky;top:220px;margin-bottom:50px;z-index:1}.sidebar-header[data-v-6089b9da]{border-bottom:.5px solid #e6e6e6}.sidebar-header h2[data-v-6089b9da]{margin:10px 0}.menu-list li[data-v-6089b9da]{list-style:none;margin:20px 0 20px 30px;padding-bottom:10px;border-bottom:.1px solid hsla(0,0%,94.5%,.9451)}.menu-list li[data-v-6089b9da]:hover{color:#0ff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SharedComponent/sidebar.vue?vue&type=template&id=6089b9da&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidebar"},[_vm._ssrNode("<div class=\"sidebar-header\" data-v-6089b9da><h2 data-v-6089b9da><i class=\"bi bi-list\" data-v-6089b9da></i> Shop by Category</h2></div> <ul class=\"menu-list\" data-v-6089b9da><li data-v-6089b9da>Lorem ipsum dolor sit.</li> <li data-v-6089b9da>Lorem ipsum dolor sit.</li> <li data-v-6089b9da>Lorem ipsum dolor sit.</li> <li data-v-6089b9da>Lorem ipsum dolor sit.</li> <li data-v-6089b9da>Lorem ipsum dolor sit.</li> <li data-v-6089b9da>Lorem ipsum dolor sit.</li> <li data-v-6089b9da>Lorem ipsum dolor sit.</li> <li data-v-6089b9da>Lorem ipsum dolor sit.</li> <li data-v-6089b9da>Lorem ipsum dolor sit.</li> <li data-v-6089b9da>Lorem ipsum dolor sit.</li></ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SharedComponent/sidebar.vue?vue&type=template&id=6089b9da&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/SharedComponent/sidebar.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(71)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6089b9da",
  "3b08ce95"
  
)

/* harmony default export */ var sidebar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map