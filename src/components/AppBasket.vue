<template>
  <div class="modal basket" :class="{ 'is-active': active }">
    <div class="modal-background" @click="hideBasket()" />
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Cesta de bolos</p>
        <button class="delete" aria-label="close" @click="hideBasket()" />
      </header>

      <section class="modal-card-body">
        <div class="is-size-3 has-text-centered" v-if="!basketList.length">
          <div>😔</div>
          <small>a cesta está vazia</small>
        </div>

        <template v-else>
          <div class="box" v-for="cake in basketList" :key="cake.id">
            <article class="media">
              <div class="media-left">
                <figure class="image">
                  <img :src="cake.image" alt="Image">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>{{ cake.name }}</strong>
                  </p>

                  <div class="columns mb-2">
                    <div class="column">
                      {{ cake | totalPrice }}
                    </div>
                    <div class="column">
                      <div class="field has-addons">
                        <p class="control">
                          <a class="button is-small" @click="changeQuantity(cake, 'del')">
                            <span class="icon">
                              <span>-</span>
                            </span>
                          </a>
                        </p>
                        <p class="control">
                          <input
                            readonly
                            type="number"
                            class="input is-small"
                            :value="cake.quantity"
                          >
                        </p>
                        <p class="control">
                          <a class="button is-small" @click="changeQuantity(cake, 'add')">
                            <span class="icon">
                              <span>+</span>
                            </span>
                          </a>
                        </p>
                      </div>
                    </div>

                    <div class="column has-text-right">
                      <button
                        @click="removeCake(cake)"
                        class="button is-small is-danger is-outlined is-rounded"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div class="has-text-right">
            <small>Total:</small>
            <div class="is-size-3">{{ finalPrice }}</div>
          </div>
        </template>
      </section>

      <footer class="modal-card-foot">
        <button class="button is-primary" :disabled="!basketList.length" @click="checkout()">
          Finalizar compra
        </button>
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

    basketList() {
      return Store.state.basketList;
    },

    finalPrice() {
      const final = Store.state.basketList.reduce((total, cake) => {
        let tot = total;
        tot += (cake.price * cake.quantity);
        return tot;
      }, 0);

      const options = {
        currency: 'BRL',
        style: 'currency',
      };

      return new Intl.NumberFormat('pt-br', options).format(final);
    },
  },

  filters: {
    totalPrice(cake) {
      const options = {
        currency: 'BRL',
        style: 'currency',
      };

      return new Intl.NumberFormat('pt-br', options).format(cake.price * cake.quantity);
    },
  },

  methods: {
    hideBasket() {
      Store.mutations.MutateBasket(false);
    },

    changeQuantity(cake, action) {
      Store.mutations.MutateQuantityBasketList(cake, action);
    },

    removeCake(cake) {
      Store.mutations.MutateDeletionBasketList(cake);
    },

    checkout() {
      this.hideBasket();

      const payload = {
        visible: true,
        message: '<h1>Obrigado por comprar com a gente 😍😍</h1><br><p>Seus bolos chegarão em breve</p>',
      };

      Store.mutations.MutateNotification(payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.basket {
  .modal-card-body {
    .media-left {
      .image {
        width: 64px;
        height: 64px;

        img {
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
      }
    }

    .columns {
      .input {
        width: 50px;
        text-align: center;
      }
    }
  }
}
</style>
