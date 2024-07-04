import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _65f5a8af = () => interopDefault(import('..\\pages\\babyCare\\index.vue' /* webpackChunkName: "pages/babyCare/index" */))
const _8cda2d8c = () => interopDefault(import('..\\pages\\cosmetics\\index.vue' /* webpackChunkName: "pages/cosmetics/index" */))
const _4c82d467 = () => interopDefault(import('..\\pages\\electronics\\index.vue' /* webpackChunkName: "pages/electronics/index" */))
const _651afb86 = () => interopDefault(import('..\\pages\\fashion\\index.vue' /* webpackChunkName: "pages/fashion/index" */))
const _7931f40c = () => interopDefault(import('..\\pages\\furniture\\index.vue' /* webpackChunkName: "pages/furniture/index" */))
const _53cfcdde = () => interopDefault(import('..\\pages\\grocery\\index.vue' /* webpackChunkName: "pages/grocery/index" */))
const _5a882976 = () => interopDefault(import('..\\pages\\islamic\\index.vue' /* webpackChunkName: "pages/islamic/index" */))
const _4567bd56 = () => interopDefault(import('..\\pages\\shoes\\index.vue' /* webpackChunkName: "pages/shoes/index" */))
const _77c3b124 = () => interopDefault(import('..\\pages\\fashion\\_id.vue' /* webpackChunkName: "pages/fashion/_id" */))
const _1de8d558 = () => interopDefault(import('..\\pages\\fashion\\_id\\index.vue' /* webpackChunkName: "pages/fashion/_id/index" */))
const _6a37b129 = () => interopDefault(import('..\\pages\\fashion\\_id\\productReview.vue' /* webpackChunkName: "pages/fashion/_id/productReview" */))
const _6a5ae182 = () => interopDefault(import('..\\pages\\fashion\\_id\\productSellerDetails.vue' /* webpackChunkName: "pages/fashion/_id/productSellerDetails" */))
const _6980e4c2 = () => interopDefault(import('..\\pages\\fashion\\_id\\productSpecification.vue' /* webpackChunkName: "pages/fashion/_id/productSpecification" */))
const _e769a88e = () => interopDefault(import('..\\pages\\grocery\\_id.vue' /* webpackChunkName: "pages/grocery/_id" */))
const _6bf282d4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _65f5a8af,
    name: "babyCare"
  }, {
    path: "/cosmetics",
    component: _8cda2d8c,
    name: "cosmetics"
  }, {
    path: "/electronics",
    component: _4c82d467,
    name: "electronics"
  }, {
    path: "/fashion",
    component: _651afb86,
    name: "fashion"
  }, {
    path: "/furniture",
    component: _7931f40c,
    name: "furniture"
  }, {
    path: "/grocery",
    component: _53cfcdde,
    name: "grocery"
  }, {
    path: "/islamic",
    component: _5a882976,
    name: "islamic"
  }, {
    path: "/shoes",
    component: _4567bd56,
    name: "shoes"
  }, {
    path: "/fashion/:id",
    component: _77c3b124,
    children: [{
      path: "",
      component: _1de8d558,
      name: "fashion-id"
    }, {
      path: "productReview",
      component: _6a37b129,
      name: "fashion-id-productReview"
    }, {
      path: "productSellerDetails",
      component: _6a5ae182,
      name: "fashion-id-productSellerDetails"
    }, {
      path: "productSpecification",
      component: _6980e4c2,
      name: "fashion-id-productSpecification"
    }]
  }, {
    path: "/grocery/:id",
    component: _e769a88e,
    name: "grocery-id"
  }, {
    path: "/",
    component: _6bf282d4,
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
