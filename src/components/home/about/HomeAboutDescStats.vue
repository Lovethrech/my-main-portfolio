<script setup>
import HomeAboutSkillsBarChart from './HomeAboutSkillsBarChart.vue';
</script>

<template>
    <div class="home-about-desc-stats">
        <HomeAboutSkillsBarChart/>        
    </div>
</template>

<style scoped>
.home-about-desc-stats, .home-about-desc-stats-main-ctn{
    display: flex;
    flex-direction: column;
}
.home-about-desc-stats{
    width: 100%;
    background-color: var(--general-components-bg-color);
    color: #ffffff;
    justify-content: space-between;
}
.home-about-desc-stats-main-ctn{
    margin: 2vh 0 0 3vh;
    gap: 4vh;
    font-size: 2vh;
    letter-spacing: 1.2vh;
}

@media screen and (max-width: 1024px){
    .home-about-desc-stats{
        margin-left:4vh;
    }
}
</style>