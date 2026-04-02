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
}
.footer-icon{
    color: #ffffff;
}
</style>