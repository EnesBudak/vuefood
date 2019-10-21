<template>
<div style="width:100%;display:block;height:100%;">
    <header id="header" class="light" >
        <div class="header-container">
            <div class="header-grid">
                <div class="header-left">
                    <div class="header-item logo">
                        <router-link to="/" class="header-item--link">
                            <img  width="100%" height="100%" src="http://cdn.yemeksepeti.com/CategoryImages/TR_ADANA/zeki_usta_kebap_big.gif" alt="">
                        </router-link>
                    </div>
                </div>
                <div id="header-items--content" :class="[(isActiveMenu) ? 'active' : 'disable']" style="padding-left:15px;" class="header-items">
                    <div class="header-item">
                        <router-link to="/" class="header-item--link">
                            <div class="feature-icon icon icon-primary" style="font-size:23px">
                                <i class="ti ti-home"></i>
                            </div>
                            <div>Ana sayfa</div>
                        </router-link>
                    </div>
                    <div class="header-item">
                        <router-link to="/product" class="header-item--link">
                            <div class="feature-icon icon icon-primary" style="font-size:23px">
                                <i class="ti ti-shopping-cart"></i>
                            </div>
                            <div>Menü</div>
                        </router-link>
                    </div>
                    <div class="header-item">
                        <router-link to="/booking" class="header-item--link">
                            <div class="feature-icon icon icon-primary" style="font-size:23px">
                                <i class="ti ti-bookmark-alt"></i>
                            </div>
                            <div>Rezervasyon</div>
                        </router-link>
                    </div>

                    <template  v-if="userInfos.cardTotal !== undefined ">
                        <div class="header-item">
                            <a href="/profile" class="header-item--link">
                                <div class="feature-icon icon icon-primary" style="font-size:23px">
                                    <i class="ti ti-user"></i>
                                </div>
                                <div>Profil</div>
                            </a>
                        </div>
                        <div class="header-item">
                            <a href="user/logout" class="header-item--link">
                                <div class="feature-icon icon icon-primary" style="font-size:23px">
                                    <i class="ti ti-export"></i>
                                </div>
                                <div>Çıkış Yap</div>
                            </a>
                        </div>
                    </template>
                    <div class="header-item" v-else-if="userInfos.cardTotal === undefined">
                        <a href="/login" class="header-item--link">
                            <div class="feature-icon icon icon-primary" style="font-size:22px">
                                <i class="ti ti-user"></i>
                            </div>
                            <div>Giriş yap</div>
                        </a>
                    </div>
                          
                </div>
                <div class="header-sepet-icon">
                    <div class="header-item">
                        <div v-if="userInfos.cardTotal !== undefined">
                            <a @click="showPanel()" href="#" class="module module-cart right" data-toggle="panel-cart">
                                <span class="cart-icon">
                                    <i class="ti ti-shopping-cart"></i>
                                    <span class="notification">{{userInfos.orderCount}}</span>
                                </span>
                                <span class="cart-value">{{userInfos.cardTotal}} ₺</span>
                            </a>
                        </div>
                        <div  v-else>
                            <a @click="showPanel()" href="#" class="module module-cart right" data-toggle="panel-cart">
                                <span class="cart-icon">
                                    <i class="ti ti-shopping-cart"></i>
                                    <span class="notification">0</span>
                                </span>
                                <span class="cart-value">0 ₺</span>
                            </a>
                        </div>
                    </div>
                    <div id="mobile-button" class="header-item" style="padding-left:20px;">
                        <div class="mobile-btn" @click="isActiveMenu=!isActiveMenu">
                            <div id="nav-icon1" :class="[isActiveMenu==true ? 'open' : '']">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
import Sticky from 'vue-sticky-directive'
export default {
   
  directives: {Sticky},
   data () {
      return {
           menuShow :false,
           showMobileMenu:false,
           isActiveMenu:false
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
<style lang="scss">
.logo {
    .header-item--link {
        color: #ddae71;
    }
}
</style>
