<script setup>
import { defineProps } from 'vue';

const {skill, years}=defineProps(['skill', 'years']);
</script>

<template>
    <div class="stack-skills-card-main-ctn">
        <p class="stack-skills-card-main-ctn-title">
            {{skill}}

        </p>
        <p class="stack-skills-card-main-ctn-desc">
            {{ years }}
        </p>
    </div>
</template>

<style scoped>
.stack-skills-card-main-ctn{
    width:32%;
    padding: 2vh;
}
.stack-skills-card-main-ctn-title{
    text-transform: uppercase;
    font-size:2.4vh;
    font-weight: 600;
}
.stack-skills-card-main-ctn-desc{
    color: #c4c0c0;
    font-size: 1.8vh;
    font-weight:400;
}

@media screen and (max-width:960px) and (min-width: 511px) {
    .stack-skills-card-main-ctn{
        width: 44%;
    }
}

@media screen and (max-width:510px){
    .stack-skills-card-main-ctn{
        width: 45%;
    }
    .stack-skills-card-main-ctn-title{
        font-size:1vh;
    }
    .stack-skills-card-main-ctn-desc{
        font-size: 10px;
    }
}

</style>