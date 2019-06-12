import axios from 'axios'


const state = {
  products:[],
  userInfos:[],
  cartItems:[],
  orderInfos:[],
  userOrderInfos:[],
 
};

const getters = {
 allProducts:(state) => state.products,
 userInfos:(state) => state.userInfos,
 allCartItems:(state) => state.cartItems,
 orderInfos:(state) => state.orderInfos,
 userOrderInfos:(state) => state.userOrderInfos


};

const actions = {
 async fetchProducts({commit}){
 
  const response = await axios.get('http://localhost:81/api/menu');
  commit('setProducts', response.data)
 // console.log(response);
  

},


fetchUserInfo({commit}){
  //http://localhost:81/user/data
  axios.get('http://localhost:81/user/data')
  .then(result=>{
    console.log({msg:"fetching is success",data:result.data})
    commit('setUserInfo', result.data)
    commit('setCartItems',result.data.product)
  })
  .catch(err=>{
    console.log({errMsg:err})
  })

  

},



setOrderDetail({commit},order){

  
    
  return axios.post('http://localhost:81/payment',order)
         .then((response) =>{
         console.log(response); 
         commit('setOrderInfo',response.data)
         return {message:{success:"success"}}
         })
         .catch(err =>{
          //  console.log({errMsg:err});
           return {message:{error:"error"}}
           
         })


    
     //sipariş postu edilecek 


},

addCartItem({commit},payload){

  axios.post('http://localhost:81/user/sepet',payload.id)
  .then( (response) =>{
    console.log('payload (addCartItem action)',payload)
    commit("addCartItem",payload)
  })
  .catch(err=>{
    console.log({err})
  })
},
deleteCartItem({commit},cartItemId){
  //buraya istek gelecek
  commit("deleteCartItem",cartItemId)

},

fetchUserOrder({commit}){

  axios.get('http://localhost:81/user/orders')
  .then((response) =>{
    console.log({msg:"order fetch is success",data:response.data});
    commit('setUserOrder',response.data)
  })
}

  
}

const mutations = {
  setProducts:(state,products) =>(state.products = products),
  setUserInfo:(state,userInfos) =>(state.userInfos= userInfos),
  setCartItems:(state,payload) =>(state.cartItems =payload),
  setOrderInfo:(state,order) =>(state.orderInfos = order),
  addCartItem(state,payload){

    // const isMatch= state.userInfos.product.some(item=>{
    //   return item.id===payload.id
    // })
    // console.log('ismatch (some)',isMatch)
    // if(!isMatch){
    //   payload.count=1
    //   state.userInfos.product.push(payload)
    // }else{
    //     console.log("eski product",state.userInfos.product)
    //    state.userInfos.product.map(item=>{
    //      if(item.id==payload.id){
    //        item.count +=1
    //      }
    //      return item
    //    })
    //    console.log("yeni product",state.userInfos.product)
    const isMatch= state.cartItems.some(item=>{
      return item.id===payload.id
    })
    console.log('ismatch (some)',isMatch)
    if(!isMatch){
      payload.count=1
      state.cartItems.push(payload)
    }else{
      console.log("eski product",state.cartItems)
       state.cartItems.map(item=>{
         if(item.id==payload.id){
           item.count +=1
         }
         return item
       })
       console.log("yeni product",state.cartItems)
       
      // state.userInfos.product[].count +=1
    }

    state.userInfos.orderCount++
    state.userInfos.cardTotal += parseInt(payload.price)
    console.log('order total typeof',typeof state.userInfos.cardTotal)
    console.log('state verisi',state.userInfos)
  
  },
  setUserOrder:(state,userOrderInfos) =>(state.userOrderInfos = userOrderInfos),
  deleteCartItem({state},cartItemId){
    axios.get("http://localhost:81/user/sepetDel/"+cartItemId) 
      .then(result=>{
        const cartItemIndex=state.cartItems.findIndex(item=>{
          return item.id==cartItemId
        })
        console.log('cart item index',cartItemIndex)
        if(cartItemIndex!=-1){
          throw new Error('Böyle bir kayıt bulunamadı');
        }
        let count=state.cartItems[cartItemIndex].count
        let price=state.cartItems[cartItemIndex].price
        state.userInfos.cardTotal -=price
        state.userInfos.orderCount -=count
        state.cartItems.splice(cartItemIndex,1);
        console.log('silinmiş olmalı state.cartItems',state.cartItems)
      })
      .catch(err=>{
        throw new Error({err})
      })
  }
};
export default {
  state,
  getters,
  actions,
  mutations
}
