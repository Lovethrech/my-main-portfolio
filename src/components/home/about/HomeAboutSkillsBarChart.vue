<script setup>
import {ref} from "vue";

const skills=ref([
    {
        label: "Clients Project",
        percentage:30,
        color: "#4da6ff",
        description:"Movie Producer portfolio website"
    },
    {
        label: "Personal Project",
        percentage:50,
        color: "#22c55e",
        description:"Cafe website, NoteApp Website"
    },
    {
        label: "School Project",
        percentage:20,
        color: "#f97316",
        description:"An Exam Schduling Webpage"
    }
])
</script>

<template>
    <div class="home-about-skills-bar-chart">
        <div class="chart-title">
            Projects Breakdown
        </div>

        <div class="bar-wrapper">
            <div v-for="skill in skills" :key="skill.index" class="bar-item">
                <div class="bar-label">
                    {{skill.label}}
                </div>
                <div class="bar-outer">
                    <div 
                        class="bar-fill" 
                        :style="{
                            width: skill.percentage + '%', 
                            backgroundColor: skill.color
                        }">
                        <span class="bar-percentage">
                            {{ skill.percentage }}%
                        </span>
                    </div>
                </div>

                <!-- HOVER DESCRIPTION  -->
                <div class="bar-description">
                    {{ skill.description }}
                </div>
            </div>
        </div>

        <!-- LEGEND  -->
        <div class="legend">
            <div v-for="skill in skills" :key="skill.index" class="legend-item">
                <span class="legend-dot" :style="{backgroundColor:skill.color}"></span>
                <span>{{skill.label}}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.home-about-skills-bar-chart{
    padding: 3vh;
}
.chart-title{
    text-align: center;
    font-size: 2.5vh;
    margin-bottom: 2vh;
    color: #ffffff;
}
.bar-wrapper{
    display: flex;
    flex-direction: column;
    gap: 3vh;
}
.bar-item {
    display: grid;
    grid-template-columns: 15vh 1fr;
    align-items: center;
    gap: 1rem;
    position: relative;
}
</style>