<script setup>
import { defineProps } from 'vue';

const {btnDescName, btnDescLink}=defineProps(['btnDescName', 'btnDescLink']);
</script>

<template>
    <div class="colored-btn-ctn">
        <RouterLink :to="btnDescLink">
            <button type="button" class="general-bg-color-theme-default-text-white">
                {{ btnDescName }}
            </button>
        </RouterLink>
    </div>
</template>

<style scoped>
.colored-btn-ctn{
    padding: 2vh 4vh ;
}
button{
    width: 100%;
    text-transform: capitalize;
    font-size: 1.6vh;
    padding: 1vh 0;
    border-radius: 0 0 10vh 10vh;;
}
</style>