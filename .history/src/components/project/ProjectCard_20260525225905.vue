<script setup>
import { defineProps, ref } from 'vue';
import ProjectCardHeader from './ProjectCardHeader.vue';
import ProjectCardDescAndStack from './ProjectCardDescAndStack.vue';

const {projectItem} = defineProps(["projectItem"]);
const projectItemStacks = projectItem.stack;
const projectCardBg=projectItem.imgSrc;
const cardHeight=ref("100%");
const cardMinMaxIcon=ref("+");
const headerNamePosition=ref("left");
const cardMenuIcon=ref("<i class='ri-menu-5-fill'></i>");
const showHiddenCtn=ref("none");

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
    <div @click="displayCardCtn" class="project-card" :style="{height: cardHeight, background: projectCardBg, backgroundSize:cover}">
        <ProjectCardHeader
            :cardMenuIcon="cardMenuIcon"
            :headerNamePosition="headerNamePosition"
            :projectItemName="projectItem.name"
            :cardMinMaxIcon="cardMinMaxIcon"
        />
        <div class="project-card-hidden-ctn" :style="{display:showHiddenCtn}">
            <ProjectCardDescAndStack 
                :projectItemDesc="projectItem.desc"
                :projectItemStacks="projectItemStacks"
            />
            <div class="project-card-footer">

            </div>
        </div>
    </div>
</template>

<style scoped>
.project-card{
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