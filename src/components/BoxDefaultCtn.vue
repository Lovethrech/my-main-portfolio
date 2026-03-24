<script setup>
import {defineProps} from "vue";

const {boxDefaultWidth, boxDefaultBgColor} = defineProps(['boxDefaultWidth', 'boxDefaultBgColor']);
</script>

<template>
    <div 
        class="box-default-ctn" 
        :style="{width: boxDefaultWidth, backgroundColor:boxDefaultBgColor}"
    >
    </div>
</template>

<style scoped>
.box-default-ctn{
    height: 4vh;
    border-radius: 0 0 0 10vh;
}
</style>