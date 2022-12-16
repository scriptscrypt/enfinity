<template>
    <div id="events" class="cf">
        <div class="">
            <HeadingText name="Events"/>
        </div>
        <div class="rfw">
            <Card1Vue class="mp8" evtName="Business Marathon" />
            <Card2Vue class="mp8" evtName="Reverse shark tank" />
        </div>
        <div class="rfw">
            <Card3Vue class="mp8" evtName="Startup Expo" />
            <Card4Vue class="mp8" evtName="Small Businesses of NMIT" />
        </div>
    </div>
</template>

<script>
    import Card1Vue from "./Card1.vue";
    import Card2Vue from "./Card2.vue";
    import Card3Vue from "./Card3.vue";
    import Card4Vue from "./Card4.vue";
    import HeadingText from "./HeadingText.vue"

    export default {
        name:"CardsWrapper",
        components:{
            Card1Vue,
            Card2Vue,
            Card3Vue,
            Card4Vue,
            HeadingText
        }
    }
    
</script>

<style >
    

</style>