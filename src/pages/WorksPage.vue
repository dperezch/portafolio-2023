<template>

    <!-- DESKTOP -->
    <div class="gt-md" id="works">
        
        <div class="montserrat-font text-h1 text-center q-ma-xl">
        EXPERIENCIA
        </div>
        <div class="container-cv gt-md animate__animated animate__fadeIn animate__slow q-ma-xl q-py-xl">
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
        </div>

        <div class="q-py-xl">
            <div class="montserrat-font text-h2 q-pa-xl q-my-xl" :class="$q.dark.isActive? 'bg-secondary text-black' : 'bg-cyan-7 text-white'" >
                APTITUDES LABORALES
            </div>
            <div class="flex flex-center">
                <div class="montserrat-font column palabras">
                    <div class="col">
                        <marquee behavior="scroll" direction="right" scrollamount="7">
                            <a href="#skills" class="habilidades" :class="$q.dark.isActive? 'text-secondary' : ' text-cyan-7'">
                                Licenciatura en ARTES
                                <q-badge color="cyan" align="top" rounded>Click me</q-badge>
                            </a>
                        </marquee>
                        <marquee behavior="scroll" direction="left" scrollamount="6">
                            <p class="habilidades" :class="$q.dark.isActive? 'text-white' : ' text-black'" >Habilidades blandas</p>
                        </marquee>
                        <marquee behavior="scroll" direction="right" scrollamount="5">
                            <a href="#skills" class="habilidades" :class="$q.dark.isActive? 'text-cyan-7' : ' text-secondary'">
                                <q-badge color="orange" align="top" rounded>Click me</q-badge>
                                SCRUM
                            </a>
                        </marquee>
                        <marquee behavior="scroll" direction="left" scrollamount="5">
                            <a href="#skills" class="habilidades" :class="$q.dark.isActive? 'text-secondary' : ' text-cyan-7'">
                                Trabajo en EQUIPO
                                <q-badge color="cyan" align="top" rounded>Click me</q-badge>
                            </a>
                        </marquee>
                    </div>
                    <div class="col-8 row">
                        <marquee class="col" behavior="scroll" direction="down" scrollamount="5" style="height: 100%;">
                            <p class="habilidades" :class="$q.dark.isActive? 'text-white' : ' text-black'">PROACTIVO</p>
                        </marquee>
                        <marquee class="col" behavior="scroll" direction="up" scrollamount="5" style="height: 100%;">
                            <p class="habilidades" :class="$q.dark.isActive? 'text-white' : ' text-black'">Liderazgo de EQUIPOS</p>
                        </marquee>
                        <marquee class="col" behavior="scroll" direction="down" scrollamount="6" style="height: 100%;">
                            <a href="#skills" class="habilidades" :class="$q.dark.isActive? 'text-cyan-7' : ' text-secondary'">
                                AWS Cloud
                                <q-badge color="orange" align="top" rounded>Click me</q-badge>
                            </a>
                        </marquee>
                    </div>
                    <div class="col">
                        <marquee class="col" behavior="scroll" direction="left" scrollamount="7" style="height: 100%;">
                            <p class="habilidades" :class="$q.dark.isActive? 'text-white' : ' text-black'">INGLES medio</p>
                        </marquee>
                        <marquee behavior="scroll" direction="right" scrollamount="6">
                            <a href="#skills" class="habilidades" :class="$q.dark.isActive? 'text-cyan-7' : ' text-secondary'">
                                <q-badge color="orange" align="top" rounded>Click me</q-badge>
                                Comunicación efectiva a CLIENTES
                            </a>
                        </marquee>
                        <marquee class="col" behavior="scroll" direction="left" scrollamount="6" style="height: 100%;">
                            <p class="habilidades" :class="$q.dark.isActive? 'text-white' : ' text-black'">Aptitudes comerciales</p>
                        </marquee>
                        <marquee class="col" behavior="scroll" direction="right" scrollamount="7" style="height: 100%;">
                            <p class="habilidades" :class="$q.dark.isActive? 'text-white' : ' text-black'">Trabajo bajo PRESIÓN</p>
                        </marquee>
                    </div>
                
                </div>
            </div>
            
        </div>

        <br>
        <br>

        <div class="q-ma-xl column items-end q-pt-xl">
        
            <div class="flex flex-center column q-mt-xl">
                <p class="montserrat-font text-weight-bold q-mt-xl  text-h3">DESCARGA MI CURRICULUM </p> 
                <div class="paper flex flex-center" :class="$q.dark.isActive? 'bg-secondary':'bg-cyan-7'">
                    <a href="CV_WebDev_David_Perez.pdf" download class="q-mx-lg" :class="$q.dark.isActive? 'text-black':'text-white'">
                        <q-avatar square size="160px" icon="fa-solid fa-file-lines"/>
                    </a>
                </div>
                
            </div>
        
        </div>


    </div>
    

    <!-- MOBILE -->

    <div class="row wrap justify-evenly q-mb-md lt-lg animate__animated animate__fadeIn animate__slow">
        <q-card class="work2">
            <img src="card.jpg">
            <q-card-section :class="$q.dark.isActive? 'text-white':'text-black'">
                <p class="text-weight-bold">Empresa: Energiza</p>
                <p>Cargo: Desarrollador aplicaciones Web/Android</p>
                <p>Encargado del desarrollo de una aplicación de cursos autoinstruccional offline para plataforma android </p>
                <p>Duración: Noviembre'21 - Diciembre'22</p>
                <p class="q-mb-none">Contacto: Katherine Martineau Cornejo</p>
                <p>katherinemartineau@sustantiva.cl</p>
            </q-card-section>
        </q-card>
        <div class="curriculum q-pt-md q-mt-xl">
            <p class="montserrat-font text-weight-bold q-mt-md">Descarga mi curriculum: </p>
            <a href="CV_WebDev_David_Perez.pdf" download class="q-mx-lg">
                <q-avatar square size="60px">
                   <!-- <img src="cv.svg"> -->
                    <CvSvg  :colorFill="$q.dark.isActive? 'white':'black'" />
                </q-avatar>
            </a>
        </div>
    </div>






</template>

<script setup>
import { onMounted } from 'vue';
import CvSvg from '../components/CvSvg.vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()


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
.habilidades{
    text-decoration: none;
    font-size: 3em;
}

.palabras{
    height: 500px;
    width: 1200px;
}

.paper{
    width: 180px;
    height: 180px;
    border-radius: 50%;
}

</style>