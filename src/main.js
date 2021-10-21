import Vue from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
// eslint-disable-next-line import/order
import VuejsPaginate from 'vuejs-paginate';

Vue.config.productionTip = false;
Vue.component('paginate', VuejsPaginate);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
