<template>
    <div class="container-cv gt-md animate__animated animate__fadeIn animate__slow" >
        <q-card class="work" :onmouseenter="mostrar" :onmouseleave="ocultar">  <!-- :onmouseenter="entrar" :onmouseleave="salir" -->
            <q-card-section  class="text-white" id="textowork">  <!-- v-if="mantener" -->
                <p class="text-weight-bold">Empresa: Energiza</p>
                <p>Cargo: Desarrollador aplicaciones Web/Android</p>
                <p>Encargado del desarrollo de una aplicación de cursos autoinstruccional offline para plataforma android </p>
                <p>Duración: Noviembre'21 - Diciembre'22</p>
                <p class="q-mb-none">Contacto: Katherine Martineau Cornejo</p>
                <p>katherinemartineau@sustantiva.cl</p>
            </q-card-section>
        </q-card>

        <div class="curriculum q-pt-md q-mt-xl">
            <p class="montserrat-font text-weight-bold">Descarga mi curriculum: </p>
            <a href="CV-DavidPerezCh.pdf" download class="q-mx-lg">
                <q-avatar square size="40px" >
                    <img src="cv.svg">
                </q-avatar>
            </a>
        </div>
    </div>

    <div class="row wrap justify-evenly q-mb-md lt-lg animate__animated animate__fadeIn animate__slow">
        <q-card class="work2">
            <img src="card.jpg">
            <q-card-section class="text-black">
                <p class="text-weight-bold">Empresa: Energiza</p>
                <p>Cargo: Desarrollador aplicaciones Web/Android</p>
                <p>Encargado del desarrollo de una aplicación de cursos autoinstruccional offline para plataforma android </p>
                <p>Duración: Noviembre'21 - Diciembre'22</p>
                <p class="q-mb-none">Contacto: Katherine Martineau Cornejo</p>
                <p>katherinemartineau@sustantiva.cl</p>
            </q-card-section>
        </q-card>
        <div class="curriculum q-pt-md q-mt-xl">
            <p class="montserrat-font text-weight-bold">Descarga mi curriculum: </p>
            <a href="CV-DavidPerezCh.pdf" download class="q-mx-lg">
                <q-avatar square size="40px">
                    <img src="cv.svg">
                </q-avatar>
            </a>
        </div>
    </div>



</template>

<script setup>
import { onMounted } from 'vue';


//const src = ref('card.jpg')

onMounted(()=>{
    let texto = document.querySelector('#textowork')
    texto.style.display = 'none'
})

function mostrar(){
    let texto = document.querySelector('#textowork')
    texto.style.display = 'block'
}

function ocultar(){
    let texto = document.querySelector('#textowork')
    texto.style.display = 'none'
}
</script>

<style scoped>
.work{
    width: 100%;
    max-width: 300px;
    height: 250px;
    transition: transform .2s; 
    background-image: url("/card.jpg");
    background-size: cover;
    background-position: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: smaller;
    letter-spacing: 0px;
}

.textowork{
    display: none;
}

.curriculum{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}


.work:hover{
    transform: scale(1.2); 
    background-image: url("/card2.jpg");
    display: block;
}

.work2{
    width: 100%;
    max-width: 300px;
}

.container-cv{
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>