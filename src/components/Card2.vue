<template>
 
    <!-- <a target="_blank" href="https://forms.gle/wdxwyBiYjDUAqewW8" class="card cf">  -->
    <a target="" href="#" class="card cf"> 
        <img class="cardImg" src="../assets/card/img2.png"  alt="">
        <!-- <div class=""> Click to register </div> -->
    </a>

</template>

<script>

export default {
    name:"Card2Vue",

}
</script>

<style>
.bgColor{
    background-color:var(--logoNeutral);
}
.shadow{
    box-shadow: 0px 0px 1px 1px var(--logoPurple);
}
.card{
    width: 300px;
    height: 288px;
    object-fit: cover;
    border-radius: 32px;
    transition: 0.1s ease-in;
    color: #fff;
}
.cardImg{
    width: 88%;
    height: 72%;
    border-radius: 32px;
    object-fit: contain;
    transition: 0.1s ease-in;
}
.cardImg:hover{
    content: "afsdfas";
    /* opacity: 0.8; */
    border-radius: 40px;
}
.card:hover{
    /* width: 280px; */
    transition: 0.1s ease-in;
    cursor: pointer;
    background-color: var(--hoverNeutral);
    color: var(--purpleDark);
}
/* 15Dec2022 start*/


/* 15Dec2022 end*/

</style>