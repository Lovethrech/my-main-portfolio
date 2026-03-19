import { defineStore } from "pinia";
import {ref, watch} from "vue";

export const useThemeStore= defineStore('theme', ()=>{
    const isDark= ref(false);

    // Load from localStorage or system preference 
    
})