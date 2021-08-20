<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import routerview from 'vue-router';
export default {
  name: 'App',
  components: {
    routerView: routerview
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
