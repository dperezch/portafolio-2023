<template>

<q-card class="aboutCard" flat bordered>
      <q-card-section horizontal>
        <q-card-section>
          <h3 class="major-font text-bold">About me</h3>
          <p class="montserrat-font text-justify">
            Hola, me llamo David Pérez, soy chileno, Licenciado en Artes Plásticas de la Universidad de Concepción, me gusta el cine, la música y todo lo relacionado a las 
            bellas artes, siempre me llamó la atención el mundo del diseño y la programación asi que hice un bootcamp de desarrollo web y con los conocimientos adquiridos 
            comencé  a implementar mi creatividad en el desarrollo de páginas y aplicaciones web. <br>
            Me gusta investigar y obtener nuevos conocimientos en nuevas tecnologías y espero 
            seguir adquiriendo mucha más experiencia en el mundo de la programación web.
          </p>

          <q-btn round class="q-mt-lg" color="white" icon="close" text-color="black" v-close-popup />
          
        </q-card-section>

        <q-img
          class="col-5"
          src="perfil.jpg"
        />
      </q-card-section>
    </q-card>
    
</template>

<script setup>


</script>

<style scoped>
.aboutCard{
  border-radius: 0px 0px 0px 0px;
  width: 100%;
  max-width: 1500px;
}
</style>