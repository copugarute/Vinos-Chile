<template>
  <v-carousel 
    cycle 
    hide-delimiters 
    show-arrows-on-hover
    
  >
    <v-carousel-item
      v-for="(vino, index) in mejoresVinos"
      :key="index"
    >
      <v-img :src="vino.imagen" contain max-height="500"></v-img>
    </v-carousel-item>
  </v-carousel>
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