<template>
    <div class="home-project-box">
        <div class="home-project-box-desc-ctn">
            <span 
                class="legend-dot"
            >
            </span>
            <span>
                Client
            </span>
        </div>
    </div>
</template>

<style scoped>
.home-project-box{
    background: url("/public/Chel-Cafe.jpeg") no-repeat;
    background-size: contain;
    width:30vw;
    height: 50vh;
}
.home-project-box-desc-ctn{
    background-color: var(--bg-color);
    width: 20%;
}
.legend-dot {
    background-color: orange;
    display: inline-block;
    width: 1vh;
    height: 1vh;
    border-radius: 50%;
}
</style>