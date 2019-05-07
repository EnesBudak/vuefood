<template>
  <div id="app">
   
      <Header />
      <Sepetim />
      
    <router-view ></router-view>
     
      <Footer />
      
      
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Sepetim from './components/Sepetim.vue'


export default {
  name: 'app',
  components: {
    Header:Header,
    Footer:Footer,
    Sepetim:Sepetim,
    
  
    
    
  }
}

</script>



