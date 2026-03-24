<script setup>
import {ref} from "vue";
import BoxDefaultCtn from '@/components/BoxDefaultCtn.vue';

const boxDefaultWidth=ref("40vh");
const boxDefaultBgColor=ref("var(--bg-color)");
</script>

<template>
    <div class="home-about-desc-stats">
        <div class="home-about-desc-stats-main-ctn">
            <p id="home-about-desc-stats-client-xperience">
                3+ Clients Projects
            </p>
            <hr/>
            <p id="home-about-desc-stats-personal-xperience">
                10+ Personal Projects
            </p>
            <hr/>
            <p id="home-about-desc-stats-ongoing-pro">
                4+ Ongoing Projects
            </p>
        </div>
        <BoxDefaultCtn 
            :boxDefaultWidth="boxDefaultWidth" 
            :boxDefaultBgColor="boxDefaultBgColor"
        />
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
}
.home-about-desc-stats-main-ctn{
    margin-top: 2vh;
    gap: 4vh;
    font-size: 3vh;
    letter-spacing: 1.2vh;
}
</style>