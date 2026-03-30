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
    background-size: cover;
    width:30vw;
    height: 50vh;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 1vh;
}
.home-project-box-desc-main-ctn{
    background-color: var(--bg-color);
    padding: 0.5vh 2vh;
    border-radius: var(--border-radius);
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