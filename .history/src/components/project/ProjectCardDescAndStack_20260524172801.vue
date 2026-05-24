<script setup>
import { defineProps } from 'vue';

const {projectItemStacks} = defineProps(["projectItemStacks"]);
</script>

<template>
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
                        {{ projectItemStack.name }}:
                    </p>
                    <div class="project-card-stack-list-level-ctn">
                        <div class="project-card-stack-list-level" :style="{backgroundColor: projectItemStack.colorCode, width: projectItemStack.width}"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media screen and (max-width:950px) {
    .project-card-desc{
        font-size: 1.2vh;
    }
}
</style>