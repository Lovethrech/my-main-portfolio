<script setup>
import AboutMain from '@/components/about/AboutMain.vue';
import HomeHeroUserProfileImage from '@/components/home/hero/HomeHeroUserProfileImage.vue';
</script>

<template>
    <main id="about-view">
        <AboutMain/>
    </main>
</template>

<style scoped>
#about-view{
    background-color: var(--general-components-bg-color);
    border-top: 1vh double var(--general-components-bg-color);
}
</style>