<template>
    <div>
          <!-- Page Content -->
        <div class="page-content">
            <div class="container">
                <div class="row no-gutters">
                    <div class="col-md-10 push-md-1" role="tablist">
                         
                        <!-- Menu Category / Burgers -->
                        <div id="Burgers" class="menu-category" v-for="(category,index) in categorys" :key="category.id" >
                     <div  class="menu-category-title collapse-toggle collapsed " role="tab" :data-target="'#'+index" data-toggle="collapse" aria-expanded="true"     
                              >
                             
                                <div class="bg-image" v-for="image in category.categoryImage" :key="image.id" >
                         <img  :src="image.url" />
                         </div>
                                <h2 class="title">{{category.name}}</h2>
                                 
                            </div>
                           
                     <div :id="[index]" class="menu-category-content collapse  ">
                                <!-- Menu Item -->

                                <div class="menu-item menu-list-item  " v-for="menuItem in category.menuItems" :key="menuItem.id">
                                    <div class="row align-items-center " >
                                        <div class="col-sm-6 mb-2 mb-sm-0">
                                            <h6 class="mb-0">{{menuItem.name}}</h6>
                                            <span class="text-muted text-sm">{{menuItem.description}}</span>
                                        </div>
                                        <div class="col-sm-6 text-sm-right ">
                                         <span class="text-md mr-4"><span class="text-muted"></span>{{menuItem.price}} ₺</span>
                                      <button class="btn btn-outline-secondary btn-sm" data-target="#productModal" @click="addCart"><span>Add to cart</span></button>
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

export default {
    
    data(){
        return {
        categorys:[],
      

        product:{
        name:'',
        price:0,
        description:'',
        }
         
       
       
        
        }
    },
    methods:{
        addCart(){
            
            this.menuItem.name = this.product.name;
            this.menuItem.description = this.product.description;
            this.menuItem.price = this.product.price;
            
            console.log(productPrice);
            
            
        }
    
         
    },
    
    created(){
        fetch('https://api.myjson.com/bins/7erao')
        .then((res) => { return res.json() })
        .then((res) => {
        this.categorys = res.categorys;
      
       
        })
    }
}
</script>