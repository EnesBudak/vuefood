<template>
    <div>
          <!-- Page Content -->
        <div class="page-content">
            <div class="container">
                <div class="row no-gutters">
                    <div class="col-md-10 push-md-1" role="tablist">
                         
                   
                       <!-- Menu Category / Burgers -->
                        <div id="Burgers" class="menu-category" v-for="(product,index) in allProducts" :key="product.id" >
                     <div  class="menu-category-title collapse-toggle collapsed " role="tab" :data-target="'#'+index" data-toggle="collapse" aria-expanded="true"     
                              >
                             
                            <div class="bg-image"><img :src="product.categoryImage" alt=""></div>
                                <h2 class="title">{{product.name}}</h2>
                                 
                            </div>
                           
                     <div :id="[index]" class="menu-category-content collapse  ">
                                <!-- Menu Item -->

                                <div class="menu-item menu-list-item  " v-for="menuItem in product.menuItems" :key="menuItem.id">
                                    <div class="row align-items-center " >
                                        <div class="col-sm-6 mb-2 mb-sm-0">
                                            <h6 class="mb-0">{{menuItem.name}}</h6>
                                            <span class="text-muted text-sm">{{menuItem.description}}</span>
                                        </div>
                                        <div class="col-sm-6 text-sm-right ">
                                         <span class="text-md mr-4"><span class="text-muted"></span>{{menuItem.price}} ₺</span>
            <button class="btn btn-outline-secondary btn-sm" data-target="#productModal"  @click="addProductToCart(menuItem.id)"><span>Sepete Ekle</span></button>
                                        </div>
                                    </div>
                                </div>
                                <!-- Menu Item -->
                               
                              
                            </div>
                            
                        </div>
                       
                       
                     
                    </div>
                </div>
            </div>
        </div>
        <div id="panel-cart"    >
        
        <div class="panel-cart-container">
            <div class="panel-cart-title">
                <h5 class="title">Sepetim</h5>
                <button class="close" data-toggle="panel-cart"><i class="ti ti-close"></i></button>
            </div>
            <div class="panel-cart-content" >
                <table class="table-cart" >
                    <tr v-for="item in items" >
                        <td class="title"  >
                            <span class="name"><a href="#productModal" data-toggle="modal">{{items.name}}</a></span>
                            <span class="caption text-muted">{{items.pieces}}</span>
                        </td>
                        <td class="price">{{items.price}}</td>
                        <td class="actions">
                            <a href="#productModal" data-toggle="modal" class="action-icon"><i class="ti ti-pencil"></i></a>
                            <a href="#" class="action-icon"><i class="ti ti-close"></i></a>
                        </td>
                    </tr>
                   
                 
                </table>
                <div class="cart-summary">
                    <div class="row">
                        <div class="col-7 text-right text-muted">Order total:</div>
                        <div class="col-5"><strong>₺21.02</strong></div>
                    </div>
                    <div class="row">
                        <div class="col-7 text-right text-muted">Devliery:</div>
                        <div class="col-5"><strong>₺3.99</strong></div>
                    </div>
                    <hr class="hr-sm">
                    <div class="row text-lg">
                        <div class="col-7 text-right text-muted">Total:</div>
                        <div class="col-5"><strong>₺24.21</strong></div>
                    </div>
                </div>
            </div>
        </div>
       <router-link to="/checkout" class="panel-cart-action btn btn-secondary btn-block btn-lg">><span>Go to checkout</span></router-link>
      
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
    </div>
</template>


<script>
import {mapGetters,mapActions} from 'vuex'
import axios from 'axios'


export default {

    
    computed:mapGetters(['allProducts']),
    data :{
        
    },
     methods: {
      ...mapActions(['fetchProducts']),
      //...mapActions('cart',['addProductToCart']),

     //  addProductToCart(menuItem){ 
     //  }
    addProductToCart(id){




$.post("http://localhost:81/user/sepet", {data: id}, function(result){
console.log(result);
});


  $.ajax({ 
        type: 'GET', 
        url: 'http://localhost:81/user/sepet/item', 
        success: function (data) { 
          console.log(data);
        }
  });
           
            
    }
    },


        created(){
    
         this.fetchProducts();
         //this.fetchCartItems();

         
   
  
    
        }
   


}
</script>