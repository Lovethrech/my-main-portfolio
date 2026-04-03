<script setup>
import { defineProps} from "vue";

const {labelName, nameType, nameFor, placeholder, errorMsg, dataModel}=defineProps(['labelName', 'nameType', 'nameFor', 'placeholder', 'errorMsg', 'dataModel']);
</script>

<style scoped>
.home-contact-input-ctn-main-ctn, .home-contact-input-ctn-mini-ctn{
    width:100%;
}
</style>

<template>
    <div class="home-contact-input-ctn-main-ctn">
        <div class="home-contact-input-ctn-mini-ctn">
            <div class="home-input-ctn">
                <label class="home-label" :for="nameFor">{{labelName}}</label><br>
                <input :type="nameType" :value="dataModel" :id="nameFor" :placeholder="placeholder" class="home-input-value"/>
                <p class="contact-error-message" v-html="errorMsg">
                </p>
            </div><br>
        </div>
    </div>
</template>