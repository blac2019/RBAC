import Vue from 'vue'
import Router from 'vue-router'
import Routers from './routers.js'

Vue.use(Router)

const router = new Router({
  routes: Routers
})

router.beforeEach((to, from, next) => {
  return next()
})

export default router
