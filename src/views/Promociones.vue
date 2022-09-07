<template>
  <v-container fluid class="d-flex promo_container">
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
import CardProductos from '../components/CardCatalogo.vue'
export default {
  name:'Promociones',
  components:{CardProductos},
  computed: {
    ...mapGetters(['mostrarPromo']),
    products(){
      return this.mostrarPromo.productos
    }
  },
  methods: {
    ...mapActions(['fetchPromociones'])
  },
  created(){
    this.fetchPromociones()
  }
}
</script>

<style>
.promo_container{
  background: #EEEBDD;
}
</style>