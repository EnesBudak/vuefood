import axios from 'axios'

const state = {
  products:[]
};

const getters = {
 allProducts:(state) => state.products
};

const actions = {
 async fetchProducts({commit}){
 
  const response = await axios.get('http://172.20.10.12:81/api/menu');
  commit('setProducts', response.data)
  console.log(response);
  

},

};

const mutations = {
  setProducts:(state,products) =>(state.products = products)

};


export default {
  state,
  getters,
  actions,
  mutations
}