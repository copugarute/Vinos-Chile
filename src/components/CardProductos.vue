<template>
  <v-card
    class="mx-auto my-12"
    max-width="300"
    max-height="auto"
    color="#630000"
    flat
    dark
  >
    
    <v-img
      height="300"
      :src="product.imagen"
    ></v-img>

    <v-card-title class=" text-center">{{product.nombre}}</v-card-title>
    <v-divider></v-divider>
    <v-card-subtitle class="text-subtitle-2 text-center">{{product.descripcion}}</v-card-subtitle>
    <v-divider></v-divider>
    <v-card-text class="d-flex justify-space-around">
        <div class="font-weight-regular">Antes: ${{Number(product.precio_normal).toLocaleString('es-cl')}}</div>
        <div class="font-weight-black">Ahora: ${{Number(product.precio_promo).toLocaleString('es-cl')}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="d-flex justify-center">
      <v-btn
        text
        dark
        @click="add(product)"
      >
        Agregar al carro
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions}from 'vuex'
export default {
    data(){
        return{
            loading: false,
            selection: 1,
        }
    },
      
    
    props: {
        product:{
            type: Object,
            required: true
        }
    },

    methods: {
      ...mapActions(['addProductCart']),
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      add(){
        //crear un producto agregando un count
        let prod = {
          id: this.product.id,
          nombre: this.product.nombre,
          imagen: this.product.imagen,
          precio: this.product.precio_promo,
          count:1
        }
        console.log(prod)
        this.addProductCart(prod)

      }
    },
}
</script>

<style>

</style>