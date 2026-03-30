<script setup>
import { ref,defineProps } from 'vue';
const {navBarItems}=defineProps(['navBarItems']);

const menuIconName=ref("<i class='ri-menu-4-line'></i>");
const overlayState=ref("none");

const displayDropdown=()=>{
    if(overlayState.value==="none"){
        overlayState.value="flex";
        menuIconName.value="<i class='ri-close-large-line'></i>";
    }
    else{
        overlayState.value="none";
        menuIconName.value="<i class='ri-menu-4-line'></i>";
    }
}
const fadeMenuDropdown=()=>{
    if(overlayState.value==="flex"){
        overlayState.value="none";
    }
    else{
        overlayState.value="flex";
    }
}
</script>

<template>
    <div 
        class="mobile-nav"
    >
        <div 
            class="mobile-nav-main-ctn" 
            @click="displayDropdown"
        >
            <div 
                class="mobile-nav-menu-icon" 
                v-html="menuIconName"
            >
            </div>
        </div>
        <div 
            class="mobile-nav-menu-dropdown-overlay" 
            :style="{display:overlayState}"
        >
            <div 
                class="mobile-nav-menu-dropdown"
            >
                <div 
                    class="mobile-nav-menu-dropdown-circle-design"
                >
                </div>
                <RouterLink 
                    v-for="navBarItem in navBarItems" 
                    :key="navBarItem.id" 
                    :to="navBarItem.link" 
                    @click="fadeMenuDropdown"
                    class="link"
                >
                    <p 
                        class="mobile-nav-link-desc"
                    >
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
    height:100vh;
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
    margin: 0;
    border-radius: 0 0 10vh 10vh;
}
.mobile-nav-link-desc{
    margin-right: 4vh;
    text-align: right;
    text-transform: capitalize;
    font-size: 28px;
}

@media screen and (min-width: 951px) {
    .mobile-nav{
        display: none;
    }
}
</style>