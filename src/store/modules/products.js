import axios from 'axios'

const state = {
  products:[],
  userInfos:[]
 // cartItems:[],
};

const getters = {
 allProducts:(state) => state.products,
 userInfos:(state) => state.userInfos
 //allCartItems:(state) => state.cartItems
};

const actions = {
 async fetchProducts({commit}){
 
  const response = await axios.get('http://localhost:81/api/menu');
  commit('setProducts', response.data)
  console.log(response);
  

},

async fetchUserInfo({commit}){
  //http://localhost:81/user/data
  const response = await axios.get('http://localhost:81/user/data');
  commit('setUserInfo', response.data)
  console.log(response.data);

  

},
}
/*
async fetchUserInfo({commit}){
  //http://localhost:81/user/data
  const response = await axios.get('https://api.myjson.com/bins/xdacy');
  commit('setUserInfo', response.data)
  console.log(response.data);

  

},
*/ 


/* async fetchCartItems({commit}){

  const response = await axios.get('http://localhost:81/user/sepet/item');
  commit('setCartItems',response.data)
  console.log(response)

} 
*/



const mutations = {
  setProducts:(state,products) =>(state.products = products),
  setUserInfo:(state,userInfos) =>(state.userInfos= userInfos)
 // setCartItems:(state,cartItems) =>(state.cartItems = cartItems)

};


export default {
  state,
  getters,
  actions,
  mutations
}