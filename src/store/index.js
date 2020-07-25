import Vue from 'vue';

const state = Vue.observable({
  basket: false,
});

const mutations = {
  MutateBasket: (show = true) => {
    state.basket = show;
  },
};

const Store = {
  state,
  mutations,
};

export default Store;
