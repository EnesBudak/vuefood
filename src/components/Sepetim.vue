<template>
    <div>
    <!-- Panel Cart -->
    <div id="panel-cart"   :class="{ 'show' : menuShow }"  @click="menuShow = !menuShow" >
        
        <div class="panel-cart-container">
            <div class="panel-cart-title">
                <h5 class="title">Sepetim</h5>
                <button class="close" data-toggle="panel-cart"><i class="ti ti-close"></i></button>
            </div>
            <div class="panel-cart-content" >
                 <table class="table-cart" >
                    <tr
                        v-for="cartItem in allCartItems"
                        :key="cartItem.id"
                    > 
                        <td class="title">
                            <span class="name"><a href="#productModal" data-toggle="modal">{{cartItem.name}}</a></span>
                            <span class="caption text-muted">x{{cartItem.count}}</span>
                        </td>
                        <td class="price">{{cartItem.price}} ₺</td>
                        <td class="actions">
                            <a href="#productModal" data-toggle="modal" class="action-icon"><i class="ti ti-pencil"></i></a>


                            <div style="cursor:pointer;" @click="deleteCartItem(cartItem.id)" class="action-icon"><i class="ti ti-close"></i></div>
                         
                       
                        </td>

                    </tr>
                   
                 
                </table> 
                <div>
                    
                </div>
                 <div class="cart-summary"  >
                    <div class="row"  >
                        <div class="col-7 text-right text-muted">Sipariş Toplam:</div>
                        <div class="col-5"><strong>{{userInfos.cardTotal}} ₺</strong></div>
                    </div>
                    <div class="row">
                        <div class="col-7 text-right text-muted">KDV:</div>
                        <div class="col-5"><strong>0 ₺</strong></div>
                    </div>
                    <hr class="hr-sm">
                    <div class="row text-lg">
                        <div class="col-7 text-right text-muted">Toplam:</div>
                        <div class="col-5"><strong>
                            {{userInfos.cardTotal}}₺</strong></div>
                    </div>
                </div> 
            
            </div>
        </div>
       <router-link to="/checkout" class="panel-cart-action btn btn-secondary btn-block btn-lg">><span>Alışverişi Tamamla</span></router-link>
      
    </div>
    <!-- Panel Mobile -->
    <nav id="panel-mobile">
        <div class="module module-logo bg-dark dark">
            <a href="#">
                <img src="assets/img/logo-light.svg" alt="" width="88">
            </a>
            <button class="close" data-toggle="panel-mobile"><i class="ti ti-close"></i></button>
        </div>
        <nav class="module module-navigation"></nav>
        <div class="module module-social">
            <h6 class="text-sm mb-3">Follow Us!</h6>
            <a href="#" class="icon icon-social icon-circle icon-sm icon-facebook"><i class="fa fa-facebook"></i></a>
            <a href="#" class="icon icon-social icon-circle icon-sm icon-google"><i class="fa fa-google"></i></a>
            <a href="#" class="icon icon-social icon-circle icon-sm icon-twitter"><i class="fa fa-twitter"></i></a>
            <a href="#" class="icon icon-social icon-circle icon-sm icon-youtube"><i class="fa fa-youtube"></i></a>
            <a href="#" class="icon icon-social icon-circle icon-sm icon-instagram"><i class="fa fa-instagram"></i></a>
        </div>
    </nav>

    <!-- Body Overlay -->
    <div id="body-overlay"></div>


    <!-- Modal / Product -->
<div class="modal fade" id="productModal" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header modal-header-lg dark bg-dark">
                <div class="bg-image"><img src="assets/img/photos/modal-add.jpg" alt=""></div>
                <h4 class="modal-title">Ürünü özelleştirin</h4>
                <button type="button" class="close" data-dismiss="modal"  aria-label="Close"><i class="ti-close"></i></button>
            </div>
            <div class="modal-product-details">
                <div class="row align-items-center">
                    <div class="col-9">
                        <h6 class="mb-0">Yemek İsmi  Gelecek</h6>
                        <span class="text-muted">Yemek İçerigi Gelecek</span>
                    </div>
                    <div class="col-3 text-lg text-right">₺9.00</div>
                </div>
            </div>
            <div class="modal-body panel-details-container">
                <!-- Panel Details / Size -->
                <div class="panel-details">
                    <h5 class="panel-details-title">
                        <label class="custom-control custom-radio">
                            <input name="radio_title_size" type="radio" class="custom-control-input">
                            <span class="custom-control-indicator"></span>
                        </label>
                        <a href="#panelDetailsSize" data-toggle="collapse">Porsiyon</a>
                    </h5>
                    <div id="panelDetailsSize" class="collapse show">
                        <div class="panel-details-content">
                            <div class="form-group">
                                <label class="custom-control custom-radio">
                                    <input name="radio_size" type="radio" class="custom-control-input" checked>
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-description">1 Porsiyon - 100g (9.99₺)</span>
                                </label>
                            </div>
                            <div class="form-group">
                                <label class="custom-control custom-radio">
                                    <input name="radio_size" type="radio" class="custom-control-input">
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-description">1.5 Porsiyon - 200g (14.99₺)</span>
                                </label>
                            </div>
                            <div class="form-group">
                                <label class="custom-control custom-radio">
                                    <input name="radio_size" type="radio" class="custom-control-input">
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-description">2 Porsiyon - 350g (21.99₺)</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Panel Details / Additions -->
                <div class="panel-details">
                    <h5 class="panel-details-title">
                        <label class="custom-control custom-radio">
                            <input name="radio_title_additions" type="radio" class="custom-control-input">
                            <span class="custom-control-indicator"></span>
                        </label>
                        <a href="#panelDetailsAdditions" data-toggle="collapse">Ek Mazlemeler</a>
                    </h5>
                    <div id="panelDetailsAdditions" class="collapse">
                        <div class="panel-details-content">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input">
                                            <span class="custom-control-indicator"></span>
                                            <span class="custom-control-description">Meksika Sos (1.29₺)</span>
                                        </label>
                                    </div>
                                    <div class="form-group">
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input">
                                            <span class="custom-control-indicator"></span>
                                            <span class="custom-control-description">Hatay Sos (1.29₺)</span>
                                        </label>
                                    </div>
                                    <div class="form-group">
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input">
                                            <span class="custom-control-indicator"></span>
                                            <span class="custom-control-description">Ek Kaşar Peyniri (1.29₺)</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input">
                                            <span class="custom-control-indicator"></span>
                                            <span class="custom-control-description">Özel Zeki Usta Sos(1.29₺)</span>
                                        </label>
                                    </div>
                                    <div class="form-group">
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input">
                                            <span class="custom-control-indicator"></span>
                                            <span class="custom-control-description">Ek Dana Sucuk (1.29₺)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Panel Details / Other -->
                <div class="panel-details">
                    <h5 class="panel-details-title">
                        <label class="custom-control custom-radio">
                            <input name="radio_title_other" type="radio" class="custom-control-input">
                            <span class="custom-control-indicator"></span>
                        </label>
                        <a href="#panelDetailsOther" data-toggle="collapse">Diğer</a>
                    </h5>
                    <div id="panelDetailsOther" class="collapse">
                        <textarea cols="30" rows="4" class="form-control" placeholder="Put this any other informations..."></textarea>
                    </div>
                </div>
            </div>
           
            <button type="button" class="modal-btn btn btn-secondary btn-block btn-lg"  data-dismiss="modal"><span>Sepete Ekle</span></button>
        </div>
    </div>
</div> 

    </div>
</template>

<script>

import {EventBus} from './../main.js'
import axios from 'axios'
import { mapActions,mapGetters,mapState } from 'vuex';


export default {
    components:{
        
    },
    data(){
        return{
          menuShow:false,
         
          
        }
    },
    computed:mapGetters(['allCartItems','userInfos']),
      
   
    methods:{
        
            // ...mapActions(['fetchCartItems']),
        deleteCartItem(productId){
            console.log('silinecek id',productId)
            this.$store.dispatch('deleteCartItem',productId)
        }
        

    },
    created(){
        EventBus.$on('showPanel',(data) =>{
            
            this.menuShow = data;
        });
        
       
        // this.fetchCartItems();
        // console.log(this.allCartItems); 
    },
     
        
   
}
</script>