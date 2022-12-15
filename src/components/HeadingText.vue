<template>
    <div class="head1 mp16">{{name}}</div>
</template>

<script>
    export default {
        name:"HeadingText",
        props:{
            name: String,
        }
        
    }
</script>

<style scoped>
    .head1{
        background: linear-gradient(90.21deg, #653390 27.76%, #222878 99.87%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;

    }
</style>