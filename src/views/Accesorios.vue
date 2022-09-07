<template>
    <v-container fluid class="d-flex accesorios_container">
   <v-row justify="end" >  
      <v-col
        v-for="(product,i) in products"
        :key="i"
        md="4"
        sm=""
        class="flex-nowrap"
      >
        <CardProductos :product="product"/>
      </v-col>
    </v-row>
    
  
  </v-container>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import CardProductos from '../components/CardProductos.vue'
export default {
  name:'Accesorios',
  components:{CardProductos},
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
  .accesorios_container{
    background: #EEEBDD;
  }
</style>