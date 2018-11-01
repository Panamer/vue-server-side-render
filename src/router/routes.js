const routes = [
    {
        path: '/',
        redirect: { name: 'foo' },
        meta: {
            title: '首页'
        }
    },
    {
        path: '/foo',
        name: 'foo',
        component: resolve => require(['../components/Foo'], resolve),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/bar',
        name: 'bar',
        component: resolve => require(['../components/Bar'], resolve),
        meta: {
            title: '热点'
        }
    }
];

module.exports = routes;
