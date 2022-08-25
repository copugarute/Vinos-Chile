<template>
<v-container fluid class="header text-center">
     <h1 class="titulo_header">Vinos del Mundo</h1>
        <p class="parrafo_header">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, 
          inventore delectus! Natus quisquam repellat ea, voluptate quis quasi sint, 
          excepturi voluptas fuga quae veniam in repellendus facere odio, deserunt nesciunt.
        </p>
        <v-btn
          color="secondary"
          class=""
          outlined
          to="/catalogo"
        >
          Ver Productos
        </v-btn>
</v-container>
 
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;500&family=Quicksand:wght@400;600&display=swap');

.header{
    height:100vh;
    
}
.titulo_header{
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
  font-size: 5.25rem;
  color: #D8B6A4;
}
.parrafo_header{
  font-family: 'Quicksand', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: #EEEBDD;
}
</style>