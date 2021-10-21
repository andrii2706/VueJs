<template>
  <div id="app" class="bg-green-200 w-full h-full">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="flex justify-center items-center">
    <buttons/>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

// eslint-disable-next-line import/extensions
import Buttons from './components/buttons/buttons';

export default {
  name: 'App',
  components: {
    Buttons,
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
