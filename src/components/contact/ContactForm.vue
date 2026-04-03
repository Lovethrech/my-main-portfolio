<script setup>
import { useContactFormStore } from "@/stores/contactForm";
import Contacts from "@/data/contacts.json";
import ContactInputCtn from "./ContactInputCtn.vue";
import ContactInputMsgCtn from "./ContactInputMsgCtn.vue";
import ContactFormBtn from "./ContactFormBtn.vue";

const contactFormStore=useContactFormStore();
</script>

<template>
    <div class="contact-form-ctn">
        <form action="" id="contact-form" @submit="contactFormStore.submitForm">
            <ContactInputCtn :labelName="Contacts[0].labelName" :nameType="Contacts[0].nameType" :nameId="contactFormStore.name" :nameFor="Contacts[0].nameFor" :placeholder="Contacts[0].placeholder"></ContactInputCtn>
            <ContactInputCtn :labelName="Contacts[1].labelName" :nameType="Contacts[1].nameType" :nameFor="Contacts[1].nameFor" :placeholder="Contacts[1].placeholder"></ContactInputCtn>
            <ContactInputMsgCtn :labelName="Contacts[2].labelName" :nameType="Contacts[2].nameType" :nameFor="Contacts[2].nameFor" :placeholder="Contacts[2].placeholder"></ContactInputMsgCtn>
            <br/>
            <ContactFormBtn @click="contactFormStore.submitForm"/>
            <p id="form-success">
                Sucessfully submitted!
            </p>
        </form>
    </div>
</template>

<style scoped>
.contact-form-ctn{
    width: 100%;
}
#form-success{
    color: green;
    font-size: var(--h4-size);
}
</style>