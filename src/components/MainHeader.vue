<script setup>
import HeaderLogo from './header/HeaderLogo.vue';
import NavCtn from './nav/NavCtn.vue';
import ThemeToggle from './ThemeToggle.vue';
</script>

<template>
    <header class="main-header">
        <HeaderLogo/>
        <NavCtn/>
        <ThemeToggle/>
    </header>
</template>

<style scoped>
.main-header{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>