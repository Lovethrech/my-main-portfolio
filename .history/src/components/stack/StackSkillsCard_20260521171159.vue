<script setup>
import profSkillsStacks from "@/data/stack/prof-skills-stack.json";
import StackHL from "./StackHL.vue";
import StackProfessionalSkillsCard from './StackProfessionalSkillsCard.vue';
</script>

<template>
    <div class="stack-professional-skill-main-ctn">
        <StackHL></StackHL>
        <br/>
        <h2 class="stack-professional-skill-main-ctn-title">
            Professional Skills
        </h2>
        <StackHL></StackHL>
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
    color: #b2fffc;
    margin-bottom: 20px;
    font-family: "Orbitron", serif;
    font-size:3vh;
    text-transform: uppercase;
    text-align:center;
    letter-spacing:10px;
}
@media screen and (max-width: 450px) {
    .stack-professional-skill-main-ctn-title{
        font-size:18px;
    }
}
</style>