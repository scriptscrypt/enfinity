<template>
    <div class="nav navSticky navDesktop">
        <!-- Navbar Left  start-->
        <div class="mp8"> 
            <a href="">
                <img class="h32px" src="../assets/svgs/logos/EnfinityLogoStd.png" alt="Logo"> 
            </a>
        </div>
        <!-- Navbar Left end -->
        
        <!-- Navbar Center start -->
        <div class="rf">
            <a href="#about" class="navLink mp8">About</a>
            <a href="#events" class="navLink mp8">Events</a>
            <a href="#sponsors" class="navLink mp8">Sponsors</a>
            <a href="#faqs" class="navLink mp8">FAQs</a>
        </div>
        <!-- Navbar Center end -->
        
        
        <!-- Navbar Right start -->
        <div class="mp8">
            <a href="https://ecellnmit.in" target="_blank">
                <img class="logoSize" src="../assets/svgs/logos/EnigmaLogo.png" alt="">
            </a>
        </div>
        <!-- Navbar Right end -->
    </div>

<!-- ------------------------------------------------------------------------------- -->    
    <!-- Styling navbar for mobile  start-->
    
    <div class="navMobile navSticky zFix">
        <div class="nav">
        
        <!-- Navbar Hamburger start -->
        <div class="">
            <!-- Trying hamburger library -->
            <Slide width="400px" class="">
            <a id="home" href="#">
                <span>Home</span>
            </a>
            </Slide>
        </div>
        <!-- Navbar Hamburger end -->

        
         <!-- Navbar Left  start-->
         <div class="mp8"> 
            <a href="">
                <img class="h32px" src="../assets/svgs/logos/EnfinityLogoStd.png" alt="Logo"> 
            </a>
        </div>
    </div>

        <!-- Navbar Left end -->
        <Menu>
        <a href="#about" class="navLink mp8">About</a>
            <a href="#events" class="navLink mp8">Events</a>
            <!-- <a href="#timeline" class="navLink mp8">Timeline</a> -->
            <a href="#sponsors" class="navLink mp8">Sponsors</a>
            <a href="#faqs" class="navLink mp8">FAQs</a>
            <a href="#contactus" class="navLink mp8">Contact us</a>
        </Menu>

    </div>
    <!-- Styling navbar for mobile  end-->


 


</template>

<script>

// import the CSS transitions you wish to use, in this case we are using `Slide`
import { Slide, Menu } from 'vue3-burger-menu';  

export default {
    components: {
        Slide,// Register your component
        Menu
    },
    setup () {
        
    }
}
</script>

<style>
/* Trying the hamburger menu 16Dec2022 */

/* Styles from https://www.npmjs.com/package/vue3-burger-menu */

.bm-burger-button {
      position: absolute;
      width: 32px;
      height: 24px;
      left: 32px;
      top: 24px !important;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: var(--purpleDark) !important;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #ffffff !important;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: var(--purpleDark) !important; 
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
      /* background: rgba(0, 0, 0, 0.3); */
    }
    .bm-item-list {
      color: #ffffff !important;
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white !important;
    }
/* Styles for hamburger end*/


/* Styling navbar for mobile */
@media (min-width: 560px){
    .navMobile{
        display: none !important;
    }

}
@media (max-width: 560px){
    .navDesktop{
        display: none !important;
    }
    .navClick{
        display:flex;
        justify-content:center;
        align-items:center;
        position: absolute;
        top:72px;
        left: 104px;
        width: 100%;
        height: 88vh;
        background-color: var(--purpleDark) !important;
        color: #fff;
    }
    .zFix{
        z-index: 1000 !important;
    }
    .disNone{
        display: none !important;
    }
}


.h32px{
    height: 32px;
}
.navLink:hover{
    color: var(--logoPurple);
}
.navSticky{
    position: sticky;
    top:0;
}
.nav{
    background-color: #fff;
    z-index: 8;
}
</style>