<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <pagination/>
    </div>
    <div class="flex justify-center items-center">
      <bages/>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

// eslint-disable-next-line import/extensions
import Bages from '@/components/bages/bages';
// eslint-disable-next-line import/extensions
import Pagination from '@/components/pagination/pagination';

// import Pagination from './components/pagination/pagination';

export default {
  name: 'App',
  components: {
    Pagination,
    Bages,
    // Pagination,
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
