<script setup>
import DesktopNav from './DesktopNav.vue';
</script>

<template>
    <section class="nav-ctn">
        <div class="nav-ctn-main-ctn">
            <DesktopNav/>
        </div>
    </section>
</template>

<style scoped>
.nav-ctn{
    background-color: var(--general-components-bg-color);
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    place-items: center;
    padding:0 6vh;
}
</style>