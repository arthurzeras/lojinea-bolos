<template>
  <div>
    <div class="card cake-card">
      <div class="card-image">
        <a :href="cake.post" target="_blank">
          <figure class="image">
            <img :src="cake.image" alt="Placeholder image">
          </figure>
        </a>
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
            Adicionar à cesta
          </button>
        </div>
      </div>
    </div>

    <div class="box">
      <article class="media">
        <div class="media-left">
          <a :href="cake.post" target="_blank">
            <figure class="image">
              <img :src="cake.image" alt="Image">
            </figure>
          </a>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ cake.name }}</strong>
            </p>

            <div class="columns is-mobile">
              <div class="column is-size-4 is-size-5-mobile">
                {{ cake.price | price }}
              </div>
              <div class="column is-one-quarter-tablet is-two-quarter-mobile has-text-right">
                <div class="button is-primary" @click="addToBasket()">
                  <img src="@/assets/img/cesta.svg" width="20" alt="cesta">
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
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
      Store.mutations.MutateInsertionBasketList(this.cake);

      const notification = {
        visible: true,
        message: `${this.cake.name} adicionado à cesta`,
      };

      Store.mutations.MutateNotification(notification);
    },

    redirectToRedditPost() {
      window.open(this.cake.post, '_blank');
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
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
}

.box {
  display: none;
}

@media (max-width: 768px) {
  .cake-card {
    display: none;
  }

  .box {
    display: block;

    .media-left {
      .image {
        width: 64px;
        height: 64px;

        img {
          border-radius: 10px;
        }
      }
    }

    .media-content {
      overflow: hidden;
      .content {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
      }
    }
  }
}
</style>
