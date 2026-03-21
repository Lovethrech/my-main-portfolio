<script setup>
import { defineProps } from 'vue';

const {btnDescName, btnDescLink}=defineProps(['btnDescName', 'btnDescLink']);
</script>

<template>
    <div class="colored-btn-ctn">
        <RouterLink :to="btnDescLink">
            <button type="button">
                {{ btnDescName }}
            </button>
        </RouterLink>
    </div>
</template>

<style scoped>

</style>