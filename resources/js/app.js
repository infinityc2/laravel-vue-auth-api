import Vue from 'vue';
import router from './router';
import App from './App.vue';
import axios from './axios';
import vuetify from './vuetify';
import store from './store';
import VueAxios from 'vue-axios';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap';

Vue.use(VueAxios, axios)

new Vue({
    el: '#app',
    router,
    vuetify,
    store,
    render: h => h(App)
});
