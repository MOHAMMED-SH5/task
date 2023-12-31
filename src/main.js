import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import bootstrab vue files
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.config.productionTip = false





import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';
// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
localize('en', en);
// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
