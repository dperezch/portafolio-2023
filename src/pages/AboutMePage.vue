<template>

    <!-- DESKTOP -->
    <div class="gt-md q-my-xl q-py-xl column">

        <div>
            ABOUT ME
        </div>

        <div class="flex row">
            <div>
                <p class="montserrat-font text-justify">
                    Hola, me llamo David Pérez, soy chileno, Licenciado en Artes Plásticas de la Universidad de Concepción, me gusta el cine, la música y todo lo relacionado a las 
                    bellas artes, siempre me llamó la atención el mundo del diseño y la programación asi que hice un bootcamp de desarrollo web y con los conocimientos adquiridos 
                    comencé  a implementar mi creatividad en el desarrollo de páginas y aplicaciones web. <br>
                    Me gusta investigar y obtener nuevos conocimientos en nuevas tecnologías y espero 
                    seguir adquiriendo mucha más experiencia en el mundo de la programación web.
                </p>
            </div>
            <div>
                <img class="perfil-desktop" src="perfil.jpg">
            </div>
        </div>
        
    </div>

    <!-- MOBILE -->
    <div class="row wrap lt-lg justify-evenly animate__animated animate__fadeIn animate__slow">
        <q-card class="acerca">
        <img src="perfil.jpg">
        <q-card-section>
            <div class="text-h6 major-font text-bold">About Me</div>
        </q-card-section>
        <q-card-section>
            <p class="montserrat-font text-justify">
            Hola, me llamo David Pérez, soy chileno, Licenciado en Artes Plásticas de la Universidad de Concepción, me gusta el cine, la música y todo lo relacionado a las 
            bellas artes, siempre me llamó la atención el mundo del diseño y la programación asi que hice un bootcamp de desarrollo web y con los conocimientos adquiridos 
            comencé  a implementar mi creatividad en el desarrollo de páginas y aplicaciones web. <br>
            Me gusta investigar y obtener nuevos conocimientos en nuevas tecnologías y espero 
            seguir adquiriendo mucha más experiencia en el mundo de la programación web.
          </p>
        </q-card-section>
        </q-card>
    </div>
    
</template>

<script setup>

</script>

<style scoped>
.perfil-desktop{
    max-width: 400px;
}

.acerca{
    width: 100%;
    max-width: 350px;
}
</style>