<script setup>
import FooterLinkItems from "@/data/footer-link-items.json";
import FooterIcon from './FooterIcon.vue';
</script>

<template>
    <footer class="main-footer">
        <div class="main-footer">
            <FooterIcon :FooterLinkItems="FooterLinkItems"/>
        </div>
    </footer>
</template>

<style scoped>
.main-footer{
    background-color: var(--general-components-bg-color);
}
</style>