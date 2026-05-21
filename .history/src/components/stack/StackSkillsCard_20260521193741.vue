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
    padding: 10px 20px;
}
.stack-skills-card-main-ctn-title{
    text-transform: uppercase;
    font-size:20px;
    font-weight: 600;
}
.stack-skills-card-main-ctn-desc{
    color: #c4c0c0;
    font-size: 16px;
    font-weight:400;
}

@media screen and (max-width:960px) {
    .stack-skills-card-main-ctn{
        width:42vw;
    }
}

@media screen and (max-width:510px) and (min-width: ) {
    .stack-skills-card-main-ctn{
        width: 50%;
    }
    .stack-skills-card-main-ctn-title{
        font-size:16px;
    }
    .stack-skills-card-main-ctn-desc{
        font-size: 10px;
    }
}

</style>