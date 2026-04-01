<script setup>
import { useContactFormStore } from "@/stores/contactForm";
import Contacts from "@/data/contacts.json";
import ContactInputCtn from "./ContactInputCtn.vue";
import ContactInputMsgCtn from "./ContactInputMsgCtn.vue";

const contactFormStore=useContactFormStore();
</script>

<template>
    <div class="contact-form-ctn">
        <form action="" id="contact-form" @submit="contactFormStore.submitForm">
            <ContactInputCtn :labelName="Contacts[0].labelName" :nameType="Contacts[0].nameType" :nameFor="Contacts[0].nameFor"></ContactInputCtn>
            <ContactInputCtn :labelName="Contacts[1].labelName" :nameType="Contacts[1].nameType" :nameFor="Contacts[1].nameFor"></ContactInputCtn>
            <ContactInputMsgCtn :labelName="Contacts[2].labelName" :nameType="Contacts[2].nameType" :nameFor="Contacts[2].nameFor"></ContactInputMsgCtn>
            <br/>
        </form>
    </div>
</template>

<style scoped>
.contact-form-ctn{
    width: 100%;
}
</style>