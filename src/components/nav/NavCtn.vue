<script setup>
import navBarItems from "@/data/nav-bar-items.json";
import DesktopNav from './DesktopNav.vue';
import MobileNav from "./MobileNav.vue";
</script>

<template>
    <section class="nav-ctn">
        <div class="nav-ctn-main-ctn">
            <DesktopNav
                :navBarItems="navBarItems"
            />
            <MobileNav
                :navBarItems="navBarItems"
            />
        </div>
    </section>
</template>

<style scoped>
.nav-ctn{
    background-color: var(--general-components-bg-color);
    border-radius: var(--round-border-radius);
    display: flex;
    justify-content: center;
    place-items: center;
    padding:0 6vh;
    border: 0.6vh solid var(--bg-color);
}
</style>