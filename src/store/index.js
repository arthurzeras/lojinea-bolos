import Vue from 'vue';

const state = Vue.observable({
  basket: false,
  basketList: [],
});

const mutations = {
  MutateBasket: (show = true) => {
    state.basket = show;
  },

  MutateBasketList: (cake) => {
    state.basketList.push(cake);
  },
};

const Store = {
  state,
  mutations,
};

export default Store;
