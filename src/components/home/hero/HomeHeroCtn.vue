<script setup>
import HomeHeroTextAndBtnCtn from './HomeHeroTextAndBtnCtn.vue';
import HomeHeroUserProfileImage from './HomeHeroUserProfileImage.vue';
</script>

<template>
    <section class="hero-ctn display-flex-direction-row-justify-space-between">
        <HomeHeroTextAndBtnCtn/>
        <HomeHeroUserProfileImage/>
    </section>
</template>

<style scoped>
.hero-ctn{
    min-height: 40vh;
    background-color: var(--general-components-bg-color);
}

@media screen and (max-width: 1024px) {
    .hero-ctn{
        flex-direction: column;
    }
}
</style>