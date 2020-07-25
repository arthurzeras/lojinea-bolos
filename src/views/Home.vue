<template>
  <section class="home">
    <article class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Lojinea de Bolos
          </h1>
          <h2 class="subtitle">
            Todo mundo gosta de bolos
          </h2>
        </div>
      </div>
    </article>

    <article class="container mt-2 mb-2">
      <div class="columns is-mobile is-multiline">
        <div
          :key="cake.id"
          v-for="cake in cakesList"
          class="column is-one-quarter-desktop is-half-tablet is-full-mobile"
        >
          <cake-card ref="cakeCard" :cake="cake" @showImage="showImage($event)" />
        </div>
      </div>
    </article>

    <div class="modal" :class="{ 'is-active': modal.visible }">
      <div class="modal-background" @click="modal.visible = false"></div>
      <div class="modal-content">
        <p class="image">
          <img :src="modal.cake.image" :alt="modal.cake.name">
        </p>

        <p class="has-text-centered pt-5">
          <button class="button is-primary mr-4" @click="addToBasket()">
            Adicionar à sacola
          </button>

          <a :href="modal.cake.post" target="_blank" class="button is-dark">
            Ver original
          </a>
        </p>
      </div>
      <button class="modal-close is-large"  @click="modal.visible = false"></button>
    </div>
  </section>
</template>

<script>
import cakesList from '@/datasets/cakes-list';
import CakeCard from '@/components/CakeCard.vue';

export default {
  name: 'Home',

  components: { CakeCard },

  data: () => ({
    cakesList,
    modal: {
      cake: {},
      visible: false,
    },
  }),

  methods: {
    showImage(cake) {
      this.modal.cake = cake;
      this.modal.visible = true;
    },

    addToBasket() {
      const component = Array.from(this.$refs.cakeCard)
        .find(({ cake }) => cake.id === this.modal.cake.id);

      component.addToBasket();

      this.modal.visible = false;
    },
  },
};
</script>

<style lang="scss">
.home {
  overflow-y: auto;
  height: calc(100vh - 176px);
  .container {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .modal {
    .modal-content {
      .image {
        img {
          object-fit: contain;
          max-height: calc(100vh - 224px);
        }
      }
    }
  }
}
</style>
