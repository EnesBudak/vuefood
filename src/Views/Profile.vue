


<template>
  <div class="container">
    <div class="row m-y-2">
        <div class="col-lg-8 push-lg-2">
          <!-- Nav Pills -->
<ul class="nav nav-pills nav-fill mb-3" role="tablist">
    <li class="nav-item"><a class="nav-link active" href="#profile" aria-controls="home" role="tab" data-toggle="tab">Profil</a></li>
        <li class="nav-item"><a class="nav-link" href="#kargotakip" aria-controls="profile" role="tab" data-toggle="tab">Sipariş Takip</a></li>
    <li class="nav-item"><a class="nav-link" href="#edit" aria-controls="messages" role="tab" data-toggle="tab">Düzenleme</a></li>
</ul>

            <div class="tab-content p-b-3">
                <div class="tab-pane active" id="profile">
                
                    <div class="row">
        <div class="col-8">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-12 col-lg-8 col-md-6">
                            <h3 class="mb-0 text-truncated">{{userInfos.firstname}} {{userInfos.lastname}}</h3>
                            <p class="lead">{{userInfos.phone}}</p>
                            <p>
                              {{userInfos.adress}}
                            </p>
                            <p class="lead">{{userInfos.email}}</p>
                        </div>
                        <div class="col-12 col-lg-4 col-md-6 text-center">
                            <img src="https://robohash.org/68.186.255.198.png" alt="" class="mx-auto rounded-circle img-fluid">
                            <br>
                            <ul class="list-inline ratings text-center" title="Ratings">
                                <li class="list-inline-item"><a href="#"><span class="fa fa-star"></span></a>
                                </li>
                                <li class="list-inline-item"><a href="#"><span class="fa fa-star"></span></a>
                                </li>
                                <li class="list-inline-item"><a href="#"><span class="fa fa-star"></span></a>
                                </li>
                                <li class="list-inline-item"><a href="#"><span class="fa fa-star"></span></a>
                                </li>
                                <li class="list-inline-item"><a href="#"><span class="fa fa-star"></span></a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 col-lg-4">
                            <h3 class="mb-0">20</h3>
                            <small>Sipariş Sayısı</small>
                            
                        </div>
                        <div class="col-12 col-lg-4">
                            <h3 class="mb-0">0</h3>
                            <small>İptal Olan Siparişler</small>
                           
                        </div>
                        <div class="col-12 col-lg-4">
                            <h3 class="mb-0">1</h3>
                            <small>Devam Etmekte Olan Siparişler</small>
                           
                        </div>
                        <!--/col-->
                    </div>
                    <!--/row-->
                </div>
                <!--/card-block-->
            </div>
        </div>
    </div>
                    <!--/row-->
                </div>
                <div class="tab-pane" id="kargotakip">
                    <h4 class="m-y-2">Sipariş Takip</h4>
                    
                   <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Sipariş No</th>
            <th scope="col">İçerik</th>
            <th scope="col">Tutar</th>
            <th scope="col">Durumu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>14</td>
            <td>Kuş Başı Pide</td>
            <td>14.99 TL</td>
            <td>Hazırlanıyor</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>15</td>
            <td>Adana Kepap</td>
            <td>40 TL</td>
            <td>Hazırlanıyor</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>15</td>
            <td>Pizza</td>
            <td>52 TL</td>
            <td>Hazırlanıyor</td>
          </tr>
        </tbody>
      </table>
                            
                    
                </div>
                 <div class="tab-pane" id="edit">
                      
                <div class="bg-white col-8">
                            <h4 class=" pb-4"><i class="ti ti-user mr-3 text-primary"></i>Kişisel Bilgiler</h4>
                            <div class="row mb-5">
                                <div class="form-group col-sm-8">
                                    <label>Ad</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-sm-8">
                                    <label>Soyad</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-sm-8">
                                    <label>Adres</label>
                                    <textarea type="text" class="form-control"> </textarea>
                                </div>
                                
                                <div class="form-group col-sm-8">
                                    <label>Telefon</label>
                                    <input type="number" class="form-control">
                                </div>
                                <div class="form-group col-sm-8">
                                    <label>E-posta </label>
                                    <input type="email" class="form-control">
                                </div>
                                   <div class="text-center">
                            <button class="btn btn-dark btn"><span>İptal</span></button>
                            <button class="btn btn-primary btn"><span>Değişiklikleri Kaydet</span></button>
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



import { mapGetters, mapActions } from 'vuex';


export default {
    methods:{
         ...mapActions(['fetchUserInfo'])
    

    },
    computed:mapGetters(['userInfos']),
    created(){
            this.fetchUserInfo();
    }

    
}
</script>