<script setup>
import projectItems from "@/data/projectItems.json";
import ProjectCard from './ProjectCard.vue';
</script>

<template>
    <div class="project-main">
        <ProjectCard
            v-for="projectItem in projectItems"
            :key="projectItem.id"
            :projectItem="projectItem"
        />
        
    </div>
</template>

<style scoped>
.project-main{
    padding: 0 6vw;
    display: flex;
    flex-direction: column;
    gap: 2vh;
}
</style>