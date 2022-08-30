<template>
  <MainContainer />
</template>

<script>
import MainContainer from './components/MainContainer.vue';

export default {
  name: 'App',
  components: {
    MainContainer,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f5f5f5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
