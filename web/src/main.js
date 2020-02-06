import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
require("./assets/template/fonts.css");
require("./assets/template/main.css");

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = true;

Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
}).$mount('#app');
