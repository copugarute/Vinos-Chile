<template>
  <v-app>
    <NavBar/>
    <v-divider></v-divider>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',
  components:{NavBar},
  data(){
    return{
      
    }
  },
};
</script>
<style>
/* body{
  width: 100%;
} */
</style>
