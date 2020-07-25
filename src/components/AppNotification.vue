<template>
  <div class="notification is-primary" v-if="state.visible">
    <button class="delete" @click="close()"></button>
    <div v-html="state.message" class="has-text-dark"></div>
  </div>
</template>

<script>
import Store from '@/store';

export default {
  data: () => ({ visible: false }),

  computed: {
    state() {
      return Store.state.notification;
    },
  },

  methods: {
    close() {
      Store.mutations.MutateNotification({ visible: false, message: '' });
    },
  },
};
</script>

<style lang="scss" scoped>
.notification {
  left: 100px;
  bottom: 50px;
  max-width: 50vh;
  position: absolute;
}

@media (max-width: 768px) {
  .notification {
    left: 0;
    margin: 0 20px;
    width: calc(100% - 40px);
  }
}
</style>
