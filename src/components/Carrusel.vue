<template>
<v-container 
  fluid 
  class="carrusel_wrapper mt-10"
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
        max-height="60%" 
        class="imagen_carrusel"
      ></v-img>
        <p class="text_carrusel text-center mt-3"> {{vino.titulo}} </p>
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
  height: 80vh;
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
.text_carrusel{
  font-family: 'Quicksand', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
}
</style>