<script setup>
import HeaderLogo from './header/HeaderLogo.vue';
import NavCtn from './nav/NavCtn.vue';
</script>

<template>
    <header class="main-header">
        <HeaderLogo/>
        <NavCtn/>
    </header>
</template>

<style scoped>
.main-header{
    width: 100%;
    background-color: rgba(146, 107, 107, 0.411);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>