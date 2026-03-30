<script setup>
import { defineProps } from 'vue';

const {homeProjectBoxDescItems}=defineProps(['homeProjectBoxDescItems']);
</script>

<template>
    <div 
        class="home-project-box" 
        v-for="homeProjectBoxDescItem in homeProjectBoxDescItems" 
        :key="homeProjectBoxDescItem.id"
        :style="{background: homeProjectBoxDescItem.imgSrc}"
    >
        <div class="home-project-box-desc-ctn">
            <div class="home-project-box-desc-main-ctn">
                <span 
                    class="home-project-box-legend-dot"
                    :style="{backgroundColor: homeProjectBoxDescItem.legendColor}"
                >
                </span>
                <span>
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
    background-size: cover;
    width:30vw;
    height: 30vh;
    flex-direction: column;
    padding: 1vh;
}
.home-project-box-desc-main-ctn{
    background-color: var(--bg-color);
    padding: 0.5vh 2vh;
    border-radius: var(--border-radius);
    gap:20vh;
}
.home-project-box-legend-dot {
    display: inline-block;
    width: 1vh;
    height: 1vh;
    border-radius: 50%;
}
</style>