<script setup>
import { defineProps } from 'vue';
const {navBarItems}=defineProps(['navBarItems']);
</script>

<template>
    <div class="mobile-nav">
        <div class="mobile-nav-main-ctn">
            <div class="mobile-nav-menu-icon">
                <i class="ri-menu-4-line"></i>
                <!-- <i class="ri-close-large-line"></i> -->
            </div>
        </div>
        <div class="mobile-nav-menu-dropdown-overlay">
            <div class="mobile-nav-menu-dropdown">
                <div class="mobile-nav-menu-dropdown-circle-design"></div>
                <RouterLink 
                    v-for="navBarItem in navBarItems" 
                    :key="navBarItem.id" 
                    :to="navBarItem.link" 
                    class="link"
                >
                    <p class="mobile-nav-link-desc">
                        {{ navBarItem.name }}
                    </p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.mobile-nav-menu-icon{
    color: #ffffff;
    font-size:28px;
}
.mobile-nav-menu-dropdown-overlay{
    position:absolute;
    top: 8vh;
    right: 0;
    background-color:#000000a2;
    width: 100vw;
    height:92vh;
}
.mobile-nav-menu-dropdown{
    background-color: var(--bg-color);
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    gap:3vh;
}
.mobile-nav-menu-dropdown-circle-design{
    background-color: var(--general-components-bg-color);
    width:10vh;
    height: 5vh;
    margin: 0 0 0 0.5vh;
    border-radius: 0 0 10vh 10vh;
}
.mobile-nav-link-desc{
    text-align: center;
    text-transform: capitalize;
    font-size: 28px;
}

@media screen and (min-width: 951px) {
    .mobile-nav{
        display: none;
    }
}
</style>