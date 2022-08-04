<template>
  <v-app-bar app color="black" dark>
    <v-app-bar-title>Vinos Mi Chile</v-app-bar-title>

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
      
    </v-toolbar-items>
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
    };
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