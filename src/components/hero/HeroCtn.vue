<script setup>
import HeroTextAndBtnCtn from './HeroTextAndBtnCtn.vue';
import HeroUserProfileImage from './HeroUserProfileImage.vue';
</script>

<template>
    <section class="hero-ctn">
        <HeroTextAndBtnCtn/>
        <HeroUserProfileImage/>
    </section>
</template>

<style scoped>
.hero-ctn{
    min-height: 40vh;
    background-color: var(--general-components-bg-color);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>