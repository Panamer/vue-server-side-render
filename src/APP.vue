<template>
  <div id="app">
    <h1>vue-ssr</h1>
      <router-link class="link" to="/foo">to comp1</router-link>
      <router-link class="link" to="/bar">to comp2</router-link>

      <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="css">
</style>
