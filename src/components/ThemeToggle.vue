<script setup>
import { useThemeStore } from '@/stores/theme';
import { storeToRefs } from 'pinia';

const themeStore=useThemeStore();
const {isDark}=storeToRefs(themeStore);
</script>

<template>
    <button
        @click="themeStore.toggleTheme" 
        class="theme-toggle general-bg-color-theme-default-text-white dft-p-font-size-border-border-radius"
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
}
@media screen and (max-width: 950px) {
    .theme-toggle{
        background-color: transparent;
        color: var(--text-color);
    }
}
</style>