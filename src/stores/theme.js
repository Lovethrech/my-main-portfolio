import { defineStore } from "pinia";
import {ref, watch} from "vue";

export const useThemeStore= defineStore('theme', ()=>{
    const isDark= ref(false)

    // Load from localStorage or system preference 
    const savedTheme=localStorage.getItem('theme');
    if (savedTheme==='dark'){
        isDark.value=true
    }
    else if (savedTheme === 'light'){
        isDark.value=false    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches){
        isDark.value=true
    }

    const toggleTheme= () =>{
        isDark.value = !isDark.value
        localStorage.setItem('theme', isDark.value? 'dark':'light')
    }

    watch(isDark, (dark)=>{
        if(dark){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
    }, {immediate:true})

    return{isDark, toggleTheme};
})