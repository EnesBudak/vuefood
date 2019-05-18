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
                           <table class="table-cart" v-for="cartItem in allCartItems" :key="cartItem.id" >
                    <tr  v-for="item in cartItem.product" :key="item.id"> 
                        <td class="title">
                            <span class="name"><a href="#productModal" data-toggle="modal">{{item.name}}</a></span>
                            <span class="caption text-muted"></span>
                        </td>
                        <td class="price">{{item.price}} ₺</td>
                        <td class="actions">
                            <a href="#productModal" data-toggle="modal" class="action-icon"><i class="ti ti-pencil"></i></a>
                            <a href="#" class="action-icon"><i class="ti ti-close"></i></a>
                        </td>
                    </tr>
                   
                 
                </table>
                            <div class="cart-summary" v-for="cartItem in allCartItems" :key="cartItem.id">
                                <div class="row">
                                    <div class="col-7 text-right text-muted">Sipariş  Toplamı:</div>
                                    <div class="col-5"><strong>{{cartItem.cardTotal}} ₺</strong></div>
                                </div>
                                <div class="row">
                                    <div class="col-7 text-right text-muted">KDV:</div>
                                    <div class="col-5"><strong>0 ₺</strong></div>
                                </div>
                                <hr class="hr-sm">
                                <div class="row text-md">
                                    <div class="col-7 text-right text-muted">Toplam:</div>
                                    <div class="col-5"><strong>
                                        {{cartItem.cardTotal}} ₺</strong></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 pull-xl-4 col-lg-7 pull-lg-5">
                        <div class="bg-white p-4 p-md-5 mb-4">
                            <h4 class="border-bottom pb-4"><i class="ti ti-user mr-3 text-primary"></i>Kişisel Bilgiler</h4>
                            <div class="row mb-5">
                                <div class="form-group col-sm-6">
                                    <label>Ad</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>Soyad</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>Adres</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>Şehir</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>Telefon</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>E-posta </label>
                                    <input type="email" class="form-control">
                                </div>
                            </div>

                            <h4 class="border-bottom pb-4"><i class="ti ti-package mr-3 text-primary"></i>Teslim</h4>
                            <div class="row mb-5">
                                <div class="form-group col-sm-6">
                                    <label>Teslim  zamanı:</label>
                                    <div class="select-container">
                                        <select class="form-control">
                                            <option>Mümkünse hızlı olsun</option>
                                            <option>1 Saat içinde </option>
                                            <option>2 Saat içinde</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <h4 class="border-bottom pb-4"><i class="ti ti-wallet mr-3 text-primary"></i>Ödeme</h4>
                            <div class="row text-lg">
                                <div class="col-md-4 col-sm-6 form-group">
                                    <label class="custom-control custom-radio">
                                        <input type="radio" name="payment_type" class="custom-control-input">
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">Kapıda Kart İle Ödeme</span>
                                    </label>
                                </div>
                                <div class="col-md-4 col-sm-6 form-group">
                                    <label class="custom-control custom-radio">
                                        <input type="radio" name="payment_type" class="custom-control-input">
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">Kredi Kartı </span>
                                    </label>
                                </div>
                                <div class="col-md-4 col-sm-6 form-group">
                                    <label class="custom-control custom-radio">
                                        <input type="radio" name="payment_type" class="custom-control-input">
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">Nakit</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <button class="btn btn-primary btn-lg"><span>Sipariş Et!</span></button>
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

export default {
    
    computed:mapGetters(['allCartItems']),
    methods:{
        ...mapActions(['fetchCartItems']),
    },

    created(){

     this.fetchCartItems();

    }
}
</script>