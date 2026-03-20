<script setup>
import {ref} from "vue";
import BoxDefaultCtn from "@/components/BoxDefaultCtn.vue";


const boxDefaultWidth=ref("40vh");
</script>

<template>
    <div class="hero-text-ctn">
        <div class="hero-text-greetings-and-box-default">
            <p class="hero-text-greetings">
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
    </div>
</template>

<style scoped>
.hero-text-ctn{
    background-color: var(--bg-color);
    color: var(--text-color);
    border-radius: 4vh 20vh 4vh 4vh;
}
.hero-text-greetings-and-box-default{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.hero-text-author-name,
.hero-text-greetings,
.hero-text-author-job-role{
    margin:  2vh 4vh;
}
.hero-text-greetings{
    text-transform: uppercase;
    font-size: 1.4vh;
}
.hero-text-author-name{
    font-size:  2vh;
    letter-spacing: 1vh;
    transition: box-shadow 0.4s ease, transform 0.3s ease;
}
.hero-text-author-job-role{
    font-size: 6vh;
    text-transform: uppercase;
}
</style>