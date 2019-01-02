import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import iView from "iview";
import "iview/dist/styles/iview.css";
import "../src/style/reset.css";
import "../src/style/layout.css";

Vue.use(iView, {
  transfer: true,
  size: "default"
});

Vue.config.productionTip = false; //阻止 vue 在启动时生成生产提示

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});
