<script setup>
import skillsStacks from '@/data/skillsStacks.json';
import StackSkillsCard from './StackSkillsCard.vue';
</script>

<template>
    <div class="stack-skill-main-ctn">
        <div class="stack-skill-mini-ctn">
            <StackSkillsCard
                v-for="skillsStack in skillsStacks"
                :key="skillsStack.id"
                :skill="skillsStack.skill"
                :years="skillsStack.years"
            >
            </StackSkillsCard>
        </div>
    </div>
</template>

<style scoped>
.stack-skill-mini-ctn{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    gap:2vh;
    flex-wrap: wrap;
}
</style>