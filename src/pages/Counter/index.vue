<script setup>
  import { computed, reactive, ref } from 'vue';
  import { useStore } from 'vuex';

  // reactive
  const num = ref(0);

  // vuex
  const store = useStore();
  console.log('store', store);
  const count = computed(() => {
    return store.state.common.count;
  });
  const doubleCount = computed(() => {
    return store.getters['common/doubleCount'];
  });
  const increment = () => store.dispatch('common/increment');
  const decrement = () => store.dispatch('common/decrement');
</script>

<template>
  <div>counter page</div>
  <p>reactive value</p>
  <div class="box">
    <button @click="--num">减</button>
    <span>{{ num }}</span>
    <button @click="++num">加</button>
  </div>

  <div class="box">
    <p>vuex</p>
    <button @click="decrement">减</button>
    <span>{{ count }}</span>
    <button @click="increment">加</button>
    <span>double count: {{ doubleCount }}</span>
  </div>
</template>

<style scoped lang="less">
  button {
    width: 60px;
    height: 30px;
  }
  .box {
    margin-top: 20px;
    span {
      margin: 0 6px;
      font-size: 1.5rem;
    }
  }
</style>
