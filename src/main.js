import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
Vue.use(ElementUI)
Vue.use(router)
new Vue({
  router,
  store,
  render: (h) => {
    return h(App)
  },
  el:'#app'
});
