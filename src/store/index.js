import Vue from 'vue';

const state = Vue.observable({
  basket: false,
  notification: { visible: false, message: '' },
  basketList: JSON.parse(localStorage.getItem('basket::list')) || [],
});

const mutations = {
  MutateNotification: ({ visible, message }) => {
    state.notification.visible = visible;
    state.notification.message = message;

    setTimeout(() => {
      state.notification.message = '';
      state.notification.visible = false;
    }, 4000);
  },

  MutateBasket: (show = true) => {
    state.basket = show;
  },

  MutateInsertionBasketList: (cake) => {
    const inListIndex = state.basketList.findIndex(({ id }) => id === cake.id);

    if (inListIndex !== -1) {
      state.basketList[inListIndex].quantity += 1;
    } else {
      state.basketList.push({ ...cake, quantity: 1 });
    }

    localStorage.setItem('basket::list', JSON.stringify(state.basketList));
  },

  MutateDeletionBasketList: (cake) => {
    const inListIndex = state.basketList.findIndex(({ id }) => id === cake.id);

    if (inListIndex === -1) return;

    state.basketList.splice(inListIndex, 1);

    localStorage.setItem('basket::list', JSON.stringify(state.basketList));
  },

  MutateQuantityBasketList: (cake, action) => {
    if (action === 'add') return mutations.MutateInsertionBasketList(cake);

    const inListIndex = state.basketList.findIndex(({ id }) => id === cake.id);

    if (state.basketList[inListIndex].quantity - 1 === 0) {
      return mutations.MutateDeletionBasketList(cake);
    }

    state.basketList[inListIndex].quantity -= 1;

    return localStorage.setItem('basket::list', JSON.stringify(state.basketList));
  },
};

const Store = {
  state,
  mutations,
};

export default Store;
