<template>
    <div>
        
        <!-- Section - Menu -->
        <section class="section cover protrude pull-up-20">

            <div class="menu-sample-carousel carousel inner-controls" data-slick='{
                "dots": true,
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "infinite": true,
                "responsive": [
                    {
                        "breakpoint": 991,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 1
                        }
                    },
                    {
                        "breakpoint": 690,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
                        }
                    }
                ]
            }'>
                <!-- Menu Sample -->
                <div class="menu-sample">
                   <router-link tag='a' to='/product'> 
                   <img src="assets/img/photos/menu-sample-burgers.jpg" alt="" class="image">
                        <h3 class="title">Hamburger</h3>
                        </router-link>
                </div>
                <!-- Menu Sample -->
                <div class="menu-sample">
                  
                        <router-link tag='a' to='/product'>
                        
                        <img src="assets/img/photos/menu-sample-pizza.jpg" alt="" class="image">
                        <h3 class="title">Pide</h3>>
                        </router-link>
                  
                </div>
                <!-- Menu Sample -->
                <div class="menu-sample">
                   
                        <router-link tag='a' to='/product'>
                        <img src="assets/img/photos/menu-sample-sushi.jpg" alt="" class="image">
                        <h3 class="title">Şuşi</h3>        
                     </router-link>
                   
                </div>
                <!-- Menu Sample -->
                <div class="menu-sample">
                    
                       <router-link tag='a' to='/product' >
                            <img src="assets/img/photos/menu-sample-pasta.jpg" alt="" class="image">
                        <h3 class="title">Pasta</h3>
                       </router-link>
                   
                </div>
                <!-- Menu Sample -->
                <div class="menu-sample">
                   
                        <router-link tag='a' to='/product' >
                            <img src="assets/img/photos/menu-sample-dessert.jpg" alt="" class="image">
                        <h3 class="title">Tatlılar</h3>
                        </router-link>
                    
                </div>
                <!-- Menu Sample -->
                <div class="menu-sample">
                   
                       <router-link tag='a' to='/product' >
                            <img src="assets/img/photos/menu-sample-drinks.jpg" alt="" class="image">
                        <h3 class="title">İçecekler</h3>
                       </router-link>
                    
                </div>
            </div>

        </section>
    </div>
</template>
       