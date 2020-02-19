import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';

Vue.use(VueRouter);

const ifAuthenticated = (to, from, next) => {
    if(store.getters.isAuthenticated) {
        next()
    } else {
        next('/login')
    }
}

const ifNotAuthenticated = (to, from, next) => {
    if(!store.getters.isAuthenticated) {
        next()
    } else {
        next('/dashboard')
    }
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./components/Home')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('./components/Register'),
        beforeEnter: ifNotAuthenticated
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./components/Login'),
        beforeEnter: ifNotAuthenticated
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('./components/Dashboard'),
        beforeEnter: ifAuthenticated,
        children: [
            {
                path: '',
                redirect: 'articles'
            },
            {
                path: 'articles',
                name: 'articles',
                component: () => import('./components/Articles')
            },
            {
                path: 'articles/:id',
                component: () => import('./components/DisplayArticle')
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'hash',
    routes
});

export default router;
