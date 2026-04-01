import { defineStore } from "pinia";
import {ref, watch} from "vue";

export const useContactFormStore=defineStore('contactForm', ()=>{
    const isValid=ref(true);
    
})