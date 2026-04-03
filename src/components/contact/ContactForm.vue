<script setup>
import {ref} from "vue";
import Contacts from "@/data/contacts.json";
import ContactInputCtn from "./ContactInputCtn.vue";
import ContactInputMsgCtn from "./ContactInputMsgCtn.vue";

const formData=ref({name:'My name is', email:'', message:''});
const errorMsg=ref({name:'', email:'', message:''});
</script>

<template>
    <div class="contact-form-ctn">
        <form action="" id="contact-form">
            <ContactInputCtn 
                :labelName="Contacts[0].labelName" 
                :nameType="Contacts[0].nameType" 
                :nameFor="Contacts[0].nameFor" 
                :dataModel="formData.name"
                :placeholder="Contacts[0].placeholder" 
                :errorMsg="errorMsg.name"
            />
            <ContactInputCtn 
                :labelName="Contacts[1].labelName" 
                :nameType="Contacts[1].nameType" 
                :nameFor="Contacts[1].nameFor" 
                :dataModel="formData.email"
                :placeholder="Contacts[1].placeholder" 
                :errorMsg="errorMsg.email"
            />
            <ContactInputMsgCtn 
                :labelName="Contacts[2].labelName" 
                :nameType="Contacts[2].nameType" 
                :nameFor="Contacts[2].nameFor" 
                :dataModel="formData.message"
                :placeholder="Contacts[2].placeholder" 
                :errorMsg="errorMsg.message"
            />
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