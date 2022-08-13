import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _052f3ede = () => interopDefault(import('..\\pages\\babyCare\\index.vue' /* webpackChunkName: "pages/babyCare/index" */))
const _018c18eb = () => interopDefault(import('..\\pages\\cosmetics\\index.vue' /* webpackChunkName: "pages/cosmetics/index" */))
const _7aeedbd8 = () => interopDefault(import('..\\pages\\electronics\\index.vue' /* webpackChunkName: "pages/electronics/index" */))
const _a7633912 = () => interopDefault(import('..\\pages\\fashion\\index.vue' /* webpackChunkName: "pages/fashion/index" */))
const _7da9b886 = () => interopDefault(import('..\\pages\\furniture\\index.vue' /* webpackChunkName: "pages/furniture/index" */))
const _1d4b8102 = () => interopDefault(import('..\\pages\\grocery\\index.vue' /* webpackChunkName: "pages/grocery/index" */))
const _bc88dd32 = () => interopDefault(import('..\\pages\\islamic\\index.vue' /* webpackChunkName: "pages/islamic/index" */))
const _19866d87 = () => interopDefault(import('..\\pages\\shoes\\index.vue' /* webpackChunkName: "pages/shoes/index" */))
const _cf8650c2 = () => interopDefault(import('..\\pages\\fashion\\_id.vue' /* webpackChunkName: "pages/fashion/_id" */))
const _dfbf07fa = () => interopDefault(import('..\\pages\\fashion\\_id\\index.vue' /* webpackChunkName: "pages/fashion/_id/index" */))
const _e8630e50 = () => interopDefault(import('..\\pages\\fashion\\_id\\productReview.vue' /* webpackChunkName: "pages/fashion/_id/productReview" */))
const _fe58321a = () => interopDefault(import('..\\pages\\fashion\\_id\\productSellerDetails.vue' /* webpackChunkName: "pages/fashion/_id/productSellerDetails" */))
const _7ff9ea33 = () => interopDefault(import('..\\pages\\fashion\\_id\\productSpecification.vue' /* webpackChunkName: "pages/fashion/_id/productSpecification" */))
const _6069dbea = () => interopDefault(import('..\\pages\\grocery\\_id.vue' /* webpackChunkName: "pages/grocery/_id" */))
const _b26318f6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/babyCare",
    component: _052f3ede,
    name: "babyCare"
  }, {
    path: "/cosmetics",
    component: _018c18eb,
    name: "cosmetics"
  }, {
    path: "/electronics",
    component: _7aeedbd8,
    name: "electronics"
  }, {
    path: "/fashion",
    component: _a7633912,
    name: "fashion"
  }, {
    path: "/furniture",
    component: _7da9b886,
    name: "furniture"
  }, {
    path: "/grocery",
    component: _1d4b8102,
    name: "grocery"
  }, {
    path: "/islamic",
    component: _bc88dd32,
    name: "islamic"
  }, {
    path: "/shoes",
    component: _19866d87,
    name: "shoes"
  }, {
    path: "/fashion/:id",
    component: _cf8650c2,
    children: [{
      path: "",
      component: _dfbf07fa,
      name: "fashion-id"
    }, {
      path: "productReview",
      component: _e8630e50,
      name: "fashion-id-productReview"
    }, {
      path: "productSellerDetails",
      component: _fe58321a,
      name: "fashion-id-productSellerDetails"
    }, {
      path: "productSpecification",
      component: _7ff9ea33,
      name: "fashion-id-productSpecification"
    }]
  }, {
    path: "/grocery/:id",
    component: _6069dbea,
    name: "grocery-id"
  }, {
    path: "/",
    component: _b26318f6,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
