<template>
  <v-container fluid class="fondo contenedor-home">

    <v-row class="header" justify="space-around">
      <v-col sm="10" md="5" class="mt-10 text-center" >
        <h1 class="titulo_header">Vinos del Mundo</h1>
        <p class="parrafo_header mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, 
          inventore delectus! Natus quisquam repellat ea, voluptate quis quasi sint, 
          excepturi voluptas fuga quae veniam in repellendus facere odio, deserunt nesciunt.
        </p>
        <v-btn
          color="secondary"
          class="mt-5"
          outlined
          to="/catalogo"
        >
          Ver Productos
        </v-btn>
      </v-col>
      <v-col sm="10" md="5"  class="" align-self="center" >
          <!-- Carrusel con fotos de los mejores 6 vinos -->
        <carrusel :mejoresVinos="mejoresVinos"/>
      </v-col>
      
    </v-row>
    <v-divider  class="mt-3"></v-divider>
    
      <h1 class="titulo_vinos text-center mt-10">NUESTROS VINOS</h1>
  
    

    

      <v-row justify="center" class="">
          <v-col
            v-for="(vino,i) in tiposVino"
            :key="i"
            md="10"
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
<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;500&family=Quicksand:wght@400;600&display=swap');

.header{
  height: 100vh;
 background: linear-gradient(to right, #B71C1C 0%, #B71C1C 50%, #EEEBDD 50%, #EEEBDD 100%);
}
.titulo_header{
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
  font-size: 6.25rem;
  color: #D8B6A4;
  /* background: linear-gradient(to right, #D8B6A4 0%, #D8B6A4 50%, #630000 50%, #630000 100% );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; */

}
.parrafo_header{
  font-family: 'Quicksand', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: #EEEBDD;
}
.titulo_vinos{
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
  font-size: 2.25rem;
}

</style>
