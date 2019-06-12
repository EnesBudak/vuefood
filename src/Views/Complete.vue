<template>
<div>
    <section class="section bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 push-lg-4">
                        <span class="icon icon-xl icon-success"><i class="ti ti-check-box"></i></span>
                        <h1 class="mb-2"> {{orderInfos}} ' nolu Siparişiniz İçin Teşekkürler!</h1>
                        <h4 class="text-muted mb-5">En kısa zamanda ulaşacaktır.</h4>       
                        <router-link to='/home' tag='a' class='btn btn-outline-secondary'> <span>Anasayfaya Dön</span></router-link>
                    </div>
                </div>
            </div>
        </section>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:mapGetters(['orderInfos']),



}
</script>

<style>

</style>
