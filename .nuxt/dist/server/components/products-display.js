exports.ids = [11];
exports.modules = {

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductsCollection/ProductsDisplay.vue?vue&type=template&id=12762528&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"product-card"},[_vm._ssrNode("<div class=\"img-container\" data-v-12762528>","</div>",[_c('nuxt-link',{attrs:{"to":("/grocery/" + (_vm.product.id))}},[_c('div',{staticClass:"image"},[_c('img',{attrs:{"src":_vm.product.image,"alt":""}})])]),_vm._ssrNode(" <div class=\"quickView\" data-v-12762528><span data-v-12762528><i class=\"bi bi-eye\" data-v-12762528></i></span> <span data-v-12762528><i class=\"bi bi-heart\" data-v-12762528></i></span> <span data-v-12762528><i class=\"bi bi-bag-plus\" data-v-12762528></i></span></div>")],2),_vm._ssrNode(" <p data-v-12762528>"+_vm._ssrEscape(_vm._s(_vm.product.title.toString().substring(0, 30))+"....")+"</p> <p data-v-12762528><i class=\"bi bi-star\" data-v-12762528></i> <i class=\"bi bi-star\" data-v-12762528></i> <i class=\"bi bi-star\" data-v-12762528></i> <i class=\"bi bi-star\" data-v-12762528></i> <i class=\"bi bi-star\" data-v-12762528></i></p> <p class=\"price\" data-v-12762528>"+_vm._ssrEscape("৳ "+_vm._s(_vm.product.price))+"</p>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProductsCollection/ProductsDisplay.vue?vue&type=template&id=12762528&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductsCollection/ProductsDisplay.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ProductsDisplayvue_type_script_lang_js_ = ({
  props: ['product'],
  methods: {
    addToCart() {
      this.$store.dispatch('addProductToCart', {
        product: this.product,
        quantity: 1
      });
    }

  }
});
// CONCATENATED MODULE: ./components/ProductsCollection/ProductsDisplay.vue?vue&type=script&lang=js&
 /* harmony default export */ var ProductsCollection_ProductsDisplayvue_type_script_lang_js_ = (ProductsDisplayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ProductsCollection/ProductsDisplay.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(97)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ProductsCollection_ProductsDisplayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "12762528",
  "1a703a12"
  
)

/* harmony default export */ var ProductsDisplay = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("a260df6c", content, true, context)
};

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsDisplay_vue_vue_type_style_index_0_id_12762528_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsDisplay_vue_vue_type_style_index_0_id_12762528_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsDisplay_vue_vue_type_style_index_0_id_12762528_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsDisplay_vue_vue_type_style_index_0_id_12762528_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsDisplay_vue_vue_type_style_index_0_id_12762528_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a[data-v-12762528]{text-decoration:none;color:#757575}.product-card[data-v-12762528]{height:340px;align-items:center;text-align:center;border-radius:4px;transition:all .1ms;overflow:hidden}.image[data-v-12762528]{width:100%}.product-card p[data-v-12762528]{margin-top:10px;text-align:left;margin-left:10px}.price[data-v-12762528]{color:#ef8341}.img-container[data-v-12762528]{overflow:hidden;background:hsla(0,0%,96.1%,.96078)}.product-card img[data-v-12762528]{margin-top:20px;height:160px;width:115px;overflow:hidden}.quickView[data-v-12762528]{background:#a3a3a3;opacity:0;padding:15px 0;transform:translateY(50px);transition:transform .5s ease-in-out}.quickView span[data-v-12762528]{font-size:20px;margin:0 15px;color:#fff;cursor:pointer}.quickView span[data-v-12762528]:hover{color:#ef8341}.product-card:hover .quickView[data-v-12762528]{opacity:1;transform:translateY(0)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=products-display.js.map