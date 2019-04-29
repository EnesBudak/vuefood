import Product from './Views/Product.vue'
import Home from './Views/Home.vue'
import About from './Views/About.vue'
import Contact from './Views/Contact.vue'
import Booking from './Views/Booking.vue'
import Checkout from './Views/Checkout.vue'



export const routes =[
    {path:'',
    name:'home',
    component:Home
    },
    {path:'/product',
    name:'product',
    component:Product
    
    },
    {path:'/about',
    name:'about',
    component:About
    
    },
    {path:'/contact',
    name:'contact',
    component:Contact
    
    },
    {path:'/booking',
    name:'booking',
    component:Booking
    
    }, 
     {path:'/checkout',
    name:'checkout',
    component:Checkout
    
    },
   
    {
        path:'*',
        component:Home
    }
]