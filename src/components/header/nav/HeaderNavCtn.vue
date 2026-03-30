<script setup>
import navBarItems from "@/data/nav-bar-items.json";
import HeaderNavDesktop from './HeaderNavDesktop.vue';
import HeaderNavMobile from "./HeaderNavMobile.vue";
</script>

<template>
    <section 
        class="nav-ctn display-flex-justify-center-place-center"
    >
        <div 
            class="nav-ctn-main-ctn"
        >
            <HeaderNavDesktop
                :navBarItems="navBarItems"
            />
            <HeaderNavMobile
                :navBarItems="navBarItems"
            />
        </div>
    </section>
</template>

<style scoped>
.nav-ctn{
    background-color: var(--general-components-bg-color);
    border-radius: var(--round-border-radius);
    padding:0 var(--desktop-left-right-space);
    border: 0.6vh solid var(--bg-color);
}

@media screen and (max-width: 950px) {
    .nav-ctn{
        padding: 1vh;
    }
}
</style>