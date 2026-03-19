<script setup>
import { defineProps } from 'vue';
const {navBarItems}=defineProps(['navBarItems']);
</script>

<template>
    <div class="mobile-nav">
        <div class="mobile-nav-main-ctn">
            <div class="mobile-nav-menu-icon">
                Menu Icon
            </div>
            <!-- <div class="mobile-nav-menu-dropdown">
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
            </div> -->
        </div>
    </div>
</template>

<style scoped>
.mobile-nav-menu-icon{
    color: #ffffff;
}

@media screen and (min-width: 951px) {
    .mobile-nav{
        display: none;
    }
}
</style>