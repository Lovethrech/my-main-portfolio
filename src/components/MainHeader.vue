<script setup>
import HeaderLogo from './header/HeaderLogo.vue';
import NavCtn from './nav/NavCtn.vue';
import ThemeToggle from './ThemeToggle.vue';
</script>

<template>
    <header class="main-header">
        <HeaderLogo/>
        <NavCtn id="main-header-nav-ctn"/>
        <ThemeToggle id="main-header-theme-ctn"/>
        <div class="mobile-display">
            <ThemeToggle/>
            <NavCtn/>
        </div>
    </header>
</template>

<style scoped>
.main-header{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.mobile-display{
    display:none;
}
@media screen and (max-width: 950px) {
    #main-header-nav-ctn, #main-header-theme-ctn{
        display:none;
    }
    .mobile-display{
        display:flex;
    }
}
</style>