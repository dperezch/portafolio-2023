<template>

    <!-- DESKTOP -->
    <div class="gt-md q-my-xl q-py-xl flex column" id="about">

        <div class="text-h1 montserrat-font q-ma-xl q-px-xl">
            ABOUT ME
        </div>

        <div class="flex row flex-center q-my-xl q-py-xl" :class="$q.dark.isActive? 'bg-cyan-7' : 'bg-secondary'" >
            <div class="tarjeta1">
                <p class="q-mx-lg montserrat-font text-justify text-subtitle1">
                    Hola, me llamo David Pérez, soy chileno, Licenciado en Artes Plásticas de la Universidad de Concepción, me gusta el cine, la música y todo lo relacionado a las 
                    bellas artes, siempre me llamó la atención el mundo del diseño y la programación asi que hice un bootcamp de desarrollo web y con los conocimientos adquiridos 
                    comencé  a implementar mi creatividad en el desarrollo de páginas y aplicaciones web. <br>
                    Me gusta investigar y obtener nuevos conocimientos en nuevas tecnologías y espero 
                    seguir adquiriendo mucha más experiencia en el mundo de la programación web.
                </p>
            </div>
            <div class="tarjeta2">
                <!-- <img class="perfil-desktop self-center" src="perfil.jpg"> -->
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
import { useQuasar } from 'quasar';


const $q = useQuasar()
</script>

<style scoped>
.acerca{
    width: 100%;
    max-width: 350px;
}

.tarjeta1{
    max-width: 800px;
}
.tarjeta2{
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    background: url('/perfil.jpg');
    background-position: center;
    background-size: cover;
}
/* .perfil-desktop{
    width: 550px;
    overflow: hidden;
} */

</style>