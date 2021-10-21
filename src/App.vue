<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="flex justify-center items-center">
      <pagination/>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

// eslint-disable-next-line import/extensions
import Pagination from './components/pagination/pagination';

export default {
  name: 'App',
  components: {
    Pagination,
    // HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
