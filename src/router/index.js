// router.js
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function createRouter () {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                redirect: { name: 'foo' }
            },
            {
                path: '/foo',
                name: 'foo',
                component: () => import('../components/Foo.vue')
            },
            {
                path: '/bar',
                name: 'bar',
                component: () => import('../components/Bar.vue')
            }
        ]
    });
}
