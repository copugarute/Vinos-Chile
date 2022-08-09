import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    cart:[],
    promo:[],
    accesorios:[],
    datosCompra:{}
  },
  //* GETTERS
  getters: {
    mostarVinos(state){
      return state.products
    },
    mostrarAccesorios(state){
      return state.accesorios
    },
    mostrarPromo(state){
      return state.promo
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
  //* MUTATIONS
  mutations: {
    SET_VINOS(state, product){
      state.products = product
    },
    SET_PROMOCIONES(state,promociones){
      state.promo = promociones
    },
    SET_ACCESORIOS(state,accesorios){
      state.accesorios = accesorios
    },
    SET_DATOS_COMPRA(state, datos){
      state.datosCompra = datos
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
    ADD_STOCK_PRODUCT(state, product){
      state.cart.forEach((prod)=>{
        if(prod.id == product){
          prod.count += 1
        }
      })
    },
    REMOVE_PRODUCT_CART(state, idProduct){
      let index = state.cart.findIndex((prod)=> prod.id == idProduct)
      state.cart.splice(index,1)
    },
    REMOVE_STOCK_PRODUCT(state, idProduct){
      state.cart.forEach((prod)=> {
        if( prod.id == idProduct && prod.count > 1 ){
          prod.count -= 1
        }
      })

    }
  },
  //*ACTIONS
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
    async fetchPromociones({commit}){
      try{
        let response = await fetch('/promocion.json')
        if(!response.ok) throw('Error en API')
        let promociones = await response.json()
        console.log(promociones)
        commit('SET_PROMOCIONES', promociones)
      }
      catch(error){
        console.log(error)
      }
    },
    async fetchAccesorios({commit}){
      try{
        let response = await fetch('/accesorios.json')
        if(!response.ok) throw('Error en API')

        let accesorios = await response.json()
        console.log(accesorios)
        commit('SET_ACCESORIOS', accesorios)

      }
      catch(error){
        console.log(error)
      }
    },
    addProductCart({commit},product){
      commit('ADD_PRODUCT_CART', product)
    },
    removeProductCart({commit}, idProduct){
      commit('REMOVE_PRODUCT_CART',idProduct)
    },
    removeStockProduct({commit}, idProduct){
      commit('REMOVE_STOCK_PRODUCT', idProduct)
    },
    addStockProduct({commit}, product){
      commit('ADD_STOCK_PRODUCT', product)
    },
    traerDatosCompra({commit}, datos){
      commit('SET_DATOS_COMPRA', datos)
    }
  },
  modules: {
  }
})
