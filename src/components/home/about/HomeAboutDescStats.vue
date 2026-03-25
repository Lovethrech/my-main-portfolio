<script setup>
import {ref} from "vue";
import HomeAboutDescStatsGit from "./HomeAboutDescStatsGit.vue";
import BoxDefaultCtn from '@/components/BoxDefaultCtn.vue';

const boxDefaultWidth=ref("100%");
const boxDefaultHeight=ref("4vh");
const boxDefaultBgColor=ref("var(--bg-color)");
const boxDefaultBrRadius=ref("10vh 0 0 0");
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
        <div class="home-about-desc-stats-git-box-default display-flex-direction-row-justify-space-between">
            <HomeAboutDescStatsGit/>
            <BoxDefaultCtn 
                :boxDefaultWidth="boxDefaultWidth" 
                :boxDefaultHeight="boxDefaultHeight"
                :boxDefaultBgColor="boxDefaultBgColor"
                :boxDefaultBrRadius="boxDefaultBrRadius"
            />
        </div>
        
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
        flex-direction: row;
    }
}
</style>