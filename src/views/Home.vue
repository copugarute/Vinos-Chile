<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col sm="10" md="6"  class="my-5">
          <!-- Carrusel con fotos de los mejores 6 vinos -->
        <carrusel :mejoresVinos="mejoresVinos"/>
      </v-col>
    </v-row>
    <v-divider inset height="10"></v-divider>
    <h1 class="text-center my-5">NUESTROS VINO</h1>
        <v-divider inset></v-divider>
        <v-row justify="center">
          <v-col
            v-for="(vino,i) in tiposVino"
            :key="i"
            md="3"
            sm="10"
          >
            <!-- información "Nuestros vinos" -->  
            <CardTiposVinos :vino="vino"/>
          </v-col>
        </v-row> 
  </v-container>
   
</template>

<script>
import Carrusel from '../components/Carrusel.vue'
import CardTiposVinos from '../components/CardTiposVinos.vue'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    Carrusel,
    CardTiposVinos
    
  },
  data(){
    return{
      products:[],
    }
  },
  computed: {
   mejoresVinos(){
    return this.products.mejoresvinos
   },
   tiposVino(){
    return this.products.tiposvino
   },
  },
  methods:{
    async fetchHome(){
      console.log('Verificando')
      try{
        let response = await fetch('/home.json')
        if(!response.ok) throw('Error en API')

        let product = await response.json()
        this.products = product
        console.log(product)
      }
      catch(error){
        console.log(error)
      }
    }
  },
  created(){
    this.fetchHome()
  }
}
</script>
