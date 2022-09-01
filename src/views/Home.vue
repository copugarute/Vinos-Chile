<template>
  <v-container 
    fluid 
    class="container-home flex-xs-column"
  >
    <v-row
    >
      <v-col
      class="container_carrusel pa-0 col-12"
      
      sm="12"
      >
        <h1 class="carrusel_titulo text-center mt-2">Destacados</h1>
        <v-divider class=""></v-divider>
        <Carrusel
          class="carrusel" 
          :mejoresVinos="mejoresVinos"
        />
      </v-col>
      <v-col 
        class="container_header pa-0 col-12"
        sm="12"
        align-self="center"
      >
        <Header
        />
      </v-col >

      
    </v-row>
      <v-divider class="mt-5"></v-divider>
    <h1 class="titulo_vinos text-center my-8">NUESTROS VINOS</h1>
    
      <v-row>
          <v-col
            xs="12"
            sm="12"
            v-for="(vino,i) in tiposVino"
            :key="i"
            class="container_tiposVinos"
          > 
            <CardTiposVinos 
            :vino="vino"/>
            <v-divider class="d-flex d-sm-none"></v-divider>
          </v-col>
          
      </v-row>
  </v-container>
   
</template>

<script>
import Header from '../components/Header.vue'
import Carrusel from '../components/Carrusel.vue'
import CardTiposVinos from '../components/CardTiposVinos.vue'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    Header,
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

.container-home{
  height: auto;
  background: #EEEBDD;
  
}
.container_header{
  background: #630000;
  max-height: 100vh;
}
.container_carrusel{
  background: #EEEBDD;
  max-height: 100vh;
}
.carrusel_titulo{
  color: #630000;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
  font-size: 2.25rem;
}
.carrusel{
  height: 100%;
}
.container_tiposVinos{
  background: #EEEBDD;
}

.titulo_vinos{
  color: #630000;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
  font-size: 2.25rem;
}
</style>
