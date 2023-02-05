<template>
  <q-layout view="hHh lpR fFf">
    <q-btn
          class="bg-white lt-lg"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
    
    <q-drawer
      v-model="leftDrawerOpen" side="left" behavior="mobile" bordered
    >
      <q-list class="montserrat-font">
        <q-item-label
          header
        >
          <p class="major-font text-black">Portafolio</p>
        </q-item-label>

        <Menu/>

      </q-list>
      
    </q-drawer>

    <!-- CONTENEDOR PRINCIPAL -->
    <div class="column text-center">
      <!-- VISTA NAVBAR - FIJA -->
      <div class="col-4">
        <div class="col-md col-12" >
          <h2 class="major-font gt-md" >David Pérez</h2>
          <h4 class="major-font lt-lg" >David Pérez</h4>
            <q-tabs
              key="tabs"
              v-model="tab"
              no-caps
              class="bg-white tabsMenu gt-md"
              
            >
              <q-tab name="home" label="Home" @click="goHome"/>
              <q-tab name="aboutme" label="Acerca de mi" @click="showAbout"/>
              <q-tab name="contacto" label="Portafolio" @click="goContact" />
              <q-tab name="skills" label="Habilidades" @click="goSkills" />
              <q-tab name="works" label="Currículo" @click="goWorks" />
              
            </q-tabs>
     
        </div>
      </div>

      <!-- VISTAS CONTENIDO -->
      <div class="col-8 justify-center q-mt-xl">
        <q-page-container>
          <router-view
          />
        </q-page-container>
      </div>
    </div>

    <q-dialog
      v-model="about"
      persistent
    >
      <About />
    </q-dialog>

    <audio id="sonido">
      <source src="sound.mp3" type="audio/mpeg">
    </audio>
    


  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import Menu from '../components/Menu.vue'
import About from '../components/About.vue'
import { useRoute, useRouter } from 'vue-router';

//const route = useRoute()
const router = useRouter()

/* VISTAS */
const skill = ref(false)

const tab = ref('home')
const about = ref(false)
const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () =>{
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const showAbout =()=>{
  var s = document.getElementById("sonido")
  s.play();
  setTimeout(()=>{
    about.value = true
    router.push('/')
  },2500)
}

const goHome=()=>{
  setTimeout(()=>{
    router.push('/')
  },1000)
}

const goSkills = () =>{
  setTimeout(()=>{
    router.push('/skills')
  },1000)
}

const goContact = () =>{
  setTimeout(()=>{
    router.push('/contact')
  },1000)
}

const goWorks = () =>{
  setTimeout(()=>{
    router.push('/works')
  },1000)
}

</script>

<style>
.tabsMenu {
  font-family: 'Montserrat', sans-serif;
}
</style>
