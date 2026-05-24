<script setup>
import { defineProps, ref } from 'vue';
import ProjectCardHeader from './ProjectCardHeader.vue';
import ProjectCardDescAndStack from './ProjectCardDescAndStack.vue';

const {projectItems} = defineProps(["projectItems"]);
const projectItemStacks = projectItems[0].stack;
const cardHeight=ref("100%");
const cardMinMaxIcon=ref("+");
const headerNamePosition=ref("left");
const cardMenuIcon=ref("<i class='ri-menu-5-fill'></i>");

const displayCardCtn=()=>{
    if (cardMinMaxIcon.value==="+"){
        cardMinMaxIcon.value="-";
        cardHeight.value="70vh";
        headerNamePosition.value="center";
        cardMenuIcon.value="<i class='ri-menu-4-fill'></i>";
    }
    else{
        cardMinMaxIcon.value="+";
        cardHeight.value="100%";
        headerNamePosition.value="left";
        cardMenuIcon.value="<i class='ri-menu-5-fill'></i>";
    }
}
</script>

<template>
    <div @click="displayCardCtn" class="project-card" :style="{height: cardHeight}">
        <ProjectCardHeader
            :cardMenuIcon="cardMenuIcon"
            :headerNamePosition="headerNamePosition"
            :projectItemName="projectItems[0].name"
            :cardMinMaxIcon="cardMinMaxIcon"
        />
        <div class="project-card-hidden-ctn">
            <ProjectCardDescAndStack 
                :projectItemStacks="projectItemStacks"/>
            <!-- background: url(/room-page.jpeg) top/100vh no-repeat; -->
            <div class="project-card-footer">

            </div>
        </div>
    </div>
</template>

<style scoped>
.project-card{
    background: url(/room-page.jpeg) top/100vh no-repeat;
    background-size: cover;
    width:100%;
}
.project-card-hidden-ctn{
    height: 91%;
    background-color: #ffffff9c;
    color: #000000;
    padding: 2vh 
}

@media screen and (max-width:950px) {
    .project-card-desc{
        font-size: 1.2vh;
    }
}
</style>