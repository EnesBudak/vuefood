<template>
    <div>
          <!-- Page Title -->
        <div class="page-title bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 push-lg-4">
                        <h1 class="mb-0">Menu List</h1>
                        <h4 class="text-muted mb-0">Some informations about our restaurant</h4>
                    </div>
                </div>
            </div>
        </div>

       
     <Category />
    
    </div>
</template>
<script>

import Category from './../components/Category'



export default {
    name:'Product',
    components:{
       
       Category,

    }
}
</script>