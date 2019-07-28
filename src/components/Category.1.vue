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
                             
                            <div> <img class="bg-resim" :src="product.categoryImage" ></div>
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
            <button class="btn btn-outline-secondary btn-sm" data-target="#productModal"  @click="addProductToCart(menuItem)"><span>Sepete Ekle</span></button>
              
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
        

    <!-- Body Overlay -->
    <div id="body-overlay"></div>
    </div>
</template>


<script>
import {mapGetters,mapActions} from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';


export default {
   
data(){
    return{
        itemName:'enes',
        counter:1,
    }
},

    
    computed:mapGetters(['allProducts','userInfos']),
  
     methods: {
      ...mapActions(['fetchProducts']),
      
      //...mapActions('cart',['addProductToCart']),

     //  addProductToCart(menuItem){ 
     //  }
    addProductToCart(menuItem){


        // axios.post('http://aysoftdemo.site/user/sepet',menuItem.id)
        // .then( (response) =>{
        //     console.log(response);
        // })
        this.$store.dispatch("addCartItem",menuItem)
        
        
       if(this.userInfos.firstname != undefined) {
          swal({
                title: "Sepete Eklendi!",
                text: menuItem.name,
                icon:'success',
                button:'Devam Et!',
                timer:1000,
            
          });
       }else{
           swal({
               title:'Lütfen Giriş Yapın',
               icon:'error'
           })
       }
    },
  
    },


        created(){
    
         this.fetchProducts();
    
         //this.fetchCartItems();

         
   
  
    
        }
   


}
</script>
<style >
 .bg-resim{
     
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;

 }   
</style>