<script setup>
import { defineProps } from 'vue';

const {name,rate}=defineProps(['name', 'rate']);
</script>

<template>
    <div class="stack-professional-skill-card-main-ctn">
        <p class="stack-professional-skill-card-main-ctn-title">
            {{ name }}
        </p>
        <div class="stack-professional-skill-card-main-ctn-rate-icon-ctn" v-html="rate"></div>
    </div>
</template>

<style scoped>
.stack-professional-skill-card-main-ctn, .stack-professional-skill-card-main-ctn-rate-icon-ctn{
    display: flex;
    flex-direction: row;
}
.stack-professional-skill-card-main-ctn{
    width:48%;
    padding:10px 20px;
    gap:10px;
}
.stack-professional-skill-card-main-ctn-title{
    text-transform: capitalize;
    font-size:20px;
    font-weight: 600;
}
.stack-professional-skill-card-main-ctn-rate-icon-ctn{
    width:20px;
    gap:2px;
}

@media screen and (max-width:860px) {
    .stack-professional-skill-card-main-ctn{
        width:100%;
        flex-direction: column;
        border-bottom: 0.1vh dashed white
    }
}
@media screen and (max-width: 450px) {
    .stack-professional-skill-card-main-ctn-title{
        font-size:16px;
    }
    .stack-professional-skill-card-main-ctn-rate-icon-ctn{
        width:16px;
    }
}
</style>