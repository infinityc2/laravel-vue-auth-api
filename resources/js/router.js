import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

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
        meta: {
            auth: false
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./components/Login'),
        meta: {
            auth: false
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('./components/Dashboard'),
        meta: {
            auth: true
        }
    }
];

const router = new VueRouter({
    mode: 'hash',
    routes
});

router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('token');
    if (to.matched.some(record => record.meta.auth)) {
        if (!!token) {
            next();
        } else {
            next({
                path: '/login',
            });
        }
    } else {
        next();
    }
})

export default router;
