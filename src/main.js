import Vue from 'vue';
// eslint-disable-next-line import/order
import App from './App.vue';
import './assets/tailwind.css';
// eslint-disable-next-line import/order
import VuejsPaginate from 'vuejs-paginate';
import VueFormulate from '@braid/vue-formulate';

Vue.use(VueFormulate);
Vue.config.productionTip = false;
Vue.component('paginate', VuejsPaginate);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
