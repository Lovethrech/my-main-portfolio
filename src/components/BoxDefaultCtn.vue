<script setup>
import {defineProps} from "vue";

const {boxDefaultWidth} = defineProps(['boxDefaultWidth']);
</script>

<template>
    <div class="box-default-ctn" :style="{width: boxDefaultWidth}">
            <!-- I am Olaonipekun Rachael Dolapo, a passionate and determined aspiring Fullstack Developer based in Nigeria.  With a strong foundation in mathematics and numerical problem-solving, I discovered my love for building digital solutions that solve real-world problems. What began as self-taught exploration has now evolved into a structured and rigorous apprenticeship under a master mentor, where I am mastering modern web technologies.
Currently, I am deep in an intensive fullstack apprenticeship focused on the **Vue 3 (Composition API)** ecosystem for frontend, combined with **Express, GraphQL (Apollo Server)**, and **PostgreSQL (with Prisma)** on the backend. This journey has transformed the way I think about software — emphasizing clean architecture, reactivity, type safety, performance, and scalable APIs. I thrive on turning ideas into functional, responsive, and maintainable applications, and I am committed to daily deliberate practice to reach production-grade mastery.
Beyond coding, I am a lifelong learner who enjoys documenting my progress, sharing knowledge with the developer community in Nigeria, and continuously pushing myself out of my comfort zone. My technical toolkit currently includes Vue 3, Pinia, JavaScript (ES6+), CSS3 with custom properties, Git workflows, and responsive design principles. I am also actively strengthening my backend skills and preparing to integrate TypeScript, testing (Vitest), and deployment pipelines into my workflow.
My ultimate goal is to become a world-class fullstack engineer capable of building complete SaaS products, real-time applications, and scalable systems that make an impact. Whether collaborating on open-source projects, contributing to the growth of tech in Nigeria, or delivering high-quality client work, I bring dedication, attention to detail, and a growth mindset to every challenge. I am excited about the future and open to opportunities, collaborations, and conversations with fellow developers and mentors who share the same passion for craftsmanship in code. -->


    </div>
</template>

<style scoped>
.box-default-ctn{
    height: 4vh;
    background-color: var(--general-components-bg-color);
    border-radius: 0 0 0 10vh;
}
</style>