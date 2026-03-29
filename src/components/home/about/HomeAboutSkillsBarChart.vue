<script setup>
import {ref} from "vue";

const skills=ref([
    {
        label: "Clients Project",
        percentage:30,
        color: "#4da6ff",
        describtion:""
    },
    {
        label: "Personal Project",
        percentage:50,
        color: "#22c55e",
        describtion:""
    },
    {
        label: "School Project",
        percentage:20,
        color: "#f97316",
        describtion:""
    }
])
</script>

<template>
    <div class="home-about-skills-bar-chart">
        <div class="chart-title">
            Projects Breakdown
        </div>

        <div class="bars-wrapper">
            <div v-for="skill in skills" :key="skill.index" class="bar-item">
                <div class="bar-label">
                    {{skill.label}}
                </div>
                <div class="bar-outer">
                    <div class="bar-fill">
                        <span class="bar-percentage">
                            30%
                        </span>
                    </div>
                </div>

                <!-- HOVER DESCRIPTION  -->
                <div class="bar-description">
                    This is the description 
                </div>
            </div>
        </div>

        <!-- LEGEND  -->
        <div class="legend">
            <div class="legend-item">
                <span class="legend-dot"></span>
                <span>skill legend</span>
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
</style>