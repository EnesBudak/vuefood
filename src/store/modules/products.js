import axios from 'axios'
import { stat } from 'fs';

const state = {
  products:[],
  userInfos:[],
  cartItems:[],
};

const getters = {
 allProducts:(state) => state.products,
 userInfos:(state) => state.userInfos,
 allCartItems:(state) => state.cartItems
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
addCartItem({commit},payload){

  axios.post('http://localhost:81/user/sepet',payload.id)
  .then( (response) =>{
      // console.log(response);
      let count; //veri kaydedildiğinde count dönmeli
      if (payload.count) {
        count=payload.count
      }else{
        count=1
      }
      payload.count=count

      payload={
        id:payload.id,
        count:payload.count,
        price:payload.price,
        name:payload.name
      }
      commit("addCartItem",payload)
      

  })
  .catch(err=>{
    console.log({err:err})
  })
}
  
}

const mutations = {
  setProducts:(state,products) =>(state.products = products),
  setUserInfo:(state,userInfos) =>(state.userInfos= userInfos),
  setCartItems:(state,payload) =>(state.cartItems =payload),
  addCartItem(state,payload){
    state.userInfos.orderCount++
    state.userInfos.cardTotal += (payload.price * payload.count)
    //payloadId ile cardTotaldaki id aynı ise o objenin count değeri 1 artacak. Eğer veri vuexte yoksa bir push işlemi gerçekleşecek 
   
   
  }

};


export default {
  state,
  getters,
  actions,
  mutations
}