<template>
   <section class="section dark" style="padding-top:10px">

            <div id="section-main-2-slider" class="section-slider inner-controls custom-slick" data-slick='{"dots":true}'>
                <!-- Slide -->
                <div class="slide">
                    <div  ><img  src="assets/img/photos/kampanya1.jpg" alt="">
                     <!-- <div class="container v-center text-center">
                       
                        <a href="/product" class="btn btn-warning btn-lg"><span>Sipariş Ver!</span></a>
                    </div> -->
                     </div>
                   
                </div>
                <!-- Slide -->
                <div class="slide">
                    <div ><img src="assets/img/photos/kampanya2.jpg" alt=""></div>
                    <!-- <div class="container v-center text-center">

                        <a href="/product" class="btn btn-warning btn-lg"><span>Sipariş Ver!</span></a>
                    </div> -->
                </div>
                <!-- Slide -->
                <div class="slide">
                    <div ><img src="assets/img/photos/kampanya3.jpg" alt=""></div>
                    <!-- <div class="container v-center text-center">
                
                        <div class="btn-group">
                            <a href="/product" data-toggle="modal" class="btn btn-warning btn-lg"><span>Sipariş Ver!</span></a>
                           
                        </div>
                    </div> -->
                </div>
            </div>
            
        </section>
</template>

<script>
export default {

}
</script>

<style>
.section.dark{
}
.slick-prev, .slick-next {
    visibility: visible !important;
    opacity: unset;
}
.kare {
    border-radius: 12px !important;
}
.carousel-item .title{
    font-size:22px !important;
    margin-top: 10px !important;
    font-weight: 400;
}
@media only screen and (max-width:720px) {
    .slick-prev, .slick-next {
        display:none !important;
    }
    .slider-container{
        width:90% !important;
        margin: 10px auto !important;
    }
    
    .carousel-item .title{
        font-size:19px !important;
    }
}
.custom-slick .slick-prev:before {
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 20px 15px;
    content:"\e64a";
    transform: translateX(-40px);
    box-shadow: 5px 5px 3px 0 rgba(0,0,0,.1);
    background-color: #ddae71;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    z-index:99;
    opacity: unset;

}
.custom-slick .slick-next:before {
    font-weight: 800;
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 20px 15px;    
    content:"";
    content:"\e649";
    transform: translateX(40px);
    box-shadow: -5px 5px 3px 0 rgba(0,0,0,.1);
    background-color: #ddae71;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    z-index:99;
    opacity: unset;

}
.slide img {
    width:100%;
}
</style>