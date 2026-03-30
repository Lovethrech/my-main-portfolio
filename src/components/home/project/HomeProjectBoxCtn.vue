<script setup>
import HomeProjectBoxDescItems from "@/data/home-project-box-desc.json;"
import HomeProjectBox from './HomeProjectBox.vue';
</script>

<template>
    <div class="home-project-box-ctn">
        <div class="home-project-box-main-ctn">
            <HomeProjectBox/>
        </div>
    </div>
</template>

<style scoped>
.home-project-box-ctn{
    padding: 4vh 0;
}
</style>