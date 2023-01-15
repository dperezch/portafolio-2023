<template>

  <!-- VISTAS -->
    <!-- vista video -->
    
    <div class="col-md col-12 video gt-md animate__animated animate__fadeIn animate__slower" v-if="hero">
      <q-parallax :height="500" >
        <template v-slot:media>
          <video width="300" height="900" autoplay loop muted class="mi-video">
            <source type="video/mp4" :src="herovideo">
          </video>
        </template>
        <h1 class="major-font text-white">Portafolio</h1>
      
      </q-parallax>
    </div>

    <div class=" col-md col-12 video lt-lg animate__animated animate__fadeIn animate__slower">
      <q-parallax :height="300" >
        <template v-slot:media>
          <video width="700" height="1000" autoplay loop muted class="mi-video">
            <source type="video/mp4" :src="herovideo2">
          </video>
        </template>
        <h4 class="major-font text-white text-weight-bold">Portafolio</h4>
      </q-parallax>

    </div>
    




  

  


</template>


<script setup>
import { ref } from 'vue';

import Contact from 'src/components/Contact.vue';

const props = defineProps({
  skill:{
    type: Boolean,
    default: false
  }
})

const herovideo = ref('video.mp4')
const herovideo2 = ref('hero2.mp4')



/* Vistas */
const menu = ref(true)
const hero = ref(true)
//const skill = ref(false)
const works = ref(false)
const contact = ref(false)

const home =()=>{
  hero.value = true
  skill.value = false
  works.value = false
  contact.value = false
}


const showSkills =()=>{
  menu.value = false
  hero.value = false
  works.value = false
  contact.value = false
  setTimeout(()=>{
    menu.value = true
    skill.value = true
  },1000)
}

const showContact =()=>{
  menu.value = false
  hero.value = false
  skill.value = false
  works.value = false
  setTimeout(()=>{
    menu.value = true
    contact.value = true
  },1000)
}

const showWorks =()=>{
  menu.value = false
  hero.value = false
  skill.value = false
  contact.value = false
  setTimeout(()=>{
    menu.value = true
    works.value = true
  },1000)
}
</script>

<style>
.my-card{
  width: 100%;
  max-width: 250px;
  border-radius: 25% 10%;
}

.montserrat-font{
  font-weight: 600;
}

.video{
  width: 100vw;
  border-radius: 0px 0px 0px 0px;
}

.david{
  font-family: 'Alex Brush', cursive;
}
</style>
