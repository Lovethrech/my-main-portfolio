<script setup>
import {ref} from "vue";
import Contacts from "@/data/contacts.json";
import ContactInputCtn from "./ContactInputCtn.vue";
import ContactInputMsgCtn from "./ContactInputMsgCtn.vue";

const formData=ref({name:'', email:'', message:''});
const errorMsg=ref({name:'', email:'', message:''});
const success=ref(false);
const isSubmitting=ref(false);

const validateAndSubmit= async()=>{
    errorMsg.value={name:'', email:'', message:''};
    let valid=true;

    if (!formData.value.name.trim()) {
        errorMsg.value.name = 'Name is required';
        valid = false;
    }
    if (!formData.value.email.trim() || !/\S+@\S+\.\S+/.test(formData.value.email)) {
        errorMsg.value.email = 'Please enter a valid email';
        valid = false;
    }
    if (!formData.value.message.trim()) {
        errorMsg.value.message = 'Message is required';
        valid = false;
    }

    if (!valid) return;

    isSubmitting.value = true;

    await new Promise(resolve => setTimeout(resolve, 800))
    console.log('Form submitted:', formData.value)
    success.value = true
    formData.value = { name: '', email: '', message: '' }

    setTimeout(() => success.value = false, 5000)
    isSubmitting.value = false
}
</script>

<template>
    <div class="contact-form-ctn">
        <form action="" id="contact-form" @submit.prevent="validateAndSubmit">
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
            <button type="submit" id="contact-form-btn" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
            <p v-if="success" id="form-success">
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