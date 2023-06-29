<template>
    <!-- DESKTOP -->
    <div class="gt-md q-my-xl">
        <div class="text-h1 montserrat-font text-right q-pr-xl q-my-xl">
            <p class="q-mr-xl">PORTAFOLIO</p>
        </div>

        <DesktopCard />

        <div class="flex wrap justify-evenly q-my-xl">
            <q-card v-if="cardDesktop" class="my-card-portafolio q-my-md animate__animated animate__fadeIn animate__slow"
            v-for="card, index in portafolioStore.cards" :key="index">
            <q-card-section horizontal>
                <q-card-section>
                    <video :src="card.video" loop autoplay muted></video>
                </q-card-section>

                <q-separator vertical />

                <q-card-section class="flex justify-around">
                    <div class="text-h6"> {{ card.title }} </div>
                    <div class="text-subtitle2"> {{ card.subtitle }} </div>
                    <div>
                        <p> {{ card.description }} </p>
                    </div>
                    <div class="">
                        <q-avatar v-for=" icon, index in card.icons" :key="index" square :size="icon.size">
                            <img :src="icon.path">
                        </q-avatar>

                    </div>
                    <q-item clickable class="row flex items-center justify-center" :href="card.github" target="_blank">
                        <q-avatar size="40px">
                            <img src="github_icon.png">
                        </q-avatar>
                        <p class="text-subtitle2 q-mt-md">Github</p>
                    </q-item>
                    <q-item v-if="card.playstore" clickable class="row flex items-center justify-center"
                        :href="card.playstore" target="_blank">
                        <q-avatar square size="30px">
                            <img src="playstore_icon.png">
                        </q-avatar>
                        <p class="text-subtitle2 q-mt-md q-mx-xs">Play Store</p>
                    </q-item>
                    <q-item v-if="card.netlify" clickable class="row flex items-center justify-center" :href="card.netlify"
                        target="_blank">
                        <q-avatar square size="30px">
                            <img src="netlify_icon.png">
                        </q-avatar>
                        <p class="text-subtitle2 q-mt-md q-mx-xs">Link</p>
                    </q-item>
                </q-card-section>
            </q-card-section>
        </q-card>


        
        <PortafolioCardSkeleton v-if="cardSketDesk" />
        </div>
    </div>

    <!-- MOBILE -->
    <PortafolioCard/>
    
</template>

<script setup>
//import Portafolio from 'src/components/Portafolio.vue';

import PortafolioCard from 'src/components/PortafolioCard.vue';
import DesktopCard from "src/components/DesktopCard.vue"
import { usePortafolioStore } from 'src/stores/portafolio';
import PortafolioCardSkeleton from '../components/PortafolioCardSkeleton.vue';
import { onMounted, ref } from 'vue';

const portafolioStore = usePortafolioStore()

const cardDesktop = ref(false)
const cardSketDesk = ref(true)


onMounted(() => {
    setTimeout(() => {
        cardSketDesk.value = false
        cardDesktop.value = true
    }, 2000);
})

</script>

<style scoped>

.my-card-portafolio {
    max-width: 800px;
}
video {
    max-width: 400px;
}
</style>