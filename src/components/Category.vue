<template>
    <div>
         <a href="#productModal" data-toggle="modal" class="action-icon"><i class="ti ti-pencil"></i></a>
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
                                            <h6 class="mb-0 text-primary">{{menuItem.name}}</h6>
                                            <span class="text-muted text-sm">{{menuItem.description}}</span>
                                                                             {{menuItem.options}}
                                      
                                        </div>
                                        
                                        <div class="col-sm-6 text-sm-right" 
                                        style="display:flex;justify-content:flex-end;align-items:center">
                                                 <div class="minusplusnumber">
                                    <div class="mpbtn minus" @click="decrement(menuItem.id)">
                                        - 
                                    </div>

                                    
                                    <div id="field_container">
                                 <span class="text-lg mr-4 ml-4 text-center "><span class="text-muted text-lg"></span>{{menuItem.quantity}}</span>
                                       
                                    </div>
                                    
                                    <div class="mpbtn plus"   @click="increment(menuItem.id)">
                                        +
                                    </div>
                                </div>
                                      <span class="text-md mr-4"><span class="text-muted"></span>{{menuItem.price}} ₺</span>

                                      
                                      
            <button class="btn btn-outline-success btn-sm" data-target="#productModal"  @click="addProductToCart(menuItem)"><span>Sepete Ekle</span></button>
  
                                        </div>
                                    </div>
                                </div>
                                <!-- Menu Item -->
                             
                            </div>


                            
                        </div>
                       
                       
                     
                    </div>
                </div>
            </div>
            
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
                        <h6 class="mb-0">Adana Kebab</h6>
                        <span class="text-muted">Yemek İçerigi Gelecek</span>
                    </div>
                    <div class="col-3 text-lg text-right">₺26.00</div>
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
                        <a href="#panelDetailsSize" data-toggle="collapse">Adet</a>
                    </h5>
                    <div id="panelDetailsSize" class="collapse show">
                        <div class="panel-details-content">
                            <div class="form-group">
                                <label class="custom-control custom-radio">
                                    <input name="radio_size" type="radio" class="custom-control-input" checked>
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-description">

                                        

                                    </span>
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
                        <a href="#panelDetailsAdditions" data-toggle="collapse">Opsiyonlar</a>
                    </h5>
                    <div id="panelDetailsAdditions" class="collapse">
                        <div class="panel-details-content">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input">
                                            <span class="custom-control-indicator"></span>
                                            <span class="custom-control-description">Acılı </span>
                                        </label>
                                    </div>
                                 
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Panel Details / Other -->
                 <!--
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
                -->
            </div>
           
            <button type="button" class="modal-btn btn btn-secondary btn-block btn-lg"  data-dismiss="modal"><span>Sepete Ekle</span></button>
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
       

       
    }
},

    
    computed:mapGetters(['allProducts','userInfos']),
    
     methods: {
       ...mapActions(['fetchProducts']),
      
      //...mapActions('cart',['addProductToCart']),

     //  addProductToCart(menuItem){ 
     //  }


       increment(id) {
     
      this.$store.dispatch('increment',id)
      
      
    },
    decrement(id) {
      

      this.$store.dispatch('decrement',id)
      
      },
    
    addProductToCart(menuItem){
        console.log(menuItem,'addproductcart vuex öncesi')

        // axios.post('http://aysoftdemo.site/user/sepet',menuItem.id)
        // .then( (response) =>{
        //     console.log(response);
        // })
        menuItem.count=menuItem.quantity;
      this.$store.dispatch("addCartItem",menuItem)
        
        
       if(this.userInfos.firstname != undefined) {
          swal({
                title: "Sepete Eklendi!",
                text: menuItem.name,
                icon:'success',
                button:'Devam Et!',
                timer:1000,
            
          })
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

 };
 .minusnumber {
    border:1px solid silver;
    border-radius:5px;
    background-color: #17a2b8;
    margin:0 5px 0 5px;
    display:inline-block;
    user-select: none;
}
.lusnumber {
    border:1px solid silver;
    border-radius:5px;
    background-color: #17a2b8;
    margin:0 5px 0 5px;
    display:inline-block;
    user-select: none;
}
.minusplusnumber div {
    display:inline-block;
    background-color: white;
}
.minusplusnumber #field_container input {
    width:50px;
    text-align:center;
    font-size:15px;
    padding:3px;
    border:none;
}
.minusplusnumber .mpbtn {
    padding:3px 10px 3px 10px;
    cursor:pointer;
    border-radius:5px;
}
.minusplusnumber .mpbtn:hover {
    background-color:#17a2b8;
}
.minusplusnumber .mpbtn:active {
    background-color:#17a2b8;
}
.quantity {
  max-width: 150px;
  width: 100%;
}

.quantity input {
  text-align: center;
}
</style>