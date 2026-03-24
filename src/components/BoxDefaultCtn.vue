<script setup>
import {defineProps} from "vue";

const {boxDefaultWidth, boxDefaultHeight, boxDefaultBgColor, boxDefaultBrRadius} = defineProps(['boxDefaultWidth', 'boxDefaultHeight', 'boxDefaultBgColor', 'boxDefaultBrRadius']);
</script>

<template>
    <div 
        class="box-default-ctn" 
        :style="{
            width: boxDefaultWidth, 
            height: boxDefaultHeight, 
            backgroundColor:boxDefaultBgColor, 
            borderRadius:boxDefaultBrRadius
        }"
    >
    </div>
</template>

<style scoped>
.box-default-ctn{
}
</style>