<script setup>
  import { onMounted } from 'vue';
  import './index.less';

  defineProps({
    title: {
      type: String,
      default: 'App',
    },
  });

  onMounted(() => {
    console.log('layout mounted');
  });
</script>

<template>
  <div class="container">
    <div class="page-title">{{ title }}</div>
    <div class="page-content-wrap">
      <ul class="page-menu">
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/about">about</router-link></li>
        <li><router-link to="/counter">counter</router-link></li>
        <li><router-link to="/404">404</router-link></li>
      </ul>
      <div class="page-content"><router-view></router-view></div>
    </div>
  </div>
</template>
