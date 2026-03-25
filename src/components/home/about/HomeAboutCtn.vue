<script setup>
import HomeAboutTitle from './HomeAboutTitle.vue';
import HomeAboutDesc from './HomeAboutDesc.vue';
import HomeAboutDescStats from "./HomeAboutDescStats.vue";
</script>

<template>
    <section class="home-about-ctn display-flex-justify-center-place-center">
        <div class="home-about-main-ctn">
            <HomeAboutTitle/>
            <br/>
            <div class="home-about-mini-ctn display-flex-direction-row-justify-space-between">
                <HomeAboutDesc/>
                <HomeAboutDescStats/>
            </div>
        </div>
    </section>
</template>

<style scoped>
.home-about-ctn{
    min-height:100vh;
    padding: 6vh 0 3vh 8vh;
}
.home-about-mini-ctn{
    gap:6vh;
}

@media screen and (max-width: 1024px){
    .home-about-ctn{
        padding: 6vh 0;
    }
    .home-about-mini-ctn{
        flex-direction: column-reverse;
    }
}
</style>