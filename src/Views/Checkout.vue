<template>
    <div>
<!-- Page Title -->
        <div class="page-title bg-dark dark">
            <!-- BG Image -->
            <div class="bg-image bg-parallax"><img src="assets/img/photos/bg-croissant.jpg" alt=""></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 push-lg-4">
                        <h1 class="mb-0">Ödeme Yap</h1>
                        <h4 class="text-muted mb-0">Kebapçı Zeki Usta</h4>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section -->
        <section class="section bg-light">

            <div class="container">
                <div class="row">
                    <div class="col-xl-4 push-xl-8 col-lg-5 push-lg-7">
                        <div class="shadow bg-white stick-to-content mb-4">
                            <div class="bg-dark dark p-4"><h5 class="mb-0">Siparişiniz</h5></div>
                           <table class="table-cart"  >
                    <tr v-for="cartItem in allCartItems"
                        :key="cartItem.id" > 
                        <td class="title">
                            <span class="name"><a href="#productModal" data-toggle="modal">{{cartItem.name}}</a></span>
                            <span class="caption text-muted"></span>
                        </td>
                        <td class="price">{{cartItem.price}} ₺</td>
                        <td class="actions">
                            <a href="#productModal" data-toggle="modal" class="action-icon"><i class="ti ti-pencil"></i></a>
                            <a href="#" class="action-icon"><i class="ti ti-close"></i></a>
                        </td>
                    </tr>
                   
                 
                </table>
                            <div class="cart-summary" >
                                <div class="row">
                                    <div class="col-7 text-right text-muted">Sipariş  Toplamı:</div>
                                    <div class="col-5"><strong>{{userInfos.cardTotal}} ₺</strong></div>
                                </div>
                                <div class="row">
                                    <div class="col-7 text-right text-muted">KDV:</div>
                                    <div class="col-5"><strong>0 ₺</strong></div>
                                </div>
                                <hr class="hr-sm">
                                <div class="row text-md">
                                    <div class="col-7 text-right text-muted">Toplam:</div>
                                    <div class="col-5"><strong>
                                        {{userInfos.cardTotal}} ₺</strong></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 pull-xl-4 col-lg-7 pull-lg-5">
                        <div class="bg-white p-4 p-md-5 mb-4">
                            <h4 class="border-bottom pb-4"><i class="ti ti-user mr-3 text-primary"></i>Kişisel Bilgiler</h4>
                            <div class="row mb-5">
                                <!-- Paragraph -->
 

<!-- Modal / Demo -->
        <div class="modal fade" id="demoModal" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel">Adres Değiştir</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="ti-close"></i></button>
                    </div>
                    <div class="modal-body">
                        Eski Adres:{{userInfos.adress}}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-dismiss="modal">Kapat</button>
                        <button type="button" class="btn btn-primary">Kaydet</button>
                    </div>
                </div>
            </div>
        </div>


                        <div class="example-box">
                            <div class="example-box-title">Adres
                                <a href="#" data-target="#demoModal" data-toggle="modal"  style="float:right"   class="action-icon "><i class="ti ti-pencil"></i></a>
                           
                            </div>
                            <div class="example-box-content">
                                <p class="lead">Ad:{{userInfos.firstname}} {{userInfos.lastname}} </p>

                                <p class="lead">Telefon :{{userInfos.phone}} </p>
                                <p class="lead">Adres :{{userInfos.adress}}  </p>
                            </div>
                        </div>

                               
                            </div>

                            <h4 class="border-bottom pb-4"><i class="ti ti-package mr-3 text-primary"></i>Teslim</h4>
                            <div class="row mb-5">
                                <div class="form-group col-sm-6">
                                    <label>Teslim  zamanı:</label>
                                    <div class="select-container">
                                        <select class="form-control" v-model="order.selected">
                                             <option disabled value="">Lütfen seçiniz </option>
                                            <option value="0">Mümkünse hızlı olsun</option>
                                            <option value="1">1 Saat içinde </option>
                                            <option value="2">2 Saat içinde</option>
                                            
                                        </select>
                                        
                                    </div>
                                </div>
                            </div>

                            <h4 class="border-bottom pb-4"><i class="ti ti-wallet mr-3 text-primary"></i>Ödeme</h4>
                            <div class="row text-lg">
                                <div class="col-md-4 col-sm-6 form-group">
                                    <label class="custom-control custom-radio">
                                        <input type="radio" id="one" name="payment_type" class="custom-control-input" v-model="order.picked" value="0" >
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">Kapıda Kart İle Ödeme</span>
                                    </label>
                                </div>
                                <div class="col-md-4 col-sm-6 form-group">
                                    <label class="custom-control custom-radio">
                                        <input type="radio" id="two" name="payment_type" class="custom-control-input" v-model="order.picked" value="1">
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">Kredi Kartı </span>
                                    </label>
                                </div>
                                <div class="col-md-4 col-sm-6 form-group">
                                    <label class="custom-control custom-radio">
                                        <input type="radio" id="three" name="payment_type" class="custom-control-input" v-model="order.picked" value="2">
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">Nakit</span>
                                    </label>
                                </div>
                            </div>
                            
                        </div>
                        <div class="text-center">
                            <button class="btn btn-primary btn-lg" @click="sendOrderDetail"><span>Sipariş Et!</span></button>
                        </div>
                    </div>
                </div>
            </div>

        </section>



    </div>
</template>

<script>
import axios from 'axios'
import {mapActions,mapGetters,mapState} from 'vuex'

import swal from 'sweetalert';

export default {
    data(){
        return{
            order:{
            picked:'',
            selected:'',
            adressChanged:false,
            }
        }
    },
    
    computed:mapGetters(['allCartItems','userInfos']),
    methods:{
        ...mapActions(['fetchCartItems']),

    async sendOrderDetail(){
        
   /* axios.post('htpp://localhost:81/user/odeme',this.order)
    .then((response) =>{
      console.log(response);
    console.log(this.order);
    
     
    }) */
            const order=  await this.$store.dispatch('setOrderDetail',this.order);
            console.log("order",order)
  
            try {

                if(!order.message.error && (this.order.picked == 0  || this.order.picked == 2) ){
                // if(this.order.picked == '0' || this.order.picked == '2'){
                //     this.$router.push('complete')
                // }else{
                //     console.log('hata');
                    
                // }
                  swal({
                                title: "Siparişiniz Verildi!",
                                text: "",
                                icon:'success',
                                button:'Devam Et!'
                            
                        }).then( ()  =>{
                    
                    console.log("çalıştı",order)
                        })
                  
                    
                  
                    
                }else{
                    console.log('hata!')
                } 
                
            } catch (error) {
                console.log('istek atılamadı')
            }
                
        
           
    
  
        }
    },

    created(){

     this.fetchCartItems();

    }
}
</script>