<template>

    <div id="about" class="context cf">
        <div class="mt32px"></div>
               <h4 class="w50percent txtCenter">
                   ENFINITY - NMIT's E-Conclave is a flagship national-level Conclave organized by  Enigma- Entrepreneurship cell of Nitte Meenakshi Institute of Technology. ENFINITY aims to bring early entrepreneurs, students, corporates, venture capitalists, and start-ups with ideas from all over the country to one platform.
                   A day encompassing of a Startup-Internship Expo, visionary competitions and insightful sessions will help open the realm of networking and broaden the horizon of business in the minds of the participants.
                </h4>                
    </div>
        <!-- From codepen backgrounds - start -->
        <!-- Adding height to remove extra space after content -->
<div class="area vh56 " >
            <ul class="circles mtFix ">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    <!-- From codepen backgrounds - end -->

</template>

<script>

    export default {
    components: { 
        
     }
}
</script>

<style scoped >
.txtCenter{
    text-align: center;
}
.zMinus{
    z-index: -1;
}
/*Adding this to avoid margin conflicts*/

.w50percent{
    width: 64%;
}   
@media (max-width: 950px){
   .w50percent{
       width: 72%;
    }
}
@media (max-width:432px){
    .vh56{  
        height: fit-content;
    }
    
}

/*From codepen - https://codepen.io/mohaiman/pen/MQqMyo */

/* Styles start */
*{
    margin: 0px;
    padding: 0px;
}

.context {
    width: 100vw;
    position: relative;
    top:88px;
    color: #fff;
}

.area{
    background: var(--purpleDark);  
    /* background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);   */
    width: 100vw;   
    /*Adding this to avoid margin conflicts*/
    margin-top: -144px;
}

.circles{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    /* height: 100%; */
    overflow: hidden;
}

.circles li{
    position: relative;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 8s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 16s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}
/* Styles end*/

</style>