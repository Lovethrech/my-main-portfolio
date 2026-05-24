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

<style lang="scss"