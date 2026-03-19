<template>
    <div class="desktop-nav">
        <div class="desktop-nav-main-ctn">
            <RouterLink to="" class="link">
                <p class="desktop-nav-link-desc">
                    Home
                </p>
            </RouterLink>
            <RouterLink to="" class="link">
                <p class="desktop-nav-link-desc">
                    Home
                </p>
            </RouterLink>
            <RouterLink to="" class="link">
                <p class="desktop-nav-link-desc">
                    Home
                </p>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.desktop-nav-main-ctn{
    display: flex;
    flex-direction: row;
    gap:3vh;
}
.desktop-nav-link-desc{
    color: #ffffff;
    font-size: var(--p-font-size);
}
</style>