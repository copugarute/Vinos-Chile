<template>
    <v-container fluid class="d-flex">
    <!-- <h1 class="text-center">Vinos mi Chile</h1> -->
    <!-- condicionar el carrito si está vacio -->
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
        <CardOtros :product="product"/>
      </v-col>
    </v-row>
    
  
  </v-container>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import CardOtros from '@/components/CardOtros.vue'
  import Cart from '@/components/Cart'
export default {
  name:'Accesorios',
  components:{CardOtros, Cart},
  data(){
    return{

    }
  },
  computed: {
    ...mapGetters(['mostrarAccesorios']),
    products(){
      return this.mostrarAccesorios.productos
    }
  },
  methods: {
    ...mapActions(['fetchAccesorios'])
  },
  created(){
    this.fetchAccesorios()
  }
}
</script>

<style>

</style>