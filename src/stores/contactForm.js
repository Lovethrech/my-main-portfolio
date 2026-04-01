import { defineStore } from "pinia";
import {ref, watch} from "vue";

export const useContactFormStore=defineStore('contactForm', ()=>{
    const form=ref("contact-form");
})