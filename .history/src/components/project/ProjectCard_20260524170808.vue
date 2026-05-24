<script setup>
import { defineProps, ref } from 'vue';
import ProjectCardHeader from './ProjectCardHeader.vue';

const {projectItems} = defineProps(["projectItems"]);
const projectItemStacks = projectItems[0].stack;
const cardHeight=ref("100%");
const cardMinMaxIcon=ref("+");
const headerNamePosition=ref("left");
const cardMenuIcon=ref("<i class='ri-menu-5-fill'></i>");

const displayCardCtn=()=>{
    if (cardMinMaxIcon.value==="+"){
        cardMinMaxIcon.value="-";
        cardHeight.value="70vh";
        headerNamePosition.value="center";
        cardMenuIcon.value="<i class='ri-menu-4-fill'></i>";
    }
    else{
        cardMinMaxIcon.value="+";
        cardHeight.value="100%";
        headerNamePosition.value="left";
        cardMenuIcon.value="<i class='ri-menu-5-fill'></i>";
    }
}
</script>

<template>
    <div @click="displayCardCtn" class="project-card" :style="{height: cardHeight}">
        <ProjectCardHeader
            :cardMenuIcon="cardMenuIcon"
            :headerNamePosition="headerNamePosition"
            :projectItemName="projectItems[0].name"
            :cardMinMaxIcon="cardMinMaxIcon"
        />
        <div class="project-card-hidden-ctn">
            <div class="project-card-desc-and-stack">
                <div class="project-card-desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eos deleniti ipsum commodi laudantium blanditiis dolore, quos eligendi iure voluptates esse corporis explicabo corrupti quibusdam nulla amet accusamus sapiente. Corporis molestias rem quas vel veniam, alias ad quae quam commodi ullam harum architecto reprehenderit fugit praesentium adipisci debitis repellat facere! Aliquid recusandae modi facere, nostrum magni corrupti maiores impedit quibusdam, accusantium totam, id harum! Nisi voluptate dolor exercitationem totam et autem quod voluptas, tempora distinctio corrupti temporibus facilis at ipsum consectetur deserunt aspernatur repudiandae dolorum ducimus nobis, fugiat quos aliquam iusto atque. Doloribus ipsa, porro accusamus esse quam perferendis architecto!
                </div>
                <br/>
                <div class="project-card-stack">
                    <h3 class="project-card-stack-title">
                        Stacks:
                    </h3>
                    <div class="project-card-stack-list-ctn">
                        <div class="project-card-stack-list" v-for="projectItemStack in projectItemStacks" :key="projectItemStack.id">
                            <p class="project-card-stack-list-name">
                                {{ projectItemStack.name }}
                            </p>
                            <div class="project-card-stack-list-level-ctn">
                                <div class="project-card-stack-list-level"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- background: url(/room-page.jpeg) top/100vh no-repeat; -->
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
.project-card-hidden-ctn{
    height: 91%;
    background-color: #ffffff9c;
    color: #000000;
    padding: 2vh 
}
.project-card-desc{
    font-size: 1.8vh;
    text-align: justify;
}
.project-card-stack-title{
    text-transform: uppercase;
}
.project-card-stack-list{
    dio
}
.project-card-stack-list-level-ctn{
    width: 20vw;
    height: 10vh;
    background-color: var(--bg-color);
}

@media screen and (max-width:950px) {
    .project-card-desc{
        font-size: 1.2vh;
    }
}
</style>