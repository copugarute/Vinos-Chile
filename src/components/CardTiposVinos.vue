<template>
<div>
     <v-card
        class="mx-auto my-10"
        elevation="0"
        color="fondo"
        outlined
        
    >
    
        <v-row justify="space-between">
            
            <v-col
                class="mx-auto col-10"
                
                sm="5" 
                align-self="center"
            >
                <v-img
                :src="vino.imagen"
                max-height="80%"
                contain
            ></v-img>
            </v-col>
            <v-divider vertical class="d-none d-sm-flex"></v-divider>
            
            <v-col 
                class=" container_card col-10 mx-auto"
                sm="5" 
                justify-self="center" 
                align-self="center"
            >
                 <v-card-title class="card_title" color="accent">
                    {{vino.nombre}}
                </v-card-title>

                <v-card-text class="card_text text-justify">
                        {{vino.texto}}
                    </v-card-text>
             </v-col>
             
        </v-row>
       
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
.container_card{
    border: 1px solid black;
}


</style>