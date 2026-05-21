<template>
    <div class="about-download-cv-ctn">
        <a href="/Olaonipekun_Dolapo_Rachael_CV.pdf" download="olaonipekun-dolapo-rachael-cv" class="link">
            <button class="about-download-cv">
                Download CV
            </button>
        </a>
    </div>
</template>

<style scoped>
.about-download-cv-ctn, .about-download-cv{
    width: 100%;
}
.about-download-cv{
    padding:1vh;
    font-size: 1.6vh;
    background-color: var(--bg-color);
    color: var(--text-color);
    border: 0.5vh double var(--general-components-bg-color);
    transition: backgroun;
}
.about-download-cv:hover{
    cursor: pointer;
    background-color: #ffffff;
    color: #000000;
    transform: scale(0.98);
}
</style>