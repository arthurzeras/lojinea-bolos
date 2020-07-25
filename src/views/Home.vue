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
          <cake-card :cake="cake" />
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import cakesList from '@/datasets/cakes-list';
import CakeCard from '@/components/CakeCard.vue';

export default {
  name: 'Home',

  components: { CakeCard },

  data: () => ({ cakesList }),
};
</script>

<style lang="scss">
.home {
  overflow-y: auto;
  height: calc(100vh - 168px);
  .container {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}
</style>
