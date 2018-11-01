const routes = [
    {
        title: '首页',
        path: '/',
        redirect: { name: 'foo' }
    },
    {
        path: '/foo',
        name: 'foo',
        title: '首页',
        component: resolve => require(['../components/Foo'], resolve)
    },
    {
        path: '/bar',
        name: 'bar',
        title: '热点',
        component: resolve => require(['../components/Bar'], resolve)
    }
];

module.exports = routes;
