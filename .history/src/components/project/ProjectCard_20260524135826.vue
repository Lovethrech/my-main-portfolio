<script setup>
import { defineProps, ref } from 'vue';

const {projectItems} = defineProps(["projectItems"]);
const cardHeight=ref("100%");
const cardMinMaxIcon=ref("+");
const headerNamePosition=ref("left");

const displayCardCtn=()=>{
    if (cardMinMaxIcon.value==="+"){
        cardMinMaxIcon.value="-";
        cardHeight.value="70vh";
        headerNamePosition.value="center";
    }
    else{
        cardMinMaxIcon.value="+";
        cardHeight.value="100%";
        headerNamePosition.value="left";
    }
}
</script>

<template>
    <div @click="displayCardCtn" class="project-card" :style="{height: cardHeight}">
        <div class="project-card-header display-flex-direction-row-justify-space-between">
            <div class="project-card-header-icon">
                =
            </div>
            <h3 class="project-card-header-name" :style="{textAlign: headerNamePosition}">
                {{ projectItems[0].name }}
            </h3>
            <div class="project-card-header-min-max">
                {{cardMinMaxIcon}}
            </div>
        </div>
        <div class="project-card-hidden-ctn">
            <div class="project-card-desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eos deleniti ipsum commodi laudantium blanditiis dolore, quos eligendi iure voluptates esse corporis explicabo corrupti quibusdam nulla amet accusamus sapiente. Corporis molestias rem quas vel veniam, alias ad quae quam commodi ullam harum architecto reprehenderit fugit praesentium adipisci debitis repellat facere! Aliquid recusandae modi facere, nostrum magni corrupti maiores impedit quibusdam, accusantium totam, id harum! Nisi voluptate dolor exercitationem totam et autem quod voluptas, tempora distinctio corrupti temporibus facilis at ipsum consectetur deserunt aspernatur repudiandae dolorum ducimus nobis, fugiat quos aliquam iusto atque. Doloribus ipsa, porro accusamus esse quam perferendis architecto!
            </div>
            <div class="project-card-footer">

            </div>
        </div>
    </div>
</template>

<style scoped>
.project-card{
    background: url(/room-page.jpeg) top/100vh no-repeat;
    background-size: cover;
    width:100%;
}
.project-card-header{
    padding: 0 2vh;
    gap: 2vh;
    background-color: #0000008a;
}
.project-card-header-icon, .project-card-header-name,  .project-card-header-min-max{
    font-size: 4vh;
}
.project-card-header-name{
    width: 100%;
}
.project-card-hidden-ctn{
    background-color: #ffffff86;
    padding: 2vh 
}
</style>