<template>
<div >
  <header id="header" class="light">

        <div class="container">
            <div class="row">
                <div class="col-md-9  push-md-2 text-center">
                    <!-- Navigation -->
                    <nav class="module module-navigation mr-4">
                        <ul id="nav-main" class="nav nav-main">
                            
             <li class="nav-item">
              <router-link to="/home" class="has-dropdown">Anasayfa</router-link>
            </li>
             <li class="nav-item">
              <router-link to="/about" class="has-dropdown">Hakkımızda</router-link>
            </li>
                           
                            <li class="nav-item">
              <router-link to="/product" class="has-dropdown">Menü</router-link>
            </li>
                          <!--  <li><a href="page-offers.html">İndİrİmler</a></li> -->
                           
                         
                            
                            <li class="nav-item">
              <router-link to="/contact" class="has-dropdown">İletİşİm</router-link>
            </li>
                                       <li class="nav-item">
              <router-link to="/booking" class="has-dropdown">Rezervasyon</router-link>
            </li> 
                            
                           
                        </ul>
                    </nav>
                    <div class="module">
                       
                        <router-link to="/product" class="btn btn-outline-primaryn"><span>Sİparİş Ver</span></router-link>
                    </div>
                   
                
                    <div class="module" v-if="userInfos.firstname != undefined " style="margin-right:10px" >
                        
                           <router-link tag="a" to="/profile">
                            <span>          
                        <i class="ti ti-user"></i>
                      Selam ,{{userInfos.firstname}}
                            </span> 
                           </router-link>                               
                     

                      
                    </div>
                   


                      <div v-if="userInfos.firstname != undefined "  class="module">
                        <a  href="user/logout" >
                            <span >          
                        <i class="ti ti-export"></i>
                      Çıkış Yap
                            </span>                                
                       </a>
                    </div>
                      <div v-else  class="module">
                        <a  href="/login" >
                            <span >          
                        <i class="ti ti-export"></i>
                            Giriş yap 
                            </span>                                
                       </a>
                    </div>
                   
                                
                                </div>
      

                <div class="col-md-2 push-md-2" >
                 
                        <a @click="showPanel()" href="#" class="module module-cart right" data-toggle="panel-cart">
                        <span class="cart-icon">
                            <i class="ti ti-shopping-cart"></i>
                            <span class="notification">{{userInfos.orderCount}}</span>
                        </span>
                        <span class="cart-value">{{userInfos.cardTotal}} ₺</span>
                    </a>

    
                </div>
            

               

                
            </div>
        </div>

    </header>
    <!-- Header / End -->

    <!-- Header -->
    <header id="header-mobile" class="dark">

        <div class="module module-nav-toggle">
            
            <a href="#" id="nav-toggle" data-toggle="panel-mobile"><span></span><span></span><span></span><span></span></a>
        </div>    

        <div class="module ">
            <a href="index.html">
               <!-- <img src="assets/img/logo-horizontal-light.svg" alt="">  -->
            </a>
        </div>
    
        <a @click="showPanel()" href="#" class="module module-cart" data-toggle="panel-cart">
            <i class="ti ti-shopping-cart"></i>
            <span class="notification">{{userInfos.orderCount}}</span>
        </a>

    </header>
    <!-- Header / End -->
        

  <!-- Content -->
    <div id="content">

      

       <div id="body-overlay"></div>

    </div>
   

</div>
</template>
<script>

import {EventBus} from './../main.js'
import { mapGetters, mapActions } from 'vuex';

export default {
   
   data () {
      return {
           menuShow :false,
    
      }
         
       
   },
   methods :{
       showPanel(){
           
           this.menuShow = !this.menuShow;
           EventBus.$emit('showPanel',this.menuShow)
           
       },
       ...mapActions(['fetchUserInfo']),

     

   },
   computed:mapGetters(['userInfos']),

   created(){
    //    this.fetchUserInfo();
    this.$store.dispatch('fetchUserInfo')
    // console.log(this.userInfos);
   }
        
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >


</style>
