<script setup>
import {ref} from "vue";

const boxDefaultWidth=ref("20vh");
</script>

<template>
    <div class="hero-text-ctn">
        <p class="hero-text-greetings">
            Welcome!
        </p>
        <h1 class="hero-textauthor-name">
            Olaonipekun Dolapo Rachael
        </h1>
        
    </div>
</template>

<style scoped>
.hero-text-ctn{
    background-color: var(--bg-color);
    padding: 2vh;
}
.hero-textauthor-name{
    
    color: var(--text-color);
    font-size:  4vh;
    transition: box-shadow 0.4s ease, transform 0.3s ease;
}
</style>