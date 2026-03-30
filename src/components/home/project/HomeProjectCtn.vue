<script setup>
import HomeProjectTitle from './HomeProjectTitle.vue';
</script>

<template>
    <section class="home-project-ctn display-flex-justify-center-place-center">
        <HomeProjectTitle/>
    </section>
</template>

<style scoped>
.home-project-ctn{
    min-height: 100vh;
    padding: 4vh var(--desktop-left-right-space);
}
</style>