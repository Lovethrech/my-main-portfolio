<script setup>
import { defineProps } from 'vue';
const {navBarItems}=defineProps(['navBarItems']);
</script>


<template>
    <div class="desktop-nav">
        <div class="desktop-nav-main-ctn">
            <RouterLink 
                v-for="navBarItem in navBarItems" 
                :key="navBarItem.id" 
                :to="navBarItem.link" 
                class="link"
            >
                <p class="desktop-nav-link-desc">
                    {{ navBarItem.name }}
                </p>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.desktop-nav-main-ctn{
    display: flex;
    flex-direction: row;
    gap:3vh;
}
.desktop-nav-link-desc{
    color: #ffffff;
    text-transform: capitalize;
    font-size: var(--p-font-size);
}

@media screen and (max-width: 950px) {
    .desktop-nav{
        display:none;
    }
}
</style>