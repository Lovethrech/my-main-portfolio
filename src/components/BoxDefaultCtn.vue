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
    height: 4vh;
    background-color: var(--general-components-bg-color);
    border-radius: 0 0 0 10vh;
}
</style>