<template>
  <div class="modal" :class="{ 'is-active': active }">
    <div class="modal-background" @click="hideBasket()" />
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Cesta de bolos</p>
        <button class="delete" aria-label="close" @click="hideBasket()" />
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Prosseguir</button>
        <button class="button" @click="hideBasket()">Fechar</button>
      </footer>
    </div>
  </div>
</template>

<script>
import Store from '@/store';

export default {
  name: 'AppBasket',

  computed: {
    active() {
      return Store.state.basket;
    },
  },

  methods: {
    hideBasket() {
      Store.mutations.MutateBasket(false);
    },
  },
};
</script>
