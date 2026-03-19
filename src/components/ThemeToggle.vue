<script setup>
import { useThemeStore } from '@/stores/theme';
import { storeToRefs } from 'pinia';

const themeStore=useThemeStore();
const {isDark}=storeToRefs(themeStore);
</script>

<template>
    <button
        @click="themeStore.toggleTheme" 
        class="theme-toggle"
    >
        {{ isDark? 'Light Mode' : 'Dark Mode' }}
    </button>
</template>

<style scoped>
.theme-toggle{
    padding: 2vh;
    background-color: var(--theme-bg-color);
    color: var(--theme-color);
    font-size: var(--p-font-size);
    border-radius: var(--round-border-radius);
    border: 1vh solid var(--bg-color);
}
</style>