<script setup>
import AboutTitle from './AboutTitle.vue';
import AboutDesc from './AboutDesc.vue';
import AboutCVBtn from './AboutCVBtn.vue';
</script>

<template>
    <section class="about-main">
        <AboutTitle/>
        <AboutDesc/>
        <br/>
        <AboutCVBtn/>
    </section>
</template>

<style scoped>
.about-main{
    padding:  2vh var(--desktop-left-right-space) 0;
}

@media screen and (max-width: 1024px) {
    .about-main{
        padding: 2vh var(--mobile-left-right-space);
    }
}
</style>