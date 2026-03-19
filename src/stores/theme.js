import { defineStore } from "pinia";
import {ref, watch} from "vue";

export const useThemeStore= defineStore('theme', ()=>{
    const isDark= ref(false);

    // Load from localStorage or system preference 
    const savedTheme=localStorage.getItem('theme');
    if (savedTheme==='dark'){
        isDark.value=true;
    }
    else if (savedTheme === 'light'){
        isDark.value=false;
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches){
        isDark.value=true;
    }

    const toogleTheme=()=>{
        isDark.value = !isDark.value
        localStorage.setItem('theme', isDark.value? 'dark':'light')
    }

    
})