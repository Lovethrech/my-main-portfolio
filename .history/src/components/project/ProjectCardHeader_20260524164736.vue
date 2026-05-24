<script setup>
import {defineProps} from "vue";

const {cardMenuIcon, headerNamePosition, projectItemName, cardMinMaxIcon}=defineProps(["cardMenuIcon", "headerNamePosition", "projectItemName", "cardMinMaxicon"]);
</script>

<template>
    <div class="project-card-header display-flex-direction-row-justify-space-between">
        <div class="project-card-header-icon" v-html="cardMenuIcon">
        </div>
        <h3 class="project-card-header-name" :style="{textAlign: headerNamePosition}">
            {{ projectItemName }}
        </h3>
        <div class="project-card-header-min-max">
            {{cardMinMaxIcon}}
        </div>
    </div>
</template>

<style scoped>
.project-card-header{
    padding: 0 2vh;
    gap: 2vh;
    background-color: #0000008a;
    color: #ffffff;
}
.project-card-header-icon, .project-card-header-name,  .project-card-header-min-max{
    font-size: 4vh;
}
.project-card-header-name{
    width: 100%;
}
</style>