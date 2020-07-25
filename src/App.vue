<template>
  <div id="app">
    <app-navbar />
    <app-basket />
    <router-view />
    <app-notification />
    <app-footer />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppBasket from './components/AppBasket.vue';
import AppFooter from './components/AppFooter.vue';
import AppNotification from './components/AppNotification.vue';

export default {
  name: 'App',

  components: {
    AppNavbar,
    AppBasket,
    AppFooter,
    AppNotification,
  },
};
</script>
