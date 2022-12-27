<template>
    <div id="faqs" class="cf">
        <HeadingText name="FAQs"/>
        <div class="vh72">
    <!-- Faq questions are to be added here -->

            <FaqsVue 
            question="What is Enfinity-EConclave '22 ?" 
            answer="Enfinity is the national level flagship event of Enigma-Ecell NMIT. The day focuses on events that will make participants aware of the business environment and motivate them to build an innovative start-up"/>

            <FaqsVue 
            question="Is there any registration fee for the events ?" 
            answer="There is zero registration fee  for all events"/>

            <FaqsVue question="How to register for the event ?"
            answer="Head over to the events section and click on the event to redirect you to unstop"/>

            <FaqsVue question="Who can participate in the competitions ?"
            answer="Anyone enrolled in a UG/PG course is eligible to participate in the competitions "/>

            <FaqsVue question="In what mode will the events be held ?"
             answer="All events will be held in offline mode"/>

            <FaqsVue question="What is the criteria to showcase a product in startup expo ?" 
            answer="Any registered startup can display their product to the crowd at NMIT "/>

            <FaqsVue question="What is the cash prize associated with different events ?"
            answer="The totals cash prize pool for Enfinity 2022 is INR 30000 with other exciting additional goodies. To know the prize money for individual events, click on the register button"/>
        </div>
    </div>
</template>

<script>
    import FaqsVue from "./Faqs.vue"
    import HeadingText from './HeadingText.vue';

export default {
    name:"FaqsWrapper",

    components:{
        FaqsVue,
        HeadingText
    },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
 .vh72{
        width: 72vw;
    }

</style>