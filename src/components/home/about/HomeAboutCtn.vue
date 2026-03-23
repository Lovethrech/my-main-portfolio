<script setup>
import HomeAboutTitle from './HomeAboutTitle.vue';
import HomeAboutDesc from './HomeAboutDesc.vue';
</script>

<template>
    <section class="home-about-ctn">
        <div class="home-about-main-ctn">
            <HomeAboutTitle/>
            <HomeAboutDesc/>
        </div>
    </section>
</template>

<style scoped>
.home-about-ctn{
    padding: 3vh 8vh;
}
</style>