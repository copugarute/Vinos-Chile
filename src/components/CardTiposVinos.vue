<template>
<div>
    <v-card
        class="mx-auto my-10"
        elevation="0"
        color="fondo"
        outlined
        
    >
    <v-divider class="mb-3"></v-divider>
        <v-row justify="space-between">
            
            <v-col md="4" justify-self="end">
                <v-img
                :src="vino.imagen"
                max-height="400"
                max-width="400"
                contain
            ></v-img>
            </v-col>
            <v-divider vertical></v-divider>
             <v-col md="5" justify-self="center" align-self="center">
                 <v-card-title class="card_title" color="accent">
                    {{vino.nombre}}
                </v-card-title>

                <v-card-text class="card_text">
                        {{vino.texto}}
                    </v-card-text>
             </v-col>
             
        </v-row>
        <v-divider class="mt-3"></v-divider>
    </v-card>
</div>

            
</template>

<script>
export default {
    name:'CarTiposVinos',
    data(){
    return{
      show: false,
    }
  },
  props: {
    vino:{
        type: Object,
        required: true
    }
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;500&family=Quicksand:wght@400;600&display=swap');

.card_title{
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 500;
    font-size: 3.25rem;
    color: #630000;
}
.card_text{
    font-family: 'Quicksand', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
}

</style>