<template>
  <div id="app">
    <app-navbar />
    <app-basket />
    <router-view/>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppBasket from './components/AppBasket.vue';

export default {
  name: 'App',

  components: { AppNavbar, AppBasket },
};
</script>

<style lang="scss"></style>
