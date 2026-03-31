<script setup>
import HomeProjectTitle from './HomeProjectTitle.vue';
import HomeProjectBoxCtn from './HomeProjectBoxCtn.vue';
import HomeProjectBtn from "./HomeProjectBtn.vue";
</script>

<template>
    <section class="home-project-ctn display-flex-justify-center-place-center">
        <HomeProjectTitle/>
        <HomeProjectBoxCtn/>
        <HomeProjectBtn/>
    </section>
</template>

<style scoped>
.home-project-ctn{
    flex-direction: column;
    background-color: var(--general-components-bg-color);
    min-height: 100vh;
    padding: 4vh var(--desktop-left-right-space);
}

@media screen and (max-width:1024px) {
    .home-project-ctn{
    padding: 4vh var(--mobile-left-right-space);

    }
}
</style>