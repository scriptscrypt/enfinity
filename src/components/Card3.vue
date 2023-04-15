<template>
 
    <!-- <a target="" href="https://unstop.com/competition/reverse-shark-tank-enfinity-nitte-meenakshi-institute-of-technology-nmit-yelahanka-558309?utm_campaign=site-emails&utm_medium=d2c-automated&utm_source=opportunity-approved" class="card cf">  -->
    <a target="" href="#" class="card cf"> 
        <img class="cardImg" src="../assets/card/img3.png"  alt="">
        <!-- <div class="mp8"> Click to register </div> -->
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
    border-radius: 32px;
    transition: 0.1s ease-in;
    color: #fff;
}
.cardImg{
    height: 96%;
    border-radius: 32px;
    object-fit: cover;
    transition: 0.1s ease-in;
}
.cardImg:hover{
    /* width: 72%;
    height: 72%; */
    border-radius: 40px;
}
.card:hover{
    transition: 0.1s ease-in;
    cursor: pointer;
    background-color: var(--hoverNeutral);
    color: var(--purpleDark);
}
/* 15Dec2022 start*/


/* 15Dec2022 end*/

</style>