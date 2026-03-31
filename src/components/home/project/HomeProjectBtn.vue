<template>
    <div class="home-project-btn-ctn display-flex-justify-center-place-center">
        <RouterLink to="/">
            <button class="home-project-btn">
                Projects
            </button>
        </RouterLink>
    </div>
</template>

<style scoped>
.home-project-btn-ctn{
    width: 100%;
    font-weight:800;
}
.home-project-btn{
    background-color: var(--bg-color);
    color:var(--text-color);
    letter-spacing: 1vh;
    padding: 1vh 3vh;
    font-size: 2vh;
}
</style>