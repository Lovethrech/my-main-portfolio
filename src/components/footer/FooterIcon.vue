<script setup>
import { defineProps } from 'vue';

const {FooterLinkItems}=defineProps(['FooterLinkItems']);
</script>


<template>
    <div class="footer-icon-ctn" v-for="FooterLinkItem in FooterLinkItems" :key="FooterLinkItem.id">
        <RouterLink :to="FooterLinkItem.iconLink">
            <div class="footer-icon" v-html="FooterLinkItem.icon">
            </div>
        </RouterLink>
    </div>
</template>

<style scoped>
.footer-icon-ctn{
    font-size: var(--h5-size);
    background-color: var(--bg-color);
    padding: 0.5vh 1vh;
    border-radius: var(--border-radius);
}
.footer-icon{
    color: var(--text-color);
}
</style>