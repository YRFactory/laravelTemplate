import Vue from 'vue'
import axios from './plugins/axios'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import vuetify from './plugins/vuetify';
import VueMeta from 'vue-meta'

Vue.config.productionTip = false
Vue.use(axios);
Vue.use(VueMeta, { refreshOnceOnNavigation: true });

const createApp = async() => {
  await store.dispatch('auth/serchUser');

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')}

createApp();
