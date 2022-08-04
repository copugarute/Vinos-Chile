<template>
  <v-container fluid class="d-flex">
    <!-- <h1 class="text-center">Vinos mi Chile</h1> -->
    <v-row justify="end" >
      <v-col
        class="align-stretch"
      >
        <Cart/>
      </v-col>
    </v-row>
    <v-row justify="end" >  
      <v-col
        v-for="(product,i) in products"
        :key="i"
        md="4"
        sm=""
        class="flex-nowrap"
      >
        <CardVinos :product="product"/>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import CardVinos from '@/components/CardVinos'
import Cart from '@/components/Cart'
import {mapActions, mapGetters} from 'vuex'
export default {
name:'Catalogo',
components: {
  CardVinos,
  Cart
},
computed: {
  ...mapGetters(['mostarVinos']),
  products(){
    return this.mostarVinos.productos
  }
},
methods: {
  ...mapActions(['fetchVinos'])
},
created(){
  this.fetchVinos()
}
}
</script>

<style>

</style>
