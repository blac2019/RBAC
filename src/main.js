import Vue from "vue";
import router from "./router";
import App from "./App.vue";

// Library
import wy from "@/library";
Vue.use(wy.install);

// UI
import ElementUI from "element-ui";
Vue.use(ElementUI, { size: "mini" });

// css
import "@src/assets/css/index.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
