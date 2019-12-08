import Vue from 'vue'
import App from './App.vue'
require("./assets/template/fonts.css");
require("./assets/template/main.css");


Vue.config.productionTip = true;

new Vue({
  render: h => h(App),
}).$mount('#app');
