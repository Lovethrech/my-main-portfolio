<script setup>
import Contacts from "@/data/contacts.json";
import ContactInputCtn from "./ContactInputCtn.vue";
import ContactInputMsgCtn from "./ContactInputMsgCtn.vue";
</script>

<template>
    <div class="contact-form-ctn">
        <form action="" id="contact-form">
            <ContactInputCtn :labelName="Contacts[0].labelName" :nameType="Contacts[0].nameType" :nameFor="Contacts[0].nameFor" :placeholder="Contacts[0].placeholder" :errorMsg="Contacts[0].errorMsg"></ContactInputCtn>
            <ContactInputCtn :labelName="Contacts[1].labelName" :nameType="Contacts[1].nameType" :nameFor="Contacts[1].nameFor" :placeholder="Contacts[1].placeholder" :errorMsg="Contacts[1].errorMsg"></ContactInputCtn>
            <ContactInputMsgCtn :labelName="Contacts[2].labelName" :nameType="Contacts[2].nameType" :nameFor="Contacts[2].nameFor" :placeholder="Contacts[2].placeholder" :errorMsg="Contacts[2].errorMsg"></ContactInputMsgCtn>
            <br/>
            <button type="submit" id="contact-form-btn">
                Submit Message
            </button>
            <p id="form-success" style="display: none; color: green;">
                Sucessfully submitted!
            </p>
        </form>
    </div>
</template>

<style scoped>
.contact-form-ctn{
    width: 100%;
}
#contact-form-btn{
    width: 100%;
    background-color: var(--bg-color);
    color: var(--text-color);
    padding: 1vh;
    font-size: var(--p-size);
    border: 0.2vh solid #a7a4a4;
    transition: background-color .4s ease-in-out, color .2s ease-in;
}
#contact-form-btn:hover{
    cursor: pointer;
    background-color: var(--general-components-bg-color);
    color: #ffffff;
}
#form-success{
    color: green;
    font-size: var(--h4-size);
}
</style>