<template> 

        <img class="mFooterFix" src="../assets/svgs/waveFlatTop.svg" alt="">
        <div class="nav  bgPurple">
            
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
            <a href="#">
                <img class="logoSize" src="../assets/svgs/logos/EnfinityLogoStd.png">
            </a>
            <div class="cf p8">@ All rights reserved - Entrepreneurship cell NMIT</div>
        </div>
        <!-- Footer Center end -->
        
        <!-- Footer Right start -->
        <div class="cfw">            
            <div class="rfw alignL">
                <div class="mp8">Dhanush - 8951826096</div>
                <div class="mp8">Shaurya - 9102856807</div>
            </div>
            <div class="rfw">
                <div class="mp8">Rohan K - 6363032865</div>
                <div class="mp8">Ankush - 9108161001</div>
            </div>
            <div class="rfw alignL">
                <div class="mp8 ">Samarth - 7023707541</div>
                <div class="mp8">Sai Achuth - 9900268369</div>
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