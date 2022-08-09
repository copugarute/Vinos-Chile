<template>
  <v-container>
    <v-row justify="center">
        <v-col
            cols="12" 
            md="10"
            class="d-flex"
            height="100vh"
        >
            <v-card
                flat
                outlined
                class="d-flex  flex-column justify-center  px-5"
                height="40vh"

            >
                <v-card-title class="text-center"> La orden n° {{numeroOrden}} ha sido confirmada
                    y ya la estamos preparando!
                </v-card-title>
                <v-icon color="green" x-large class="block"> mdi-checkbox-marked-circle</v-icon>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'Confirmacion',
    computed: {
        ...mapState(['datosCompra']),
        numeroOrden(){
            return this.datosCompra.fecha
        }
    },
}
</script>

<style>

</style>