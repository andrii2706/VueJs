<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--    <div class="flex justify-center items-center">-->
    <!--      <pagination/>-->
    <!--    </div>-->
    <!--    <div class="flex justify-center items-center">-->
    <!--      <bages/>-->
    <!--    </div>-->
    <!--    <div>-->
    <!--      <buttons/>-->
    <!--    </div>-->
    <div>
      <inputs/>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
// import Bages from '@/components/bages/bages';
// eslint-disable-next-line import/extensions
// import Pagination from '@/components/pagination/pagination';
// eslint-disable-next-line import/extensions
// import Buttons from '@/components/buttons/buttons';

// eslint-disable-next-line import/extensions
import Inputs from '@/components/inputs/inputs';

export default {
  name: 'App',
  components: {
    Inputs,
    // Buttons,
    // Pagination,
    // Bages,
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
