<script setup>
import { defineProps } from 'vue';

const {projectItems} = defineProps(["projectItems"]);
</script>

<template>
    <div class="project-card">
        <div class="project-card-header display-flex-direction-row-justify-space-between">
            <div class="project-card-header-icon">
                =
            </div>
            <h3 class="project-card-header-name">
                {{ projectItems[0].name }}
            </h3>
            <div class="project-card-header-min-max">
                +
            </div>
        </div>
        <!-- alt-height: 70vh -->
    </div>
</template>

<style scoped>
.project-card{
    background-color: orange;
    width:100%;
    height: 10vh;
}
.project-card-header{

}
.project-card-header-icon{
    font-size: 
}
.project-card-header-name{
    width: 100%;
    background-color: red;
    font-size: 6vh;
}
</style>