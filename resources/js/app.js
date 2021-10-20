import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(Vuex);

import OverviewPage from '@/pages/OverviewPage';
import SignInPage from './pages/SignInPage';

import auth from './store/auth';

const store = new Vuex.Store({
    modules: {
        auth
    }
});

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: SignInPage,
            name: 'login-page'
        },
        {
            path: '/overview',
            component: OverviewPage,
            name: 'overview-page'
        }
    ]
})

store.dispatch('auth/me').then(() => {
    new Vue({
        el: '#app',
        router: router,
        store: store,
    })
})