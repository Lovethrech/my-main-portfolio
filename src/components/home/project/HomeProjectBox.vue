<script setup>
import { defineProps } from 'vue';

const {homeProjectBoxDescItems}=defineProps(['homeProjectBoxDescItems']);
</script>

<template>
    <div 
        class="home-project-box" 
        v-for="homeProjectBoxDescItem in homeProjectBoxDescItems" 
        :key="homeProjectBoxDescItem.id"
        
    >
        <img 
            :src="homeProjectBoxDescItem.imgSrc" 
            :alt="homeProjectBoxDescItem.imgAlt" 
            class="home-project-box-img"
        />
        <div 
            class="home-project-box-desc-ctn"
        >
            <div 
                class="home-project-box-desc-main-ctn"
            >
                <span 
                    class="home-project-box-legend-dot"
                    :style="{backgroundColor: homeProjectBoxDescItem.legendColor}"
                >
                </span>
                <span 
                    class="home-project-box-legend-name"
                >
                    {{ homeProjectBoxDescItem.legendName }}
                </span>
            </div>
        </div>
        <div class="home-project-box-project-desc">
            <p class="home-project-box-project-desc-status">
                Status: {{ homeProjectBoxDescItem.projectStatus }}
            </p>
            <p class="home-project-box-project-desc-details">
                Details: {{ homeProjectBoxDescItem.projectDesc }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.home-project-box-desc-ctn{
    display: flex;
    justify-content: end;
}
.home-project-box{
    display: flex;
    background-color: #0a4134;;
    width:30vw;
    flex-direction: column;
    border: 0.1vh groove #B99A45;
}
.home-project-box:nth-child(2){
    transform: scaleY(1.09);
}
.home-project-box-img{
    margin: 1vh 1vh 0;
}
.home-project-box-desc-main-ctn{
    background-color: var(--bg-color);
    padding: 0.5vh 2vh;
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
}
.home-project-box-legend-dot {
    display: inline-block;
    margin-right:1vh;
    width: 1vh;
    height: 1vh;
    border-radius: 50%;
}
.home-project-box-project-desc{
    color: #ffffff;
    margin:1vh 1vh 4vh;
}
@media screen and (max-width: 1024px){
    .home-project-box{
        width: 100%;
        transform: scale(1);
    }
    .home-project-box-img{
        margin:0;
        width: 100%;
        height: 100%;
    }
}
</style>