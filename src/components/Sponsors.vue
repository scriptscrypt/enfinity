<template>
    <div id="sponsors" class="cf">
        <HeadingText name="Sponsors"/>

        <div class="rfw">

            <div class="mp8">
                <img class="sponsorImg" src="../assets/Sponsors/Sponsor1.png" alt="">
            </div>
            <div class="mp8">
                <img class="sponsorImg" src="../assets/Sponsors/Sponsor3.png" alt="">
            </div>
            <div class="mp8">
                <img class="sponsorImg" src="../assets/Sponsors/Sponsor4.png" alt="">
            </div>
            <div class="mp8">
                <img class="sponsorImg" src="../assets/Sponsors/Sponsor5.webp" alt="">
            </div>
            <div class="mp8">
                <img class="sponsorImg" src="../assets/Sponsors/Sponsor6.png" alt="">
            </div>

        </div>
    </div>
</template>

<script>
import HeadingText from "./HeadingText.vue";

    export default {
        name:"SponsorsVue",
        components:{
            HeadingText
        }
    }
</script>

<style scoped>
    .vh72{
        height: 72vh !important;
    }
    .sponsorImg{
        height: 88px;
    }
</style>