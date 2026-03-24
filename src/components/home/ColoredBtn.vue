<script setup>
import { defineProps } from 'vue';

const {btnDescName, btnDescLink, generalPadding}=defineProps(['btnDescName', 'btnDescLink', 'generalPadding']);
</script>

<template>
    <div class="colored-btn-ctn" :style="{padding: generalPadding}">
        <RouterLink :to="btnDescLink">
            <button type="button" class="general-bg-color-theme-default-text-white btn-gold-border">
                {{ btnDescName }}
            </button>
        </RouterLink>
    </div>
</template>

<style scoped>
button{
    width: 100%;
    text-transform: capitalize;
    font-size: 1.6vh;
    padding: 1vh 0;
    border-radius: 0 0 10vh 10vh;;
}
</style>