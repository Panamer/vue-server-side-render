<template>
    <div class="">
      <pre>
                什么是服务端渲染，简单理解是将组件或页面通过服务器生成html字符串，再发送到浏览器，
                最后将静态标记混合为客户端上完全交互的应用程序。
                于传统的SPA（单页应用）相比，服务端渲染能更好的有利于SEO，减少页面首屏加载时间，
                当然对开发来讲我们就不得不多学一些知识来支持服务端渲染。同时服务端渲染对服务器的压力也是相对较大的，
                和服务器简单输出静态文件相比，通过node去渲染出页面再传递给客户端显然开销是比较大的，需要注意准备好相应的服务器负载。
      </pre>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="css">
</style>
