import Vue from "vue";
import store from "./store";
import router from "./router";
import App from "./App.vue";

// Library
import wy from "@/library";
Vue.use(wy.install);

// UI
import ElementUI from "element-ui";
Vue.use(ElementUI, { size: "small" });

// css
import "@src/assets/css/index.scss";

Vue.config.productionTip = false;

const vueAppInstance = new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");

// 兼容 IE 9、10 低版本的 __proto__
Object.setPrototypeOf ? Object.setPrototypeOf($wy, vueAppInstance) : ($wy.__proto__ = vueAppInstance);
