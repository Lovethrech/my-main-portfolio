<script setup>
import HomeAboutTitle from './HomeAboutTitle.vue';
import HomeAboutDesc from './HomeAboutDesc.vue';
</script>

<template>
    <section class="home-about-ctn display-flex-justify-center-place-center">
        <div class="home-about-main-ctn">
            <HomeAboutTitle/>
            <br/>
            <HomeAboutDesc/>
        </div>
    </section>
</template>

<style scoped>
.home-about-ctn{
    min-height:100vh;
    padding: 3vh 8vh;
}
</style>