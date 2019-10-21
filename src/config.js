/*
 * @Author: bl
 * @Description: 程序配置文件
 * @Date: 2017-12-05
 */

export const config = {
  /** 系统配置项 */
  SYSTEM: {
    /** 系统标题 */
    TITLE: "万家云医医生工作站",

    /** 主页 */
    MAIN_PAGE: "/layout",

    /** 登录页 */
    LOGIN_PAGE: "/login"
  },

  MENUS: [
    { id: 1, parentId: null, name: "module", path: null, component: "views/modules/Module1.vue" },
    { id: 11, parentId: 1, name: "module1", path: "module1", component: "views/modules/Module1.vue" },
    { id: 12, parentId: 1, name: "module2", path: "module2", component: "views/modules/Module2.vue" }
  ],

  /** API */
  API: {
    /** rbac */
    rbac: process.env.VUE_APP_RBAC_API,

    /** module */
    moduleA: process.env.VUE_APP_MODULE_API
  }
};

export default config;
