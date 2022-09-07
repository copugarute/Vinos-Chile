<template>
<v-container fluid>
    <h1>Bolsa de compra mi vinos Chile</h1>
    <v-divider></v-divider>
    <v-row>
        <v-col sm="5">
            <v-card 
                class="d-flex my-3" 
                
                v-for="(product,i) in totalProduct"
                :key="i"
            >
                <v-icon 
                    @click="deleteItem(product)"
                >
                    mdi-close
                </v-icon>
                <v-img
                    :src="product.imagen"
                    width="50%"
                ></v-img>
                <v-card-text class="d-flex flex-column justify-center">
                    <div class="text-subtitle-1 font-weight-bold"> {{product.nombre}} </div>
                    <div class="text-subtitle-2 font-weight-bold"> 
                    {{product.count}} 
                    <v-icon
                            small
                            class="mr-2"
                            @click="addStock(product)"
                        >
                            mdi-plus-circle
                        </v-icon>
                    <v-icon
                            small
                            class="mr-2"
                            @click="removeStock(product)"
                        >
                            mdi-minus-circle
                        </v-icon>
                        
                    </div>
                    <div class="primary--text "> {{product.total}} </div>
                </v-card-text>
            </v-card>
        </v-col>
        
  
    <v-col sm="5">
        <v-card class="mt-5" flat>
            <v-card-text>
                <div> Subtotal Productos: <span>  {{totalCart}} </span> </div>
                <div> Descuentos: <span>     {{descuentos()}}</span> </div>
                <div> Total: <span>  {{totalCompra()}}  </span> </div>
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

</style>