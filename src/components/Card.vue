<template>

 
        
        <a href="#" class="card cf"> 
            <img class="cardImg" src="../assets/card/imgone.jpg" alt="">
            <div class="mp8"> {{evtName}} </div>
        </a>


</template>

<script>

    export default {
        name:"CardVue",
        components:{
                
            },
        props:{
            evtName: String,
           
        }   
    }
</script>

<style>
    .bgColor{
        /* background-color:var(--logoBlue); */
    }
    .shadow{
        box-shadow: 0px 0px 1px 1px var(--logoPurple);
    }
    .card{
        width: 300px;
        border-radius: 32px;
        transition: 0.1s ease-in;
    }
    .cardImg{
        width: 100%;
        border-radius: 32px;
        object-fit: cover;
        transition: 0.1s ease-in;
    }
    .cardImg:hover{
        border-radius: 40px;
    }
    .cardImg::after{
        opacity: 0.5;
    }
    .card:hover{
        width: 288px;
        transition: 0.1s ease-in;
        cursor: pointer;
    }
    /* 15Dec2022 start*/

    
    /* 15Dec2022 end*/
    
</style>