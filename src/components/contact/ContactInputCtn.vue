<script setup>
import { defineProps} from "vue";

const {labelName, nameType, nameFor}=defineProps(['labelName', 'nameType', 'nameFor']);
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
                <input :type="nameType" :name="nameFor" :id="nameFor" class="home-input-value"/>
                <p class="contact-error-message">
                    
                </p>
            </div><br>
        </div>
    </div>
</template>