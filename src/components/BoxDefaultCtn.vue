<script setup>
import {defineProps} from "vue";

const {boxDefaultWidth} = defineProps(['boxDefaultWidth']);
</script>

<template>
    <div class="box-default-ctn" :style="{width: boxDefaultWidth}">
        
    </div>
</template>

<style scoped>
.box-default-ctn{
    height: 10vh;
    background-color: red;
}
</style>