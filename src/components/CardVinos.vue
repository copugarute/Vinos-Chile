<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="300"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="product.imagen"
    ></v-img>

    <v-card-title class="text-h5 text-center">{{product.nombre}}</v-card-title>
    <v-divider></v-divider>
    <v-card-subtitle class="text-subtitle-2 text-center">{{product.descripcion}}</v-card-subtitle>
    <v-divider></v-divider>
    <v-card-text class="text-center">
        <div>{{product.caracteristicas[0]}}</div>
        <div>{{product.caracteristicas[1]}}</div>
        <div>{{product.caracteristicas[2]}}</div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text class="d-flex justify-space-around">
        <div class="">Antes: ${{Number(product.precio_normal).toLocaleString('es-cl')}}</div>
        <div class="primary--text">Ahora: ${{Number(product.precio_promo).toLocaleString('es-cl')}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="d-flex justify-center">
      <v-btn
        color="primary"
        @click="add(product)"
      >
        Agregar
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