<script setup>
import { defineProps } from 'vue';

const {FooterLinkItems}=defineProps(['FooterLinkItems']);
</script>


<template>
    <div class="footer-icon-ctn" v-for="FooterLinkItem in FooterLinkItems" :key="FooterLinkItem.id">
        <RouterLink :to="FooterLinkItem.iconLink">
            <div class="footer-icon">
                {{ FooterLinkItem.name }}
            </div>
        </RouterLink>
    </div>
</template>