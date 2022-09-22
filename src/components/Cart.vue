<template>
<v-container fluid >
    <h1 class="text-center">Bolsa de compra mi vinos Chile</h1>
    <v-divider></v-divider>
    <v-row justify="center" >
        <v-col sm="6" md="4">
            <v-card 
                class="d-flex justify-space-around my-3 px-4" 
                shaped
                elevation="0"
                v-for="(product,i) in totalProduct"
                :key="i"
            >
                <v-col class="">
                    <v-icon
                        class="" 
                        @click="deleteItem(product)"
                    >
                        mdi-close
                    </v-icon>
                </v-col>
                
                <v-img
                    :src="product.imagen"
                    width="50%"
                ></v-img>
                <v-card-text class="d-flex flex-column justify-center">
                    <div class=" nombre_producto accent--text text-h6 font-weight-bold mb-2"> {{product.nombre}} </div>
                    <div class="secondary--text font-weight-bold text-h6 mb-3"> ${{Number(product.total).toLocaleString('es-cl')}} </div>
                    <div class="text-h6 accent--text font-weight-bold mb-3 "> 
                    {{product.count}}
                    
                    <v-icon
                            small
                            class="mr-2 accent--text text-h6"
                            @click="addStock(product)"
                        >
                            mdi-plus-circle
                        </v-icon>
                    <v-icon
                            small
                            class="mr-2 secondary--text text-h6"
                            @click="removeStock(product)"
                        >
                            mdi-minus-circle
                        </v-icon>
                        
                    </div>
                    
                </v-card-text>
            </v-card>
        </v-col>
        
  
    <v-col sm="6" md="4">
        <v-card class="mt-5" flat>
            <v-card-text> 
                <div class="font-weight-bold text-h6 mb-1 px-3"> Subtotal Productos:   ${{Number(totalCart).toLocaleString('es-cl')}} </div>
                <div class="font-weight-bold text-h6 mb-1 px-3"> Descuentos: ${{Number(descuentos()).toLocaleString('es-cl')}} </div>
                <div class="font-weight-bold  headline secondary--text px-3"> Total:   ${{Number(totalCompra()).toLocaleString('es-cl')}}   </div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    block
                    color="#630000"
                    dark
                    @click="redirectTo()"
                >
                    Pagar
                </v-btn>

                <!-- DIALOG -->
            </v-card-actions>
            <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="text-h5">¿Estás seguro que quieres borrar este producto?</v-card-title>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
                            <v-btn color="blue darken-1" text @click="removeProduct">Si</v-btn>
                            <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
        </v-card>
    </v-col>
   </v-row>
</v-container>
  
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name:'Cart',
    data(){
        return{
            deleteId:null,
            dialogDelete: false,
        }
    },
    watch: {
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    computed: {
        ...mapGetters(['totalProduct','totalCart','mostrarCart']),
    },
    methods: {
        ...mapActions(['removeProductCart','removeStockProduct','addStockProduct']),
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
        },
        closeDelete () {
            this.dialogDelete = false
        },
        deleteItem (product) {
            this.deleteId = product.id
            this.dialogDelete = true
        },
        addStock(product){
            this.addStockProduct(product.id)
        },
        removeProduct(){
            this.removeProductCart(this.deleteId)
            this.closeDelete()
        },
        removeStock(product){
            this.removeStockProduct(product.id)
        },
    },
    

}
</script>

<style>
.nombre_producto{
    font-family: 'Josefin Sans', sans-serif;
    /* font-weight: 500; */
    font-size: 1rem;
}
</style>