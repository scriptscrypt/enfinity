<template>

   <vue-collapsible-panel-group base-color=#2b1e37  accordion>
    <vue-collapsible-panel class="" :expanded="false">
        <template #title>
            {{question}}
        </template>
        <template #content>  
            {{answer}}
        </template>
    </vue-collapsible-panel>
</vue-collapsible-panel-group>

</template>

<script>
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'

// import {
//   VueCollapsiblePanelGroup,
//   VueCollapsiblePanel,
// } from '@dafcoe/vue-collapsible-panel'


 export default {
    name: "FaqsVue",
    props: {
        question: String,
        answer: String,
    },
    components: {  }
}
</script>

<style>
   
</style>