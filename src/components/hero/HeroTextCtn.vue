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
        <p class="hero-text-author-job-role-desc">
            With respect to Full-stack development, I am adept at creating user-friendly interfaces using HTML, CSS, 
            <br/>
            and Javascript. I have a keen eye for design and usability, ensuring that the end-users have an intuitive
            <br/> 
            and engaging experience. Additionally, I am familiar with front-end frameworks such as Vue and React,
            <br/>
            which allow for the creation of dynamic, single-page applications.
        </p>
    </div>
</template>

<style scoped>
.hero-text-ctn{
    background-color: var(--bg-color);
    color: var(--text-color);
    border-radius: 4vh 0 4vh 4vh;
}
.hero-text-greetings-and-box-default{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.hero-text-author-job-role-desc{
    margin:  0 4vh 4vh;
    font-size: 2vh;
}
.hero-text-greetings{
    background-color: var(--general-components-bg-color);
    color:#ffffff;
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
    transition: box-shadow 0.4s ease, transform 0.3s ease;
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