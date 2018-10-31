<template>
  <div class="">
    <pre>
      ├── build
      │   ├── webpack.base.config.js     # 基本配置文件
      │   ├── webpack.client.config.js   # 客户端配置文件
      │   ├── webpack.server.config.js   # 服务端配置文件
      └── src
          ├── router
          │    └── index.js              # 路由
          └── views
          │    ├── comp1.vue             # 组件
          │    └── copm2.vue             # 组件
          ├── App.vue                    # 顶级 vue 组件
          ├── app.js                     # app 入口文件
          ├──  client-entry.js           # client 的入口文件
          ├──  index.template.html       # html 模板
          ├──  server-entry.js           # server 的入口文件
      ├──  server.js           # server 服务
    </pre>
  </div>
</template>

<script>
export default {
    data () {
        return {
            text: ``
        };
    }
};
</script>

<style lang="css">
</style>
