<script setup>
import { defineProps} from "vue";

const {labelName, nameType, nameFor}=defineProps(['labelName', 'nameType', 'nameFor']);
</script>

<style scoped>
.home-contact-input-ctn-main-ctn, .home-contact-input-ctn-mini-ctn{
    width:100%;
}
.contact-error-message{
    color: red;
    font-size: 1.4vh;
    text-align: right;
}
</style>

<template>
    <div class="home-contact-input-ctn-main-ctn">
        <div class="home-contact-input-ctn-mini-ctn">
            <div class="home-input-ctn">
                <label class="home-label" :for="nameFor">{{labelName}}</label><br>
                <input :type="nameType" :name="nameFor" :id="nameFor" class="home-input-value" required />
                <p class="contact-error-message">Fill in the box</p>
            </div><br>
        </div>
    </div>
</template>