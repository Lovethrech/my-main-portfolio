<script setup>
import FooterLinkItems from "@/data/footer-link-items.json";
import FooterIcon from './FooterIcon.vue';
</script>

<template>
    <footer class="main-footer display-flex-justify-center-place-center">
        <div class="main-footer-main-ctn">
            <FooterIcon :FooterLinkItems="FooterLinkItems"/>
        </div>
    </footer>
</template>

<style scoped>
.main-footer{
    background-color: var(--general-components-bg-color);
    padding: 1vh 4vh;
}
.main-footer-main-ctn{
    display: flex;
    flex-direction: row;
    gap:3vh;
}

@media screen and (max-width: 1024px) {
    .main-footer{
        padding:4vh;
    }
}
</style>