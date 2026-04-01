<template>
    <button type="submit" id="contact-form-btn">
        Submit Message
    </button>
</template>

<style scoped>
#contact-form-btn{
    width: 100%;
    background-color: var(--bg-color);
    color: var(--text-color);
    padding: 1vh;
    font-size: 2vh;
    border: 0.2vh solid #a7a4a4;
    transition: background-color .4s ease-in-out, color .2s ease-in;
}
#contact-form-btn:hover{
    cursor: pointer;
    background-color: var(--general-components-bg-color);
    color: #ffffff;
}
</style>