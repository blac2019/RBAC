import wy from "@src/library";

export /**
 * 验证登录状态
 *
 * @returns
 */
const hasLogin = () => {
  return wy.cache.get(wy.type.USER.TOKEN);
};

export /**
 * 验证路由渲染状态
 *
 * @returns
 */
const hasRenderRoutes = () => {
  return wy.hasRenderRoutes;
};

export /**
 * 渲染路由
 *
 * @param {*} $router
 * @returns
 */
const renderRoutes = $router => {
  const menuTreeToRoutes = (menuTree, routes = []) => {
    menuTree.forEach(menu => {
      if (menu.hasOwnProperty("children")) {
        return menuTreeToRoutes(menu.children, routes);
      } else {
        routes.push({
          path: menu.path,
          name: menu.path,
          component: () => import(`@src/${menu.component}`)
        });
      }
    });

    return routes;
  };

  const menus = wy.cache.get(wy.type.USER.INFO).menus;
  const menuTree = wy.util.toTree(menus, "id", "parentId", "children");

  /** 组件路由配置 */
  const componentsRoutes = menuTreeToRoutes(menuTree);
  /** 功能路由配置 */
  const functionalityRoutes = [
    {
      path: "*",
      name: "componentNotFound",
      component: () => import("@src/components/NotFound.vue")
    }
  ];

  const appRouter = [
    {
      path: "/app",
      name: "/app",
      component: () => import("@src/components/layout/Index.vue"),
      children: [...componentsRoutes, ...functionalityRoutes]
    }
  ];

  $router.addRoutes(appRouter);

  wy.hasRenderRoutes = true;

  return wy.hasRenderRoutes;
};

export default {
  /** 验证登录状态 */
  hasLogin,

  /** 验证路由渲染状态 */
  hasRenderRoutes,

  /** 渲染路由 */
  renderRoutes
};
