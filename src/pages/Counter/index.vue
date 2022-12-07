<script setup>
  import { ref } from 'vue';

  const num = ref(1);
</script>

<template>
  <div>counter page</div>
  <div class="box">
    <button @click="--num">减</button>
    <span>{{ num }}</span>
    <button @click="++num">加</button>
  </div>
</template>

<style scoped lang="less">
  .box {
    margin-top: 16px;
    button {
      width: 60px;
      height: 30px;
    }
    span {
      margin: 0 6px;
      font-size: 1.5rem;
    }
  }
</style>
