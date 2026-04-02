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
    position:absolute;
    bottom:0;
    left: 0;
    width: 100%;
    background-color: var(--general-components-bg-color);
    padding: 1vh 4vh;
    border-top-left-radius: 10vh;
    border-top-right-radius: 10vh;
}
.main-footer-main-ctn{
    display: flex;
    flex-direction: row;
    gap:3vh;
}

@media screen and (max-width: 1024px) {
    .main-footer{
        padding:4vh;
        border-radius: 0;
    }
    .main-footer-main-ctn{
        flex-direction: column;
    }
}
</style>