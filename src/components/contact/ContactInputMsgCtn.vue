<script setup>
import { defineProps} from "vue";

const {labelName, nameType, nameFor}=defineProps(['labelName', 'nameType', 'nameFor']);
</script>

<style scoped>
.home-contact-input-msg-ctn-main-ctn{
    width:100%;
}
textarea{
    line-height:1.5;
}
</style>

<template>
    <div class="home-contact-input-msg-ctn-main-ctn">
        <div class="home-input-ctn">
            <label class="home-label" :for="nameFor">{{ labelName }}</label><br>
            <textarea :name="nameFor" :id="nameFor" :type="nameType" cols="30" rows="10" class="home-input-value"></textarea>
            <p class="contact-error-message">Fill in the box</p>
        </div>
    </div>
</template>