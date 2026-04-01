<script setup>
import ContactTitle from './ContactTitle.vue';
</script>

<template>
    <section class="contact-ctn">
        <div class="contact-main-ctn">
            <ContactTitle/>
        </div>
    </section>
</template>

<style scoped>
.contact-ctn{
    min-height: 100vh;
    padding: 6vh var(--desktop-left-right-space)
}
</style>