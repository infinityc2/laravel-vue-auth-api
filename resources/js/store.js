import Vue from 'vue';
import Vuex from 'vuex';
import axios from './axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || '',
        articles: []
    },
    mutations: {
        async setToken(state, payload) {
            state.token = await payload
        },
        async setArticles(state, payload) {
            state.articles = await payload
        }
    },
    actions: {
        async fetchArticles({ commit }) {
            await axios.get('articles').then(response => {
                commit('setArticles', response.data)
            })
        }
    }
});
