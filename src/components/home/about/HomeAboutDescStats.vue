<template>
    <div class="home-about-desc-stats">
        <div class="home-about-desc-stats-main-ctn">
            <p id="home-about-desc-stats-client-xperience">
                3+ Clients Projects
            </p>
            <p id="home-about-desc-stats-personal-xperience">
                10+ Personal Projects
            </p>
            <p id="home-about-desc-stats-ongoing-pro">
                4+ Ongoing Projects
            </p>
        </div>
    </div>
</template>

<style scoped>
.home-about-desc-stats, .home-about-desc-stats-main-ctn{
    display: flex;
}
.home-about-desc-stats{
    width: 100%;
    background-color: var(--general-components-bg-color);
    color: #ffffff;
    padding: 1vh 2vh;
    place-items: center;
}
.home-about-desc-stats-main-ctn{
    flex-direction: column;
    gap: 4vh;
    font-size: 3vh;
    letter-spacing: 1.5vh;
}
</style>