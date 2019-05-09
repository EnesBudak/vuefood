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
    </div>
</template>


<script>
import {mapGetters,mapActions} from 'vuex'
import axios from 'axios'
import { setTimeout } from 'timers';

export default {

    
    computed:mapGetters(['allProducts']),
    methods: {
      ...mapActions(['fetchProducts']),
      //...mapActions('cart',['addProductToCart']),

     //  addProductToCart(menuItem){ 
     //  }
    addProductToCart(id){
     const url = "http://172.20.10.12:81/user/sepet"

        axios.post(url, {
                data: {
                    id
                }
            }).then(obj => {
                console.log(obj);
            })
       
    }
    },


        created(){
    
         this.fetchProducts();
   
  
    
        }
   


}
</script>