<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="@/assets/img/logo.svg" width="30" height="30" alt="logo">
      <span class=" ml-2">Lojinea de bolos</span>
    </a>
  </div>

  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" @click="openBasket()">
            <span class="basket-count has-background-warning has-text-black-bis">
              {{ basketItemsCount }}
            </span>
            <span class="icon">
              <img src="@/assets/img/cesta.svg" alt="cesta">
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import Store from '@/store';

export default {
  name: 'AppNavbar',

  computed: {
    basketItemsCount() {
      return Store.state.basketList.length;
    },
  },

  methods: {
    openBasket() {
      Store.mutations.MutateBasket(true);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  .basket-count {
    right: 0;
    top: -1px;
    line-height: 1;
    font-size: 0.8rem;
    position: absolute;
    border-radius: 50px;
    padding: 3px 3px 0 3px;
  }
}
</style>
