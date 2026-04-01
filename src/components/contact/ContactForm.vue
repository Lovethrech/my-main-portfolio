<script setup>
import Contacts from "@/data/contacts.json";
</script>

<template>
    <div class="contact-form-ctn">
        <form action="" id="contact-form">
            <ContactInputCtn :labelName="Contacts[0].labelName" :nameType="Contacts[0].nameType" :nameFor="Contacts[0].nameFor"></ContactInputCtn>
            <ContactInputCtn :labelName="Contacts[1].labelName" :nameType="Contacts[1].nameType" :nameFor="Contacts[1].nameFor"></ContactInputCtn>
            <ContactInputMsgCtn :labelName="Contacts[2].labelName" :nameType="Contacts[2].nameType" :nameFor="Contacts[2].nameFor"></ContactInputMsgCtn>
            <br/>
        </form>
    </div>
</template>