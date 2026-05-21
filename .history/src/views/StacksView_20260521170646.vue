<script setup>
import StackMain from "@/components/stack/StackMain.vue";
</script>

<template>
    <main id="stacks-view">
        <section>
            <h3 class="about-title">Stacks</h3>
            <StackMain></StackMain>
        </section>
    </main>
</template>

<style scoped>
.about-title{
    color: hsl(166, 91%, 49%);
    margin-bottom: 20px;
    font-size:4vh;
    text-transform: uppercase;
    text-align:center;
    letter-spacing:2vh;
}

@media screen and (max-width: 450px) {
    .about-title{
        font-size: 24px;
    }
}
</style>