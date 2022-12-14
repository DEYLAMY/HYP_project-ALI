import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _32d51a46 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _66af363d = () => interopDefault(import('..\\pages\\all-events\\index.vue' /* webpackChunkName: "pages/all-events/index" */))
const _74439dd5 = () => interopDefault(import('..\\pages\\all-itineraries\\index.vue' /* webpackChunkName: "pages/all-itineraries/index" */))
const _400b80ed = () => interopDefault(import('..\\pages\\all-Festivals\\index.vue' /* webpackChunkName: "pages/all-Festivals/index" */))
const _19b43250 = () => interopDefault(import('..\\pages\\all-services\\index.vue' /* webpackChunkName: "pages/all-services/index" */))
const _35dabc4b = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _372858dd = () => interopDefault(import('..\\pages\\all-events\\event\\index.vue' /* webpackChunkName: "pages/all-events/event/index" */))
const _a0371698 = () => interopDefault(import('..\\pages\\all-itineraries\\itinerary\\index.vue' /* webpackChunkName: "pages/all-itineraries/itinerary/index" */))
const _64a3c486 = () => interopDefault(import('..\\pages\\all-Festivals\\Festivals\\index.vue' /* webpackChunkName: "pages/all-Festivals/Festivals/index" */))
const _5692c467 = () => interopDefault(import('..\\pages\\all-services\\service\\index.vue' /* webpackChunkName: "pages/all-services/service/index" */))
const _064d4da2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _32d51a46,
    name: "about"
  }, {
    path: "/all-events",
    component: _66af363d,
    name: "all-events"
  }, {
    path: "/all-itineraries",
    component: _74439dd5,
    name: "all-itineraries"
  }, {
    path: "/all-Festivals",
    component: _400b80ed,
    name: "all-Festivals"
  }, {
    path: "/all-services",
    component: _19b43250,
    name: "all-services"
  }, {
    path: "/contact-us",
    component: _35dabc4b,
    name: "contact-us"
  }, {
    path: "/all-events/event",
    component: _372858dd,
    name: "all-events-event"
  }, {
    path: "/all-itineraries/itinerary",
    component: _a0371698,
    name: "all-itineraries-itinerary"
  }, {
    path: "/all-Festivals/Festivals",
    component: _64a3c486,
    name: "all-Festivals-Festivals"
  }, {
    path: "/all-services/service",
    component: _5692c467,
    name: "all-services-service"
  }, {
    path: "/",
    component: _064d4da2,
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
