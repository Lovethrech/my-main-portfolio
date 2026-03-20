<script setup>
import {ref} from "vue";
import BoxDefaultCtn from "@/components/BoxDefaultCtn.vue";


const boxDefaultWidth=ref("20vh");
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
        <h1 class="hero-text-author-name">
            Fullstack
            <br/>
            Developer
        </h1>
    </div>
</template>

<style scoped>
.hero-text-ctn{
    background-color: var(--bg-color);
    border-radius: 4vh 40vh 4vh 4vh;
}
.hero-text-greetings-and-box-default{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.hero-text-author-name,
.hero-text-greetings{
    margin:4vh;
}
.hero-text-author-name{
    
    color: var(--text-color);
    font-size:  4vh;
    transition: box-shadow 0.4s ease, transform 0.3s ease;
}
</style>