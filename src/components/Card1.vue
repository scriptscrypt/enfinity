<template>
 
        <!-- <a target="_blank" href="https://wa.me/919879346581" class="card cf">  -->
        <a target="" href="#" class="card cf"> 
            <img class="cardImg" src="../assets/card/img1.png"  alt="">
            <!-- <div class="mp8"> Click to contact the registrar </div> -->

        </a>

</template>

<script>

    export default {
        name:"Card1Vue",
    
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