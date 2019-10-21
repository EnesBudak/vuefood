<template>
<div> 

   <!-- Footer -->
        <footer id="footer" class="bg-dark dark">
            
            <div class="container">
                <!-- Footer 1st Row -->
                <div class="footer-first-row row">
                    <!-- <div class="col-lg-3 text-center">
                        <a href="index.html"><img src="assets/img/logo-zekiusta.png" alt="" width="150" class="mt-5 mb-5"></a>
                    </div> -->
                    <div class="col-lg-7 col-md-6">
                        <div>
                            <ul class="nav nav-main " style="display:flex;flex-wrap:wrap;">
                                <li  class="nav-item text-primary">
                                    <router-link to="/contact" tag="a">
                                        iletişim
                                    </router-link>
                                </li>
                                <li  class="nav-item text-primary">
                                    <router-link to="/hizmetler" tag="a">
                                        Hizmetler
                                    </router-link>
                                </li>
                                <li  class="nav-item text-primary">
                                    <router-link to="/booking" tag="a">
                                        Rezervasyon
                                    </router-link>
                                </li>
                                    <li  class="nav-item text-primary">
                                    <router-link to="/about" tag="a">
                                        Hakkımızda
                                    </router-link>
                                </li>
                                <li  class="nav-item text-primary">
                                    <router-link to="/product" tag="a">
                                        Menu
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                       <div class="mt-4 mb-4">
                            <!-- <h5 class="text-muted mb-3">Sosyal Medya</h5> -->
                            <a href="#" class="icon icon-social icon-circle icon-md icon-facebook mr-2"><i class="fa fa-facebook"></i></a>
                            <a href="#" class="icon icon-social icon-circle icon-md icon-google mr-2"><i class="fa fa-google"></i></a>
                            <a href="#" class="icon icon-social icon-circle icon-md icon-twitter mr-2"><i class="fa fa-twitter"></i></a>
                            <a href="#" class="icon icon-social icon-circle icon-md icon-youtube mr-2"><i class="fa fa-youtube"></i></a>
                            <a href="#" class="icon icon-social icon-circle icon-md icon-instagram"><i class="fa fa-instagram"></i></a>
                        </div>
                    </div>
                   
                    <div class="col-lg-5 col-md-6">
                        <h5 class="text-muted">Abone Ol!</h5>
                        <!-- MailChimp Form -->
                        <form action="//suelo.us12.list-manage.com/subscribe/post-json?u=ed47dbfe167d906f2bc46a01b&amp;id=24ac8a22ad" id="sign-up-form" class="sign-up-form validate-form mb-3" method="POST">
                            <div class="input-group">
                                <input name="EMAIL" id="mce-EMAIL" type="email" class="form-control" placeholder="Email yazın..." required>
                                <span class="input-group-btn">
                                    <button class="btn btn-primary btn-submit" type="submit">
                                        <span class="description">Abone ol</span>
                                        <span class="success">
                                            <svg x="0px" y="0px" viewBox="0 0 32 32"><path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11"/></svg>
                                        </span>
                                        <span class="error">Try again...</span>
                                    </button>
                                </span>
                            </div>
                        </form>
                      
                    </div>

                       <!-- <div class="col-lg-5 col-md-6">
                        <h5 class="text-muted">Abone Ol!</h5>
                   <a class="btn btn-primary" href="tel://+903222352302">ARA</a>
                        
                    </div> -->
                    
                </div>
                <!-- Footer 2nd Row -->
                <div class="footer-second-row">
                    <span class="text-muted">Copyright 2019 | Ay-Soft</span>
                </div>
            </div>

            <!-- Back To Top -->
            <a href="#" id="back-to-top"><i class="ti ti-angle-up"></i></a>

        </footer>
        <!-- Footer / End -->


</div>
</template>