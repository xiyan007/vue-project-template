<script setup>
  import { onMounted } from 'vue';
  defineProps({
    msg: String,
  });

  onMounted(() => {
    console.log('layout mounted')
  })
</script>

<template>
  <div class="container">
    <div class="page-title">{{ msg }}</div>
    <div class="main-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .container {
    background: #eee;
    padding: 16px;
  }
  .page-title {
    background: #fff;
    padding: 10px;
  }
  .main-content {
    background: #fff;
    margin-top: 12px;
    min-height: 300px;
    padding: 10px;
  }
</style>
