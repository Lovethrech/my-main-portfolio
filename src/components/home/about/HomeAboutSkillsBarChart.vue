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
.bar-wrapper,
.bar-fill,
.legend,
.legend-item{
    display: flex;
}
.bar-wrapper{
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
.bar-label {
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.bar-outer {
    height: 2vh;
    background: var(--bg-color);
    border-radius: 10vh;
    overflow: hidden;
    position: relative;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}
.bar-fill {
    height: 100%;
    border-radius: inherit;
    align-items: center;
    justify-content: flex-end;
    padding-right: 2vh;
    transition: width 1.2s ease, transform 0.3s ease;
    position: relative;
}
.bar-fill:hover {
    transform: scaleY(1.25);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.bar-percentage {
    font-size: 1.4vh;
    font-weight: 700;
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
.bar-description {
    position: absolute;
    bottom: -28px;
    left: 180px;
    font-size: 0.9rem;
    color: var(--text-color);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}
.bar-item:hover .bar-description {
    opacity: 1;
}

/* Legend */
.legend {
    flex-wrap: wrap;
    gap: 2vh;
    justify-content: center;
    margin-top: 7vh;
}

.legend-item {
    align-items: center;
    gap: 1vh;
    font-size: 1.4vh;
}

.legend-dot {
    display: inline-block;
    width: 1vh;
    height: 1vh;
    border-radius: 50%;
}
</style>