import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import axios from 'axios';
import VueMeta from 'vue-meta';

Vue.use(axios);
Vue.use(VueMeta, { refreshOnceOnNavigation: true }); 

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')