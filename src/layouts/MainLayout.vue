<template>
  <q-layout view="hHh lpR fFf">
    <q-btn :class="$q.dark.isActive? 'bg-dark-page': 'bg-white '" class="lt-lg" flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered>
      <q-list class="montserrat-font">
        <q-item-label header>
          <p  :class="$q.dark.isActive? 'text-white': 'text-black '" class="major-font">Portafolio</p>
        </q-item-label>

        <Menu />

      </q-list>

    </q-drawer>

    <!-- CONTENEDOR PRINCIPAL -->
    <div class="column text-center">
      
      <!-- VISTA NAVBAR - FIJA -->
      <div class="col-4">
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
      </div>
      

      <!-- VISTAS CONTENIDO -->
      <div class="col-8 justify-center q-mt-xl">
        <q-page-container>
          <router-view />
        </q-page-container>
      </div>
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
const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const goAbout = () => {
  setTimeout(() => {
    router.push('/about')
  }, 700)
}

const goHome = () => {
  setTimeout(() => {
    router.push('/')
  }, 700)
}

const goSkills = () => {
  setTimeout(() => {
    router.push('/skills')
  }, 700)
}

const goContact = () => {
  setTimeout(() => {
    router.push('/contact')
  }, 700)
}

const goWorks = () => {
  setTimeout(() => {
    router.push('/works')
  }, 700)
}

</script>

<style>
.tabsMenu {
  font-family: 'Montserrat', sans-serif;
}
</style>
