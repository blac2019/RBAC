import wy from "@src/library";

const BASE_API = "menu/{{id}}";

export const menu = {
  get: params => {
    const path = wy.config.API.rbac + BASE_API;
    const restAPI = wy.util.restAPIAdpater(path, params);

    return wy.http.get(restAPI, { params });
  },

  post: params => {
    const path = wy.config.API.rbac + BASE_API;
    const restAPI = wy.util.restAPIAdpater(path, params);

    return wy.http.post(restAPI, params);
  },

  put: params => {
    const path = wy.config.API.rbac + BASE_API;
    const restAPI = wy.util.restAPIAdpater(path, params);

    return wy.http.put(restAPI, params);
  },

  delete: params => {
    const path = wy.config.API.rbac + BASE_API;
    const restAPI = wy.util.restAPIAdpater(path, params);

    return wy.http.delete(restAPI, { params });
  }
};

export default menu;
