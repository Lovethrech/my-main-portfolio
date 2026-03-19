<template>
    <div class="hero-user-profile-image-ctn">
        <img src="/public/userProfile.png" alt="Lovethrech Image">
        <!-- background-color: var(--general-components-bg-color);
    opacity: 0.8;
    background-size: 20px 20px;
    background-image:  repeating-linear-gradient(to right, 
        var(--bg-color), var(--bg-color) 1px, 
        var(--general-components-bg-color) 1px,
        var(--general-components-bg-color))
    ; -->
    </div>
</template>

<style scoped>
.hero-user-profile-image-ctn{
    background-color: var(--general-components-bg-color);
    opacity: 0.8;
    background-size: 20px 20px;
    background-image:  repeating-linear-gradient(to right, 
        var(--bg-color), var(--bg-color) 1px, 
        var(--general-components-bg-color) 1px,
        var(--general-components-bg-color))
    ;
}
.hero-user-profile-image-ctn img {
    width: 100%;
    height:100%;
}
</style>