<template> 

        <div class="nav ">
            
            <!-- Footer Left start -->
            <div class="">
            
            <a class="mp8" href="">
                <img src="../assets/icons/iconFacebook.svg" alt="logoI">
            </a>
            
            <a class="mp8" href="">
                <img src="../assets/icons/iconGmail.svg" alt="logoI">
            </a>
            
            <a class="mp8" href="">
                <img src="../assets/icons/iconLinkedin.svg" alt="logoI">
            </a>
            
            <a  class="mp8" href="">
                <img src="../assets/icons/iconInstagram.svg" alt="logoI">
            </a>
            
        </div>
        <!-- Footer Left end -->
        
        
        <!-- Footer Center start -->    
        <div class="cf mp8">
            <a href="p16">
                <img class="logoSize" src="../assets/svgs/logos/EnfinityLogoStd.png">
            </a>
            <div class="cf p8">@ All rights reserved - Entrepreneurship cell NMIT</div>
        </div>
        <!-- Footer Center end -->
        
        <!-- Footer Right start -->
        <div class="cfw">            
            <div class="rfw">
                <div class="mp8">lorem - 90909090990</div>
                <div class="mp8">lorem - 90909090990</div>
            </div>
            <div class="rfw">
                <div class="mp8">lorem - 90909090990</div>
                <div class="mp8">lorem - 90909090990</div>
            </div>
            
        </div>
        <!-- Footer Right end -->
    </div>
</template>

<script>
    export default {
        name:"FooterVue"
        
    }
</script>

<style >
.shadowGradB{
    background: linear-gradient(to top, var(--logoPurple), #fff);
}
.shadowGradT{
    background: linear-gradient(to bottom, var(--logoPurple), #fff);
}
.bgGrey{
    background-color: var(--logoNeutral);
}
.logoSize{
    height: 32px;
}
</style>