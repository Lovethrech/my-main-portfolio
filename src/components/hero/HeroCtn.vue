<script setup>
import HeroUserProfileImage from './HeroUserProfileImage.vue';
</script>

<template>
    <section class="hero-ctn">
        <HeroUserProfileImage/>
    </section>
</template>

<style scoped>
.hero-ctn{
    min-height: 40vh;
    background-color: var(--general-components-bg-color);
}
</style>