<template>
  <v-container>
    <h1 class="">Checkout</h1>
    <v-row>
        <v-col md="4" class="mt-4">
            <CheckForm/> 
        </v-col>
  
        <v-col
            class="carrito"
            md="8"
        >
           <Cart/>  
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CheckForm from '@/components/CheckForm'
import Cart from '@/components/Cart'
export default {
    name:'CheckOut',
    components:{CheckForm, Cart}
}
</script>

<style>
.carrito{
  background: #EEEBDD;
}
</style>