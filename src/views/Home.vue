<template>
  <v-container 
    fluid 
    class="container-home"
    
  >
    <v-row
    >
      <v-col 
        class="container_header"
      >
        <Header
        />
      </v-col >

      <v-col
      class="container_carrusel"
      >
        <Carrusel
          class="carrusel" 
          :mejoresVinos="mejoresVinos"
        />
      </v-col>
    </v-row>
      <v-divider class=""></v-divider>
    <h1 class="titulo_vinos text-center">NUESTROS VINOS</h1>
      <v-row class="">
          <v-col
            sm="12"
            v-for="(vino,i) in tiposVino"
            :key="i"
            class="container_tiposVinos"
          > 
            <CardTiposVinos 
            :vino="vino"/>
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
}
.carrusel{
  height: 100%;
}
.container_tiposVinos{
  background: #EEEBDD;
}
.titulo_vinos{
  color: #630000;
  font-family: 'Quicksand', sans-serif;
  font-size: 3.9rem;
  font-weight: 400;
}
.titulo_vinos{
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
  font-size: 2.25rem;
}
</style>
