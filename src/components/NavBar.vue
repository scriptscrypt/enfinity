<template>
    <div class="nav navSticky">
        <!-- Navbar Left  start-->
        <div class="mp8"> 
            <a href="#">
                <img class="h32px" src="../assets/svgs/logos/EnfinityLogoStd.png" alt="Logo"> 
            </a>
        </div>
        <!-- Navbar Left end -->
        
        <!-- Navbar Center start -->
        <div class=" rf">
            <a href="" class="navLink mp8">About</a>
            <a href="" class="navLink mp8">Events</a>
            <a href="" class="navLink mp8">Timeline</a>
            <a href="" class="navLink mp8">Sponsors</a>
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
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style>
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