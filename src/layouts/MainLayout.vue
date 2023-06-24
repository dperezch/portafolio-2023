<template>
  <q-layout view="hHh lpR fFf">
    <!-- AQUI EMPIEZA EL CAMBIO -->

    <!-- HEADER DESKTOP -->
    <q-header 
      elevated 
      class="gt-md "
      :class="$q.dark.isActive? 'bg-dark': 'bg-white '"
    >
        <q-toolbar>
          
          <q-toolbar-title 
            class="major-font q-ml-md"
            :class="$q.dark.isActive? 'text-white': 'text-black '"
          >
            Portafolio David Pérez
          </q-toolbar-title>

          <q-btn flat round dense icon="whatshot" />
        </q-toolbar>

        <div 
          class="flex flex-center"
        >
        
          <q-btn-group flat class="">
            <q-btn flat :color="$q.dark.isActive? 'white': 'black'" label="HOME" size="1.2em" href="#"/>
            <q-btn flat :color="$q.dark.isActive? 'white': 'black'" label="habilidades" size="1.2em" />
            <q-btn flat :color="$q.dark.isActive? 'white': 'black'" label="portafolio" size="1.2em"/>
            <q-btn flat :color="$q.dark.isActive? 'white': 'black'" label="acerca de mi" size="1.2em"/>
            <q-btn flat :color="$q.dark.isActive? 'white': 'black'" label="curriculo" size="1.2em" href="#works" />
          </q-btn-group>

        </div>
      </q-header>

      

    <!-- AQUI TERMINA EL CAMBIO -->
    <!-- MOBILE / BOTÓN DRAWER -->
    <q-btn :class="$q.dark.isActive? 'bg-dark-page': 'bg-white '" class="lt-lg" flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

    <!-- MOBILE / DRAWER -->
    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered>
      <q-list class="montserrat-font">
        <q-item-label header>
          <p  :class="$q.dark.isActive? 'text-white': 'text-black '" class="major-font">Portafolio</p>
        </q-item-label>
        <Menu />
      </q-list>
    </q-drawer>

    <!-- AQUI COMIENZA EL CAMBIO -->
    <!-- DESKTOP  -->
    <q-page-container>
      <q-page class="gt-md">
        <IndexPage />

        <AboutMePage />

        <PortafolioPage />

        <SkillsPage />

        <WorksPage />
      </q-page>
    </q-page-container>
    <!-- AQUI TERMINA EL CAMBIO -->

    <!-- CONTENEDOR PRINCIPAL -->
    <div class="column text-center">
      
      <!-- VISTA NAVBAR - FIJA -->
      <!-- <div class="col-4">
        <div class="col-md col-12">
          <h2 class="major-font gt-md">David Pérez</h2>
          <h4 class="major-font lt-lg">David Pérez</h4>
          <q-tabs key="tabs" v-model="tab" no-caps class="tabsMenu gt-md"  :class="$q.dark.isActive? 'bg-dark-page' : 'bg-white'">
            <q-tab name="home" label="Home" @click="goHome" />
            <q-tab name="aboutme" label="Acerca de mi" @click="goAbout" />
            <q-tab name="contacto" label="Portafolio" @click="goContact" />
            <q-tab name="skills" label="Habilidades" @click="goSkills" />
            <q-tab name="works" label="Currículo" @click="goWorks" />

          </q-tabs>

        </div>
      </div> -->
      

      <!-- VISTAS CONTENIDO -->
      <!-- MOBILE -->
      <div class="lt-lg col-8 justify-center q-mt-xl">
        <q-page-container>
          <router-view />
        </q-page-container>
      </div>

      <!-- DARK/DAY TOGGLE -->
      <q-page-sticky position="top-right" :offset="[18, 18]">
        <q-toggle v-model="value" color="amber" @click="info" checked-icon="light_mode" unchecked-icon="dark_mode" size="lg" />
      </q-page-sticky>


    </div>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import Menu from '../components/Menu.vue'
import About from '../components/About.vue'
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar'
import IndexPage from 'src/pages/IndexPage.vue';
import AboutMePage from 'src/pages/AboutMePage.vue';
import PortafolioPage from 'src/pages/PortafolioPage.vue';
import SkillsPage from 'src/pages/SkillsPage.vue';
import WorksPage from 'src/pages/WorksPage.vue';

//const route = useRoute()
const router = useRouter()

const $q = useQuasar()

const value = ref(true)

const info = ()=>{
  console.log(  "dark esta activo: " + $q.dark.isActive)

  console.log(  "modo dark: " + $q.dark.mode)

  $q.dark.toggle()
}

/* VISTAS */

const tab = ref('home')
const tabmenu = ref('home')
const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const goAbout = () => {
  /* setTimeout(() => {
    router.push('/about')
  }, 700) */
}

const goHome = () => {
  location.href="#"
  /* setTimeout(() => {
    router.push('/')
  }, 700) */
}

const goSkills = () => {
  /* setTimeout(() => {
    router.push('/skills')
  }, 700) */
}

const goContact = () => {
  /* setTimeout(() => {
    router.push('/contact')
  }, 700) */
}

const goWorks = () => {
  location.href="#works"
  /* setTimeout(() => {
    router.push('/works')
  }, 700) */
}

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
.tabsMenu {
  font-family: 'Montserrat', sans-serif;
}



</style>
