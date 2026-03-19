<script setup>
import { useThemeStore } from '@/stores/theme';
import { storeToRefs } from 'pinia';
</script>

<template>
    <button
        @click="useThemeStore.toggleTheme" 
        class="theme-toggle"
    >
        {{ isDark? 'Light Mode' : 'Dark Mode' }}
    </button>
</template>