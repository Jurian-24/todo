import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: OverviewPage,
            name: 'overview-page'
        }
    ]
})

new Vue({
    el: '#app',
    router: router,
})