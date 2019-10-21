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
  // 当前用户已登录, 但未渲染路由
  if (routeUtil.hasLogin() && !routeUtil.hasRenderRoutes()) {
    // Get user info by token
    wy.service.menu.get().then(() => {
      const mockUserInfo = {
        name: "Mock User Name",
        sex: "男",
        age: "12",
        menus: wy.config.MENUS
      };

      wy.cache.set(wy.type.USER.INFO, mockUserInfo, wy.type.CACHE.LOCAL);

      routeUtil.renderRoutes(router);

      return next({
        path: to.path
      });
    });

    return;
  }

  // 当前地址不需要授权登录
  if (!to.meta.hasOwnProperty("auth")) {
    return next();
  }

  // 当前用户未登录
  if (!routeUtil.hasLogin()) {
    // 记录当前跳转页
    $wy.Referer = to;

    return next({
      path: wy.config.SYSTEM.LOGIN_PAGE
    });
  }

  return next();
});

export default router;
