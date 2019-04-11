import Vue from 'vue';
import Router from 'vue-router';
import APIs from '@/views/APIs.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'apis',
            component: APIs,
        }
    ],
});
