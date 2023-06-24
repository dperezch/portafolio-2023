<template>
  <!-- DESKTOP -->
  <div class="flex flex-center column video gt-md animate__animated animate__fadeIn animate__slower">

    <IndexVideo />  

  </div>


  <!-- MOBILE -->
  <div class=" col-md col-12 video lt-lg animate__animated animate__fadeIn animate__slower">
    <q-parallax :height="300">
      <template v-slot:media>
        <video width="700" height="1000" autoplay loop muted class="mi-video">
          <source type="video/mp4" :src="herovideo2">
        </video>
      </template>
      <h4 class="major-font text-white text-weight-bold">Portafolio</h4>
    </q-parallax>

    <Contact class="q-mt-md" />

  </div>

</template>


<script setup>

import Contact from 'src/components/Contact.vue';
import IndexVideo from '../components/IndexVideo.vue';
import { ref } from 'vue';

const herovideo2 = ref('hero2.mp4')

</script>

<style>
.esqueleto {
  align-self: center;
}


.my-card {
  width: 100%;
  max-width: 250px;
  border-radius: 25% 10%;
}

.montserrat-font {
  font-weight: 600;
}

.video {
  width: 100vw;
  border-radius: 0px 0px 0px 0px;
}

.david {
  font-family: 'Alex Brush', cursive;
}
</style>
