<script setup>
import projectItems from "@/data/projectItems.json";
import ProjectCard from './ProjectCard.vue';
</script>

<template>
    <div class="project-main">
        <ProjectCard
            :project
        />
    </div>
</template>

<style scoped>
.project-main{
    padding: 0 6vw;
}
</style>