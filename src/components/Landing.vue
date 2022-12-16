<template>
    <div id="#" class="bgLinear mt88px ">

      <div class="cf fade">
        <img class="w72 mp16" src="../assets/svgs/logos/EnfinityLogoBlack.png" alt="">
        <h2 class="txtPri"><i> 23rd DECEMBER 2022 </i></h2>
        <a class="btn mp16" target="_blank" href="https://unstop.com/festival/enfinity-nitte-meenakshi-institute-of-technology-nmit-yelahanka-80358"> Register now </a>
      </div>
      <img class="wFull wave marginFix" src="../assets/svgs/waveFlatBottom.svg" />
    </div>
  
  </template>
  
  <script>

  export default {
    name: 'LandingVue',
    components: {
      
    }
  }
  </script>  
  
  <style>
  .txtPri{
    color: var(--logoPurple) !important;
  }
  body{
    margin: 0;
  }
  .w72{
    width: 72%;
  }
  .marginFix{
    margin-bottom: -88px;
  }
  /**/
  @media (max-width: 600px){
    .marginFix{
      margin-bottom: -136px;
    }
    .context{
        position: relative;
        top:160px !important;
    }
  }
  @media (max-width: 500px){
    .marginFix{
      margin-bottom: -170px;
    }
  }
  @media (max-width: 432px){
  .wave{
    display: none;
  }
  .context{
        position: relative;
        top:328px !important;
    }

  }
  .wFull{
    width: 100vw;
  }
  .vh72{
      height: 72vh;
  }
  .vh56{
    height: 56vh;
  }
  .bgLinear{
    /* background-image: url("../assets/svgs/bgLinear.svg"); */
    background-repeat: no-repeat;
    background-position: center;
  }
  .btn{
    width: fit-content;
    background-color: var(--purpleDark);
    color: #fff;
    border-radius: 2px;
  }
  .btn:hover{
    box-shadow: 0px 0px 8px 0px var(--logoPurple);
  }
  .mt64px{
    margin-top: 64px;
  }
  .mt88px{
    margin-top: 104px;
  }


  /* Fade css animation start*/
  .fade{
    opacity: 1;
    animation: fade linear 2s;
  }
  @keyframes fade{
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  /* Fade css animation end */
  
  </style>
  