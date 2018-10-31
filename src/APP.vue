<template>
  <div id="app">
      <h1 class="title">vue-server-side-render</h1>
      <router-link class="link" to="/foo">首页</router-link>
      <router-link class="link" to="/bar">热点</router-link>

      <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="css">
  .title {
    width: 100%;
    text-align: center;
  }
  .link {
    display: inline-block;
    width: 50%;
    text-align: center;
    line-height: 30px;
  }
</style>
