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