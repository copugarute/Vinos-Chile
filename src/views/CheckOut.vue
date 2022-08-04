<template>
  <v-container>
    <h1 class="text-center">Checkout</h1>
    <v-row>
        <v-col md="5">
            <CheckForm/> 
        </v-col>
  
        <v-col
            md="5"
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

</style>