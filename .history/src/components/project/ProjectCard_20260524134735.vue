<script setup>
import { defineProps, ref } from 'vue';

const {projectItems} = defineProps(["projectItems"]);
const cardHeight=ref("100%");
const cardMinMaxIcon=ref("+");
const headerNamePosition=ref("left");

const displayCardCtn=()=>{
    if (cardMinMaxIcon.value==="+"){
        cardMinMaxIcon.value="-";
        cardHeight.value="70vh";
        headerNamePosition.value="center";
    }
    else{
        cardMinMaxIcon.value="+";
        cardHeight.value="100%";
        headerNamePosition.value="left";
    }
}
</script>

<template>
    <div @click="displayCardCtn" class="project-card" :style="{height: cardHeight}">
        <div class="project-card-header display-flex-direction-row-justify-space-between">
            <div class="project-card-header-icon">
                =
            </div>
            <h3 class="project-card-header-name" :style="{textAlign: headerNamePosition}">
                {{ projectItems[0].name }}
            </h3>
            <div class="project-card-header-min-max">
                {{cardMinMaxIcon}}
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-card{
    background: url(/room-page.jpeg) top/auto no-repeat;
    backg
    width:100%;
}
.project-card-header{
    padding: 0 2vh;
    gap: 2vh;
    background-color: #0000003b;
}
.project-card-header-icon, .project-card-header-name,  .project-card-header-min-max{
    font-size: 4vh;
}
.project-card-header-name{
    width: 100%;
}
</style>