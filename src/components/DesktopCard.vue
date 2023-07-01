<template>
    
    <div class="port-card q-ma-xl flex row" :class="$q.dark.isActive? 'bg-cyan-7': 'bg-black'"
      v-for="(card, index) in portafolioStore.cards" :key="index"
    >
        <div class="col-7">
            <video :src="card.video" loop muted autoplay></video>
        </div>
        <div class="col-5 montserrat-font text-center text-yellow ">
          <div class="flex column" style="height: 100%;">
            <div class="col-3" :class="$q.dark.isActive? 'text-black': 'text-yellow'">
              <div class="q-ma-lg text-h6">
                {{ card.title }}
              </div>
              <div class="text-subtitle1">
                {{ card.subtitle }}
              </div>
            </div>
            <br>

            <div class="col-6 " :class="$q.dark.isActive? 'text-black': 'text-yellow'">
              <div class="text-body1 text-justify q-mx-sm">
                {{ card.description }}
              </div>
              <div class="q-mx-sm q-my-lg">
                <q-avatar square size="30px" v-for="(icon, index) in card.icons" :key="index">
                  <img :src="icon.path" alt="icono">
                </q-avatar>
              </div>
            </div>
            
            <div class="col-2 text-left q-mx-sm">
              <q-btn-group>
                <q-btn :color="$q.dark.isActive? 'dark': 'accent'" icon="bi-github" :href="card.github" target="_blank"/>
                <q-btn v-if="card.playstore" :color="$q.dark.isActive? 'dark': 'accent'" icon="bi-google-play" :href="card.playstore" target="_blank"/>
                <q-btn v-if="card.netlify" :color="$q.dark.isActive? 'dark': 'accent'" icon="bi-browser-chrome" :href="card.netlify" target="_blank"/>
              </q-btn-group>
            </div>
          </div>
           
        </div>
    </div>
    
</template>

<script setup>
import { usePortafolioStore } from 'src/stores/portafolio';
import { useQuasar } from 'quasar'

const portafolioStore = usePortafolioStore()
const $q = useQuasar()
</script>
<style scoped>
.port-card{
    border-radius: 30% 10% 50% 10%;
    width: 600px;
    height: 600px;
    overflow: hidden;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}
video{
    max-width: 350px;
    
}


</style>

