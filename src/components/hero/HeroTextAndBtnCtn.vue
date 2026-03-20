<script setup>
import HeroTextCtn from './HeroTextCtn.vue';
</script>

<template>
    <div class="hero-text-and-btn-ctn">
        <HeroTextCtn/>
    </div>
</template>

<style scoped>
.hero-text-and-btn-ctn{
    margin: 8vh 0 0 8vh;
}

@media screen and (max-width: 1024px) {
    .hero-text-and-btn-ctn{
        margin:6vh;
    }
}
</style>