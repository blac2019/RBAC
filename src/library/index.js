/*
 * @Author: wy
 * @Description: 基础依赖入口，并以插件形式，向外暴露
 * @Date: 2017-07-05 16:07:33
 */

/* eslint-disable */

// prototype
import "./prototype/date";
import "./prototype/number";
import "./prototype/string";

// components
import Table from "./components/table";
import Dialog from "./components/dialog";

// directive
import drag from "./directive/drag";
import focus from "./directive/focus";

// http
import http from "./http";

// util
import util from "./helper/util";
import cache from "./helper/cache";
import validate from "./helper/validate";

// service
import service from "@src/service";
// config
import config from "@src/config";
// type
import type from "@src/type";

export const install = function(Vue) {
  const wy = { http, util, cache, validate, config, type, service };

  // 暴露全局实例
  // 挂载到 Vue
  Window.$wy = wy;
  global.$wy = wy;
  Vue.prototype.$wy = wy;

  // 注册 component
  const components = [Table, Dialog];
  components.map(component => {
    Vue.use(component);
  });

  // 注册 directive
  const directive = [drag, focus];
  directive.map(directive => {
    Vue.directive(directive.name, directive);
  });

  console.log("wy has been installed");
};

/** lib */
export default {
  /** http 请求类 */
  http,

  /** 工具类 */
  util,

  /** 缓存类 */
  cache,

  /** 验证类 */
  validate,

  /** 常量类 */
  type,

  /** 配置类 */
  config,

  /** 服务类 */
  service,

  /** vue plugin */
  install
};
