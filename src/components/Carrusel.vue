<template>
  <v-container fluid>
    <v-row justify="center">
        <v-col md="10">
            <v-carousel
            cycle
            hide-delimiters
            show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(vino, index) in mejoresVinos"
            :key="index"
            :src="vino.imagen"
            
          >
          </v-carousel-item>
        </v-carousel>
        </v-col>
    </v-row>
  </v-container>
   
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return{
     
    }
  },
  props:['mejoresVinos']
}
</script>