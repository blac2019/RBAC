import Vue from "vue";
import Router from "vue-router";
import Routers from "./routers.js";
import routeUtil from "./util";

import wy from "@src/library";

Vue.use(Router);

const router = new Router({
  routes: Routers
});

router.beforeEach((to, from, next) => {
  // 当前用户未登录
  if (!routeUtil.hasLogin()) {
    // 记录当前跳转页
    $wy.Referer = to;

    next(wy.config.SYSTEM.LOGIN_PAGE);

    return;
  }
  // 当前用户已登录, 但未渲染路由
  else if (!routeUtil.hasRenderRoutes()) {
    routeUtil.renderRoutes(router);

    next({
      path: to.path
    });

    return;
  }

  next();
});

export default router;
