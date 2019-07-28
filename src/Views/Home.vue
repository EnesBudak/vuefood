<template>
    <div>
       
        <SectionYoutube/>
       
        <FoodSlider />
        <Offers />

        <Steps />
        <Topfooter />
       
    </div>
</template>
<script>


import About from './../components/aboutSection'
import FoodSlider from './../components/FoodSlider.vue'
import Steps from './../components/Steps.vue'
import Topfooter from './../components/Topfooter.vue'
import Offers from './../components/Offers.vue'
import SectionYoutube from './../components/SectionYoutube.vue'



export default {
    name:'Home',
    components:{
   
  
    
    About:About,
    Steps:Steps,
    Topfooter:Topfooter,
    FoodSlider:FoodSlider,
    Offers:Offers,
    SectionYoutube
    }
    
}
</script>