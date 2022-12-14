<template>

  <NavBar/>
  <LandingVue/>
  <AboutVue/>
  <TimelineVue/>  

</template>

<script>
import NavBar from './components/NavBar.vue';
import LandingVue from './components/Landing.vue';
import AboutVue from "./components/About.vue"
import TimelineVue from "./components/Timeline.vue"

export default {
  name: 'App',
  components: {
    NavBar,
    LandingVue,
    AboutVue,
    TimelineVue
  }
}
</script>

<style>

/* Root that contains variables - start */
:root{
  --logoPurple: #653390;
  --logoBlue: #222878;
}
/* Root that contains variables - end */

body{
  margin: 0;
}

</style>
