<script setup>
import { RouterView } from 'vue-router';
import HeaderMain from './components/header/HeaderMain.vue';
import FooterMain from './components/footer/FooterMain.vue';
</script>

<template>
  <HeaderMain/>
  <RouterView />
  <FooterMain/>
</template>