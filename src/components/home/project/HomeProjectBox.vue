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
        <img :src="homeProjectBoxDescItem.imgSrc" alt="" class="home-project-box-img">
        <div class="home-project-box-desc-ctn">
            <div class="home-project-box-desc-main-ctn">
                <span 
                    class="home-project-box-legend-dot"
                    :style="{backgroundColor: homeProjectBoxDescItem.legendColor}"
                >
                </span>
                <span class="home-project-box-legend-name">
                    {{ homeProjectBoxDescItem.legendName }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.home-project-box, .home-project-box-desc-ctn{
    display: flex;
    justify-content: end;
}
.home-project-box{
    width:30vw;
    flex-direction: column;
    flex-wrap: nowrap;
    border: 0.1vh groove var(--bg-color);
}
.home-project-box-img{
    margin: 1vh 1vh 0;
}
.home-project-box-desc-main-ctn{
    background-color: var(--bg-color);
    padding: 0.5vh 2vh;
    border-top-left-radius: var(--border-radius);
}
.home-project-box-legend-dot {
    display: inline-block;
    margin-right:1vh;
    width: 1vh;
    height: 1vh;
    border-radius: 50%;
}
.home-project-box-legend-name{
    text-transform: capitalize;
}
</style>