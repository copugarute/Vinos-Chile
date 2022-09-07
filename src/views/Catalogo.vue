<template>
  <v-container class="catalogo_container" fluid>
    <v-row>  
      <v-col
        v-for="(product,i) in products"
        :key="i"
        sm="10"
        md="4"
        class=""
      >
        <CardCatalogo :product="product"/>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import CardCatalogo from '@/components/CardCatalogo.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
name:'Catalogo',
components: {
  CardCatalogo,
  
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
  .catalogo_container{
    background: #EEEBDD;
  }
</style>
