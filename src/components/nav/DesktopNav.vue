<script setup>
import { defineProps } from 'vue';
const {navBarItems}=defineProps(['navBarItems']);
</script>


<template>
    <div 
        class="desktop-nav"
    >
        <div 
            class="desktop-nav-main-ctn display-flex-direction-row-justify-space-between"
        >
            <RouterLink 
                v-for="navBarItem in navBarItems" 
                :key="navBarItem.id" 
                :to="navBarItem.link" 
                class="link"
            >
                <p 
                    class="desktop-nav-link-desc"
                >
                    {{ navBarItem.name }}
                </p>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.desktop-nav-main-ctn{
    gap:3vh;
}
.desktop-nav-link-desc{
    color: #ffffff;
    text-transform: capitalize;
    font-size: var(--p-font-size);
    transition: transform .2s ease;
}
.desktop-nav-link-desc:hover{
    cursor: pointer;
    transform: scale(0.98);
}

@media screen and (max-width: 950px) {
    .desktop-nav{
        display:none;
    }
}
</style>