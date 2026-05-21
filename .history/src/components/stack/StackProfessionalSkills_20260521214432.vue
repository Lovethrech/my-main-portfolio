<script setup>
import profSkillsStacks from "@/data/prof-skills-stack.json";
import StackProfessionalSkillsCard from './StackProfessionalSkillsCard.vue';
</script>

<template>
    <div class="stack-professional-skill-main-ctn">
        <h2 class="stack-professional-skill-main-ctn-title">
            Professional Skills
        </h2>
        <div class="stack-professional-skill-mini-ctn">
            <StackProfessionalSkillsCard
            v-for="profSkillsStack in profSkillsStacks"
            :key="profSkillsStack.id"
            :name="profSkillsStack.name"
            :rate="profSkillsStack.rate"
            >
            </StackProfessionalSkillsCard>
        </div>
    </div>
</template>

<style scoped>
.stack-professional-skill-mini-ctn{
    margin-top:20px;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap:20px;
}
.stack-professional-skill-main-ctn-title{
    color: hsl(166, 91%, 49%);
    padding: 2vh 0;
    margin-bottom: 8vh;
    border-top: 0.1vh solid hsl(166, 91%, 29%);  
    border-bottom: 0.1vh solid hsl(166, 91%, 29%); 
    font-family: "Orbitron", serif;
    font-size:3vh;
    text-transform: uppercase;
    text-align:center;
    letter-spacing:2vh;
}
@media screen and (max-width: 650px) {
    .stack-professional-skill-main-ctn-title{
        font-size: 34w;
    }
}
</style>