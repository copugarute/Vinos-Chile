<template>
<v-container 
  fluid 
  class="carrusel_wrapper"
>
      <v-carousel 
      cycle 
      hide-delimiters 
      show-arrows-on-hover
      class="carrusel"
      
    >
        <v-carousel-item
        v-for="(vino, index) in mejoresVinos"
        :key="index"
        class="items_carrusel"
      >
        <v-img 
          :src="vino.imagen" 
          contain 
          class="imagen_carrusel"
        ></v-img>
    
        
      </v-carousel-item>
    </v-carousel>
  
</v-container>
  
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  props: ["mejoresVinos"],
};
</script>
<style>
.carrusel_wrapper{
  height: 100vh;
}
.carrusel{
  height: 100%;
}
.items_carrusel{
  height: 100%;
}
.imagen_carrusel{
  height: 100%;
}
</style>