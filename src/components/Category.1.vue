<template>
    <div>
          <!-- Page Content -->
        <div class="page-content">
            <div class="container">
                <div class="row no-gutters">
                    <div class="col-md-10 push-md-1" role="tablist">
                        <div >
                           
                        </div>
                        <!-- Menu Category / Burgers -->
                        <div id="Burgers" class="menu-category" >
                            <div class="menu-category-title collapse-toggle" role="tab" data-target="#menuBurgersContent" data-toggle="collapse" aria-expanded="true"      >
                                <div class="bg-image"><img src="assets/img/photos/menu-title-burgers.jpg" alt=""></div>
                                <h2 class="title">Burgers</h2>
                                 
                            </div>
  <div id="menuBurgersContent" class="menu-category-content collapse show ">
                                <!-- Menu Item -->

                                <div class="menu-item menu-list-item " v-for="product in products" :key="product.id">
                                    <div class="row align-items-center ">
                                        <div class="col-sm-6 mb-2 mb-sm-0">
                                            <h6 class="mb-0"></h6>
                                            <span class="text-muted text-sm"></span>
                                        </div>
                                        <div class="col-sm-6 text-sm-right ">
                                         <span class="text-md mr-4"><span class="text-muted"></span> ₺</span>
                                      <button class="btn btn-outline-secondary btn-sm" data-target="#productModal" data-toggle="modal"><span>Add to cart</span></button>
                                        </div>
                                    </div>
                                </div>
                                <!-- Menu Item -->
                               
                              
                            </div>
                        </div>
                        <!-- Menu Category / Pasta -->
                        <div id="Pasta" class="menu-category">
                            <div class="menu-category-title collapse-toggle" role="tab" data-target="#menuPastaContent" data-toggle="collapse" aria-expanded="false">
                                <div class="bg-image"><img src="assets/img/photos/menu-title-pasta.jpg" alt=""></div>
                                <h2 class="title">Pasta</h2>
                            </div>
                            <div id="menuPastaContent" class="menu-category-content collapse">
                                <!-- Menu Item -->
                                <div class="menu-item menu-list-item">
                                    <div class="row align-items-center">
                                        <div class="col-sm-6 mb-2 mb-sm-0">
                                            <h6 class="mb-0">Beef Burger</h6>
                                            <span class="text-muted text-sm">Beef, cheese, potato, onion, fries</span>
                                        </div>
                                        <div class="col-sm-6 text-sm-right">
                                            <span class="text-md mr-4"><span class="text-muted">from</span> $9.00</span>
                                            <button class="btn btn-outline-secondary btn-sm" data-target="#productModal" data-toggle="modal"><span>Add to cart</span></button>
                                        </div>
                                    </div>
                                </div>
                              
                           
                            </div>
                        </div>
                        <!-- Menu Category / Pizza -->
                        <div id="Pizza" class="menu-category">
                            <div class="menu-category-title collapse-toggle" role="tab" data-target="#menuPizzaContent" data-toggle="collapse" aria-expanded="false">
                                <div class="bg-image"><img src="assets/img/photos/menu-title-pizza.jpg" alt=""></div>
                                <h2 class="title">Pizza</h2>
                            </div>
                            <div id="menuPizzaContent" class="menu-category-content collapse">
                                <!-- Menu Item -->
                                <div class="menu-item menu-list-item">
                                    <div class="row align-items-center">
                                        <div class="col-sm-6 mb-2 mb-sm-0">
                                            <h6 class="mb-0">Beef Burger</h6>
                                            <span class="text-muted text-sm">Beef, cheese, potato, onion, fries</span>
                                        </div>
                                        <div class="col-sm-6 text-sm-right">
                                            <span class="text-md mr-4"><span class="text-muted">from</span> $9.00</span>
                                            <button class="btn btn-outline-secondary btn-sm" data-target="#productModal" data-toggle="modal"><span>Add to cart</span></button>
                                        </div>
                                    </div>
                                </div>
                               
                              
                            </div>
                        </div>
                        <!-- Menu Category / Sushi -->
                        <div id="Sushi" class="menu-category">
                            <div class="menu-category-title collapse-toggle" role="tab" data-target="#menuSushiContent" data-toggle="collapse" aria-expanded="false">
                                <div class="bg-image"><img src="assets/img/photos/menu-title-sushi.jpg" alt=""></div>
                                <h2 class="title">Sushi</h2>
                            </div>
                            <div id="menuSushiContent" class="menu-category-content collapse">
                                <!-- Menu Item -->
                                <div class="menu-item menu-list-item">
                                    <div class="row align-items-center">
                                        <div class="col-sm-6 mb-2 mb-sm-0">
                                            <h6 class="mb-0">Beef Burger</h6>
                                            <span class="text-muted text-sm">Beef, cheese, potato, onion, fries</span>
                                        </div>
                                        <div class="col-sm-6 text-sm-right">
                                            <span class="text-md mr-4"><span class="text-muted">from</span> $9.00</span>
                                            <button class="btn btn-outline-secondary btn-sm" data-target="#productModal" data-toggle="modal"><span>Add to cart</span></button>
                                        </div>
                                    </div>
                                </div>
                                
                              
                            </div>
                        </div>
                        <!-- Menu Category / Desserts -->
                        <div id="Desserts" class="menu-category">
                            <div class="menu-category-title collapse-toggle" role="tab" data-target="#menuDessertsContent" data-toggle="collapse" aria-expanded="false">
                                <div class="bg-image"><img src="assets/img/photos/menu-title-desserts.jpg" alt=""></div>
                                <h2 class="title">Desserts</h2>
                            </div>
                            <div id="menuDessertsContent" class="menu-category-content collapse">
                                <!-- Menu Item -->
                                <div class="menu-item menu-list-item">
                                    <div class="row align-items-center">
                                        <div class="col-sm-6 mb-2 mb-sm-0">
                                            <h6 class="mb-0">Beef Burger</h6>
                                            <span class="text-muted text-sm">Beef, cheese, potato, onion, fries</span>
                                        </div>
                                        <div class="col-sm-6 text-sm-right">
                                            <span class="text-md mr-4"><span class="text-muted">from</span> $9.00</span>
                                            <button class="btn btn-outline-secondary btn-sm" data-target="#productModal" data-toggle="modal"><span>Add to cart</span></button>
                                        </div>
                                    </div>
                                </div>
                               
                               
                             
                            </div>
                        </div>
                        <!-- Menu Category / Drinks -->
                        <div id="Drinks" class="menu-category">
                            <div class="menu-category-title collapse-toggle" role="tab" data-target="#menuDrinksContent" data-toggle="collapse" aria-expanded="false">
                                <div class="bg-image"><img src="assets/img/photos/menu-title-drinks.jpg" alt=""></div>
                                <h2 class="title">Drinks</h2>
                            </div>
                            <div id="menuDrinksContent" class="menu-category-content collapse">
                                <!-- Menu Item -->
                                <div class="menu-item menu-list-item">
                                    <div class="row align-items-center">
                                        <div class="col-sm-6 mb-2 mb-sm-0">
                                            <h6 class="mb-0">Beef Burger</h6>
                                            <span class="text-muted text-sm">Beef, cheese, potato, onion, fries</span>
                                        </div>
                                        <div class="col-sm-6 text-sm-right">
                                            <span class="text-md mr-4"><span class="text-muted">from</span> $9.00</span>
                                            <button class="btn btn-outline-secondary btn-sm" data-target="#productModal" data-toggle="modal"><span>Add to cart</span></button>
                                        </div>
                                    </div>
                                </div>
                               
                               
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
        products:[]
        
        }
    },
    
    created(){
        fetch('https://api.myjson.com/bins/1gzn20')
        .then((res) => { return res.json() })
        .then((res) => {
        this.products = res.categorys;
       console.log(this.products);
       
        })
    }
}
</script>