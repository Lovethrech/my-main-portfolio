<script setup>
import {ref} from "vue";

const skills=ref([
    {
        label: "Clients Project",

    }
])
</script>

<template>
    <div class="home-about-skills-bar-chart">
        <div class="chart-title">
            Projects Breakdown
        </div>

        <div class="bars-wrapper">
            <div class="bar-item">
                <div class="bar-label">
                    Client Project
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