<template>
  <v-app-bar app color="secondary" flat >
    <!-- Menu LG -->
      <v-app-bar-title>Vinos Mi Chile</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items
      v-for="(item, i) in items"
      :key="i"
      class=""
    >
    <v-btn 
        text
        :to="item.path"
        :disabled="currentRoute == item.path"    
     >
        {{ item.nombre }}
    </v-btn>
      
    </v-toolbar-items>

    <!-- Menu Movil -->
      <!-- <v-app-bar
      color="deep-purple accent-4"
      dark
      prominent
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>My files</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar> -->
    <v-app-bar-nav-icon 
      @click.stop="drawer = !drawer"
      class="d-lg-none"  
    ></v-app-bar-nav-icon>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      app
      temporary
      color="secondary"
    >
      <v-list
      >
        <v-list-item-group
          v-model="group"
          
        >
          <v-list-item
            v-for="(item,i) in items"
            :key="i"
            :to="item.path"
            color="accent"
          >
            <v-list-item-title> {{item.nombre}} </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-app-bar-title>Vinos Mi Chile</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items
      v-for="(item, i) in items"
      :key="i"
    >
    <v-btn 
        text
        :to="item.path"
        :disabled="currentRoute == item.path"    
     >
        {{ item.nombre }}
    </v-btn>
      
    </v-toolbar-items> -->
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      items: [
        { nombre: "Home", path: "/" },
        { nombre: "Vinos", path: "/catalogo" },
        { nombre: "Promociones", path: "/promociones" },
        { nombre: "Accesorios", path: "/accesorios" },
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
    currentRoute() {
      return this.$route.path;
    },
  },
  methods: {
    
  },
};
</script>

<style>
</style>