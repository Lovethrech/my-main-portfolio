<script setup>
import {defineProps} from "vue";

const {boxDefaultWidth, boxDefaultBgColor, boxDefaultBrRadius} = defineProps(['boxDefaultWidth', 'boxDefaultBgColor', 'boxDefaultBrRadius']);
</script>

<template>
    <div 
        class="box-default-ctn" 
        :style="{width: boxDefaultWidth, backgroundColor:boxDefaultBgColor, borderRadius:boxDefaultBrRadius}"
    >
    </div>
</template>

<style scoped>
.box-default-ctn{
}
</style>