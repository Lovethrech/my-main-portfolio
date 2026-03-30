<script setup>
import homeProjectBoxDescItems from "@/data/home-project-box-desc-items.json";
import HomeProjectBox from './HomeProjectBox.vue';
</script>

<template>
    <div class="home-project-box-ctn">
        <div class="home-project-box-main-ctn display-flex-direction-row-justify-space-between">
            <HomeProjectBox
                :homeProjectBoxDescItems="homeProjectBoxDescItems"
            />
        </div>
    </div>
</template>

<style scoped>
.home-project-box-ctn{
    padding: 4vh 0;
}
.home-project-box-main-ctn{
    gap: 3vh;
}
</style>