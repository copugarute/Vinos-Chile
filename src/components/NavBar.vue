<template>
  <v-app-bar app color="container_nav accent" dark flat>
    <!-- Menu LG -->
        <v-toolbar-title 
          class="titulo_nav"
        >
          Vinos Chile
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items
          v-for="(item, i) in items"
          :key="i"
          class="item_nav d-none d-lg-flex d-xl-none"
          active-class="fondo"
        >
        <v-btn 
            text
            :to="item.path"
            :disabled="currentRoute == item.path"
            color="fondo"    
        >
            {{ item.nombre }}
        </v-btn>
          
        </v-toolbar-items>
        <v-badge
          color="#D8B6A4"
          :content="cartCount"
          class="me-5 mt-3"
          :value="cartCount"
        >
          <v-icon
            @click="redirectTo('CartView')"
          >mdi-cart</v-icon>
        </v-badge>


    <!-- Menu Movil -->
    <v-app-bar-nav-icon 
      @click.stop="drawer = !drawer"
      class="d-lg-none d-xl-flex"
      color="fondo"  
    ></v-app-bar-nav-icon>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      app
      temporary
      color="accent"
    >
      <v-app-bar-title class="mt-3 ms-5 titulo_drawer">Vinos Chile</v-app-bar-title>
      <v-list
      >
        <v-list-item-group
          v-model="group"
        >

          <v-list-item
            v-for="(item,i) in items"
            :key="i"
            :to="item.path"
            :disabled="currentRoute == item.path"
          >
            <v-icon color="fondo"> {{item.icono}} </v-icon>
            <v-list-item-title 
              :disabled="currentRoute == item.path"
              class="ms-5 items_drawer" 
            > {{item.nombre}} </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "NavBar",
  data() {
    return {
      items: [
        { nombre: "Home", path: "/", icono:'mdi-home' },
        { nombre: "Vinos", path: "/catalogo", icono:'mdi-bottle-wine' },
        { nombre: "Promociones", path: "/promociones", icono:'mdi-ticket-percent' },
        { nombre: "Accesorios", path: "/accesorios", icono:'mdi-glass-wine' },
      ],
      drawer: false,
      group: null,
    };
  },
  watch: {
      group () {
        this.drawer = false
      },
    },
  computed: {
    ...mapGetters(['cartCount']),
    currentRoute() {
      return this.$route.path;
    },
  },
  methods: {
    redirectTo(nameRoute){
            this.$router.push({name:nameRoute})
        }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;500&family=Lobster&family=Quicksand:wght@400;600&display=swap');

.titulo_nav{
  font-family: 'Lobster', cursive;
  font-weight: 500;
  font-size: 1.5rem !important;
  color: #EEEBDD;
}
.item_nav{
  font-family: 'Quicksand', sans-serif;
  color: #EEEBDD;
}
.titulo_drawer{
  font-family: 'Quicksand', sans-serif;
  color: #EEEBDD;
}
.items_drawer{
  font-family: 'Quicksand', sans-serif;
  color: #EEEBDD;
}
.theme--light .v-btn .v-btn--disabled{
  color: blue !important;
}


</style>