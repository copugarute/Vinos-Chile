<template>
<v-container fluid v-if="this.mostrarCart.length > 0">
    <h1>Bolsa de compra mi vinos Chile</h1>
    <v-divider></v-divider>
    <v-row>
        <v-col>
             <v-card 
                class="d-flex my-3" 
                md="6" 
                max-width="300"
                v-for="(product,i) in totalProduct"
                :key="i"
            >
            <v-img
                :src="product.imagen"
                height="200"
                width="50%"
            ></v-img>
            <v-card-text class="d-flex flex-column justify-center">
                <div class="text-subtitle-1 font-weight-bold"> {{product.nombre}} </div>
                <div class="text-subtitle-2 font-weight-bold"> 
                   {{product.count}} </div>
                <div class="primary--text "> {{product.total}} </div>
        </v-card-text>
    </v-card>
        </v-col>
        
    </v-row>
   <v-divider></v-divider>
   <v-row>
    <v-col>
        <v-card class="mt-5">
            <v-card-text>
                <div> Subtotal Productos: <span>  {{totalCart}} </span> </div>
                <div> Descuentos: <span>     {{descuentos()}}</span> </div>
                <div> Total: <span>  {{totalCompra()}}  </span> </div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    block
                    color="primary"
                    @click="redirectTo()"
                >
                    Pagar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
   </v-row>
</v-container>
  
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'Cart',
    computed: {
        ...mapGetters([' cartCount','totalProduct','totalCart','mostrarCart']),
        
        

    },
    methods: {
        descuentos(){
            if(this.totalCart <= 100000){
               let descuento1 = this.totalCart *(5/100)
               console.log(descuento1)
                return descuento1
            }
            else if(this.totalCart >= 100000){
                let descuento2 = this.totalCart *(11/100)
                console.log(descuento2)
                return descuento2
            }
        },
        totalCompra(){
            let total = this.totalCart - this.descuentos()
            console.log(total)
            return total
        },
        redirectTo(){
            this.$router.push('/checkout')
        }
    },
    

}
</script>

<style>

</style>