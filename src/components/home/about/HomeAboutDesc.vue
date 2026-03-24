<script setup>
import ColoredBtn from '../ColoredBtn.vue';
</script>

<template>
    <div class="home-about-desc-ctn">
        <p class="home-about-desc">
            I am <b class="author-name bold-text">OLAONIPEKUN RACHAEL DOLAPO</b>, a passionate and determined aspiring Fullstack Developer based in Nigeria.  
            With a strong foundation in mathematics and numerical problem-solving, I discovered my love for building 
            digital solutions that solve real-world problems. What began as self-taught exploration has now evolved into 
            a structured and rigorous apprenticeship under a master mentor, where I am mastering modern web technologies.
            <br/>
            Currently, I am deep in an intensive fullstack apprenticeship focused on the <b class="bold-text">Vue 3 (Composition API)</b> ecosystem 
            for frontend, combined with <b class="bold-text">Express, GraphQL (Apollo Server)</b>, and <b class="bold-text">PostgreSQL (with Prisma)</b>on the backend. 
            This journey has transformed the way I think about software, emphasizing clean architecture, reactivity, type safety, 
            performance, and scalable APIs. I thrive on turning ideas into functional, responsive, and maintainable applications, ...
        </p>
        <ColoredBtn/>
    </div>
</template>

<style scoped>
.home-about-desc{
    width: 100%;
    font-size: 2vh;
    line-height: 2;
    text-align:justify;
}
#author-name{
    font-size: 2.6vh;
}
</style>