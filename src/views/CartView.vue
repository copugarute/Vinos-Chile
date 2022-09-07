<template>
  <v-container fluid class="cart_container">
    <Cart/>
  </v-container>
</template>

<script>
import Cart from '@/components/Cart.vue'
export default {
    name:'CartView',
    components:{Cart}
}
</script>

<style>
.cart_container{
    background: #EEEBDD;
    height: 100vh;
}
</style>