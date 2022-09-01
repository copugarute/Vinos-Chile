<template>
<v-container fluid class="header text-center d-flex">
  <v-row class="flex-column align-self-center">
    <v-col>
      <h1 class="titulo_header">Vinos del Mundo</h1>
    </v-col>
    <v-col>
      <p class="parrafo_header text-justify mx-5 mx-sm-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, 
          inventore delectus! Natus quisquam repellat ea, voluptate quis quasi sint, 
          excepturi voluptas fuga quae veniam in repellendus facere odio, deserunt nesciunt.
        </p>
    </v-col>
    <v-col>
      <v-btn
          color="secondary"
          class=""
          outlined
          to="/catalogo"
        >
          Ver Productos
        </v-btn>
    </v-col>
  </v-row>        
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
  font-size: 3.25rem;
  color: #D8B6A4;
}
.parrafo_header{
  font-family: 'Quicksand', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: #EEEBDD;
}

@media only screen and (min-width: 600px) {
  .titulo_header{
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
  font-size: 6.25rem;
  color: #D8B6A4;
}
.parrafo_header{
  font-family: 'Quicksand', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: #EEEBDD;
}
}
</style>