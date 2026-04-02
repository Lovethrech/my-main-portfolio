<script setup>
import {ref} from "vue";
import BoxDefaultCtn from "@/components/BoxDefaultCtn.vue";
import ColoredBtn from "../ColoredBtn.vue";

const boxDefaultWidth=ref("40vh");
const boxDefaultHeight=ref("4vh");
const boxDefaultBgColor=ref("var(--general-components-bg-color)");
const boxDefaultBrRadius=ref("0 0 0 10vh");
const btnDescName=ref("get in touch");
const btnDescLink=ref("/contact");
const generalPadding=ref("2vh 4vh");
</script>

<template>
    <div class="hero-text-ctn var-bg-color-theme-and-text-color">
        <div class="hero-text-greetings-and-box-default display-flex-direction-row-justify-space-between">
            <p class="hero-text-greetings general-bg-color-theme-default-text-white">
                Welcome!
            </p>
            <BoxDefaultCtn 
                :boxDefaultWidth="boxDefaultWidth" 
                :boxDefaultHeight="boxDefaultHeight"
                :boxDefaultBgColor="boxDefaultBgColor"
                :boxDefaultBrRadius="boxDefaultBrRadius"
            />
        </div>
        
        <h5 class="hero-text-author-name">
            Olaonipekun Dolapo Rachael
        </h5>
        <h1 class="hero-text-author-job-role">
            Fullstack
            <br/>
            Developer
        </h1>
        <ColoredBtn
            :btnDescName="btnDescName"
            :btnDescLink="btnDescLink"
            :generalPadding="generalPadding"
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
    font-size: var(--p-size);
    font-style: italic;
    margin:  2vh 4vh;
}
.hero-text-author-name{
    font-size:  var(--h5-size);
    text-transform: uppercase;
    letter-spacing: 1vh;
    font-weight:600;
    margin:  0 4vh;
}
.hero-text-author-job-role{
    margin:  0 4vh;
    font-size: var(--h1-size);
    font-weight: 800;
    text-transform: uppercase;
    background: linear-gradient(to right, #B99A45, #C7AE6A);
    background-clip: text;
    color:transparent;
}
</style>