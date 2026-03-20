<script setup>
import {defineProps} from "vue";

const {boxDefaultWidth} = defineProps(['boxDefaultWidth']);
</script>

<template>
    <div class="box-default-ctn">
        
    </div>
</template>

<style scoped>
.box-default-ctn{
    height: 100vh;
    background-color: red;
}
</style>