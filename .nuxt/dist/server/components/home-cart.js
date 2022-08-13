exports.ids = [2];
exports.modules = {

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3d7b501e", content, true, context)
};

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/HomeCart.vue?vue&type=template&id=d8cc11e8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"cart-container\" data-v-d8cc11e8>","</div>",_vm._l((_vm.category),function(item){return _vm._ssrNode("<li class=\"cart\" data-v-d8cc11e8>","</li>",[_c('nuxt-link',{attrs:{"to":'/' + item.route}},[(item.status == 'Upcoming')?_c('p',[_vm._v(_vm._s(item.status))]):_vm._e(),_vm._v(" "),_c('img',{attrs:{"src":item.img,"alt":""}}),_vm._v(" "),_c('h3',[_vm._v(_vm._s(item.name))])])],1)}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Home/HomeCart.vue?vue&type=template&id=d8cc11e8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/HomeCart.vue?vue&type=script&lang=js&
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
/* harmony default export */ var HomeCartvue_type_script_lang_js_ = ({
  name: "HomeCart",

  created() {
    this.$emit("home-category", this.category);
  },

  data() {
    return {
      category: [{
        id: 1,
        name: "Islamic Product",
        img: "img/categoryImg/islamic_product.webp",
        status: "",
        route: "islamic"
      }, {
        id: 2,
        name: "Grocery",
        img: "img/categoryImg/grocery.webp",
        status: "",
        route: "grocery"
      }, {
        id: 3,
        name: "Fashion",
        img: "img/categoryImg/fashion.webp",
        status: "",
        route: "fashion"
      }, {
        id: 4,
        name: "Electronics",
        img: "img/categoryImg/electronics.webp",
        status: "Upcoming",
        route: "electronics"
      }, {
        id: 5,
        name: "Baby Care",
        img: "img/categoryImg/baby_care.webp",
        status: "Upcoming",
        route: "babyCare"
      }, {
        id: 6,
        name: "Cosmetics",
        img: "img/categoryImg/cosmetic.webp",
        status: "Upcoming",
        route: "cosmetics"
      }, {
        id: 7,
        name: "Furniture",
        img: "img/categoryImg/furniture.webp",
        status: "Upcoming",
        route: "furniture"
      }, {
        id: 8,
        name: "Shoes",
        img: "img/categoryImg/shoe.webp",
        status: "Upcoming",
        route: "shoes"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/Home/HomeCart.vue?vue&type=script&lang=js&
 /* harmony default export */ var Home_HomeCartvue_type_script_lang_js_ = (HomeCartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Home/HomeCart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(87)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Home_HomeCartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d8cc11e8",
  "60ceac59"
  
)

/* harmony default export */ var HomeCart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_homeCart_css_vue_type_style_index_0_id_d8cc11e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_homeCart_css_vue_type_style_index_0_id_d8cc11e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_homeCart_css_vue_type_style_index_0_id_d8cc11e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_homeCart_css_vue_type_style_index_0_id_d8cc11e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_homeCart_css_vue_type_style_index_0_id_d8cc11e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a[data-v-d8cc11e8]{text-decoration:none}.container[data-v-d8cc11e8]{margin-top:100px}.cart-container[data-v-d8cc11e8]{width:70%;display:grid;grid-template-columns:repeat(4,1fr);margin:auto}.cart[data-v-d8cc11e8]{list-style:none;box-shadow:0 2px 5px -1px rgba(50,50,93,.25),0 1px 3px -1px rgba(0,0,0,.3);margin:12px;padding:30px 20px;border-radius:5px;transition:all .5s}.cart[data-v-d8cc11e8]:hover{box-shadow:0 3px 8px rgba(0,0,0,.24);transform:translateY(-10px)}.cart p[data-v-d8cc11e8]{font-family:\"Rajdhani\",sans-serif;float:right;background:green;color:#fff;padding:5px 10px;border-radius:30px}.cart img[data-v-d8cc11e8]{width:100%}.cart h3[data-v-d8cc11e8]{font-family:\"Rajdhani\",sans-serif;text-align:center;color:grey;font-weight:700}@media screen and (max-width:1400px){.cart-container[data-v-d8cc11e8]{width:70%;display:grid;grid-template-columns:repeat(4,1fr);margin:auto}}@media screen and (max-width:1200px){.cart-container[data-v-d8cc11e8]{width:75%;display:grid;grid-template-columns:repeat(3,1fr);margin:auto}}@media screen and (max-width:992px){.cart-container[data-v-d8cc11e8]{width:80%;display:grid;grid-template-columns:repeat(3,1fr);margin:auto}}@media screen and (max-width:768px){.cart-container[data-v-d8cc11e8]{width:85%;display:grid;grid-template-columns:repeat(2,1fr);margin:auto}}@media screen and (max-width:576px){.cart-container[data-v-d8cc11e8]{width:90%;display:grid;grid-template-columns:repeat(1,1fr);margin:auto}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=home-cart.js.map