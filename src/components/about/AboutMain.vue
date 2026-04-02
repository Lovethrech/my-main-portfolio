<script setup>
import AboutTitle from './AboutTitle.vue';
import AboutDesc from './AboutDesc.vue';
</script>

<template>
    <section class="about-main">
        <AboutTitle/>
        <AboutDesc/>
    </section>
</template>

<style scoped>
.about-main{
    padding: var(--desktop-left-right-space);
}
</style>