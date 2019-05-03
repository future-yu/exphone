import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from './api/index'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(router);

Vue.prototype.api = api;
new Vue({
  router,
  store,
  render: (h) => {
    return h(App)
  },
  el:'#app'
});
