<template> 

        <img class="mFooterFix" src="../assets/svgs/waveFlatTop.svg" alt="">
        <div id="contactus" class="nav footerFlex bgPurple">
            
            <!-- Footer Left start -->
            <div class="ftrleft">
            
            <a class="mp8" href="https://www.facebook.com/ecellnmit/" target="_blank">
                <img src="../assets/icons/iconFacebook.svg" alt="logoI">
            </a>
            
            <a class="mp8" href="mailto:ecellnmit@gmail.com" target="_blank">
                <img src="../assets/icons/iconGmail.svg" alt="logoI">
            </a>
            
            <a class="mp8" href="https://www.linkedin.com/company/ecellnmit/" target="_blank">
                <img src="../assets/icons/iconLinkedin.svg" alt="logoI">
            </a>
            
            <a  class="mp8" href="https://www.instagram.com/ecellnmit/" target="_blank">
                <img src="../assets/icons/iconInstagram.svg" alt="logoI">
            </a>
            
        </div>
        <!-- Footer Left end -->
        
        
        <!-- Footer Center start -->    
        <div class="cf mp8 ftrCenter">
            <a href="">
                <img class="logoSize" src="../assets/svgs/logos/EnfinityLogoBlack.png">
            </a>
            <div class="cf mp8 txtCenter">@ All rights reserved - Entrepreneurship cell NMIT</div>
        </div>
        <!-- Footer Center end -->
        
        <!-- Footer Right start -->
        <div class="cfw ftrRight">            
            <div class="rfw">
                <div class="p8">Dhanush - 8951826096</div>
                <div class="p8">Shaurya - 9102856807</div>
            </div>
            <div class="rfw ">
                <div class="p8">Rohan K - 6363032865</div>
                <div class="p8">Ankush - 9108161001</div>
            </div>
            <div class="rfw ">
                <div class="p8 ">Samarth - 7023707541</div>
                <div class="p8">Sai Achuth - 9900268369</div>
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

<style>
@media (max-width:460px){
    .footerFlex{
        display: flex;
        justify-content: center;
        align-items: center ;
        flex-direction: column;
    }
    .ftrCenter, .ftrLeft, .ftrRight{
        margin: 32px !important;
    }
}
.txtCenter{
    text-align: center;
}

/* Fixing the footer top wave */
.mFooterFix{
    margin-bottom: -24px;
}
.txtWhite{
    color: #fff;
}
.shadowGradB{
    background: linear-gradient(to top, var(--logoPurple), #fff);
}
.shadowGradT{
    background: linear-gradient(to bottom, var(--logoPurple), #fff);
}
.bgGrey{
    background-color: var(--logoNeutral);
}
.bgPurple{
    background-color: var(--logoNeutral);
}
.logoSize{
    height: 32px;
}
</style>