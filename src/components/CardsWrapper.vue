<template>
    <div class="cf">
        <div class="">
            <HeadingText name="Events"/>
        </div>
        <div class="rf">
            <CardVue class="mp8" evtName="Business Marathon" />
            <CardVue class="mp8" evtName="Startup Expo" />
            <CardVue class="mp8" evtName="Reverse shark tank" />
        </div>
    </div>
</template>

<script>
    import CardVue from "../components/Card.vue";
    import HeadingText from "./HeadingText.vue"

    export default {
        name:"CardsWrapper",
        components:{
            CardVue,
            HeadingText
        }
    }
    
</script>

<style >

</style>