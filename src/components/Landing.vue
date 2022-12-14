<template>
    <div class="bgLinear">

      <div class="cf fade">
        <img src="../assets/svgs/logos/EnfinityLogoBlack.svg" alt="">
        <a class="btn mp8" href=""> Register now </a>
      </div>
    
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
  
  body{
    margin: 0;
  }
  .vh72{
      height: 72vh;
  }
  .bgLinear{
    /* background-image: url("../assets/svgs/bgLinear.svg"); */
    background-repeat: no-repeat;
    background-position: center;
  }
  .btn{
    width: fit-content;
    background-color: var(--logoPurple);
    color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 2px 2px var(--grey);
  }
  .mt64px{
    margin-top: -64px;
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
  