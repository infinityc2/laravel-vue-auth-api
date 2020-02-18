import Vue from 'vue';
import Vuex from 'vuex';
import axios from './axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('auth-token') || '',
        status: ''
    },
    getters: {
        isAuthenticated: state => !!state.token
    },
    mutations: {
        authRequest: (state) => {
            state.status = 'loading'
        },
        authSuccess: (state, payload) => {
            state.status = 'success'
            state.token = payload
        },
        authError: (state) => {
            state.status = 'error'
        },
        authLogout: state => {
            state.token = ''
        }
    },
    actions: {
        authRequest: ({ commit, dispatch }, user) => {
            return new Promise((resolve, reject) => {
                commit('authRequest')
                axios.post('login', user)
                    .then(response => {
                        const token = response.data.success.token;
                        localStorage.setItem('auth-token', token)
                        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                        commit('authSuccess', token)
                        resolve(token)
                    })
                    .catch(error => {
                        commit('authError')
                        localStorage.removeItem('auth-token')
                        reject(error)
                    })
            })
        },
        authLogout: ({ commit, dispatch }) => {
            return new Promise((resolve, reject) => {
                commit('authLogout')
                localStorage.removeItem('auth-token')

                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        },
        userRegister: ({ commit, dispatch }, user) => {
            return new Promise((resolve, reject) => {
                axios.post('register', user)
                    .then(response => {
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        }
    }
});
