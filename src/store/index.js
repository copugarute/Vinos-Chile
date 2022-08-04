import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    cart:[],
    promo:[],
    accesorios:[]
  },
  getters: {
    mostarVinos(state){
      return state.products
    },
    mostrarCart(state){
      return state.cart
    },
    cartCount(state){
      return state.cart.length
    },
    totalProduct(state){
      return state.cart.map((product)=>{
        let myProduct = product
        myProduct.total = product.count * product.precio
        return myProduct
      })
    },
    totalCart(state,getters){
      return getters.totalProduct.reduce((total,product)=>{
        return total + product.total
      },0)
    },
  },
  mutations: {
    SET_VINOS(state, product){
      state.products = product
    },
    ADD_PRODUCT_CART(state,product){
      let exist = state.cart.some((p)=> p.id == product.id)
      if(!exist){
        state.cart.push(product)
      }
      else{
        state.cart.forEach((p)=>{
          if(p.id == product.id){
            p.count += 1
          }
        })
      }
    },
    REMOVE_PRODUCT_CART(){

    },
    ADD_STOCK_PRODUCT(){

    },
    REMOVE_STOCK_PRODUCT(){

    }
  },
  actions: {
    async fetchVinos({commit}){
      try{
        let response = await fetch('/productos.json')
        if(!response.ok) throw('Error en Api')

        let productos = await response.json()
        console.log(productos)
        commit('SET_VINOS', productos)
      }
      catch(error){
        console.log(error)
      }
    },
    addProductCart({commit},product){
      commit('ADD_PRODUCT_CART', product)
    },
  },
  modules: {
  }
})
