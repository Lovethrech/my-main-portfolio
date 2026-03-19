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
        <i 
            v-if="isDark"
            class="ri-sun-fill"
        >
        </i>
        <i 
            v-else
            class="ri-moon-clear-fill"
        >
        </i>
    </button>
</template>

<style scoped>
.theme-toggle{
    padding: 2vh;
    background-color: var(--general-components-bg-color);
    color: #ffffff;
    font-size: var(--p-font-size);
    border-radius: var(--round-border-radius);
    border: 1vh solid var(--bg-color);
}
</style>