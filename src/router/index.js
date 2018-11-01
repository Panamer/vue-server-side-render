// router.js
import Vue from 'vue';
import Router from 'vue-router';
import routeConfig from './routes';

Vue.use(Router);

export function createRouter () {
    const router = new Router({
        mode: 'history',
        routes: routeConfig
    });

    // router.beforeEach((to, from, next) => {
    //     document.title = to.meta.title || '服务端渲染';
    //     next();
    // });

    return router;
}
