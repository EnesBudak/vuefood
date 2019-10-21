<template>
    <div>
           <!-- Page Title -->
        <div class="page-title">
            <div style="text-align:center;">
                <h1 class="mb-0">Hakkımızda</h1>
                <h4 class="text-muted mb-0">Restorantımız hakkında bazı bilgiler</h4>
            </div>
        </div>

        <!-- Section -->
        <section class="section section-bg-edge">
            <div class="aboutus-section--container">
                <div class="aboutus-section--left">
                    <div class="" style="position:relative">
                        <div class="image left bottom" style="width:75%;z-index:-1">
                            <div class="bg-image"><img src="assets/img/photos/bg-chef.jpg" alt=""></div>
                        </div>
                        <div style="width:65%;margin-left:auto;">
                            <div class="rate mb-5 rate-lg"><i class="fa fa-star active"></i><i class="fa fa-star active"></i><i class="fa fa-star active"></i><i class="fa fa-star active"></i><i class="fa fa-star"></i></div>
                            <h2>Adananın En İyi Yemekleri</h2>
                            <p class="lead">Zeki ustanın yemeklerini hâlen tatmadınız mı ?...</p>
                            <p>Yıllardan beri adananın en ünlü kebapçısı olarak hizmet vermekte olan Zeki Usta bir gün sizi de misafir etmek ister.Hemen rezervasyon yapabilir ya da online sipariş edebilirsiniz!</p>
                            <h6>Ramazan Çakır, Şef</h6>
                            <img src="assets/img/svg/sign.svg" alt="" class="mb-5">
                        </div>
                    </div>
                </div>
                <div class="aboutus-section--right">
                    <div class="aboutus-employees">
                        <div id="employee-rectange--1" class="aboutus-employees--rectange">
                            <img src="https://www.mediterraneanyachtshow.gr/images/stories/com_form2content/p32/f1516/medys-chef-competition.jpg" alt="">
                        </div>
                        <div id="employee-rectange--2" class="aboutus-employees--rectange">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYbVHFHMthSyAbC2EtlTx9COOS7xA_3QjVLrckG7keHqXBQSm" alt="">
                        </div>
                        <div id="employee-rectange--3" class="aboutus-employees--rectange">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqYtgMTUhSLTcZ0DmTGsuiWBHO69safUmMymEYAKZ91NMqLGRfoQ" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style>
    .aboutus-section--container {
        display: flex;
        align-items: center;
        margin:20px 0;
    }
    .aboutus-section--left{
        width:60%;
        /* padding-right: 30px; */
    }
    .aboutus-section--right{
        width:40%;
    }
    @media only screen and (max-width:750px) {
        .aboutus-section--container{
            flex-direction: column;
        }
        .aboutus-section--left, .aboutus-section--right{
            width:100%;
        }
    }
    .aboutus-employees{
        display: flex;
        flex-direction: column;
        position: relative;
        width:75%;
        margin:0 auto;
    }
    .aboutus-employees--rectange{
        width:180px;
        height:180px;
        border:4px solid #ddae71;
    }
    .aboutus-employees--rectange img{
        width:100%;
        height: 100%;
    }    
    #employee-rectange--1{
        /* align-self:center; */
    }
    #employee-rectange--2{
        align-self: center;
        z-index: 10;
        transform: scale(1.2);
        background-color: #fff;
    }
    #employee-rectange--3{
        /* align-self: center; */
    }
</style>