<script setup>
import projectMain from "@/components/project/projectMain.vue";
</script>

<template>
    <main id="projects-view">
        <section>
            <h3 class="project-title">projects</h3>
            <ProjectMain></projectMain>
        </section>
    </main>
</template>

<style scoped>
.project-title{
    margin:  0 6vw;
    border-bottom: 0.1vh solid hsl(166, 91%, 29%);    
    color: hsl(166, 91%, 49%);
    margin-bottom: 20px;
    font-size:4vh;
    text-transform: uppercase;
    text-align:center;
    letter-spacing:2vh;
}

@media screen and (max-width: 650px) {
    .project-title{
        font-size: 3vh;
    }
}
</style>