<template>
  <div class="card cake-card">
    <div class="card-image">
      <figure class="image">
        <img :src="cake.image" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content" :title="cake.name">
      <div class="media">
        <div class="media-content">
          <p class="title is-6">{{ cake.name }}</p>
          <p class="subtitle is-4">{{ cake.price | price }}</p>
        </div>
      </div>

      <div class="content">
        <button class="button is-primary is-rounded" @click="addToBasket()">
          Adicionar a cesta
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Store from '@/store';

export default {
  name: 'CakeCard',

  props: {
    cake: { type: Object, required: true },
  },

  filters: {
    price(price) {
      const options = {
        currency: 'BRL',
        style: 'currency',
      };

      return new Intl.NumberFormat('pt-br', options).format(price);
    },
  },

  methods: {
    addToBasket() {
      Store.mutations.MutateBasketList(this.cake);
    },
  },
};
</script>

<style lang="scss" scoped>
.cake-card {
  .image {
    height: 300px;

    img {
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
