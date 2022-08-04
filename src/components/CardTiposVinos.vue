<template>
<div>
    <v-card
        class="mx-auto my-12"
        max-width="400"
    >
        <v-img
            height="200"
            :src="vino.imagen"
        ></v-img>

        <v-card-title>
            {{vino.nombre}}
        </v-card-title>

        <v-card-actions>
            <v-btn
                color="orange lighten-2"
                text
            >
                Ver más
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                icon
                @click="show = !show"
            >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                    {{vino.texto}}
                </v-card-text>
            </div>
        </v-expand-transition>
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

</style>