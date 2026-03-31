<template>
    <div class="home-project-btn-ctn display-flex-justify-center-place-center">
        <RouterLink to="/project">
            <button class="home-project-btn">
                PROJECTS
            </button>
        </RouterLink>
    </div>
</template>

<style scoped>
.home-project-btn-ctn{
    width: 100%;
    
}
.home-project-btn{
    background-color: var(--bg-color);
    color:var(--text-color);
    font-weight:600;
    letter-spacing: 1vh;
    padding: 1vh 3vh;
    font-size: 2vh;
}

@media screen and (max-width: 1024px){
    .home-project-btn-ctn{
        display: block;
    }
    .home-project-btn{
        width: 100%;
    }
}
</style>