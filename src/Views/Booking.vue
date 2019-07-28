<template>
    <div>
         <!-- Section -->
        <section class="section section-lg bg-dark">

            <!-- Video BG -->
            <div class="bg-video" data-property="{videoURL:'', showControls: false, containment:'self',startAt:48,stopAt:68,mute:true,autoPlay:true,loop:true,opacity:0.8,quality:'hd1080'}"></div>
            <div class="bg-image bg-video-placeholder zooming"><img src="assets/img/photos/bg-restaurant.jpg" alt=""></div>
            
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 push-lg-3">
                        <!-- Book a Table -->
                        <div class="utility-box">
                            <div class="utility-box-title bg-dark dark">
                                <div class="bg-image"><img src="assets/img/photos/modal-review.jpg" alt=""></div>
                                <div>
                                    <span class="icon icon-primary"><i class="ti ti-bookmark-alt"></i></span>
                                    <h4 class="mb-0">Rezervasyon Yapın !</h4>
                                    <p class="lead text-muted mb-0">Rezervasyon ile ilgili detaylar.</p>
                                </div>
                            </div>
                            <div action="#" >
                                <div class="utility-box-content">
                                    <div class="form-group">
                                        <label>Ad ve soyad </label>
                                        <input type="text" name="name" class="form-control" v-model="booking.name" required>
                                    </div>
                                    <div class="form-group">
                                        <label>E-mail</label>
                                        <input type="email" name="email" class="form-control" v-model="booking.email" required>
                                    </div>
                                    <div class="form-group">
                                        <label>Telefon</label>
                                        <input type="text" name="phone" class="form-control" v-model="booking.phone" required>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Tarih</label>
                                                <input type="date" name="date" class="form-control" v-model="booking.date" required>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Kişi  Sayısı</label>
                                                <input type="number" name="attendents" min="1" class="form-control" v-model="booking.attendents" required>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Açuklama </label>
                                                <textarea type="text" name="message" class="form-control" v-model="booking.message" required> </textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="utility-box-btn btn btn-secondary btn-block btn-lg btn-submit" @click="send_rez" >
                                    <span class="description">Rezervasyon Yap!  </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                   
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default{

data(){

    return{
        booking:{
        name:'',
        phone:'',
        date:'',
        attendents:'',
        email:'',
        message:''
        }
    }
},

    methods:{
        send_rez(){
                    
            if(this.booking.message != '' && this.booking.email != '' && this.booking.phone != '' && this.booking.name !=''
                && this.booking.date !='' && this.booking.attendents !=''
            ){
    axios({
        method: 'post',
        url: '/rezervasyon/add',
        data: {
            name: this.booking.name,
            phone : this.booking.phone,
            date : this.booking.date,
            attendents : this.booking.attendents,
            email : this.booking.email,
            message:this.booking.message
        }
    }).then(obj => {
        console.log(obj.data);
        if(obj.data == "ok"){
           swal("Talebiniz Alındı En Kısa Sürede Sizinle İletişime Geçilecektir !", "", "success", {
                button: "Devam Et!",
                timer:1500
      }).then(() =>{
        this.booking={};
        window.location.href ='/home'
      })
       
        }else{
              swal("Hata !", "", "warning", {
                button: "Devam Et!",
                timer:1500
      });
      

        }
    })

    }else{
          swal("Lütfen zorunlu alanları doldurunuz", "", "warning", {
                button: "Devam Et!",
                timer:1500
      })

    }

        }


    }
}



</script>