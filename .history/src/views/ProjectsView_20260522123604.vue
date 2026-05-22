<script setup>
// import projectsMain from "@/components/projects/projectsMain.vue";
</script>

<template>
    <main id="projectss-view">
        <section>
            <h3 class="projects-title">projectss</h3>
            <!-- <projectsMain></projectsMain> -->
        </section>
    </main>
</template>

<style scoped>
.projects-title{
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
    .projects-title{
        font-size: 3vh;
    }
}
</style>