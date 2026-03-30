<script setup>
import HeroTextCtn from './HomeHeroTextCtn.vue';
</script>

<template>
    <div class="hero-text-and-btn-ctn">
        <HeroTextCtn/>
    </div>
</template>

<style scoped>
.hero-text-and-btn-ctn{
    margin: var(--desktop-left-right-space) 0 0 var(--desktop-left-right-space);
}

@media screen and (max-width: 1024px) {
    .hero-text-and-btn-ctn{
        margin: var(--mobile-left-right-space);
    }
}
</style>