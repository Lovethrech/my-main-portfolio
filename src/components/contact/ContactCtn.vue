<script setup>
import ContactTitle from './ContactTitle.vue';
import ContactDesc from './ContactDesc.vue';
import ContactForm from './ContactForm.vue';
</script>

<template>
    <section class="contact-ctn">
        <ContactTitle/>
        <div class="contact-main-ctn display-flex-direction-row-justify-space-between">
            <ContactDesc/>
            <ContactForm/>
        </div>
    </section>
</template>

<style scoped>
.contact-ctn{
    background-color: var(--bg-color);
    min-height: 100vh;
    padding: 6vh var(--desktop-left-right-space);
}
.contact-main-ctn{
    width: 100%;
}

@media screen and (max-width: 1024px) {
    .contact-ctn{
        padding: 6vh var(--mobile-left-right-space);
    }
    .contact-main-ctn{
        flex-direction: column;
        gap:4vh;
    }
}
</style>