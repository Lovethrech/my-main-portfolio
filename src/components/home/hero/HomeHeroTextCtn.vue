<script setup>
import {ref} from "vue";
import BoxDefaultCtn from "@/components/BoxDefaultCtn.vue";
import ColoredBtn from "../ColoredBtn.vue";

const boxDefaultWidth=ref("40vh");
const btnDescName=ref("get in touch");
const btnDescLink=ref("/contact");
</script>

<template>
    <div class="hero-text-ctn var-bg-color-theme-and-text-color">
        <div class="hero-text-greetings-and-box-default display-flex-direction-row-justify-space-between">
            <p class="hero-text-greetings general-bg-color-theme-default-text-white">
                Welcome!
            </p>
            <BoxDefaultCtn :boxDefaultWidth="boxDefaultWidth"/>
        </div>
        
        <h2 class="hero-text-author-name">
            Olaonipekun Dolapo Rachael
        </h2>
        <h1 class="hero-text-author-job-role">
            Fullstack
            <br/>
            Developer
        </h1>
        <ColoredBtn
            :btnDescName="btnDescName"
            :btnDescLink="btnDescLink"
        />
    </div>
</template>

<style scoped>
.hero-text-ctn{
    border-radius: 4vh 0 4vh 4vh;
}
.hero-text-author-job-role-desc{
    margin:  0 4vh;
    font-size: 1.8vh;
}
.hero-text-greetings{
    padding: 0.5vh 2vh;
    border-radius: 8vh 0 0 8vh;
    text-transform: uppercase;
    font-size: 1.4vh;
    font-style: italic;
    margin:  2vh 4vh;
}
.hero-text-author-name{
    font-size:  2vh;
    text-transform: uppercase;
    letter-spacing: 1vh;
    font-weight:600;
    margin:  0 4vh;
}
.hero-text-author-job-role{
    margin:  0 4vh;
    font-size: 10vh;
    font-weight: 800;
    text-transform: uppercase;
    background: linear-gradient(to right, #B99A45, #C7AE6A);
    background-clip: text;
    color:transparent;
}

@media screen and (max-width: 1024px) {
    .hero-text-greetings{
        font-size: 2vw;
    }
    .hero-text-author-name{
        font-size: 3vw;
    }
    .hero-text-author-job-role{
        font-size: 10vw;
    }
}
</style>