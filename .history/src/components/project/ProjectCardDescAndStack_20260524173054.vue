<script setup>
import { defineProps } from 'vue';

const {projectItemStacks, "projectItemDesc"} = defineProps(["projectItemStacks"]);
</script>

<template>
    <div class="project-card-desc-and-stack">
        <div class="project-card-desc">

        </div>
        <br/>
        <div class="project-card-stack">
            <h3 class="project-card-stack-title">
                Stacks:
            </h3>
            <div class="project-card-stack-list-ctn">
                <div class="project-card-stack-list" v-for="projectItemStack in projectItemStacks" :key="projectItemStack.id">
                    <p class="project-card-stack-list-name">
                        {{ projectItemStack.name }}:
                    </p>
                    <div class="project-card-stack-list-level-ctn">
                        <div class="project-card-stack-list-level" :style="{backgroundColor: projectItemStack.colorCode, width: projectItemStack.width}"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-card-desc{
    font-size: 1.8vh;
    text-align: justify;
}
.project-card-stack-title{
    text-transform: uppercase;
}
.project-card-stack-list{
    display: flex;
    flex-direction: row;
    gap:2vh;
    margin: 2vh 0;
}
.project-card-stack-list-level-ctn{
    margin: auto 0;
    width: 20vw;
    height: 1vh;
    background-color: #c0bcbc;
    border-radius: 10vh;
}
.project-card-stack-list-level{
    height: 100%;
    border-radius: inherit;
}

@media screen and (max-width:950px) {
    .project-card-desc{
        font-size: 1.2vh;
    }
}
</style>